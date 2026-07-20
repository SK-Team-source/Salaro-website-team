'use client';
import { useEffect, useRef, useState } from 'react';

/* ---------------------------------------------------------------------------
   Small, self-contained AI-themed figures for each service.
   They use the site palette via `currentColor` (set on the parent <svg>),
   so they need no additional CSS — drop-in with the existing globals.css.
--------------------------------------------------------------------------- */
const figStyle = { width: '100%', height: 'auto', display: 'block', color: 'var(--accent-soft)' };
const mut = 'var(--muted)';

function FigContent() {
  return (
     <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.18)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  
      <defs>
        <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#7a2f1c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
        </linearGradient>

        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7a2f1c" opacity="0.7" />
        </marker>
      </defs>

      <g fill="none" stroke="url(#flow-grad)" strokeDasharray="4 4">
        <path d="M 230 190 Q 310 190 390 225" strokeWidth="2" />
        <path d="M 230 260 Q 310 260 390 225" strokeWidth="2" />

        <path d="M 410 225 Q 500 135 590 135" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 410 225 Q 500 225 590 225" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 410 225 Q 500 315 590 315" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>

      <g transform="translate(100, 130)">
        <rect x="15" y="0" width="75" height="95" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-5 50 50)" />
        <rect x="40" y="25" width="75" height="95" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" transform="rotate(3 75 70)" />
        <line x1="55" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" transform="rotate(3 75 70)" />
        <line x1="55" y1="65" x2="90" y2="65" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" transform="rotate(3 75 70)" />
        <line x1="55" y1="80" x2="105" y2="80" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" transform="rotate(3 75 70)" />

        <text x="65" y="150" fontSize="14" fontWeight="600" fill="#64748b" letterSpacing="0.05em" textAnchor="middle">CONTENT</text>
      </g>

      <g transform="translate(400, 225)" filter="url(#glow)">
        <circle cx="0" cy="0" r="50" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="2" />
        <circle cx="0" cy="0" r="38" fill="#7a2f1c" opacity="0.12" />
        <circle cx="0" cy="0" r="28" fill="#7a2f1c" />

        <g stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1, -1)">
          <circle cx="-2" cy="-2" r="8" />
          <line x1="4" y1="4" x2="11" y2="11" />
          <circle cx="8" cy="-8" r="1" fill="#ffffff" stroke="none" />
          <circle cx="-10" cy="6" r="1.5" fill="#ffffff" stroke="none" />
        </g>

        <text x="0" y="80" fontSize="15" fontWeight="700" fill="#7a2f1c" letterSpacing="0.06em" textAnchor="middle">AI TAGGING</text>
      </g>

      <g transform="translate(600, 85)">
        <g transform="translate(0, 0)">
          <rect width="130" height="46" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="12" y="15" width="16" height="16" rx="4" fill="#94a3b8" />
          <line x1="40" y1="23" x2="100" y2="23" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(0, 90)">
          <rect width="130" height="46" rx="8" fill="#ffffff" stroke="#7a2f1c" strokeWidth="2" />
          <rect x="12" y="15" width="16" height="16" rx="4" fill="#7a2f1c" />
          <line x1="40" y1="23" x2="105" y2="23" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(0, 180)">
          <rect width="130" height="46" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="12" y="15" width="16" height="16" rx="4" fill="#94a3b8" />
          <line x1="40" y1="23" x2="95" y2="23" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        </g>

        <text x="65" y="265" fontSize="14" fontWeight="600" fill="#64748b" letterSpacing="0.05em" textAnchor="middle">CMS &amp; SEARCH</text>
      </g>
    </svg>
  );
}

