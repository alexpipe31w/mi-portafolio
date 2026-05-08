// RobotAlex — Mascot that walks, jumps and shows section-aware facts.
// Click it → opens the AI chat.
import { useState, useEffect, useRef } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────
type Pose = 'walk' | 'idle' | 'wave' | 'point';
interface Pos { x: number; y: number }   // viewport %

interface Props {
  activePage: string;
  onRobotClick: () => void;
}

// ── Path: x × y (viewport %) ──────────────────────────────────────────────
// x range 70-86 keeps the robot on the right without crowding the sidebar
const PATH: Pos[] = [
  { x: 82, y: 76 }, { x: 73, y: 54 }, { x: 80, y: 36 },
  { x: 72, y: 68 }, { x: 85, y: 44 }, { x: 76, y: 26 },
  { x: 70, y: 74 }, { x: 83, y: 50 }, { x: 74, y: 32 },
  { x: 79, y: 82 }, { x: 71, y: 50 },
];

// ── Section-aware fact bank ────────────────────────────────────────────────
const FACTS: Record<string, { main: string; sub: string }[]> = {
  About: [
    { main: '¡Hola! Soy RobotAlex', sub: 'Tu guía en este portafolio 👋' },
    { main: 'Full-Stack Developer', sub: 'Especialista en AI & Automatización' },
    { main: 'Téc. Prof. en Sistemas y Redes', sub: 'Diplomado técnico profesional ✅' },
    { main: '+6 proyectos en producción', sub: 'Con clientes reales 🚀' },
    { main: 'AI Agents & n8n', sub: 'Automatización inteligente de procesos' },
    { main: 'Remote-ready 🌎', sub: 'Neiva, Colombia · Disponible globalmente' },
  ],
  Resume: [
    { main: '¡Revisa el CV de Alex!', sub: 'Educación, cursos y experiencia' },
    { main: 'Ingeniería de Software', sub: 'Universidad FETJOP — en curso 🎓' },
    { main: 'Téc. Prof. Sistemas y Redes', sub: 'Instituto Politécnico Americano' },
    { main: 'StockUp: desde Feb 2026', sub: 'SaaS multitenant con IA propia' },
    { main: 'Frutaza E-commerce', sub: 'Shopify + IA + Mercado Pago (2025)' },
    { main: 'Project Leader FlyTours', sub: 'SaaS para agencias de viajes ✈️' },
    { main: 'Cisco · IBM · UDEMY', sub: 'Redes, IA, automatización y más ⚡' },
  ],
  Portfolio: [
    { main: '¡Explora los proyectos!', sub: 'Click o hover para ver detalles 👆' },
    { main: 'StockUp SaaS', sub: 'E-commerce multitenant + IA analytics' },
    { main: 'StockUp Mensajes', sub: 'WhatsApp CRM con IA 💬' },
    { main: 'Coffee Masfred', sub: 'E-commerce premium para café' },
    { main: 'Frutaza E-commerce', sub: 'Shopify + Mercado Pago + IA' },
    { main: 'FlyTours SaaS ✈️', sub: 'Agencias de viajes digitales' },
  ],
  Blog: [
    { main: '¡Eventos tech!', sub: 'Alex activo en la comunidad 🤝' },
    { main: 'Colombia 4.0 · Sep 2025', sub: 'Bogotá: AI, software y ciberseguridad' },
    { main: '2 Hackathons universitarios', sub: 'FETJOP — 2024 🏆' },
    { main: 'Feria Huila · Oct 2025', sub: 'Ciencia, tecnología e innovación' },
    { main: 'Ferias de electrónica', sub: 'Proyectos de telecomunicaciones' },
  ],
  Contact: [
    { main: '¡Contáctame!', sub: 'Abierto a proyectos y colaboraciones 🤝' },
    { main: 'alexpipe31w@gmail.com', sub: 'Respondo rápido 📬' },
    { main: '+57 314 237 8407', sub: 'WhatsApp disponible 📱' },
    { main: 'Remote-ready 🌎', sub: 'Disponible para trabajo remoto global' },
    { main: '¡Chatea con mi IA!', sub: 'Click en mí para abrir el asistente 🤖' },
  ],
};

