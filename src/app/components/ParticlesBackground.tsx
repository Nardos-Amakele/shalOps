"use client";
import { useEffect } from "react";
import Script from "next/script";

// Extend the Window object to prevent TypeScript errors
declare global {
  interface Window {
    particlesJS: (id: string, options: Record<string, unknown>) => void;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#894dff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#894dff" },
            polygon: { nb_sides: 6 },
          },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#894dff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <>
      {/* Load Particles.js from CDN */}
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="beforeInteractive"
      />

      {/* Particles.js Background (Fixed to Entire Website) */}
      <div id="particles-js" className="fixed inset-0 -z-10"></div>
    </>
  );
};

export default ParticlesBackground;
