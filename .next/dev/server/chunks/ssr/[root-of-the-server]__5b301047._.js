module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    const [trueTheta_A, setTrueTheta_A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.3);
    const [trueTheta_B, setTrueTheta_B] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.7);
    const [numExperiments, setNumExperiments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const [flipsPerExperiment, setFlipsPerExperiment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(42);
    const [resolution, setResolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [showEMPath, setShowEMPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [emInit, setEmInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        a: 0.2,
        b: 0.8
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plotSize = 400;
    // Only render color bar on client to avoid hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Seeded random number generator
    const seededRandom = (seed)=>{
        let s = seed;
        return ()=>{
            s = s * 1103515245 + 12345 & 0x7fffffff;
            return s / 0x7fffffff;
        };
    };
    // Generate synthetic data
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rng = seededRandom(seed);
        const experiments = [];
        for(let i = 0; i < numExperiments; i++){
            const useCoinA = rng() < 0.5;
            const theta = useCoinA ? trueTheta_A : trueTheta_B;
            let heads = 0;
            for(let j = 0; j < flipsPerExperiment; j++){
                if (rng() < theta) heads++;
            }
            experiments.push({
                heads,
                tails: flipsPerExperiment - heads,
                trueCoin: useCoinA ? 'A' : 'B'
            });
        }
        return experiments;
    }, [
        trueTheta_A,
        trueTheta_B,
        numExperiments,
        flipsPerExperiment,
        seed
    ]);
    // Compute log-likelihood at a point
    const logLikelihood = (thetaA, thetaB, data)=>{
        const pi = 0.5;
        let ll = 0;
        for (const exp of data){
            const { heads, tails } = exp;
            const pA = pi * Math.pow(thetaA, heads) * Math.pow(1 - thetaA, tails);
            const pB = (1 - pi) * Math.pow(thetaB, heads) * Math.pow(1 - thetaB, tails);
            const p = pA + pB;
            if (p > 0) {
                ll += Math.log(p);
            } else {
                ll += -1000;
            }
        }
        return ll;
    };
    // Compute likelihood surface
    const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const grid = [];
        let minLL = Infinity;
        let maxLL = -Infinity;
        for(let i = 0; i <= resolution; i++){
            const row = [];
            for(let j = 0; j <= resolution; j++){
                const thetaA = 0.01 + i / resolution * 0.98;
                const thetaB = 0.01 + j / resolution * 0.98;
                const ll = logLikelihood(thetaA, thetaB, data);
                row.push(ll);
                if (ll < minLL) minLL = ll;
                if (ll > maxLL) maxLL = ll;
            }
            grid.push(row);
        }
        return {
            grid,
            minLL,
            maxLL
        };
    }, [
        data,
        resolution
    ]);
    // Run EM algorithm and track path
    const emPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let thetaA = emInit.a;
        let thetaB = emInit.b;
        const path = [
            {
                a: thetaA,
                b: thetaB
            }
        ];
        for(let iter = 0; iter < 50; iter++){
            const weights = data.map((exp)=>{
                const { heads, tails } = exp;
                const pA = Math.pow(thetaA, heads) * Math.pow(1 - thetaA, tails);
                const pB = Math.pow(thetaB, heads) * Math.pow(1 - thetaB, tails);
                const total = pA + pB;
                return total > 0 ? pA / total : 0.5;
            });
            let numA = 0, denomA = 0, numB = 0, denomB = 0;
            for(let i = 0; i < data.length; i++){
                const wA = weights[i];
                const wB = 1 - wA;
                numA += wA * data[i].heads;
                denomA += wA * (data[i].heads + data[i].tails);
                numB += wB * data[i].heads;
                denomB += wB * (data[i].heads + data[i].tails);
            }
            const newThetaA = denomA > 0 ? numA / denomA : thetaA;
            const newThetaB = denomB > 0 ? numB / denomB : thetaB;
            if (Math.abs(newThetaA - thetaA) < 1e-6 && Math.abs(newThetaB - thetaB) < 1e-6) {
                thetaA = newThetaA;
                thetaB = newThetaB;
                path.push({
                    a: thetaA,
                    b: thetaB
                });
                break;
            }
            thetaA = newThetaA;
            thetaB = newThetaB;
            path.push({
                a: thetaA,
                b: thetaB
            });
        }
        return path;
    }, [
        data,
        emInit
    ]);
    // Color mapping
    const getColor = (value, min, max)=>{
        let t = (value - min) / (max - min);
        t = Math.pow(t, 2.5);
        const h = (1 - t) * 240;
        const s = 80 + t * 20;
        const l = 20 + t * 50;
        return `hsl(${h}, ${s}%, ${l}%)`;
    };
    const getRGB = (value, min, max)=>{
        let t = (value - min) / (max - min);
        t = Math.pow(t, 2.5);
        const h = (1 - t) * 240;
        const s = (80 + t * 20) / 100;
        const l = (20 + t * 50) / 100;
        const hueToRgb = (p, q, t)=>{
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const hNorm = h / 360;
        return {
            r: Math.round(hueToRgb(p, q, hNorm + 1 / 3) * 255),
            g: Math.round(hueToRgb(p, q, hNorm) * 255),
            b: Math.round(hueToRgb(p, q, hNorm - 1 / 3) * 255)
        };
    };
    // Draw canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const cellSize = plotSize / (resolution + 1);
        // Draw heatmap
        const imageData = ctx.createImageData(plotSize, plotSize);
        for(let py = 0; py < plotSize; py++){
            for(let px = 0; px < plotSize; px++){
                const i = Math.floor(px / cellSize);
                const j = Math.floor((plotSize - 1 - py) / cellSize);
                const iClamped = Math.min(i, resolution);
                const jClamped = Math.min(j, resolution);
                const val = surface.grid[iClamped][jClamped];
                const { r, g, b } = getRGB(val, surface.minLL, surface.maxLL);
                const idx = (py * plotSize + px) * 4;
                imageData.data[idx] = r;
                imageData.data[idx + 1] = g;
                imageData.data[idx + 2] = b;
                imageData.data[idx + 3] = 255;
            }
        }
        ctx.putImageData(imageData, 0, 0);
        // Draw contours
        const numContours = 50;
        const range = surface.maxLL - surface.minLL;
        const levels = Array.from({
            length: numContours
        }, (_, i)=>{
            const t = (i + 1) / (numContours + 1);
            return surface.minLL + Math.pow(t, 0.6) * range;
        });
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.lineWidth = 1;
        levels.forEach((level)=>{
            ctx.beginPath();
            for(let i = 0; i < resolution; i++){
                for(let j = 0; j < resolution; j++){
                    const v00 = surface.grid[i][j];
                    const v10 = surface.grid[i + 1][j];
                    const v01 = surface.grid[i][j + 1];
                    const v11 = surface.grid[i + 1][j + 1];
                    const idx = (v00 >= level ? 1 : 0) | (v10 >= level ? 2 : 0) | (v01 >= level ? 4 : 0) | (v11 >= level ? 8 : 0);
                    if (idx === 0 || idx === 15) continue;
                    const lerp = (va, vb, pa, pb)=>{
                        if (Math.abs(vb - va) < 1e-10) return [
                            (pa[0] + pb[0]) / 2,
                            (pa[1] + pb[1]) / 2
                        ];
                        const t = (level - va) / (vb - va);
                        return [
                            pa[0] + t * (pb[0] - pa[0]),
                            pa[1] + t * (pb[1] - pa[1])
                        ];
                    };
                    const x0 = i / resolution * plotSize;
                    const x1 = (i + 1) / resolution * plotSize;
                    const y0 = plotSize - (j + 1) / resolution * plotSize;
                    const y1 = plotSize - j / resolution * plotSize;
                    const bottom = lerp(v00, v10, [
                        x0,
                        y1
                    ], [
                        x1,
                        y1
                    ]);
                    const top = lerp(v01, v11, [
                        x0,
                        y0
                    ], [
                        x1,
                        y0
                    ]);
                    const left = lerp(v00, v01, [
                        x0,
                        y1
                    ], [
                        x0,
                        y0
                    ]);
                    const right = lerp(v10, v11, [
                        x1,
                        y1
                    ], [
                        x1,
                        y0
                    ]);
                    const drawLine = (p1, p2)=>{
                        ctx.moveTo(p1[0], p1[1]);
                        ctx.lineTo(p2[0], p2[1]);
                    };
                    switch(idx){
                        case 1:
                            drawLine(bottom, left);
                            break;
                        case 2:
                            drawLine(right, bottom);
                            break;
                        case 3:
                            drawLine(right, left);
                            break;
                        case 4:
                            drawLine(left, top);
                            break;
                        case 5:
                            drawLine(bottom, top);
                            break;
                        case 6:
                            drawLine(left, bottom);
                            drawLine(right, top);
                            break;
                        case 7:
                            drawLine(right, top);
                            break;
                        case 8:
                            drawLine(top, right);
                            break;
                        case 9:
                            drawLine(top, bottom);
                            drawLine(left, right);
                            break;
                        case 10:
                            drawLine(top, bottom);
                            break;
                        case 11:
                            drawLine(top, left);
                            break;
                        case 12:
                            drawLine(left, right);
                            break;
                        case 13:
                            drawLine(bottom, right);
                            break;
                        case 14:
                            drawLine(bottom, left);
                            break;
                    }
                }
            }
            ctx.stroke();
        });
        // Draw true values marker
        const trueX = (trueTheta_A - 0.01) / 0.98 * plotSize;
        const trueY = plotSize - (trueTheta_B - 0.01) / 0.98 * plotSize;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(trueX, trueY, 8, 0, 2 * Math.PI);
        ctx.stroke();
        // Draw EM path
        if (showEMPath && emPath.length > 1) {
            ctx.strokeStyle = '#ff4444';
            ctx.lineWidth = 2;
            ctx.beginPath();
            emPath.forEach((p, i)=>{
                const x = (p.a - 0.01) / 0.98 * plotSize;
                const y = plotSize - (p.b - 0.01) / 0.98 * plotSize;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
            // Start point
            const startX = (emPath[0].a - 0.01) / 0.98 * plotSize;
            const startY = plotSize - (emPath[0].b - 0.01) / 0.98 * plotSize;
            ctx.fillStyle = '#ff4444';
            ctx.beginPath();
            ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
            ctx.fill();
            // End point
            const endX = (emPath[emPath.length - 1].a - 0.01) / 0.98 * plotSize;
            const endY = plotSize - (emPath[emPath.length - 1].b - 0.01) / 0.98 * plotSize;
            ctx.fillStyle = '#44ff44';
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(endX, endY, 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }, [
        surface,
        trueTheta_A,
        trueTheta_B,
        showEMPath,
        emPath,
        resolution
    ]);
    const handleCanvasClick = (e)=>{
        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / plotSize;
        const y = 1 - (e.clientY - rect.top) / plotSize;
        setEmInit({
            a: 0.01 + x * 0.98,
            b: 0.01 + y * 0.98
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-gray-900 min-h-screen text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: "Two-Coin EM: Log-Likelihood Surface"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                style: {
                                    width: plotSize,
                                    height: plotSize
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        width: plotSize,
                                        height: plotSize,
                                        onClick: handleCanvasClick,
                                        className: "cursor-crosshair",
                                        style: {
                                            display: 'block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-6 left-0 right-0 text-center text-sm",
                                        children: "θ_A"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-6 top-0 bottom-0 flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            style: {
                                                transform: 'rotate(-90deg)'
                                            },
                                            children: "θ_B"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "Low LL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-4 w-48",
                                        children: mounted && Array.from({
                                            length: 50
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                style: {
                                                    backgroundColor: getColor(i / 49, 0, 1)
                                                }
                                            }, i, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: "High LL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-64 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "True Parameters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm",
                                        children: [
                                            "θ_A (true): ",
                                            trueTheta_A.toFixed(2),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.05",
                                                max: "0.95",
                                                step: "0.05",
                                                value: trueTheta_A,
                                                onChange: (e)=>setTrueTheta_A(parseFloat(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm",
                                        children: [
                                            "θ_B (true): ",
                                            trueTheta_B.toFixed(2),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.05",
                                                max: "0.95",
                                                step: "0.05",
                                                value: trueTheta_B,
                                                onChange: (e)=>setTrueTheta_B(parseFloat(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "Data Generation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm",
                                        children: [
                                            "Experiments: ",
                                            numExperiments,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "2",
                                                max: "20",
                                                value: numExperiments,
                                                onChange: (e)=>setNumExperiments(parseInt(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm",
                                        children: [
                                            "Flips per experiment: ",
                                            flipsPerExperiment,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "5",
                                                max: "50",
                                                step: "5",
                                                value: flipsPerExperiment,
                                                onChange: (e)=>setFlipsPerExperiment(parseInt(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm",
                                        children: [
                                            "Random seed: ",
                                            seed,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "1",
                                                max: "100",
                                                value: seed,
                                                onChange: (e)=>setSeed(parseInt(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "EM Algorithm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: showEMPath,
                                                onChange: (e)=>setShowEMPath(e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this),
                                            "Show EM path"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: "Click on the plot to set EM starting point"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-1",
                                        children: [
                                            "Start: (",
                                            emInit.a.toFixed(2),
                                            ", ",
                                            emInit.b.toFixed(2),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: [
                                            "End: (",
                                            emPath[emPath.length - 1].a.toFixed(3),
                                            ", ",
                                            emPath[emPath.length - 1].b.toFixed(3),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: [
                                            "Iterations: ",
                                            emPath.length - 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-2",
                                        children: "Generated Data"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs space-y-1 max-h-32 overflow-y-auto",
                                        children: data.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-300",
                                                children: [
                                                    "Exp ",
                                                    i + 1,
                                                    ": ",
                                                    exp.heads,
                                                    "H/",
                                                    exp.tails,
                                                    "T (was coin ",
                                                    exp.trueCoin,
                                                    ")"
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-gray-800 rounded text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "Legend:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "○ White circle = true (θ_A, θ_B)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "● Red dot = EM start"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "● Green dot = EM convergence"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-gray-400",
                                        children: "Notice the symmetry along the diagonal — swapping θ_A ↔ θ_B gives the same likelihood."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5b301047._.js.map