function FigCrossPlatform() {
  return (
   <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.18)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    {/* Soft architectural glow for the central Shared Core node */}
    <filter id="core-glow" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    {/* Elegant connecting flow gradient utilizing your accent color */}
    <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
      <stop offset="50%" stopColor="#7a2f1c" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
    </linearGradient>

    {/* Directional arrow matching core branding */}
    <marker id="arrow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7a2f1c" opacity="0.6"/>
    </marker>
  </defs>

  <g fill="none" stroke="url(#flow-line)" strokeDasharray="4 4" strokeWidth="2">
    {/* Web to Shared Core */}
    <path d="M 230 190 Q 310 190 390 225" />
    <path d="M 230 260 Q 310 260 390 225" />
    
    {/* Shared Core to Mobile */}
    <path d="M 410 225 Q 500 170 590 170" markerEnd="url(#arrow-head)" />
    <path d="M 410 225 Q 500 270 590 270" markerEnd="url(#arrow-head)" />
  </g>

  <g transform="translate(100, 130)">
    {/* Back Browser Wireframe */}
    <rect x="15" y="0" width="90" height="65" rx="4" fill="#f8fafc" stroke={mut} strokeWidth="1.3" />
    <circle cx="27" cy="10" r="2" fill={mut} />
    <circle cx="34" cy="10" r="2" fill={mut} />
    <line x1="45" y1="10" x2="95" y2="10" stroke={mut} strokeWidth="1" />

    {/* Front Active Browser Wireframe */}
    <rect x="35" y="25" width="90" height="65" rx="4" fill="#ffffff" stroke={mut} strokeWidth="1.6" />
    <circle cx="47" cy="35" r="2.5" fill={mut} />
    <circle cx="56" cy="35" r="2.5" fill={mut} />
    <circle cx="65" cy="35" r="2.5" fill={mut} />
    <rect x="47" y="48" width="66" height="6" rx="1" fill="#f1f5f9" />
    <rect x="47" y="60" width="45" height="5" rx="1" fill="#f1f5f9" />
    <rect x="47" y="71" width="55" height="5" rx="1" fill="#f1f5f9" />
    
    <text x="70" y="140" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">WEB</text>
  </g>

  <g transform="translate(400, 225)">
    {/* Microchip Outer Boundaries */}
    <circle cx="0" cy="0" r="54" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="1.5" />
    <circle cx="0" cy="0" r="40" fill="#7a2f1c" opacity="0.1" />
    <circle cx="0" cy="0" r="30" fill="#7a2f1c" filter="url(#core-glow)" />
    
    {/* Embedded Core AI Typography */}
    <text x="0" y="5" fontSize="13" fontWeight="700" fill="#ffffff" stroke="none" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">AI</text>

    {/* Silicon Interconnect Trace Pins */}
    <g stroke="#7a2f1c" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
      <line x1="0" y1="-30" x2="0" y2="-42" />
      <line x1="0" y1="30" x2="0" y2="42" />
      <line x1="-30" y1="0" x2="-42" y2="0" />
      <line x1="30" y1="0" x2="42" y2="0" />
      
      <line x1="-21" y1="-21" x2="-30" y2="-30" />
      <line x1="21" y1="-21" x2="30" y2="-30" />
      <line x1="-21" y1="21" x2="-30" y2="30" />
      <line x1="21" y1="21" x2="30" y2="30" />
    </g>
    
    <text x="0" y="80" fontSize="13" fontWeight="700" fill="#7a2f1c" letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">SHARED CORE</text>
  </g>

  
  <g transform="translate(600, 110)">
    {/* Main Smartphone Wireframe */}
    <rect x="0" y="10" width="60" height="105" rx="10" fill="#ffffff" stroke={mut} strokeWidth="1.8" />
    {/* Speaker / Camera Notch */}
    <rect x="18" y="16" width="24" height="4" rx="2" fill={mut} opacity="0.4" />
    {/* On Screen Content UI */}
    <rect x="8" y="28" width="44" height="28" rx="3" fill="#f8fafc" stroke={mut} strokeWidth="1" />
    <line x1="12" y1="68" x2="48" y2="68" stroke={mut} strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="78" x2="40" y2="78" stroke={mut} strokeWidth="2" strokeLinecap="round" />
    <circle cx="30" cy="100" r="4" fill="none" stroke={mut} strokeWidth="1.2" />

    {/* Secondary Layered Device */}
    <rect x="75" y="35" width="48" height="85" rx="8" fill="#ffffff" stroke={mut} strokeWidth="1.3" />
    <rect x="81" y="47" width="36" height="20" rx="2" fill="#f8fafc" />
    <line x1="85" y1="77" x2="111" y2="77" stroke={mut} strokeWidth="1.5" />
    <line x1="85" y1="85" x2="103" y2="85" stroke={mut} strokeWidth="1.5" />

    <text x="60" y="160" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">MOBILE</text>
  </g>
</svg>
  );
}

