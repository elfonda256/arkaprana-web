"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check accessibility: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

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
    // Moderate node count: 32 on mobile, up to 48 on desktop
    const nodeCount = isMobile ? 24 : Math.min(Math.floor((width * height) / 24000), 48);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Extremely calm, slow drift (Section 02)
        vx: (Math.random() - 0.5) * 0.09,
        vy: (Math.random() - 0.5) * 0.09,
        radius: Math.random() > 0.8 ? 1.8 : 1.2,
        baseAlpha: Math.random() * 0.25 + 0.1,
        tier: tiers[i % tiers.length]
      });
    }

    const pulses: Pulse[] = [];
    const connectionDistance = 160;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    // Mouse parallax tracking (Section 03): max 6-8px movement
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;

      // Parallax shift calculation (bounded to -7px to +7px)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const shiftX = ((e.clientX - centerX) / centerX) * 6;
      const shiftY = ((e.clientY - centerY) / centerY) * 6;
      setParallaxOffset({ x: shiftX, y: shiftY });
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
      setParallaxOffset({ x: 0, y: 0 });
    };

    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // Static render for reduced motion
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${nodes[i].baseAlpha})`;
        ctx.fill();
      }
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    let lastSpawn = 0;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Spawn pulses along lines at organic, spaced intervals
      if (time - lastSpawn > 800 && pulses.length < 8 && nodes.length > 2) {
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
              speed: 0.004 + Math.random() * 0.005
            });
            break;
          }
        }
        lastSpawn = time;
      }

      ctx.clearRect(0, 0, width, height);

      // Update positions & slight cursor response
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (mouseX > 0 && mouseY > 0) {
          const mdx = n.x - mouseX;
          const mdy = n.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 120 && mdist > 0) {
            const force = (120 - mdist) / 120;
            n.x += (mdx / mdist) * force * 0.4;
            n.y += (mdy / mdist) * force * 0.4;
          }
        }

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;
      }

      // Draw thin connection lines (very low atmospheric opacity)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // Draw subtle data pulses travelling along connections
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
        ctx.arc(curX, curY, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(186, 230, 253, 0.85)";
        ctx.shadowColor = "rgba(0, 240, 255, 0.6)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw subtle nodes
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45 transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
        willChange: "transform"
      }}
    />
  );
}
