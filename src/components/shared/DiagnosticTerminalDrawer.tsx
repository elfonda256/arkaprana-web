"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, Play, Shield, RefreshCw, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface LogEntry {
  id: string;
  type: "cmd" | "output" | "success" | "warn" | "info";
  text: string;
}

const PRESET_COMMANDS = [
  { id: "ping", label: "1. Test Latensi Data Center", cmd: "ping idc-durentiga.arkaprana.net" },
  { id: "pdp", label: "2. Audit Kedaulatan UU PDP", cmd: "audit-sovereignty --jurisdiction id" },
  { id: "failover", label: "3. Simulasi BGP Failover", cmd: "simulate-failover --link primary-dwdm" },
  { id: "ai", label: "4. Status Kluster Sovereign AI", cmd: "vllm-cluster-health --airgap" }
];

export default function DiagnosticTerminalDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: "init-1", type: "info", text: "ARKAPRANA TELEMETRY KERNEL v2.8.4 (x86_64-smp-linux)" },
    { id: "init-2", type: "info", text: "Nodes: DC-Cyber1-Kuningan, DRC-Technovillage-Cimanggis, Edge-Cikarang" },
    { id: "init-3", type: "success", text: "Koneksi telemetri aktif. Silakan pilih uji diagnostik di bawah atau ketik perintah." }
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Keyboard shortcut listener (Cmd+J or Ctrl+J)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const executeCommand = (cmdText: string) => {
    if (isRunning) return;
    const cleanCmd = cmdText.trim();
    if (!cleanCmd) return;

    setIsRunning(true);
    setLogs((prev) => [
      ...prev,
      { id: `cmd-${Date.now()}`, type: "cmd", text: `$ ${cleanCmd}` }
    ]);

    const lower = cleanCmd.toLowerCase();

    if (lower === "clear" || lower === "cls") {
      setLogs([
        { id: `clr-${Date.now()}`, type: "info", text: "Terminal dibersihkan." }
      ]);
      setIsRunning(false);
      setInputVal("");
      return;
    }

    if (lower.includes("ping")) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: `p1-${Date.now()}`, type: "output", text: "PING idc-durentiga.arkaprana.net (103.148.x.1) 56(84) bytes of data." },
          { id: `p2-${Date.now()}`, type: "output", text: "64 bytes from 103.148.x.1: icmp_seq=1 ttl=61 time=0.84 ms" },
          { id: `p3-${Date.now()}`, type: "output", text: "64 bytes from 103.148.x.1: icmp_seq=2 ttl=61 time=0.79 ms" },
          { id: `p4-${Date.now()}`, type: "output", text: "64 bytes from 103.148.x.1: icmp_seq=3 ttl=61 time=0.82 ms" },
          { id: `p5-${Date.now()}`, type: "success", text: "--- 3 packets transmitted, 3 received, 0% packet loss, rtt avg = 0.816 ms (JUMBO_MTU 9000)" }
        ]);
        setIsRunning(false);
      }, 500);
    } else if (lower.includes("sovereignty") || lower.includes("audit") || lower.includes("pdp")) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: `s1-${Date.now()}`, type: "output", text: "[AUDIT] Checking outbound WAN routing tables..." },
          { id: `s2-${Date.now()}`, type: "output", text: "  -> Core Data Center: 100% In-Country Storage (Cyber 1 Kuningan)" },
          { id: `s3-${Date.now()}`, type: "output", text: "  -> Disaster Recovery: 100% In-Country Storage (Technovillage Cimanggis)" },
          { id: `s4-${Date.now()}`, type: "output", text: "  -> Cross-Border Data Leakage: 0 bytes outbound (AIR-GAPPED FIREWALL)" },
          { id: `s5-${Date.now()}`, type: "success", text: "[PASS] Kedaulatan data memenuhi UU PDP No. 27/2022 & POJK 11/2022." }
        ]);
        setIsRunning(false);
      }, 600);
    } else if (lower.includes("failover") || lower.includes("bgp")) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: `f1-${Date.now()}`, type: "warn", text: "[SIMULASI] Memutuskan jalur optik primer DWDM (Link-01 Cut)..." },
          { id: `f2-${Date.now()}`, type: "output", text: "  -> BFD (Bidirectional Forwarding Detection) trigger in 18ms" },
          { id: `f3-${Date.now()}`, type: "output", text: "  -> BGP EVPN/VXLAN alternate route rerouting..." },
          { id: `f4-${Date.now()}`, type: "success", text: "  -> Backup Ring 100G aktif dalam 240 milidetik (0 TCP session drops)" },
          { id: `f5-${Date.now()}`, type: "info", text: "[STATUS] High Availability SLA terjaga pada 99.995%." }
        ]);
        setIsRunning(false);
      }, 700);
    } else if (lower.includes("vllm") || lower.includes("ai")) {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: `a1-${Date.now()}`, type: "output", text: "[CLUSTER] Querying NVIDIA H100 Tensor Core Nodes..." },
          { id: `a2-${Date.now()}`, type: "output", text: "  -> Compute: 2x 8x H100 SXM5 80GB (NVLink 900GB/s Active)" },
          { id: `a3-${Date.now()}`, type: "output", text: "  -> Inference Engine: vLLM PagedAttention v0.6.2" },
          { id: `a4-${Date.now()}`, type: "output", text: "  -> Vector DB: Milvus Enterprise (240TB NVMe-oF Tier)" },
          { id: `a5-${Date.now()}`, type: "success", text: "[HEALTHY] Throughput: 1,840 tokens/s | External Egress: BLOCKED (Air-Gapped)" }
        ]);
        setIsRunning(false);
      }, 550);
    } else {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: `h1-${Date.now()}`, type: "info", text: `Perintah '${cleanCmd}' diterima.` },
          { id: `h2-${Date.now()}`, type: "output", text: "Perintah yang didukung: 'ping', 'audit-sovereignty', 'simulate-failover', 'vllm-cluster-health', 'clear'." }
        ]);
        setIsRunning(false);
      }, 300);
    }

    setInputVal("");
  };

  return (
    <>
      {/* Floating Trigger Dock Button (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40 print:hidden hidden sm:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)] transition-all shadow-lg text-xs font-mono group cursor-pointer active:scale-95"
          title="Buka Diagnostic Telemetry Terminal (Shortcut: Ctrl+J atau Cmd+J)"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <Terminal className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
          <span className="font-semibold text-[11px]">System Telemetry</span>
          <span className="hidden md:inline text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
            ⌘J
          </span>
        </button>
      </div>

      {/* Terminal Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-3xl rounded-2xl bg-[#0b0f19] border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col font-mono text-xs">
            
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-gray-400 text-xs ml-2 font-medium">
                  arkaprana-telemetry-console — live@jakarta-zone1
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
                title="Tutup Terminal (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Test Buttons */}
            <div className="p-3 bg-[#0d1322] border-b border-gray-800/80 flex flex-wrap gap-2 items-center">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mr-1">
                Quick Test:
              </span>
              {PRESET_COMMANDS.map((preset) => (
                <button
                  key={preset.id}
                  disabled={isRunning}
                  onClick={() => executeCommand(preset.cmd)}
                  className="px-2.5 py-1 rounded bg-[#1e293b]/70 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-300 text-[11px] transition-all cursor-pointer disabled:opacity-50"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Terminal Body Logs */}
            <div
              ref={scrollRef}
              className="p-4 h-80 overflow-y-auto space-y-2 bg-[#060911] text-gray-300 selection:bg-cyan-500/30 selection:text-cyan-200"
            >
              {logs.map((log) => {
                if (log.type === "cmd") {
                  return (
                    <div key={log.id} className="text-cyan-400 font-bold">
                      {log.text}
                    </div>
                  );
                }
                if (log.type === "success") {
                  return (
                    <div key={log.id} className="text-emerald-400 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{log.text}</span>
                    </div>
                  );
                }
                if (log.type === "warn") {
                  return (
                    <div key={log.id} className="text-amber-400">
                      {log.text}
                    </div>
                  );
                }
                if (log.type === "info") {
                  return (
                    <div key={log.id} className="text-gray-400">
                      {log.text}
                    </div>
                  );
                }
                return (
                  <div key={log.id} className="text-gray-300 pl-2">
                    {log.text}
                  </div>
                );
              })}

              {isRunning && (
                <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Processing diagnostic telemetry query...</span>
                </div>
              )}
            </div>

            {/* Terminal Command Input Prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(inputVal);
              }}
              className="flex items-center px-4 py-3 bg-[#0d1322] border-t border-gray-800 gap-2"
            >
              <span className="text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ketik perintah (contoh: ping, pdp, failover, vllm, clear)..."
                disabled={isRunning}
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none text-xs font-mono"
              />
              <button
                type="submit"
                disabled={isRunning || !inputVal.trim()}
                className="px-3 py-1 rounded bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 text-[11px] font-medium transition-colors disabled:opacity-40 cursor-pointer"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
