'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from('.nav', { y: -80, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.from('.hero-copy > *', { y: 52, opacity: 0, stagger: 0.11, duration: 1.05, delay: 0.18, ease: 'power4.out' });
      gsap.from('.hero-art', { x: 70, rotation: 2, opacity: 0, duration: 1.25, delay: 0.25, ease: 'power4.out' });
      gsap.to('.orbit-text', { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
      gsap.to('.shape', { yPercent: -14, rotation: 7, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.utils.toArray<HTMLElement>('.section h2, .feature-copy h2, .passion-copy h2, .contact h2').forEach((heading) => gsap.from(heading, { scrollTrigger: { trigger: heading, start: 'top 82%' }, y: 100, opacity: 0, duration: 0.95, ease: 'power4.out' }));
      gsap.utils.toArray<HTMLElement>('.reveal-image').forEach((image) => {
        gsap.from(image, { scrollTrigger: { trigger: image, start: 'top 85%' }, clipPath: 'inset(0 100% 0 0)', duration: 1.15, ease: 'power4.inOut' });
        const picture = image.querySelector('img');
        if (picture) gsap.to(picture, { scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 1.2 }, yPercent: -10, scale: 1.12, ease: 'none' });
      });
      gsap.utils.toArray<HTMLElement>('.pillars article, .testimonial-grid figure').forEach((card, index) => gsap.from(card, { scrollTrigger: { trigger: card.parentElement, start: 'top 80%' }, y: 45, opacity: 0, duration: 0.65, delay: index * 0.09, ease: 'power3.out' }));
    });
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    const useFinePointer = window.matchMedia('(pointer: fine)').matches;
    const moveCursor = (event: MouseEvent) => {
      dot?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      ring?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
    };
    const activateCursor = () => document.body.classList.add('cursor-active');
    const deactivateCursor = () => document.body.classList.remove('cursor-active');
    const targets = Array.from(document.querySelectorAll('a, button'));
    if (useFinePointer) {
      window.addEventListener('mousemove', moveCursor);
      targets.forEach((target) => target.addEventListener('mouseenter', activateCursor));
      targets.forEach((target) => target.addEventListener('mouseleave', deactivateCursor));
    }
    return () => {
      context.revert();
      window.removeEventListener('mousemove', moveCursor);
      targets.forEach((target) => target.removeEventListener('mouseenter', activateCursor));
      targets.forEach((target) => target.removeEventListener('mouseleave', deactivateCursor));
    };
  }, []);

  return null;
}