// ── Component ───────────────────────────────────────────────────────────────
export default function RobotAlex({ activePage, onRobotClick }: Props) {
  const [posIdx,  setPosIdx]  = useState(0);
  const [factIdx, setFactIdx] = useState(0);
  const [pose,    setPose]    = useState<Pose>('idle');
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [visible, setVisible] = useState(false);

  // refs so async loop reads fresh values without re-creating itself
  const cancelRef    = useRef(false);
  const posIdxRef    = useRef(0);
  const factIdxRef   = useRef(0);
  const pageRef      = useRef(activePage);
  const jumpTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Helpers ───────────────────────────────────────────────────────────
  const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

  const doJump = () => {
    setIsJumping(false);                        // reset first (re-trigger CSS)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsJumping(true));
    });
    if (jumpTimer.current) clearTimeout(jumpTimer.current);
    jumpTimer.current = setTimeout(() => setIsJumping(false), 750);
  };

  // ── Appear after 1.5 s ───────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // ── React to page change: reset facts, flash greeting ────────────────
  useEffect(() => {
    pageRef.current   = activePage;
    factIdxRef.current = 0;
    setFactIdx(0);
    if (!visible) return;
    doJump();
    setBubbleVisible(true);
    const t = setTimeout(() => setBubbleVisible(false), 2600);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, visible]);

  // ── Main animation loop ───────────────────────────────────────────────
  useEffect(() => {
    if (!visible) return;
    cancelRef.current = false;

    const loop = async () => {
      while (!cancelRef.current) {
        // 1 · Walk to next position
        setPose('walk');
        setBubbleVisible(false);
        posIdxRef.current = (posIdxRef.current + 1) % PATH.length;
        setPosIdx(posIdxRef.current);

        await wait(1400);
        if (cancelRef.current) break;

        // 2 · Arrive: jump + show bubble
        doJump();
        setPose(factIdxRef.current % 2 === 0 ? 'wave' : 'point');
        setBubbleVisible(true);

        // 3 · Small jump mid-bubble
        await wait(2100);
        if (cancelRef.current) break;
        doJump();

        await wait(1700);
        if (cancelRef.current) break;

        // 4 · Hide bubble, advance fact
        setBubbleVisible(false);
        const facts = FACTS[pageRef.current] ?? FACTS.About;
        factIdxRef.current = (factIdxRef.current + 1) % facts.length;
        setFactIdx(factIdxRef.current);

        await wait(650);
      }
    };

    loop();
    return () => { cancelRef.current = true; };
  }, [visible]);

  // ── Render ────────────────────────────────────────────────────────────
  const pos   = PATH[posIdx];
  const facts = FACTS[activePage] ?? FACTS.About;
  const fact  = facts[factIdx % facts.length];

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: `${pos.x}vw`,
        top:  `${pos.y}vh`,
        transform: 'translate(-50%, -50%)',
        transition: 'left 1.3s cubic-bezier(.4,0,.2,1), top 1.3s cubic-bezier(.4,0,.2,1)',
        zIndex: 40,
        userSelect: 'none',
      }}
    >
      {/* ── Speech bubble (above + right-aligned) ──────────────────── */}
      <div
        aria-live="polite"
        className={`
          absolute bottom-[calc(100%+8px)] right-0
          w-44 sm:w-52
          bg-gray-900/96 border border-blue-500/50
          rounded-2xl rounded-br-none
          p-3 shadow-2xl shadow-blue-900/40
          transition-all duration-400
          ${bubbleVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}
        `}
        style={{ backdropFilter: 'blur(14px)' }}
      >
        {/* tail pointing down-right */}
        <div
          className="absolute -bottom-2.5 right-4 w-0 h-0"
          style={{
            borderLeft:   '9px solid transparent',
            borderRight:  '9px solid transparent',
            borderTop:    '11px solid rgba(59,130,246,0.5)',
          }}
        />
        <p className="text-white text-xs font-bold leading-tight mb-0.5">{fact.main}</p>
        <p className="text-blue-300 text-xs leading-snug">{fact.sub}</p>
        <div className="flex gap-1 mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '.2s' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"  style={{ animationDelay: '.4s' }} />
        </div>
      </div>

      {/* ── Click hint label ────────────────────────────────────────── */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-blue-400/70 font-mono pointer-events-none">
        click → AI chat
      </div>

      {/* ── Jump wrapper ────────────────────────────────────────────── */}
      <div className={isJumping ? 'robot-jumping' : ''}>

        {/* ── Body / walk wrapper ─────────────────────────────────── */}
        <div
          role="button"
          tabIndex={0}
          aria-label="RobotAlex — click to open AI chat"
          onClick={() => { onRobotClick(); doJump(); }}
          onKeyDown={e => e.key === 'Enter' && onRobotClick()}
          className={`
            relative w-16 h-20
            cursor-pointer pointer-events-auto
            ${pose === 'walk'  ? 'robot-walk'  : ''}
            ${pose === 'idle'  ? 'robot-idle'  : ''}
            ${pose === 'wave'  ? 'robot-wave'  : ''}
            ${pose === 'point' ? 'robot-wave'  : ''}
          `}
        >
          <svg
            viewBox="0 0 64 80"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.55))' }}
          >
            <defs>
              <linearGradient id="rg_body"  x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#2563eb"/>
                <stop offset="100%" stopColor="#1d4ed8"/>
              </linearGradient>
              <linearGradient id="rg_head"  x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#1e40af"/>
              </linearGradient>
              <linearGradient id="rg_panel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#1e3a8a"/>
                <stop offset="100%" stopColor="#172554"/>
              </linearGradient>
              <filter id="rg_glow">
                <feGaussianBlur stdDeviation="1.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Antenna */}
            <rect x="29" y="3" width="6" height="8" rx="2" fill="#1e3a8a"/>
            <circle cx="32" cy="2" r="3.5" fill="#06b6d4" filter="url(#rg_glow)" className="robot-antenna"/>

            {/* Head */}
            <rect x="8" y="10" width="48" height="28" rx="6" fill="url(#rg_head)"/>
            <rect x="8" y="10" width="48" height="28" rx="6" fill="none" stroke="#60a5fa" strokeWidth=".8"/>

            {/* Eye sockets */}
            <rect x="13" y="17" width="14" height="10" rx="3" fill="#0f172a"/>
            <rect x="37" y="17" width="14" height="10" rx="3" fill="#0f172a"/>
            {/* Eye screens */}
            <rect x="14" y="18" width="12" height="8" rx="2" fill="#06b6d4" opacity=".85" className="robot-eyes"/>
            <rect x="38" y="18" width="12" height="8" rx="2" fill="#06b6d4" opacity=".85" className="robot-eyes"/>
            {/* Pupils */}
            <circle cx="20" cy="22" r="2.5" fill="#fff" opacity=".9"/>
            <circle cx="44" cy="22" r="2.5" fill="#fff" opacity=".9"/>
            <circle cx="21" cy="22" r="1.2" fill="#1e3a8a"/>
            <circle cx="45" cy="22" r="1.2" fill="#1e3a8a"/>
            {/* Shine */}
            <circle cx="22" cy="20.5" r=".7" fill="white" opacity=".8"/>
            <circle cx="46" cy="20.5" r=".7" fill="white" opacity=".8"/>

            {/* Mouth */}
            <rect x="18" y="31" width="28" height="4" rx="2" fill="#1e3a8a"/>
            <rect x="20" y="32" width="24" height="2" rx="1" fill="#06b6d4" opacity=".5"/>

            {/* Body */}
            <rect x="6" y="40" width="52" height="30" rx="8" fill="url(#rg_body)"/>
            <rect x="6" y="40" width="52" height="30" rx="8" fill="none" stroke="#60a5fa" strokeWidth=".8"/>

            {/* Chest panel */}
            <rect x="14" y="46" width="36" height="18" rx="4" fill="url(#rg_panel)"/>
            {/* LED lights */}
            <circle cx="22" cy="55" r="3.5" fill="#06b6d4" filter="url(#rg_glow)" className="robot-led-c"/>
            <circle cx="32" cy="55" r="3.5" fill="#22c55e" filter="url(#rg_glow)" className="robot-led-g"/>
            <circle cx="42" cy="55" r="3.5" fill="#a855f7" filter="url(#rg_glow)" className="robot-led-p"/>
            {/* Name badge */}
            <rect x="16" y="48" width="32" height="5" rx="2" fill="#1e3a8a" opacity=".7"/>
            <text x="32" y="52" textAnchor="middle" fill="#60a5fa" fontSize="4" fontFamily="monospace" fontWeight="bold">RobotAlex</text>

            {/* Left arm */}
            <rect x="0" y="42" width="6" height="18" rx="3" fill="#1d4ed8" className="robot-arm-l"/>
            <circle cx="3" cy="61" r="3.5" fill="#2563eb"/>
            {/* Right arm */}
            <rect x="58" y="42" width="6" height="18" rx="3" fill="#1d4ed8" className="robot-arm-r"/>
            <circle cx="61" cy="61" r="3.5" fill="#2563eb"/>

            {/* Legs */}
            <rect x="14" y="72" width="12" height="8" rx="3" fill="#1e40af" className="robot-leg-l"/>
            <rect x="38" y="72" width="12" height="8" rx="3" fill="#1e40af" className="robot-leg-r"/>
            {/* Feet */}
            <rect x="10" y="77" width="18" height="3" rx="1.5" fill="#1e3a8a"/>
            <rect x="36" y="77" width="18" height="3" rx="1.5" fill="#1e3a8a"/>
          </svg>

          {/* Walk particles */}
          {pose === 'walk' && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-blue-400/70"
                  style={{ animation: `robotParticle .8s ease-out ${i * .16}s infinite` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