function FigGrowth() {
  return (
   <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.18)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    {/* Architectural glow for the central AI Review decision point */}
    <filter id="review-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    {/* Elegant data pipeline connecting gradient */}
    <linearGradient id="pipeline-flow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
      <stop offset="50%" stopColor="#7a2f1c" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
    </linearGradient>

    {/* Subtle chart background grid lines */}
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5" opacity="0.1" />
    </pattern>
  </defs>

  <g fill="none" stroke="url(#pipeline-flow)" strokeDasharray="4 4" strokeWidth="2">
    {/* Signals to AI Review */}
    <path d="M 230 200 Q 300 200 370 225" />
    <path d="M 230 270 Q 300 270 370 225" />
    
    {/* AI Review to Growth Input */}
    <path d="M 430 225 Q 500 225 570 310" />
  </g>

  <g transform="translate(100, 130)">
    {/* Constellation background grid lines */}
    <path d="M 20 20 L 40 60 L 15 90 M 40 60 L 65 35 L 75 80 M 65 35 L 100 55" fill="none" stroke={mut} strokeWidth="1" opacity="0.25" />
    
    {/* High-fidelity signal nodes mapped across coordinates */}
    {[[20,20],[40,60],[15,90],[65,35],[75,80],[100,55],[45,105]].map((p, i) => (
      <g key={i} transform={`translate(${p[0]}, ${p[1]})`}>
        <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke={mut} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="1.5" fill={mut} />
      </g>
    ))}

    {/* Pulse ring indicating active real-time incoming feeds */}
    <circle cx="40" cy="60" r="12" fill="none" stroke={mut} strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

    <text x="50" y="155" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">SIGNALS</text>
  </g>
  <g transform="translate(400, 225)">
    {/* Outer geometric shield boundary */}
    <polygon points="0,-48 42,32 -42,32" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Active structural decision node */}
    <polygon points="0,-36 32,24 -32,24" fill="none" stroke="#7a2f1c" strokeWidth="2" strokeLinejoin="round" filter="url(#review-glow)" />
    
    {/* Center target crosshair system */}
    <circle cx="0" cy="4" r="10" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
    <line x1="-5" y1="4" x2="5" y2="4" stroke="currentColor" strokeWidth="1.2" />
    <line x1="0" y1="-1" x2="0" y2="9" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="0" cy="4" r="1.5" fill="#7a2f1c" />

    <text x="0" y="75" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">AI REVIEW</text>
  </g>

  <g transform="translate(580, 100)">
    {/* Grid overlay within chart zone */}
    <rect x="0" y="20" width="140" height="120" fill="url(#grid)" stroke="none" />
    
    {/* Trend axes indicators */}
    <path d="M 0 20 L 0 140 L 140 140" stroke={mut} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    
    {/* Smooth custom cubic projection path climbing upwards */}
    <path d="M 0 140 C 45 130 65 75 130 25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Target endpoint marker highlighting breakthrough threshold */}
    <g transform="translate(130, 25)">
      <circle cx="0" cy="0" r="7" fill="#fbf6f5" stroke="#7a2f1c" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="3" fill="#7a2f1c" />
    </g>

    <text x="70" y="185" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">GROWTH</text>
  </g>
</svg>
  );
}

