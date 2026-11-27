'use client';

import { useEffect, useRef, useState } from 'react';

const tones = ['#376b65', '#955b35', '#4b6586', '#755780'];
const labels = [
  ['Explore requirements', 'Review the design', 'Preview the website', 'Website published'],
  ['Explore the collection', 'Add to basket', 'Secure checkout', 'Order confirmed'],
  ['Desktop view', 'Tablet view', 'Mobile view', 'Data synchronised'],
  ['Describe a task', 'Review source data', 'Inspect summary', 'Workflow complete'],
];

function Frame({ children, x = 35, y = 18, w = 250, h = 153 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="7" fill="#fffaf4" stroke="currentColor" />
      <path d={`M${x} ${y + 19}h${w}`} stroke="currentColor" opacity=".5" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x + 10 + i * 8} cy={y + 10} r="2" fill="currentColor" />
      ))}
      {children}
    </g>
  );
}

function Text({ x = 160, y = 100, children, size = 12, anchor = 'middle' }) {
  return <text x={x} y={y} textAnchor={anchor} fontSize={size} fill="currentColor">{children}</text>;
}

function Cursor({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="wf-cursor">
        <circle r="12" fill="none" stroke="currentColor" className="wf-click" />
        <path d="M0 0V16L5 11L10 15L13 12L7 8L15 7Z" fill="currentColor" stroke="#fffaf4" />
      </g>
    </g>
  );
}

function Success({ title }) {
  return (
    <g>
      <circle cx="160" cy="78" r="39" fill="currentColor" opacity=".12" />
      <circle cx="160" cy="78" r="29" fill="none" stroke="currentColor" />
      <path d="M145 78l10 10 21-23" className="wf-tick" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <Text y={139} size={15}>{title}</Text>
    </g>
  );
}

function Web({ s }) {
  if (s === 3) return <Success title="Website is live" />;
  return (
    <Frame>
      {s === 1 ? (
        <g fontFamily="monospace">
          {['export default function Page() {', '  return (', '    <Website />', '  );', '}'].map((text, i) => (
            <g key={text} className="wf-reveal" style={{ animationDelay: `${i * 0.32}s` }}>
              <Text x={49} y={57 + i * 22} anchor="start" size={11}>{text}</Text>
            </g>
          ))}
        </g>
      ) : (
        <g>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={48 + i * 75}
              y="133"
              width="69"
              height="24"
              rx="3"
              fill={s === 0 ? 'none' : '#d4e4db'}
              stroke="currentColor"
              strokeDasharray={s === 0 ? '4 3' : undefined}
              className="wf-reveal"
              style={{ animationDelay: `${0.7 + i * 0.2}s` }}
            />
          ))}
          <rect x="48" y="48" width="224" height="75" rx="3" fill={s === 0 ? 'none' : '#e9dece'} stroke="currentColor" strokeDasharray={s === 0 ? '4 3' : undefined} className="wf-reveal" />
          <g className="wf-reveal" style={{ animationDelay: '.35s' }}>
            <Text x={58} y={72} anchor="start" size={15}>{s === 0 ? 'A clearer way to shop' : 'Ideas into impact.'}</Text>
            <path d="M58 83h90m-90 9h65" stroke="currentColor" opacity=".5" />
            <rect x="58" y="101" width="55" height="12" rx="2" fill="currentColor" />
            <rect x="183" y="57" width="78" height="57" rx="3" fill={s === 0 ? 'none' : '#b2c9bc'} stroke="currentColor" />
          </g>
          <Cursor x={245} y={111} />
        </g>
      )}
    </Frame>
  );
}

function Commerce({ s }) {
  if (s === 3) return <Success title="Order confirmed" />;
  return (
    <Frame>
      {s === 0 ? (
        <g>
          {['Botanical oil', 'Daily gummies', 'Wellness kit'].map((name, i) => (
            <g key={name} className="wf-reveal" style={{ animationDelay: `${i * 0.2}s` }}>
              <rect x={48 + i * 75} y="52" width="69" height="95" rx="4" fill="#ead8c5" />
              <path d={`M${65 + i * 75} 79h35v32h-35z m8 0v-5q9-15 19 0v5`} fill="#fffaf4" stroke="currentColor" />
              <Text x={82 + i * 75} y={133} size={10}>{name}</Text>
            </g>
          ))}
          <Cursor x={155} y={132} />
        </g>
      ) : s === 1 ? (
        <g>
          <rect x="49" y="52" width="92" height="100" rx="4" fill="#ead8c5" />
          <path d="M73 82h44v40H73z m10 0v-7q12-18 24 0v7" fill="#fffaf4" stroke="currentColor" />
          <Text x={155} y={72} anchor="start">Botanical oil</Text>
          <rect x="155" y="99" width="115" height="24" rx="4" fill="currentColor" />
          <text x="212" y="115" fill="white" textAnchor="middle" fontSize="10">ADD TO BASKET</text>
          <Cursor x={218} y={115} />
          <g className="wf-reveal" style={{ animationDelay: '1.5s' }}>
            <Text x={212} y={145}>✓ 1 item added</Text>
          </g>
        </g>
      ) : (
        <g>
          <Text x={50} y={55} anchor="start">Payment details</Text>
          {[65, 87, 109].map((y, i) => (
            <g key={y}>
              <rect x="50" y={y} width="220" height="17" rx="3" fill="#eaded0" />
              <g className="wf-reveal" style={{ animationDelay: `${i * 0.4}s` }}>
                <Text x={60} y={y + 12} anchor="start" size={10}>{['Customer details', 'Delivery address', '•••• •••• •••• 4242'][i]}</Text>
              </g>
            </g>
          ))}
          <rect x="50" y="133" width="220" height="23" rx="3" fill="currentColor" />
          <text x="160" y="148" textAnchor="middle" fill="white" fontSize="10">PAY SECURELY</text>
          <Cursor x={207} y={147} />
        </g>
      )}
    </Frame>
  );
}

