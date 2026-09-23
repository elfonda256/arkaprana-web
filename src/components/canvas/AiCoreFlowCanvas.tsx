"use client";

import React, { useEffect, useRef } from "react";

interface PeripheralNode {
  name: string;
  angle: number;
  distanceRatio: number;
  iconType: string;
}

export default function AiCoreFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const peripherals: PeripheralNode[] = [
      { name: "Documents", angle: (0 * Math.PI) / 3, distanceRatio: 0.72, iconType: "DOC" },
      { name: "Enterprise Servers", angle: (1 * Math.PI) / 3, distanceRatio: 0.75, iconType: "SRV" },
      { name: "Databases", angle: (2 * Math.PI) / 3, distanceRatio: 0.73, iconType: "DB" },
      { name: "Employees / Users", angle: (3 * Math.PI) / 3, distanceRatio: 0.74, iconType: "USR" },
      { name: "Applications / ERP", angle: (4 * Math.PI) / 3, distanceRatio: 0.72, iconType: "APP" },
      { name: "Network Telemetry", angle: (5 * Math.PI) / 3, distanceRatio: 0.75, iconType: "NET" }
    ];

    interface FlowParticle {
      peripheralIndex: number;
      progress: number;
      speed: number;
    }

    const particles: FlowParticle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        peripheralIndex: Math.floor(Math.random() * peripherals.length),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006
      });
    }

    let rotOffset = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      rotOffset += 0.002;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.42;

      // Draw background radiating pulse rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, 50 * r + Math.sin(rotOffset * 3 + r) * 6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.04 * (4 - r)})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw lines and peripheral nodes
      const calculatedNodes: { x: number; y: number; name: string }[] = [];

      peripherals.forEach((p, idx) => {
        const angle = p.angle + rotOffset * 0.4;
        const targetX = centerX + Math.cos(angle) * (baseRadius * p.distanceRatio);
        const targetY = centerY + Math.sin(angle) * (baseRadius * p.distanceRatio);
        calculatedNodes.push({ x: targetX, y: targetY, name: p.name });

        // Connecting curved line to AI Core
        ctx.beginPath();
        ctx.moveTo(targetX, targetY);
        ctx.quadraticCurveTo(
          centerX + Math.cos(angle + 0.3) * 80,
          centerY + Math.sin(angle + 0.3) * 80,
          centerX,
          centerY
        );
        ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Peripheral Node Box
        ctx.save();
        ctx.beginPath();
        ctx.arc(targetX, targetY, 14, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 13, 30, 0.9)";
        ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Node Label
        ctx.font = "11px var(--font-geist-mono), monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "center";
        ctx.fillText(p.name, targetX, targetY > centerY ? targetY + 24 : targetY - 18);
        ctx.restore();
      });

      // Flowing particles moving toward AI Core
      particles.forEach((pt) => {
        pt.progress += pt.speed;
        if (pt.progress >= 1) {
          pt.progress = 0;
          pt.peripheralIndex = Math.floor(Math.random() * peripherals.length);
        }

        const node = calculatedNodes[pt.peripheralIndex];
        if (!node) return;

        const curX = node.x + (centerX - node.x) * pt.progress;
        const curY = node.y + (centerY - node.y) * pt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central AI Core Visual
      const corePulse = Math.sin(rotOffset * 6) * 4;
      const coreRadius = 46 + corePulse;

      // Outer glow circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius + 14, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 240, 255, 0.08)";
      ctx.fill();

      // Main Core
      const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, coreRadius);
      grad.addColorStop(0, "#00f0ff");
      grad.addColorStop(0.6, "#1d4ed8");
      grad.addColorStop(1, "#060d1e");

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.strokeStyle = "rgba(0, 240, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Core Text
      ctx.font = "bold 11px var(--font-geist-sans), sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("ARKAPRANA", centerX, centerY - 6);
      ctx.font = "9px var(--font-geist-mono), monospace";
      ctx.fillStyle = "#00f0ff";
      ctx.fillText("AI CORE", centerX, centerY + 8);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