function FigFoundations() {
  return (
  <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.18)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    {/* Clean overlay glow for primary automation focus areas */}
    <filter id="stack-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    {/* Elegant looping line color gradient */}
    <linearGradient id="loop-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--muted, #94a3b8)" stopOpacity="0.3" />
      <stop offset="70%" stopColor="#7a2f1c" stopOpacity="0.8" />
      <stop offset="100%" stopColor="currentColor" />
    </linearGradient>

    {/* Directional arrow for the system automated engine cycle */}
    <marker id="loop-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7a2f1c" />
    </marker>
  </defs>

  <g fill="none" strokeLinecap="round" strokeLinejoin="round">
    {/* Base Layer: Infrastructure / Platform Core */}
    <rect x="220" y="270" width="360" height="42" rx="6" fill="#fbf6f5" stroke="currentColor" strokeWidth="2" />
    <line x1="245" y1="291" x2="275" y2="291" stroke="currentColor" strokeWidth="2.5" opacity="0.4" />
    <line x1="290" y1="291" x2="350" y2="291" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />

    {/* Layer 2: Core Pipelines */}
    <rect x="250" y="210" width="300" height="42" rx="6" fill="#ffffff" stroke={mut} strokeWidth="1.5" />
    <line x1="275" y1="231" x2="330" y2="231" stroke={mut} strokeWidth="2" opacity="0.5" />

    {/* Layer 3: Application Interfaces */}
    <rect x="280" y="150" width="240" height="42" rx="6" fill="#ffffff" stroke={mut} strokeWidth="1.5" />
    <line x1="305" y1="171" x2="345" y2="171" stroke={mut} strokeWidth="2" opacity="0.5" />

    {/* Top Layer: Smart Trigger / AI Engine Control */}
    <rect x="310" y="90" width="180" height="42" rx="6" fill="#ffffff" stroke="#7a2f1c" strokeWidth="2" filter="url(#stack-glow)" />
    {/* Integrated internal detail layout lines */}
    <circle cx="335" cy="111" r="3" fill="#7a2f1c" stroke="none" />
    <line x1="350" y1="111" x2="465" y2="111" stroke="#7a2f1c" strokeWidth="2" opacity="0.8" />
  </g>

  <g fill="none" strokeWidth="2.5">
    {/* High-fidelity continuous processing arrow loop tracking around the right side */}
    <path 
      d="M 520 111 C 660 111 670 291 595 291" 
      stroke="url(#loop-gradient)" 
      markerEnd="url(#loop-arrow)" 
    />
  </g>

  <g fill={mut} stroke="none" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.06em">
    {/* Platform Stack Descriptor Title */}
    <text x="400" y="360" fontSize="14" fontWeight="600" fill={mut} textAnchor="middle">PLATFORM</text>
    
    {/* Core Engine Process Cycle Title */}
    <text x="645" y="195" fontSize="13" fontWeight="700" fill="currentColor" textAnchor="middle">AUTOMATE</text>
  </g>
</svg>
  );
}

