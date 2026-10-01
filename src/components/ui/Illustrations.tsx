import React from "react";

const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ill-float-up { 0%, 100% { transform: translateY(10px); } 50% { transform: translateY(-10px); } }
        @keyframes ill-float-down { 0%, 100% { transform: translateY(-10px); } 50% { transform: translateY(10px); } }
        @keyframes ill-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; filter: drop-shadow(0 0 10px currentColor); } }
        @keyframes ill-slide { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
        @keyframes ill-grow { 0% { transform: scaleY(0.2); } 100% { transform: scaleY(1); } }
        
        .ill-fu { animation: ill-float-up 4s ease-in-out infinite; }
        .ill-fd { animation: ill-float-down 5s ease-in-out infinite; }
        .ill-p { animation: ill-pulse 3s ease-in-out infinite; }
        .ill-s { animation: ill-slide 3s linear infinite; stroke-dasharray: 10 10; }
        .ill-g { animation: ill-grow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; transform-origin: bottom; }
    `}} />
);

export const Illustrations = {
    // 1. FinTech: abstract charts and growing data blocks
    FinTech: ({ className = "w-full h-full" }) => (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`bg-[#0f172a] ${className}`}>
            <GlobalStyles />
            <defs>
                <linearGradient id="ft-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e1b4b" /><stop offset="100%" stopColor="#312e81" /></linearGradient>
                <linearGradient id="ft-bar1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4338ca" /></linearGradient>
                <linearGradient id="ft-bar2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#7e22ce" /></linearGradient>
                <linearGradient id="ft-bar3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#059669" /></linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#ft-bg)" />
            {/* Grid */}
            <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250" stroke="#4338ca" strokeWidth="1" opacity="0.2" />
            <path d="M 100 0 L 100 300 M 200 0 L 200 300 M 300 0 L 300 300" stroke="#4338ca" strokeWidth="1" opacity="0.2" />

            {/* Flow line */}
            <path d="M -50 200 C 100 200, 150 50, 250 100 C 350 150, 380 50, 450 50" fill="none" stroke="#6366f1" strokeWidth="4" className="ill-s" />
            <path d="M -50 200 C 100 200, 150 50, 250 100 C 350 150, 380 50, 450 50" fill="none" stroke="#818cf8" strokeWidth="1" filter="drop-shadow(0 0 8px #818cf8)" />

            {/* Animated Bars */}
            <g transform="translate(80, 250)">
                <rect x="0" y="-120" width="40" height="120" fill="url(#ft-bar1)" rx="4" className="ill-g" style={{ animationDelay: "0s" }} />
                <rect x="70" y="-180" width="40" height="180" fill="url(#ft-bar2)" rx="4" className="ill-g" style={{ animationDelay: "1.5s" }} />
                <rect x="140" y="-100" width="40" height="100" fill="url(#ft-bar1)" rx="4" className="ill-g" style={{ animationDelay: "0.5s" }} />
                <rect x="210" y="-220" width="40" height="220" fill="url(#ft-bar3)" rx="4" className="ill-g" style={{ animationDelay: "2s" }} />
            </g>

            {/* Glowing nodes */}
            <circle cx="218" cy="115" r="8" fill="#e0e7ff" className="ill-p" />
            <circle cx="330" cy="98" r="6" fill="#e0e7ff" className="ill-p" style={{ animationDelay: "1s" }} />
        </svg>
    ),

    // 2. Healthcare: DNA / EKG heartbeat abstract
    Healthcare: ({ className = "w-full h-full" }) => (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`bg-[#064e3b] ${className}`}>
            <GlobalStyles />
            <defs>
                <linearGradient id="hc-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#064e3b" /><stop offset="100%" stopColor="#022c22" /></linearGradient>
                <linearGradient id="hc-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#10b981" /></linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#hc-bg)" />

            {/* Hexagon pattern background */}
            <g stroke="#059669" strokeWidth="1" opacity="0.15">
                {[...Array(10)].map((_, r) =>
                    [...Array(10)].map((_, c) => (
                        <polygon key={`${r}-${c}`} points="20,0 40,10 40,30 20,40 0,30 0,10" transform={`translate(${c * 35 + (r % 2 ? 17.5 : 0)}, ${r * 30 - 20})`} />
                    ))
                )}
            </g>

            {/* Glowing EKG Pulse */}
            <g transform="translate(0, 150)" className="ill-p" style={{ animationDuration: "2s" }}>
                <path d="M 0 0 L 120 0 L 140 -60 L 170 80 L 200 -30 L 220 0 L 400 0" fill="none" stroke="url(#hc-line)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 0 0 L 120 0 L 140 -60 L 170 80 L 200 -30 L 220 0 L 400 0" fill="none" stroke="#a7f3d0" strokeWidth="3" filter="drop-shadow(0 0 12px #34d399)" />
            </g>

            {/* Floating medical crosses */}
            <g fill="#34d399" opacity="0.6">
                <path d="M 60 50 h 10 v -10 h 10 v 10 h 10 v 10 h -10 v 10 h -10 v -10 h -10 z" className="ill-fu" />
                <path d="M 320 220 h 6 v -6 h 6 v 6 h 6 v 6 h -6 v 6 h -6 v -6 h -6 z" className="ill-fd" />
                <path d="M 280 60 h 8 v -8 h 8 v 8 h 8 v 8 h -8 v 8 h -8 v -8 h -8 z" className="ill-fu" style={{ animationDelay: "1s" }} />
            </g>
        </svg>
    ),

    // 3. PropTech: Modern abstract smart-city layer
    PropTech: ({ className = "w-full h-full" }) => (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`bg-[#431407] ${className}`}>
            <GlobalStyles />
            <defs>
                <linearGradient id="pt-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c2d12" /><stop offset="100%" stopColor="#2c0b0e" /></linearGradient>
                <linearGradient id="pt-bldg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fdba74" /><stop offset="100%" stopColor="#ea580c" /></linearGradient>
                <linearGradient id="pt-bldg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fca5a5" /><stop offset="100%" stopColor="#dc2626" /></linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#pt-bg)" />

            <g transform="translate(0, 300)">
                {/* Background Buildings */}
                <g opacity="0.5">
                    <rect x="20" y="-180" width="60" height="180" fill="url(#pt-bldg1)" />
                    <rect x="90" y="-240" width="50" height="240" fill="url(#pt-bldg2)" />
                    <rect x="150" y="-140" width="70" height="140" fill="url(#pt-bldg1)" />
                    <rect x="230" y="-270" width="60" height="270" fill="url(#pt-bldg2)" />
                    <rect x="300" y="-190" width="70" height="190" fill="url(#pt-bldg1)" />
                </g>

                {/* Foreground Isometric Smart Buildings */}
                <g className="ill-fd">
                    <polygon points="120,-100 150,-130 180,-100 150,-70" fill="#fed7aa" />
                    <polygon points="120,-100 150,-70 150,30 120,0" fill="#f97316" />
                    <polygon points="180,-100 150,-70 150,30 180,0" fill="#c2410c" />
                </g>

                <g className="ill-fu" style={{ animationDelay: "1s" }}>
                    <polygon points="260,-150 290,-180 320,-150 290,-120" fill="#fecaca" />
                    <polygon points="260,-150 290,-120 290,10 260,-20" fill="#ef4444" />
                    <polygon points="320,-150 290,-120 290,10 320,-20" fill="#b91c1c" />
                </g>

                <g className="ill-fd" style={{ animationDelay: "2s" }}>
                    <polygon points="40,-60 60,-80 80,-60 60,-40" fill="#fed7aa" />
                    <polygon points="40,-60 60,-40 60,40 40,20" fill="#f97316" />
                    <polygon points="80,-60 60,-40 60,40 80,20" fill="#c2410c" />
                </g>
            </g>

            {/* Glowing smart city data streams */}
            <path d="M 0 250 L 400 180" fill="none" stroke="#fdba74" strokeWidth="3" className="ill-s" strokeDasharray="15 15" />
            <path d="M 0 100 L 400 150" fill="none" stroke="#fca5a5" strokeWidth="2" className="ill-s" strokeDasharray="10 10" style={{ animationDirection: "reverse" }} />
        </svg>
    ),

    // 4. E-Commerce: Abstract structural network and nodes
    Ecommerce: ({ className = "w-full h-full" }) => (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`bg-[#831843] ${className}`}>
            <GlobalStyles />
            <defs>
                <linearGradient id="ec-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4c0519" /><stop offset="100%" stopColor="#831843" /></linearGradient>
                <linearGradient id="ec-box" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#be185d" /></linearGradient>
                <radialGradient id="ec-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#fda4af" /><stop offset="100%" stopColor="transparent" /></radialGradient>
            </defs>
            <rect width="400" height="300" fill="url(#ec-bg)" />

            {/* Global Network connection lines */}
            <g stroke="#f472b6" strokeWidth="2" opacity="0.4" className="ill-p" style={{ animationDuration: "4s" }}>
                <path d="M 50 150 L 150 80 L 250 120 L 350 70" fill="none" />
                <path d="M 150 80 L 200 220 L 350 180 L 250 120" fill="none" />
                <path d="M 50 150 L 100 250 L 200 220" fill="none" />
            </g>

            {/* Glowing nodes (users/orders) */}
            <circle cx="50" cy="150" r="25" fill="url(#ec-glow)" className="ill-p" />
            <circle cx="250" cy="120" r="30" fill="url(#ec-glow)" className="ill-p" style={{ animationDelay: "1s" }} />
            <circle cx="350" cy="180" r="25" fill="url(#ec-glow)" className="ill-p" style={{ animationDelay: "2s" }} />

            {/* Floating Isometric Delivery / Product Boxes */}
            <g className="ill-fu">
                <g transform="translate(150, 70) scale(1.5)">
                    <polygon points="0,-10 15,-20 30,-10 15,0" fill="#fbcfe8" />
                    <polygon points="0,-10 15,0 15,15 0,5" fill="#f472b6" />
                    <polygon points="30,-10 15,0 15,15 30,5" fill="#db2777" />
                </g>
            </g>
            <g className="ill-fd" style={{ animationDelay: "0.5s" }}>
                <g transform="translate(200, 210) scale(1.2)">
                    <polygon points="0,-10 15,-20 30,-10 15,0" fill="#fbcfe8" />
                    <polygon points="0,-10 15,0 15,15 0,5" fill="#f472b6" />
                    <polygon points="30,-10 15,0 15,15 30,5" fill="#db2777" />
                </g>
            </g>
            <g className="ill-fu" style={{ animationDelay: "1.5s" }}>
                <g transform="translate(330, 60) scale(1)">
                    <polygon points="0,-10 15,-20 30,-10 15,0" fill="#fbcfe8" />
                    <polygon points="0,-10 15,0 15,15 0,5" fill="#f472b6" />
                    <polygon points="30,-10 15,0 15,15 30,5" fill="#db2777" />
                </g>
            </g>

            {/* Animated dashed paths representing live logistics / data packets */}
            <path d="M 50 150 C 100 100 150 150 250 120" stroke="#fdf2f8" strokeWidth="3" fill="none" className="ill-s" />
            <path d="M 150 80 C 200 150 250 150 350 180" stroke="#fdf2f8" strokeWidth="3" fill="none" className="ill-s" style={{ animationDelay: "1s" }} />

        </svg>
    )
};
