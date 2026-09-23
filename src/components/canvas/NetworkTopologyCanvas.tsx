"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
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

    // Subtle, restrained number of nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 38);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, // calm, slow drift
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() > 0.85 ? 2.5 : 1.5,
        baseAlpha: Math.random() * 0.35 + 0.15
      });
    }

    const pulses: Pulse[] = [];
    const connectionDistance = 160;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    let lastSpawn = 0;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Spawn subtle data pulse at intervals
      if (time - lastSpawn > 600 && pulses.length < 8 && nodes.length > 2) {
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
              speed: 0.005 + Math.random() * 0.006 // slow, majestic speed
            });
            break;
          }
        }
        lastSpawn = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Update positions & draw lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Subtle mouse interaction - gentle guidance without extreme repulsion
        const dmx = n1.x - mouseX;
        const dmy = n1.y - mouseY;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 140) {
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distMouse / 140)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw Pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const n1 = nodes[pulse.fromNode];
        const n2 = nodes[pulse.toNode];
        if (!n1 || !n2) continue;

        const curX = n1.x + (n2.x - n1.x) * pulse.progress;
        const curY = n1.y + (n2.y - n1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147, 197, 253, 0.85)";
        ctx.fill();
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${n.baseAlpha})`;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-auto opacity-60 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