function FigCloud() {
  return (
    <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.18)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    {/* Architectural cloud aura filter */}
    <filter id="cloud-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    {/* Elegant ingestion pipeline gradient shifting into your accent theme */}
    <linearGradient id="pipeline-stream" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--muted, #94a3b8)" stopOpacity="0.2" />
      <stop offset="60%" stopColor="#7a2f1c" stopOpacity="0.6" />
      <stop offset="100%" stopColor="currentColor" />
    </linearGradient>
  </defs>

  <g fill="none" stroke="url(#pipeline-stream)" strokeWidth="2">
    {/* Interlocking dense structural layout paths */}
    <path d="M 120 150 L 260 200 M 120 150 L 260 290" strokeDasharray="4 4" />
    <path d="M 120 310 L 260 200 M 120 310 L 260 290" strokeDasharray="4 4" />
    
    {/* Aggregation streams moving towards consolidation hub */}
    <path d="M 260 200 L 410 245" strokeWidth="2.5" />
    <path d="M 260 290 L 410 245" strokeWidth="2.5" />

    {/* Ingestion feed connector entering the Cloud infrastructure boundary */}
    <path d="M 410 245 L 560 225" strokeDasharray="5 5" strokeWidth="2" />
  </g>

  <g transform="translate(0, 0)">
    {/* Concentric node cluster representing individual data streams */}
    {[[120,150], [120,310], [260,200], [260,290], [410,245]].map((p, i) => (
      <g key={i} transform={`translate(${p[0]}, ${p[1]})`}>
        {/* Outer radiant boundary halos */}
        <circle cx="0" cy="0" r="8" fill="none" stroke={mut} strokeWidth="1" opacity="0.3" />
        {/* Core database node pins */}
        <circle cx="0" cy="0" r="4" fill="#ffffff" stroke={mut} strokeWidth="2" />
      </g>
    ))}

    {/* Active visual highlight on primary ingestion hub */}
    <circle cx="410" cy="245" r="14" fill="none" stroke="#7a2f1c" strokeWidth="1.2" strokeDasharray="3 1" opacity="0.7" />
    <circle cx="410" cy="245" r="2.5" fill="#7a2f1c" />
    
    <text x="265" y="375" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">DATA PIPELINE</text>
  </g>

  <g transform="translate(540, 130)" filter="url(#cloud-glow)">
    {/* Multi-layered vector cloud outline utilizing corporate color codes */}
    <path 
      d="M 45 95 
         A 28 28 0 0 1 40 40 
         A 34 34 0 0 1 105 25 
         A 26 26 0 0 1 150 50 
         A 24 24 0 0 1 145 95 Z" 
      fill="#fbf6f5" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinejoin="round" 
    />
    
    {/* Microchip/Neural pattern interior details inside the cloud */}
    <g stroke="#7a2f1c" strokeWidth="1.5" fill="none" opacity="0.75" strokeLinecap="round">
      <circle cx="95" cy="55" r="8" strokeWidth="2" />
      <line x1="95" y1="35" x2="95" y2="47" />
      <line x1="95" y1="63" x2="95" y2="75" />
      <line x1="75" y1="55" x2="87" y2="55" />
      <line x1="103" y1="55" x2="115" y2="55" />
    </g>

    <text x="95" y="135" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">CLOUD AI</text>
  </g>
</svg>
  );
}

/* ---------------------------------------------------------------------------
   Real case studies — every entry below is a live site Salaro built.
   No invented quotes, no invented people. Details are drawn from the
   actual sites. Add CamKlinic once its URL is confirmed (template at end).
--------------------------------------------------------------------------- */
const CASES = [
  {
    mono: 'CB',
    name: 'Clever Botanics',
    tag: 'E-commerce · Wellness',
    url: 'https://cleverbotanics.com/',
    body: "A UK CBD and hemp wellness brand selling across the UK and EU. We built and maintain their Shopify storefront — a large multi-category catalogue of flowers, oils, edibles, topicals and isolates, multi-currency checkout in GBP, EUR, CHF and USD, plus bundle, outlet, wholesale and affiliate flows. The store now carries over 2,400 five-star Trustpilot reviews.",
  },
  {
    mono: 'HBM',
    name: 'H.B.M. Partners',
    tag: 'Advisory · Natural resources',
    url: 'https://hbm.salaro.com/',
    body: "A London- and Paris-based advisory that structures energy and critical-mineral projects, pairing technical due diligence with institutional capital. We shaped the site around clear product storytelling — a narrative from intelligence to capital to resources, sector pages for oil & gas, mining and renewables, and a track record that turns complex deals into credible proof for family offices and funds.",
  },
  {
    mono: 'P',
    name: 'Properties.co.uk',
    tag: 'Directory · Property',
    url: 'https://properties.co.uk/',
    body: "A directory for the UK property industry, connecting people with estate and letting agents, surveyors, conveyancers, brokers, developers and trades. We built the information architecture and search: a deep, sensible taxonomy of professional categories, location-based lookup, a dedicated eco-living section, and a listings and advertising model built to scale as more businesses join.",
  },
  {
    mono: 'EGC',
    name: 'EcoGreenCabins',
    tag: 'Brochure · Eco construction',
    url: 'https://ecogreencabins.com/',
    body: "An eco-conscious maker of garden rooms and cabins, built with sustainable materials, solar integration and low-cost foundation systems. We gave them a calm, confident brochure presence that leads with their craft and green credentials, presents the design range simply, and makes it easy for prospective buyers to start a conversation.",
  },
];

