import React from "react";

// Helper for top face of an isometric cube
const IsoTop = ({ x, y, size, fill }: { x: number, y: number, size: number, fill: string }) => (
    <polygon points={`${x},${y} ${x + size * 1.732},${y + size} ${x},${y + size * 2} ${x - size * 1.732},${y + size}`} fill={fill} />
);
// Helper for left face
const IsoLeft = ({ x, y, size, h, fill }: { x: number, y: number, size: number, h: number, fill: string }) => (
    <polygon points={`${x - size * 1.732},${y + size} ${x},${y + size * 2} ${x},${y + size * 2 + h} ${x - size * 1.732},${y + size + h}`} fill={fill} />
);
// Helper for right face
const IsoRight = ({ x, y, size, h, fill }: { x: number, y: number, size: number, h: number, fill: string }) => (
    <polygon points={`${x},${y + size * 2} ${x + size * 1.732},${y + size} ${x + size * 1.732},${y + size + h} ${x},${y + size * 2 + h}`} fill={fill} />
);

// Helper for a complete 3D Block
const IsoBlock = ({ x, y, size, h, colorTop, colorLeft, colorRight, style, className }: { x: number; y: number; size: number; h: number; colorTop: string; colorLeft: string; colorRight: string; style?: React.CSSProperties; className?: string }) => {
    return (
        <g style={style} className={className}>
            <IsoLeft x={x} y={y} size={size} h={h} fill={colorLeft} />
            <IsoRight x={x} y={y} size={size} h={h} fill={colorRight} />
            <IsoTop x={x} y={y} size={size} fill={colorTop} />
        </g>
    )
};

