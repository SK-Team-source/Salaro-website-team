'use client';
import {useEffect} from 'react';
export default function InteractiveGraphics(){
 useEffect(()=>{
  const selector='.hero-graphic,.hero-viz,.svc,.device,.shop-stage,.feat-card,.next-card,.stage,.hero-inner svg';
  let active=null, frame=0;
  const reset=()=>{if(active){active.removeAttribute('data-engaged');for(const k of ['--mx','--my','--rx','--ry'])active.style.removeProperty(k);active=null;}cancelAnimationFrame(frame);};
  const move=e=>{if(e.pointerType==='touch'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const el=e.target.closest?.(selector);if(el!==active){reset();active=el;}if(!el)return;const x=e.clientX,y=e.clientY;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=el.getBoundingClientRect();if(!r.width||!r.height)return;const a=Math.max(0,Math.min(1,(x-r.left)/r.width)),b=Math.max(0,Math.min(1,(y-r.top)/r.height));el.style.setProperty('--mx',`${a*100}%`);el.style.setProperty('--my',`${b*100}%`);el.style.setProperty('--rx',`${(0.5-b)*8}deg`);el.style.setProperty('--ry',`${(a-0.5)*8}deg`);el.setAttribute('data-engaged','');});};
  document.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',reset);window.addEventListener('blur',reset);return()=>{reset();document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',reset);window.removeEventListener('blur',reset);};
 },[]);return null;
}