/* Responsive + polish styles, scoped to .p-studio. Injected here so this stays
   a single-file drop-in — no globals.css changes required. */
const PAGE_CSS = `
.p-studio .svc-row{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:stretch}

.p-studio .fig-box{border:1px solid var(--line-fine);border-radius:10px;padding:48px;
  background:linear-gradient(170deg,var(--paper),var(--paper-2));display:grid;place-items:center;
  min-height:320px;height:100%;transition:border-color .5s}
.p-studio .fig-box:hover{border-color:var(--line)}
.p-studio .fig-inner{width:100%;max-width:700px}

.p-studio .cs-viewport{overflow:hidden}
.p-studio .cs-slide{padding:0 11px;box-sizing:border-box}
.p-studio .cs-card{border:1px solid var(--line-fine);border-radius:2px;padding:32px 32px 28px;
  background:linear-gradient(170deg,var(--paper),var(--paper-2));box-shadow:0 18px 40px rgba(23,17,16,.04);
  display:flex;flex-direction:column;height:100%;box-sizing:border-box;
  transition:transform .5s cubic-bezier(.19,1,.22,1),border-color .5s,box-shadow .5s}
.p-studio .cs-card:hover{transform:translateY(-4px);border-color:var(--line);box-shadow:0 26px 52px rgba(23,17,16,.08)}
.p-studio .cs-mono{width:44px;height:44px;border-radius:50%;border:1px solid var(--accent);color:var(--accent);
  display:grid;place-items:center;flex:none;font-family:"Fraunces",serif;font-size:13px;letter-spacing:.02em}
.p-studio .cs-name{display:block;font-family:"Fraunces",serif;font-size:19px;font-weight:400;color:var(--ink);letter-spacing:-.01em}
.p-studio .cs-body{margin:0;color:var(--ink-soft);font-size:14.5px;line-height:1.75;flex:1}

.p-studio .cs-controls{display:flex;align-items:center;justify-content:center;gap:22px;margin-top:46px}
.p-studio .cs-controls .dots{margin-top:0}
.p-studio .cs-arrow{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:transparent;
  color:var(--ink-soft);font-family:"JetBrains Mono",monospace;font-size:15px;line-height:1;cursor:pointer;
  display:grid;place-items:center;transition:border-color .35s,color .35s,background .35s;flex:none}
.p-studio .cs-arrow:hover:not(:disabled){border-color:var(--accent);color:var(--accent)}
.p-studio .cs-arrow:disabled{opacity:.3;cursor:default}

.p-studio .tests-intro{max-width:56ch;margin:18px auto 0;text-align:center;color:var(--ink-soft);
  font-size:15px;line-height:1.8}

@media(max-width:920px){
  .p-studio .svc-row{grid-template-columns:1fr;gap:34px}
  .p-studio .svc-row .fig-box{order:-1;min-height:230px;height:auto;padding:34px}
  .p-studio .fig-inner{max-width:400px}
  .p-studio .svc-copy{padding-left:28px}
}
@media(max-width:560px){
  .p-studio .svc-row .fig-box{padding:26px;min-height:190px}
  .p-studio .fig-inner{max-width:300px}
  .p-studio .cs-controls{gap:16px}
  .p-studio .cs-card{padding:28px 24px 26px}
  .p-studio .tests-intro{font-size:14.5px}
}
`;

