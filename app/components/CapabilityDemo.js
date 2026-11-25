'use client';

import { useState } from 'react';

const CONTROLS = [
  ['Layout', 'Detail', 'Launch'],
  ['Browse', 'Select', 'Checkout'],
  ['Desktop', 'Tablet', 'Mobile'],
  ['Connect', 'Process', 'Deliver'],
];

function WebDemo() {
  return (
    <div className="demo-browser">
      <div className="demo-chrome">● ● ●</div>
      <div className="demo-layout">
        <div>
          <i />
          <i />
          <b />
        </div>
        <div className="demo-picture">
          <span />
        </div>
      </div>
      <div className="demo-bottom">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function CommerceDemo() {
  return (
    <>
      <div className="demo-products">
        <div>
          <span>◻</span>
          <i />
          <b />
        </div>
        <div>
          <span>◻</span>
          <i />
          <b />
        </div>
        <div>
          <span>◻</span>
          <i />
          <b />
        </div>
      </div>
      <div className="demo-float">Cart +1</div>
    </>
  );
}

function AppDemo() {
  return (
    <div className="demo-screen">
      <div className="demo-chrome">● ● ●</div>
      <div className="demo-layout">
        <div>
          <i />
          <i />
          <b />
        </div>
        <div className="demo-picture">
          <span />
        </div>
      </div>
      <div className="demo-bottom">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function AiDemo({ step }) {
  const active = [step === 0 ? 0 : step === 1 ? 1 : 2];
  return (
    <svg className="demo-network" viewBox="0 0 320 180" aria-hidden="true">
      <path d="M60 90 L160 40 L260 90 L160 140 Z" />
      <path d="M60 90 L160 140" />
      <path d="M160 40 L160 140" />
      <path d="M260 90 L160 40" />
      <circle cx="60" cy="90" r="18" className={active.includes(0) ? 'active' : ''} />
      <circle cx="160" cy="40" r="18" className={active.includes(1) ? 'active' : ''} />
      <circle cx="260" cy="90" r="18" className={active.includes(2) ? 'active' : ''} />
      <circle cx="160" cy="140" r="18" className={step >= 1 ? 'active' : ''} />
      <text x="60" y="94" textAnchor="middle">In</text>
      <text x="160" y="44" textAnchor="middle">AI</text>
      <text x="260" y="94" textAnchor="middle">Out</text>
      <text x="160" y="144" textAnchor="middle">Data</text>
    </svg>
  );
}

const DEMOS = [WebDemo, CommerceDemo, AppDemo, AiDemo];

export default function CapabilityDemo({ type = 0 }) {
  const [step, setStep] = useState(0);
  const Demo = DEMOS[type] || DEMOS[0];
  const controls = CONTROLS[type] || CONTROLS[0];

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--mx', `${x}%`);
    event.currentTarget.style.setProperty('--my', `${y}%`);
  };

  return (
    <div className={`cap-demo cap-${type}`} data-step={step}>
      <div className="cap-canvas" onMouseMove={handleMove}>
        <div className="cap-orbit" />
        <div className="cap-orbit second" />
        <Demo step={step} />
      </div>
      <div className="cap-controls">
        {controls.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={step === index}
            onClick={() => setStep(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
