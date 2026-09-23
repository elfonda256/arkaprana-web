"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  tier: "infra" | "network" | "data" | "ai";
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function NetworkTopologyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const tiers: ("infra" | "network" | "data" | "ai")[] = ["infra", "network", "data", "ai"];
    const nodeCount = Math.min(Math.floor((width * height) / 20000), 45);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() > 0.8 ? 2.8 : 1.6,
        baseAlpha: Math.random() * 0.35 + 0.15,
        tier: tiers[i % tiers.length]
      });
    }

    const pulses: Pulse[] = [];
    const connectionDistance = 175;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let lastSpawn = 0;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth mouse interpolation for graceful movement
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Spawn pulses at gentle intervals
      if (time - lastSpawn > 500 && pulses.length < 10 && nodes.length > 2) {
        const from = Math.floor(Math.random() * nodes.length);
        for (let to = 0; to < nodes.length; to++) {
          if (to === from) continue;
          const dx = nodes[from].x - nodes[to].x;
          const dy = nodes[from].y - nodes[to].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            pulses.push({
              fromNode: from,
              toNode: to,
              progress: 0,
              speed: 0.006 + Math.random() * 0.007
            });
            break;
          }
        }
        lastSpawn = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Update positions & physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Cursor gentle repulsion/fluid responsiveness
        if (mouseX > 0 && mouseY > 0) {
          const mdx = n.x - mouseX;
          const mdy = n.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140 && mdist > 0) {
            const force = (140 - mdist) / 140;
            n.x += (mdx / mdist) * force * 0.8;
            n.y += (mdy / mdist) * force * 0.8;
          }
        }

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;
      }

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw active pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const from = nodes[pulse.fromNode];
        const to = nodes[pulse.toNode];
        if (!from || !to) continue;

        const curX = from.x + (to.x - from.x) * pulse.progress;
        const curY = from.y + (to.y - from.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 211, 252, 0.9)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${n.baseAlpha})`;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 transition-opacity duration-700"
    />
  );
}