function Apps({ s }) {
  const width = [250, 170, 94, 250][s];
  const x = (320 - width) / 2;
  return (
    <g className="wf-device">
      <rect x={x} y="15" width={width} height="158" rx={s === 2 ? 12 : 7} fill="#fffaf4" stroke="currentColor" strokeWidth="1.5" />
      <rect x={x + 9} y="32" width={width - 18} height="47" rx="4" fill="#b6c9da" />
      <Text x={160} y={60} size={s === 2 ? 10 : 14}>{labels[2][s]}</Text>
      {[0, 1, 2].map((i) => (
        <g key={i} className="wf-reveal" style={{ animationDelay: `${i * 0.25}s` }}>
          <rect x={x + 9} y={88 + i * 23} width={width - 18} height="17" rx="3" fill="#e2e9ef" />
          <path d={`M${x + 16} ${96 + i * 23}h${width - 35}`} stroke="currentColor" opacity=".5" />
        </g>
      ))}
      <circle cx="160" cy="166" r="2" fill="currentColor" />
      {s === 3 && (
        <g className="wf-reveal">
          <rect x="100" y="105" width="120" height="30" rx="5" fill="#fffaf4" stroke="currentColor" />
          <Text y={124}>✓ Synced</Text>
        </g>
      )}
    </g>
  );
}

function AI({ s }) {
  if (s === 3) return <Success title="Workflow automated" />;
  return (
    <Frame>
      {s === 0 ? (
        <g>
          <Text x={49} y={57} anchor="start">New enquiry</Text>
          <rect x="70" y="72" width="200" height="34" rx="8" fill="#e5d8e9" />
          <g className="wf-reveal"><Text x={170} y={93}>Summarise orders</Text></g>
          <Cursor x={255} y={105} />
        </g>
      ) : s === 1 ? (
        <g>
          <circle cx="160" cy="96" r="34" fill="#e5d8e9" stroke="currentColor" />
          <circle cx="160" cy="96" r="43" fill="none" stroke="currentColor" strokeDasharray="12 8" className="wf-spin" />
          <Text y={102} size={20}>AI</Text>
          {[0, 1, 2].map((i) => <circle key={i} cx={140 + i * 20} cy="151" r="3" fill="currentColor" className="wf-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
        </g>
      ) : (
        <g>
          <Text x={50} y={55} anchor="start">Sales insights</Text>
          {[28, 47, 38, 67, 80].map((height, i) => (
            <rect key={i} x={60 + i * 40} y={145 - height} width="25" height={height} rx="3" fill="currentColor" opacity=".65" className="wf-bar" style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
          <path d="M60 117L100 98L140 107L180 78L220 65" stroke="currentColor" fill="none" className="wf-tick" />
        </g>
      )}
    </Frame>
  );
}

export default function CapabilityDemo({ type = 0 }) {
  const [step, setStep] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let inView = false;
    const sync = () => {
      window.clearInterval(timer);
      if (inView && !motion.matches && !document.hidden) {
        timer = window.setInterval(() => setStep((current) => (current + 1) % 4), 3300 + type * 150);
      }
    };
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        sync();
      }, { threshold: 0.1 })
      : null;

    if (observer) observer.observe(rootRef.current);
    else inView = true;
    sync();
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);

    return () => {
      window.clearInterval(timer);
      observer?.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [type]);

  const Scene = [Web, Commerce, Apps, AI][type];
  return (
    <div ref={rootRef} className="live-demo workflow-demo" style={{ '--demo-tone': tones[type] }}>
      <div className="live-canvas">
        <svg viewBox="0 0 320 210" role="img" aria-label={labels[type].join(', ')}>
          <g key={step} className="wf-scene">
            <Scene s={step} />
            <Text y={195} size={11}>{labels[type][step]}</Text>
          </g>
        </svg>
      </div>
    </div>
  );
}
