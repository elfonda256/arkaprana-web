import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company: string;
  position?: string;
  email: string;
  phone: string;
  industry: string;
  projectType: string;
  timeline: string;
  budgetRange: string;
  description: string;
}

// Simple in-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 1000 }); // 1 min window
    return false;
  }
  if (entry.count >= 5) {
    return true; // Max 5 requests per minute per IP
  }
  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Terlalu banyak permintaan. Silakan tunggu 1 menit sebelum mencoba kembali.",
        },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    // 1. Validation
    if (!body.name || !body.email || !body.phone || !body.description) {
      return NextResponse.json(
        {
          success: false,
          error: "Mohon lengkapi nama, email, nomor telepon, dan deskripsi proyek Anda.",
        },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Format alamat email tidak valid." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: body.name.trim().slice(0, 100),
      company: (body.company || "N/A").trim().slice(0, 120),
      position: (body.position || "Representative").trim().slice(0, 80),
      email: body.email.trim().toLowerCase().slice(0, 100),
      phone: body.phone.trim().slice(0, 30),
      industry: (body.industry || "General").trim().slice(0, 80),
      projectType: (body.projectType || "General Inquiry").trim().slice(0, 120),
      timeline: (body.timeline || "TBD").trim().slice(0, 80),
      budgetRange: (body.budgetRange || "Discuss").trim().slice(0, 80),
      description: body.description.trim().slice(0, 2000),
      submittedAt: new Date().toISOString(),
      ipAddress: ip,
    };

    // 2. Dispatch to Telegram Bot Webhook (If configured in environment)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        const messageText = 
`🔔 *INQUIRY PROYEK BARU - ARKAPRANA*
━━━━━━━━━━━━━━━━━━
👤 *Nama*: ${sanitizedData.name}
🏢 *Perusahaan*: ${sanitizedData.company} (${sanitizedData.position})
📧 *Email*: ${sanitizedData.email}
📱 *Telepon/WA*: ${sanitizedData.phone}
🏭 *Sektor*: ${sanitizedData.industry}
🛠 *Jenis Solusi*: ${sanitizedData.projectType}
⏱ *Timeline*: ${sanitizedData.timeline}
💰 *Budget*: ${sanitizedData.budgetRange}
━━━━━━━━━━━━━━━━━━
📝 *Spesifikasi*:
${sanitizedData.description}
━━━━━━━━━━━━━━━━━━
🕒 *Waktu*: ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB`;

        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: messageText,
            parse_mode: "Markdown",
          }),
        });
      } catch (telegramErr) {
        console.error("Telegram webhook notification failed:", telegramErr);
      }
    }

    // 3. Fallback audit log in server logs
    console.log(
      `[ARKAPRANA INQUIRY] New submission from ${sanitizedData.name} (${sanitizedData.company}) - Phone: ${sanitizedData.phone} - Project: ${sanitizedData.projectType}`
    );

    return NextResponse.json({
      success: true,
      message: "Inquiry berhasil diterima. Tim Principal Engineer kami akan meninjau spesifikasi dan menghubungi Anda dalam 1x24 jam kerja.",
      data: {
        id: `ARK-${Date.now().toString(36).toUpperCase()}`,
        name: sanitizedData.name,
      },
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Terjadi gangguan sistem internal. Silakan hubungi kami langsung via WhatsApp di 0816-997-963.",
      },
      { status: 500 }
    );
  }
}
