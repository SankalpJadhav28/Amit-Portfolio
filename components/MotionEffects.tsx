"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // HERO TIMELINE

      const heroTl = gsap.timeline({ delay: 0.2 });

      heroTl
        .from(".nav", {
          y: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        })

        .from(
          ".nav a",
          {
            y: -20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        )

        .from(
          ".hero-status",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        )

        .from(
          ".hero-brand span",
          {
            y: 80,
            opacity: 0,
            stagger: 0.08,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.2",
        )

        .from(
          ".hero-intro > *",
          {
            y: 50,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8",
        )

        .from(
          ".hero-person img",
          {
            scale: 0.85,
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power4.out",
          },
          "<-0.3",
        )
        .from(
          ".hero-socials a",
          {
            x: -30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=1",
        )

        .from(
          ".hero-meta span",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.8",
        );

      // FLOATING HERO IMAGE

      gsap.to(".hero-person img", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // HEADINGS

      gsap.utils
        .toArray<HTMLElement>(
          ".section h2, .feature-copy h2, .passion-copy h2, .contact h2",
        )
        .forEach((heading) => {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
            },
            y: 120,
            opacity: 0,
            skewY: 4,
            duration: 1,
            ease: "power4.out",
          });
        });

      // IMAGE REVEALS

      gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((image) => {
        gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            start: "top 85%",
          },
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
        });

        const picture = image.querySelector("img");

        if (picture) {
          gsap.to(picture, {
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            yPercent: -10,
            scale: 1.1,
            ease: "none",
          });
        }
      });

      // REEL CARDS

      gsap.utils.toArray<HTMLElement>(".reel-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 0.8,
          ease: "power4.out",
        });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
          });
        });
      });

      // PILLARS & TESTIMONIALS

      gsap.utils
        .toArray<HTMLElement>(".pillars article, .testimonial-grid figure")
        .forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
          });
        });
    });

    // CURSOR

    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");

    const moveCursor = (e: MouseEvent) => {
      dot?.style.setProperty(
        "transform",
        `translate3d(${e.clientX}px, ${e.clientY}px, 0)`,
      );

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(".hero-person img", {
        x: (e.clientX - window.innerWidth / 2) * 0.015,
        y: (e.clientY - window.innerHeight / 2) * 0.015,
        duration: 1,
        ease: "power2.out",
      });
    };
    const hero = document.querySelector<HTMLElement>(".hero-person");
    const colorLayer = document.querySelector<HTMLElement>(".hero-image.color");

    const handleMove = (e: MouseEvent) => {
      if (!hero || !colorLayer) return;

      const rect = hero.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(colorLayer, {
        "--x": `${x}px`,
        "--y": `${y}px`,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    hero?.addEventListener("mousemove", handleMove);

    return () => {
      ctx.revert();

      hero?.removeEventListener("mousemove", handleMove);

      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return null;
}