// Global animation styles specifically for the 3D icons
const AnimationStyles = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes i3d-float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes i3d-float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes i3d-float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes i3d-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes i3d-pulse-fast { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes i3d-spin { 100% { transform: rotate(360deg); } }
        @keyframes i3d-dash { to { stroke-dashoffset: -20; } }
        .i3d-f1 { animation: i3d-float1 3s ease-in-out infinite; }
        .i3d-f2 { animation: i3d-float2 4s ease-in-out infinite; }
        .i3d-f3 { animation: i3d-float3 3.5s ease-in-out infinite; }
        .i3d-p { animation: i3d-pulse 2s ease-in-out infinite; transform-origin: center; }
        .i3d-pf { animation: i3d-pulse-fast 1.5s ease-in-out infinite; }
        .i3d-s { animation: i3d-spin 12s linear infinite; transform-origin: center; }
        .i3d-flow { animation: i3d-dash 2s linear infinite; }
    `}} />
);

export const Icons3D = {
    // 1. Cloud Infrastructure / DevOps (Floating layered platforms)
    Cloud: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="c-top" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#818cf8" /></linearGradient>
                <linearGradient id="c-left" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#0ea5e9" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
                <linearGradient id="c-right" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#0284c7" /><stop offset="100%" stopColor="#4338ca" /></linearGradient>
            </defs>
            <IsoBlock x={50} y={45} size={15} h={10} colorTop="url(#c-top)" colorLeft="url(#c-left)" colorRight="url(#c-right)" style={{ animation: "i3d-float1 4s ease-in-out infinite" }} />
            <IsoBlock x={50} y={25} size={15} h={10} colorTop="url(#c-top)" colorLeft="url(#c-left)" colorRight="url(#c-right)" style={{ animation: "i3d-float2 4.5s ease-in-out infinite" }} />
            <IsoBlock x={50} y={5} size={15} h={10} colorTop="url(#c-top)" colorLeft="url(#c-left)" colorRight="url(#c-right)" style={{ animation: "i3d-float3 5s ease-in-out infinite" }} />
            {/* Connections */}
            <path d="M50 25 L50 45 M50 45 L50 65 M24 20 L24 40 M76 20 L76 40" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" className="i3d-flow" />
        </svg>
    ),

    // 2. Data & ML / Database (Data Stacks)
    Database: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="db-top" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#c084fc" /></linearGradient>
                <linearGradient id="db-left" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#9333ea" /></linearGradient>
                <linearGradient id="db-right" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#7e22ce" /></linearGradient>
                <linearGradient id="db-acc" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient>
            </defs>
            <IsoBlock x={50} y={40} size={18} h={16} colorTop="url(#db-top)" colorLeft="url(#db-left)" colorRight="url(#db-right)" style={{ animation: "i3d-float1 3s ease-in-out infinite" }} />
            <IsoBlock x={50} y={20} size={18} h={16} colorTop="url(#db-top)" colorLeft="url(#db-left)" colorRight="url(#db-right)" style={{ animation: "i3d-float2 3s ease-in-out infinite 0.2s" }} />
            {/* Small glowing data nodes on the sides */}
            <circle cx="34" cy="50" r="3" fill="url(#db-acc)" className="i3d-pf" style={{ animationDelay: "0s" }} />
            <circle cx="66" cy="50" r="3" fill="url(#db-acc)" className="i3d-pf" style={{ animationDelay: "0.2s" }} />
            <circle cx="34" cy="70" r="3" fill="url(#db-acc)" className="i3d-pf" style={{ animationDelay: "0.4s" }} />
            <circle cx="66" cy="70" r="3" fill="url(#db-acc)" className="i3d-pf" style={{ animationDelay: "0.6s" }} />
        </svg>
    ),

    // 3. Software Engineering / Architecture (Isometric code brackets / blocks)
    Software: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="se-top" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#10b981" /></linearGradient>
                <linearGradient id="se-left" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" /></linearGradient>
                <linearGradient id="se-right" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#059669" /><stop offset="100%" stopColor="#047857" /></linearGradient>
            </defs>
            <IsoBlock x={50} y={50} size={22} h={4} colorTop="url(#se-top)" colorLeft="url(#se-left)" colorRight="url(#se-right)" />
            {/* Floating structural code blocks */}
            <IsoBlock x={35} y={30} size={8} h={15} colorTop="url(#se-top)" colorLeft="url(#se-left)" colorRight="url(#se-right)" style={{ animation: "i3d-float1 4s ease-in-out infinite" }} />
            <IsoBlock x={65} y={15} size={8} h={30} colorTop="url(#se-top)" colorLeft="url(#se-left)" colorRight="url(#se-right)" style={{ animation: "i3d-float2 3s ease-in-out infinite" }} />
            <IsoBlock x={45} y={10} size={8} h={20} colorTop="url(#se-top)" colorLeft="url(#se-left)" colorRight="url(#se-right)" style={{ animation: "i3d-float3 5s ease-in-out infinite" }} />
        </svg>
    ),

    // 4. Product & Design (Glass layers, UX)
    Design: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="pd-panel1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" /><stop offset="100%" stopColor="#be185d" stopOpacity="0.8" /></linearGradient>
                <linearGradient id="pd-panel2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.9" /><stop offset="100%" stopColor="#b91c1c" stopOpacity="0.9" /></linearGradient>
                <linearGradient id="pd-panel3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fbbf24" stopOpacity="0.95" /><stop offset="100%" stopColor="#b45309" stopOpacity="0.95" /></linearGradient>
            </defs>
            <g className="i3d-f1" style={{ animationDelay: "0s" }}>
                <g transform="translate(0, 30)">
                    <IsoTop x={50} y={10} size={15} fill="url(#pd-panel1)" />
                </g>
            </g>
            <g className="i3d-f2" style={{ animationDelay: "0.2s" }}>
                <g transform="translate(0, 15)">
                    <IsoTop x={50} y={10} size={20} fill="url(#pd-panel2)" />
                    <polygon points="50,25 60,30 50,35 40,30" fill="#fff" opacity="0.4" className="i3d-pf" />
                </g>
            </g>
            <g className="i3d-f3" style={{ animationDelay: "0.4s" }}>
                <g transform="translate(0, -5)">
                    <IsoTop x={50} y={10} size={25} fill="url(#pd-panel3)" />
                    <polygon points="50,20 65,28 50,35 35,28" fill="#fff" opacity="0.6" className="i3d-pf" style={{ animationDelay: "0.3s" }} />
                    <polygon points="25,32 32,36 25,40 18,36" fill="#fff" opacity="0.3" className="i3d-pf" style={{ animationDelay: "0.6s" }} />
                </g>
            </g>
        </svg>
    ),

    // 5. Strategy & Advisory (Growth / Target Graph)
    Strategy: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="st-top" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#f97316" /></linearGradient>
                <linearGradient id="st-left" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#ea580c" /><stop offset="100%" stopColor="#c2410c" /></linearGradient>
                <linearGradient id="st-right" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#c2410c" /><stop offset="100%" stopColor="#9a3412" /></linearGradient>
                <linearGradient id="st-base" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#cbd5e1" /><stop offset="100%" stopColor="#94a3b8" /></linearGradient>
            </defs>
            <IsoTop x={50} y={50} size={25} fill="url(#st-base)" />
            <IsoBlock x={65} y={45} size={6} h={8} colorTop="url(#st-top)" colorLeft="url(#st-left)" colorRight="url(#st-right)" style={{ animation: "i3d-float1 2s ease-in-out infinite" }} />
            <IsoBlock x={50} y={35} size={6} h={18} colorTop="url(#st-top)" colorLeft="url(#st-left)" colorRight="url(#st-right)" style={{ animation: "i3d-float2 2s ease-in-out infinite 0.2s" }} />
            <IsoBlock x={35} y={15} size={6} h={38} colorTop="url(#st-top)" colorLeft="url(#st-left)" colorRight="url(#st-right)" style={{ animation: "i3d-float3 2s ease-in-out infinite 0.4s" }} />
            {/* Flow line */}
            <path d="M65 45 L50 35 L35 15 L20 -5" stroke="#fce7f3" strokeWidth="2" fill="none" strokeDasharray="6 4" className="i3d-flow" />
        </svg>
    ),

    // 6. Support / Security (3D Shield)
    Support: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="su-front" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0284c7" /></linearGradient>
                <linearGradient id="su-side" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0369a1" /><stop offset="100%" stopColor="#075985" /></linearGradient>
            </defs>
            <g className="i3d-f2">
                <g transform="rotate(30 50 50) scale(0.9) translate(10,-5)">
                    {/* Side thickness layer */}
                    <path d="M50 15 L80 25 L80 60 Q80 80 50 95 Q20 80 20 60 L20 25 Z" fill="url(#su-side)" />
                    {/* Front layer */}
                    <path d="M47 12 L77 22 L77 57 Q77 77 47 92 Q17 77 17 57 L17 22 Z" fill="url(#su-front)" />
                    {/* Cross design */}
                    <g className="i3d-pf">
                        <path d="M47 30 L47 75 M32 52 L62 52" stroke="#bae6fd" strokeWidth="6" strokeLinecap="round" />
                    </g>
                </g>
            </g>
        </svg>
    ),

    // 7. AI & Automation (Orb network)
    AI: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <radialGradient id="ai-orb" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#6b21a8" />
                </radialGradient>
                <linearGradient id="ai-link" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d8b4fe" /><stop offset="100%" stopColor="#9333ea" /></linearGradient>
            </defs>
            <g className="i3d-f1">
                <circle cx="50" cy="50" r="16" fill="url(#ai-orb)" className="i3d-p" filter="drop-shadow(0 0 8px rgba(147, 51, 234, 0.6))" />

                <g className="i3d-s">
                    <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="url(#ai-link)" strokeWidth="1.5" strokeDasharray="4 4" className="i3d-flow" />
                    <circle cx="15" cy="50" r="4" fill="url(#ai-orb)" />
                    <circle cx="85" cy="50" r="4" fill="url(#ai-orb)" />
                </g>

                <g className="i3d-s" style={{ animationDuration: "8s", animationDirection: "reverse" }}>
                    <ellipse cx="50" cy="50" rx="12" ry="35" fill="none" stroke="url(#ai-link)" strokeWidth="1.5" strokeDasharray="4 4" className="i3d-flow" />
                    <circle cx="50" cy="15" r="4" fill="url(#ai-orb)" />
                </g>
            </g>
        </svg>
    ),

    // 8. Mobile Devices / Frontend (Isometric Smartphone Stack)
    Mobile: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="mo-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" /><stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" /></linearGradient>
                <linearGradient id="mo-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#172554" /></linearGradient>
            </defs>
            <g transform="translate(0, 10)">
                <IsoBlock x={50} y={20} size={10} h={40} colorTop="url(#mo-glass)" colorLeft="url(#mo-body)" colorRight="url(#mo-body)" style={{ animation: "i3d-float1 3s ease-in-out infinite" }} />
                <IsoBlock x={35} y={30} size={10} h={40} colorTop="url(#mo-glass)" colorLeft="url(#mo-body)" colorRight="url(#mo-body)" style={{ animation: "i3d-float2 3s ease-in-out infinite 0.3s" }} />
                <IsoBlock x={65} y={10} size={10} h={40} colorTop="url(#mo-glass)" colorLeft="url(#mo-body)" colorRight="url(#mo-body)" style={{ animation: "i3d-float3 3s ease-in-out infinite 0.6s" }} />
            </g>
        </svg>
    ),

    // ==========================================
    // TECH STACK EXCLUSIVE ICONS
    // ==========================================

    // 9. Backend & Systems (Processing Nodes)
    Backend: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="bk-base" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4338ca" /></linearGradient>
                <linearGradient id="bk-core" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#059669" /></linearGradient>
            </defs>
            <g className="i3d-f2">
                {/* Connecting paths */}
                <path d="M50 50 L30 30 M50 50 L70 30 M50 50 L50 75" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" className="i3d-flow" />

                {/* Secondary Nodes */}
                <IsoBlock x={30} y={25} size={5} h={5} colorTop="url(#bk-base)" colorLeft="url(#bk-base)" colorRight="url(#bk-base)" style={{ animation: "i3d-float1 3s ease-in-out infinite" }} />
                <IsoBlock x={70} y={25} size={5} h={5} colorTop="url(#bk-base)" colorLeft="url(#bk-base)" colorRight="url(#bk-base)" style={{ animation: "i3d-float3 4s ease-in-out infinite" }} />
                <IsoBlock x={50} y={70} size={5} h={5} colorTop="url(#bk-base)" colorLeft="url(#bk-base)" colorRight="url(#bk-base)" style={{ animation: "i3d-float2 2.5s ease-in-out infinite" }} />

                {/* Main Central Core Node */}
                <g className="i3d-p">
                    <IsoBlock x={50} y={40} size={10} h={15} colorTop="url(#bk-core)" colorLeft="url(#bk-core)" colorRight="url(#bk-core)" />
                </g>
            </g>
        </svg>
    ),

    // 10. Cloud Infrastructure (Glass Container / VM Box)
    CloudInfra: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="ci-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" /><stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.7" /></linearGradient>
                <linearGradient id="ci-glass-side" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.3" /><stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" /></linearGradient>
                <radialGradient id="ci-core" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#fcd34d" /><stop offset="100%" stopColor="#f59e0b" /></radialGradient>
            </defs>
            <g className="i3d-f1">
                {/* Floating internal core (the app/data) */}
                <g className="i3d-p">
                    <circle cx="50" cy="45" r="8" fill="url(#ci-core)" filter="drop-shadow(0 0 10px #f59e0b)" />
                </g>
                {/* Outer Glass Isometric Container */}
                <IsoBlock x={50} y={20} size={22} h={40} colorTop="url(#ci-glass)" colorLeft="url(#ci-glass-side)" colorRight="url(#ci-glass-side)" style={{ animation: "i3d-float3 5s ease-in-out infinite" }} />
                {/* Structural frame borders to sell the 3D iso look inside the SVG */}
                <path d="M12 58 L50 80 L88 58 M50 80 L50 120" stroke="#bae6fd" strokeWidth="1" fill="none" opacity="0.8" />
                <path d="M50 20 L88 42 L50 64 L12 42 Z" stroke="#e0f2fe" strokeWidth="1" fill="none" opacity="0.8" />
            </g>
        </svg>
    ),

    // 11. Data & ML (Hierarchical Data Tree / Pyramid Blocks)
    DataTree: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="dt-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#db2777" /></linearGradient>
                <linearGradient id="dt-l" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#db2777" /><stop offset="100%" stopColor="#9d174d" /></linearGradient>
                <linearGradient id="dt-r" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fbcfe8" /><stop offset="100%" stopColor="#be185d" /></linearGradient>
            </defs>
            <g className="i3d-f3">
                {/* Bottom Layer 3 blocks */}
                <IsoBlock x={50} y={55} size={10} h={12} colorTop="url(#dt-t)" colorLeft="url(#dt-l)" colorRight="url(#dt-r)" />
                <IsoBlock x={25} y={40} size={10} h={12} colorTop="url(#dt-t)" colorLeft="url(#dt-l)" colorRight="url(#dt-r)" />
                <IsoBlock x={75} y={40} size={10} h={12} colorTop="url(#dt-t)" colorLeft="url(#dt-l)" colorRight="url(#dt-r)" />

                {/* Middle Layer 2 blocks */}
                <IsoBlock x={38} y={25} size={10} h={12} colorTop="url(#dt-t)" colorLeft="url(#dt-l)" colorRight="url(#dt-r)" style={{ animation: "i3d-float1 3s ease-in-out infinite" }} />
                <IsoBlock x={62} y={25} size={10} h={12} colorTop="url(#dt-t)" colorLeft="url(#dt-l)" colorRight="url(#dt-r)" style={{ animation: "i3d-float2 3s ease-in-out infinite 0.5s" }} />

                {/* Peak Layer 1 block */}
                <IsoBlock x={50} y={0} size={10} h={12} colorTop="#fbcfe8" colorLeft="#f472b6" colorRight="#db2777" style={{ animation: "i3d-pulse 2s ease-in-out infinite" }} />
            </g>
        </svg>
    ),

    // 12. DevOps & CI/CD (Infinity Terminal loop)
    DevOps: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="do-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#047857" /></linearGradient>
            </defs>
            <g className="i3d-f2">
                {/* Terminal Window plane rotated in 3D */}
                <g transform="scale(1, 0.6) rotate(45 50 50) translate(0, 30)">
                    <rect x="20" y="20" width="60" height="40" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="2" filter="drop-shadow(0 15px 15px rgba(16, 185, 129, 0.4))" />
                    {/* Console Code Lines */}
                    <rect x="25" y="25" width="20" height="4" fill="#34d399" className="i3d-pf" />
                    <rect x="25" y="35" width="40" height="4" fill="#64748b" />
                    <rect x="25" y="45" width="30" height="4" fill="#64748b" />
                </g>
                {/* Infinity CI/CD loop overlaid in 3D perspective */}
                <path d="M35 45 C15 45, 15 25, 35 25 C50 25, 50 45, 65 45 C85 45, 85 25, 65 25 C50 25, 50 45, 35 45 Z" fill="none" stroke="url(#do-t)" strokeWidth="4" strokeDasharray="10 5" className="i3d-flow i3d-s" style={{ transformOrigin: "50% 35%", animationDuration: "10s" }} />
            </g>
        </svg>
    ),

    // 13. Architecture / Microservices (Cubes Grid)
    Microservices: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="ms-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fca5a5" /><stop offset="100%" stopColor="#e11d48" /></linearGradient>
                <linearGradient id="ms-l" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#be123c" /></linearGradient>
                <linearGradient id="ms-r" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ef4444" /><stop offset="100%" stopColor="#9f1239" /></linearGradient>
            </defs>
            <g className="i3d-f1">
                {/* Connecting Grid Floor Overlay in Isometric */}
                <path d="M50 35 L75 50 L50 65 L25 50 Z" fill="none" stroke="#fecdd3" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M37.5 42.5 L62.5 57.5 M37.5 57.5 L62.5 42.5" fill="none" stroke="#fecdd3" strokeWidth="1" strokeDasharray="2 2" />

                {/* 4 Floating Service Cubes in a grid */}
                <IsoBlock x={37} y={30} size={10} h={10} colorTop="url(#ms-t)" colorLeft="url(#ms-l)" colorRight="url(#ms-r)" style={{ animation: "i3d-float1 2s ease-in-out infinite" }} />
                <IsoBlock x={63} y={30} size={10} h={15} colorTop="url(#ms-t)" colorLeft="url(#ms-l)" colorRight="url(#ms-r)" style={{ animation: "i3d-float3 3s ease-in-out infinite 0.2s" }} />
                <IsoBlock x={37} y={45} size={10} h={20} colorTop="url(#ms-t)" colorLeft="url(#ms-l)" colorRight="url(#ms-r)" style={{ animation: "i3d-float2 2.5s ease-in-out infinite 0.4s" }} />
                <IsoBlock x={63} y={45} size={10} h={12} colorTop="url(#ms-t)" colorLeft="url(#ms-l)" colorRight="url(#ms-r)" style={{ animation: "i3d-float1 3.5s ease-in-out infinite 0.6s" }} />
            </g>
        </svg>
    ),

    // ==========================================
    // PROCESS SECTION EXCLUSIVE ICONS
    // ==========================================

    // 14. Problem Framing (Isometric Target / Discovery)
    ProcessDiscover: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="pd-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" /><stop offset="100%" stopColor="#312e81" stopOpacity="0.8" /></linearGradient>
                <radialGradient id="pd-core" cx="30%" cy="30%" r="70%"><stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#d97706" /></radialGradient>
            </defs>
            <g className="i3d-f1">
                {/* Floating Puzzle / Problem block */}
                <g className="i3d-p">
                    <IsoBlock x={50} y={45} size={12} h={12} colorTop="url(#pd-core)" colorLeft="#b45309" colorRight="#92400e" />
                </g>

                {/* Hovering isometric magnifying lens */}
                <g className="i3d-f3" style={{ animationDelay: "1s" }}>
                    <ellipse cx="45" cy="25" rx="20" ry="10" fill="none" stroke="#60a5fa" strokeWidth="3" filter="drop-shadow(0 5px 5px rgba(96,165,250,0.5))" />
                    <ellipse cx="45" cy="25" rx="18" ry="8" fill="url(#pd-glass)" />
                    {/* Handle */}
                    <path d="M 60 30 L 80 45" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 60 30 L 80 45" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
        </svg>
    ),

    // 15. Shaping the Direction (Converging Isometric Paths)
    ProcessShape: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="ps-path" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#059669" /></linearGradient>
                <linearGradient id="ps-node" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0284c7" /></linearGradient>
            </defs>
            {/* Base platform */}
            <IsoBlock x={50} y={60} size={25} h={4} colorTop="transparent" colorLeft="#1e293b" colorRight="#0f172a" />

            <g className="i3d-f2">
                {/* Converging arrows in 3D perspective */}
                <path d="M 20 40 L 45 55 L 45 45 Z" fill="url(#ps-path)" className="i3d-pf" style={{ animationDelay: "0s" }} />
                <path d="M 80 40 L 55 55 L 55 45 Z" fill="url(#ps-path)" className="i3d-pf" style={{ animationDelay: "0.5s" }} />

                {/* Central shaped block (The decided direction) */}
                <IsoBlock x={50} y={30} size={8} h={15} colorTop="url(#ps-node)" colorLeft="#0369a1" colorRight="#075985" style={{ animation: "i3d-float1 2s ease-in-out infinite" }} />

                {/* Upward trajectory */}
                <path d="M 50 30 L 50 -10 M 45 -5 L 50 -10 L 55 -5" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="i3d-flow" />
            </g>
        </svg>
    ),

    // 16. Design & Prototype (Floating Wireframe Layers)
    ProcessPrototype: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="pp-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" /><stop offset="100%" stopColor="#be185d" stopOpacity="0.6" /></linearGradient>
                <linearGradient id="pp-pop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#d97706" /></linearGradient>
            </defs>
            <g className="i3d-f3">
                {/* Layer 1 (Base Device) */}
                <IsoTop x={50} y={40} size={25} fill="url(#pp-base)" />
                <path d="M 50 40 L 93.3 65 L 50 90 L 6.7 65 Z" stroke="#f472b6" strokeWidth="1" fill="none" />

                {/* Layer 2 (The prototype UI breaking out) */}
                <g className="i3d-fu" style={{ animationDelay: "1s" }}>
                    <IsoBlock x={50} y={25} size={15} h={4} colorTop="url(#pp-pop)" colorLeft="#b45309" colorRight="#92400e" className="i3d-p" />
                    <IsoBlock x={40} y={15} size={8} h={4} colorTop="#38bdf8" colorLeft="#0284c7" colorRight="#075985" />

                    {/* Floating prototype connection lines */}
                    <path d="M 50 25 L 50 40" stroke="#fbcfe8" strokeWidth="1" strokeDasharray="2 2" className="i3d-s" />
                    <path d="M 40 15 L 40 50" stroke="#fbcfe8" strokeWidth="1" strokeDasharray="2 2" className="i3d-s" />
                </g>
            </g>
        </svg>
    ),

    // 17. Build & Deliver (Isometric Package / Deployment Box)
    ProcessBuild: ({ className = "w-10 h-10" }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
            <AnimationStyles />
            <defs>
                <linearGradient id="pb-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#7e22ce" /></linearGradient>
                <linearGradient id="pb-left" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#9333ea" /><stop offset="100%" stopColor="#6b21a8" /></linearGradient>
                <linearGradient id="pb-right" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7e22ce" /><stop offset="100%" stopColor="#581c87" /></linearGradient>
            </defs>
            <g className="i3d-f1">
                {/* Box Base */}
                <IsoBlock x={50} y={35} size={20} h={25} colorTop="url(#pb-top)" colorLeft="url(#pb-left)" colorRight="url(#pb-right)" />

                {/* Open Flaps (Isometric polygons to fake flaps) */}
                <g className="i3d-p" style={{ transformOrigin: "50px 35px", animationDuration: "4s" }}>
                    {/* Left flap */}
                    <polygon points="15.3,55 50,35 30,22 -4.7,42" fill="url(#pb-left)" opacity="0.8" />
                    {/* Right flap */}
                    <polygon points="50,35 84.7,55 104.7,42 70,22" fill="url(#pb-right)" opacity="0.8" />
                </g>

                {/* Delivered object flying out */}
                <g className="i3d-fu" style={{ animationDelay: "1.5s" }}>
                    <IsoBlock x={50} y={10} size={8} h={8} colorTop="#34d399" colorLeft="#059669" colorRight="#047857" style={{ animation: "i3d-float3 2s ease-in-out infinite" }} />
                    {/* Sparkles / Delivery magical lines */}
                    <path d="M 50 10 L 50 -10 M 35 5 L 25 -5 M 65 5 L 75 -5" stroke="#34d399" strokeWidth="2" strokeLinecap="round" className="i3d-pf" />
                </g>
            </g>
        </svg>
    )
};
