'use client'
import { useEffect } from "react";
import Script from "next/script";
import particlesConfig from "../../../particlesjs-config.json";

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any;
    Stats: any;
  }
}

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      // Initialize particles.js using the imported config
      window.particlesJS("particles-js", particlesConfig);
    }

    // Initialize stats.js if available
    let stats: any, count_particles: Element | null, update: () => void;
    if (typeof window !== "undefined" && window.Stats) {
      // @ts-ignore
      stats = new window.Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector(".js-count-particles");
      update = function () {
        stats.begin();
        stats.end();
        // @ts-ignore
        if (
          window.pJSDom &&
          window.pJSDom[0] &&
          window.pJSDom[0].pJS &&
          window.pJSDom[0].pJS.particles &&
          window.pJSDom[0].pJS.particles.array
        ) {
          if (count_particles) {
            // @ts-ignore
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
          }
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, []);

  return (
    <>
      {/* Load particles.js and stats.js from CDNs */}
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://threejs.org/examples/js/libs/stats.min.js"
        strategy="beforeInteractive"
      />

      <section
        id="hero"
        className="relative py-20 text-center overflow-hidden h-screen "
      >
        {/* Particles.js container */}
        <div
          id="particles-js"
          className="absolute inset-0"
        ></div>
        {/* Hero content */}
        <div className="relative z-10 max-w-7xl px-4 flex flex-col justify-center h-96">
          <h1 className="text-5xl font-poppins font-bold text-black mb-4">Welcome to ShalOps</h1>
          <p className="text-xl text-black">
            Your partner in digital transformation and innovative solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