export default function StudioPage() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const startX = useRef(0);

  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
      document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  // Responsive slider: 3 per view on desktop, 2 on tablet, 1 on mobile.
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      const pv = w <= 700 ? 1 : w <= 1024 ? 2 : 3;
      setPerView(pv);
      setIndex((i) => Math.min(i, Math.max(0, CASES.length - pv)));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex = Math.max(0, CASES.length - perView);
  const dotCount = maxIndex + 1;
  const step = 100 / perView;

  const go = (i) => setIndex(Math.min(maxIndex, Math.max(0, i)));

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -40) go(index + 1);
    else if (dx > 40) go(index - 1);
  };

  const services = [
    {
      num:'01 / 05', title:'Intelligent content & knowledge systems',
      desc:'AI-assisted content operations, editorial workflows and publishing foundations — with tagging, retrieval and summarisation — that keep teams moving without unnecessary complexity.',
      incl:['AI-assisted tagging & search','Bespoke CMS delivery','Flexible content architecture','Modern editorial workflows','Clear team enablement'],
      Fig: FigContent,
    },
    {
      num:'02 / 05', title:'Cross-platform product engineering',
      desc:'High-performance web and mobile products with AI features built in — assistants, smart search, personalisation — on one clear, calm architecture and a steady delivery process.',
      incl:['Web and mobile delivery','In-product AI features','Shared component core','Personalisation & smart search','Design-to-development alignment'],
      Fig: FigCrossPlatform,
    },
    {
      num:'03 / 05', title:'AI-driven growth & performance',
      desc:'Practical growth support with model-assisted performance reviews and clear decisions that help teams act on what matters, without unnecessary noise.',
      incl:['Model-assisted performance reviews','Channel strategy guidance','Conversion focus','Measurement planning','Clear next steps'],
      Fig: FigGrowth,
    },
    {
      num:'04 / 05', title:'Reliable, automated foundations',
      desc:'Platform upgrades, resilient foundations and thoughtful automation that support speed, clarity and steady growth — with the routine work quietly handled.',
      incl:['Platform upgrade planning','Workflow automation','Security alignment','Reliable foundations','Budget-conscious delivery'],
      Fig: FigFoundations,
    },
    {
      num:'05 / 05', title:'Cloud, data & AI application delivery',
      desc:'Reliable delivery pipelines, sound data plumbing and modular AI application architecture that scale thoughtfully, without friction.',
      incl:['Delivery pipeline setup','Data & model integration','Modular environments','Scalable technical foundations','Reliable launch support'],
      Fig: FigCloud,
    },
  ];

  return (
    <div className="p-studio">
        <style>{PAGE_CSS}</style>

        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio" className="active">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Studio / Services &amp; approach</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>A <span className="it">studio</span> for speed,</span></span>
                  <span className="reveal-line"><span>clarity, and scale.</span></span>
                </h1>
                <p className="sub">Salaro brings UK-led strategy, thoughtful delivery and practical systems — increasingly AI-assisted — to ambitious teams that need more than a template.</p>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Delivery profile</span><span className="lab">Live studio</span></div>
                <div className="rings">
                  <svg viewBox="0 0 200 200" aria-hidden="true">
                    <g transform="rotate(-90 100 100)">
                      <circle className="ring-t" cx="100" cy="100" r="80"/>
                      <circle className="ring-v v1" cx="100" cy="100" r="80" style={{'--dash': '502.66', '--off': '40.2'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="62"/>
                      <circle className="ring-v v2" cx="100" cy="100" r="62" style={{'--dash': '389.56', '--off': '46.7'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="44"/>
                      <circle className="ring-v v3" cx="100" cy="100" r="44" style={{'--dash': '276.46', '--off': '55.3'}}/>
                    </g>
                  </svg>
                  <div className="legend">
                    <div><span className="dot d1"></span>Thoughtful delivery</div>
                    <div><span className="dot d2"></span>Clear systems</div>
                    <div><span className="dot d3"></span>Steady delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="signal-line"></div>

        {services.map((s, si) => (
          <section className={si === 0 ? 'svc contour-drift' : 'svc'} key={s.num}>
            <div className="wrap"><div className="svc-row">
              <div className="rv svc-copy">
                <div className="svc-node">
                  <span className="svc-node-dot"></span>
                  <div className="num lab">{s.num}</div>
                </div>
                <h3 className="serif">{s.title}</h3>
                <p className="desc">{s.desc}</p>
                <a href="#" className="arwlink">See details <span className="arw">→</span></a>
                <div className="incl">
                  <div className="lab">What's included</div>
                  <ul>
                    {s.incl.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              </div>
              <div className="rv fig-box">
                <div className="fig-inner"><s.Fig /></div>
              </div>
            </div></div>
          </section>
        ))}


        <section className="approach">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{marginBottom: '22px'}}>How we work</div>
              <h2 className="serif">A method built to make quality repeatable.</h2>
            </div>
            <div className="app-grid rv">
              <div className="app"><div className="k lab a">Phase / Strategy</div><h4 className="serif">Strategy alignment &amp; goal definition</h4><p>We clarify product goals, success metrics and constraints so every decision has purpose and every phase stays grounded in the brief.</p></div>
              <div className="app"><div className="k lab a">Phase / Architecture</div><h4 className="serif">Research-driven architecture</h4><p>We shape systems around real user needs, commercial priorities and implementation constraints so the solution is durable.</p></div>
              <div className="app"><div className="k lab a">Phase / Systems</div><h4 className="serif">Design execution &amp; systemisation</h4><p>We build coherent interfaces and thoughtful design systems that make quality repeatable as complexity grows.</p></div>
              <div className="app"><div className="k lab a">Phase / Refinement</div><h4 className="serif">Validation, optimisation &amp; refinement</h4><p>We refine with evidence, feedback and careful iteration so the final experience is clear, resilient and effective.</p></div>
            </div>
          </div>
        </section>


        <section className="tests">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{justifyContent: 'center', marginBottom: '22px'}}>Selected work</div>
              <h2 className="serif">Real builds. Real businesses.</h2>
              <p className="tests-intro">
                A few of the live sites we&apos;ve designed and shipped. Each one is running today — follow the links to see the work in the wild.
              </p>
            </div>

            <div className="carousel rv" style={{position:'relative', maxWidth:'1120px', margin:'0 auto'}}>
              <div className="cs-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className="track" style={{display:'flex', transform:`translateX(-${index * step}%)`}}>
                  {CASES.map((c) => (
                    <div key={c.name} className="cs-slide" style={{flex:`0 0 ${step}%`, maxWidth:`${step}%`}}>
                      <div className="cs-card">
                        <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'20px'}}>
                          <span className="cs-mono">{c.mono}</span>
                          <span>
                            <span className="cs-name">{c.name}</span>
                            <span className="lab" style={{marginTop:'4px', display:'block'}}>{c.tag}</span>
                          </span>
                        </div>
                        <p className="cs-body">{c.body}</p>
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="arwlink" style={{marginTop:'26px'}}>
                          Visit the live site <span className="arw">→</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {dotCount > 1 && (
                <div className="cs-controls">
                  <button className="cs-arrow" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous">←</button>
                  <div className="dots">
                    {Array.from({length: dotCount}).map((_, i) => (
                      <button
                        key={i}
                        className={`dot ${i === index ? 'on' : ''}`}
                        onClick={() => go(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button className="cs-arrow" onClick={() => go(index + 1)} disabled={index === maxIndex} aria-label="Next">→</button>
                </div>
              )}
            </div>
          </div>
        </section>


        <div className="dark-block">
          <div className="cta rv">
            <h2 className="serif">Let's start something deliberate.</h2>
            <p>If you need a thoughtful build, a design system or a practical path to better digital delivery, we should talk.</p>
            <div className="btns">
              <a href="tel:+447485222490" className="b1">Request a consultation</a>
              <a href="mailto:team@salaro.com" className="b2">team@salaro.com</a>
            </div>
          </div>
         
        </div>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">Guildford, Surrey</a><a href="#">LinkedIn</a></div>
            </div>
            <div className="foot-bot">
              <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</span>
              <span className="lab">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   CamKlinic — add once the URL is confirmed. Drop this object into CASES:

   {
     mono: 'CK',
     name: 'CamKlinic',
     tag: 'Clinic · Healthcare',            // adjust to what CamKlinic actually is
     url: 'https://camklinic.com/',         // <-- confirm the real URL
     body: "…",                             // written from the real site
   },
--------------------------------------------------------------------------- */