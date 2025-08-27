"use client";
import React, { useEffect, useRef } from "react";

interface ButtonConfig {
  label: string;
  bgColor: string;
}

interface FallingButtonsProps {
  trigger?: "hover" | "auto";
  gravity?: number;
  buttons: ButtonConfig[];
}

const FallingButtons: React.FC<FallingButtonsProps> = ({
  trigger = "hover",
  gravity = 0.6,
  buttons,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class FallingButton {
      x: number;
      y: number;
      vy: number;
      width: number;
      height: number;
      label: string;
      bgColor: string;

      constructor(x: number, y: number, label: string, bgColor: string) {
        this.label = label;
        this.bgColor = bgColor;

        ctx.font = "16px Arial";
        this.width = ctx.measureText(label).width + 24; // padding
        this.height = 36; // button height
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
        this.vy = 0;
      }

      draw() {
        ctx.fillStyle = this.bgColor;
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.width, this.height, 18);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "16px Arial";
        ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2);
      }

      update() {
        if (this.y + this.height < canvas.height) {
          this.vy += gravity;
          this.y += this.vy;
        } else {
          this.vy *= -0.3; // bounce
          this.y = canvas.height - this.height;
        }
        this.draw();
      }
    }

    const buttonObjects = buttons.map(
      (btn, i) =>
        new FallingButton(
          canvas.width / 2,
          50 + i * 40,
          btn.label,
          btn.bgColor
        )
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      buttonObjects.forEach((btn) => btn.update());
      animationFrame = requestAnimationFrame(animate);
    };

    if (trigger === "auto") {
      animate();
    } else {
      canvas.addEventListener("mouseenter", animate);
      canvas.addEventListener("mouseleave", () => cancelAnimationFrame(animationFrame));
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [buttons, gravity, trigger]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default FallingButtons;
