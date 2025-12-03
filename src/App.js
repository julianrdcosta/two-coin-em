import React, { useState, useMemo } from 'react';

const App = () => {
  const [trueTheta_A, setTrueTheta_A] = useState(0.3);
  const [trueTheta_B, setTrueTheta_B] = useState(0.7);
  const [numExperiments, setNumExperiments] = useState(5);
  const [flipsPerExperiment, setFlipsPerExperiment] = useState(10);
  const [seed, setSeed] = useState(42);
  const [resolution, setResolution] = useState(50);
  const [showEMPath, setShowEMPath] = useState(true);
  const [emInit, setEmInit] = useState({ a: 0.2, b: 0.8 });

  // Seeded random number generator
  const seededRandom = (seed) => {
    let s = seed;
    return () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
  };

  // Generate synthetic data
  const data = useMemo(() => {
    const rng = seededRandom(seed);
    const experiments = [];
    for (let i = 0; i < numExperiments; i++) {
      const useCoinA = rng() < 0.5;
      const theta = useCoinA ? trueTheta_A : trueTheta_B;
      let heads = 0;
      for (let j = 0; j < flipsPerExperiment; j++) {
        if (rng() < theta) heads++;
      }
      experiments.push({ heads, tails: flipsPerExperiment - heads, trueCoin: useCoinA ? 'A' : 'B' });
    }
    return experiments;
  }, [trueTheta_A, trueTheta_B, numExperiments, flipsPerExperiment, seed]);

  // Compute log-likelihood at a point
  const logLikelihood = (thetaA, thetaB, data) => {
    const pi = 0.5;
    let ll = 0;
    for (const exp of data) {
      const { heads, tails } = exp;
      const pA = pi * Math.pow(thetaA, heads) * Math.pow(1 - thetaA, tails);
      const pB = (1 - pi) * Math.pow(thetaB, heads) * Math.pow(1 - thetaB, tails);
      const p = pA + pB;
      if (p > 0) {
        ll += Math.log(p);
      } else {
        ll += -1000; // Avoid -Infinity
      }
    }
    return ll;
  };

  // Compute likelihood surface
  const surface = useMemo(() => {
    const grid = [];
    let minLL = Infinity;
    let maxLL = -Infinity;
    
    for (let i = 0; i <= resolution; i++) {
      const row = [];
      for (let j = 0; j <= resolution; j++) {
        const thetaA = 0.01 + (i / resolution) * 0.98;
        const thetaB = 0.01 + (j / resolution) * 0.98;
        const ll = logLikelihood(thetaA, thetaB, data);
        row.push(ll);
        if (ll < minLL) minLL = ll;
        if (ll > maxLL) maxLL = ll;
      }
      grid.push(row);
    }
    return { grid, minLL, maxLL };
  }, [data, resolution]);

  // Run EM algorithm and track path
  const emPath = useMemo(() => {
    let thetaA = emInit.a;
    let thetaB = emInit.b;
    const path = [{ a: thetaA, b: thetaB }];
    
    for (let iter = 0; iter < 50; iter++) {
      // E-step
      const weights = data.map(exp => {
        const { heads, tails } = exp;
        const pA = Math.pow(thetaA, heads) * Math.pow(1 - thetaA, tails);
        const pB = Math.pow(thetaB, heads) * Math.pow(1 - thetaB, tails);
        const total = pA + pB;
        return total > 0 ? pA / total : 0.5;
      });
      
      // M-step
      let numA = 0, denomA = 0, numB = 0, denomB = 0;
      for (let i = 0; i < data.length; i++) {
        const wA = weights[i];
        const wB = 1 - wA;
        numA += wA * data[i].heads;
        denomA += wA * (data[i].heads + data[i].tails);
        numB += wB * data[i].heads;
        denomB += wB * (data[i].heads + data[i].tails);
      }
      
      const newThetaA = denomA > 0 ? numA / denomA : thetaA;
      const newThetaB = denomB > 0 ? numB / denomB : thetaB;
      
      // Check convergence
      if (Math.abs(newThetaA - thetaA) < 1e-6 && Math.abs(newThetaB - thetaB) < 1e-6) {
        thetaA = newThetaA;
        thetaB = newThetaB;
        path.push({ a: thetaA, b: thetaB });
        break;
      }
      
      thetaA = newThetaA;
      thetaB = newThetaB;
      path.push({ a: thetaA, b: thetaB });
    }
    
    return path;
  }, [data, emInit]);

  // Color mapping
  const getColor = (value, min, max) => {
    let t = (value - min) / (max - min);
    
    // Power transform to stretch out high values (more color differentiation near maxima)
    t = Math.pow(t, 2.5);
    
    // Dark blue -> cyan -> yellow -> red
    const h = (1 - t) * 240;
    const s = 80 + t * 20;
    const l = 20 + t * 50;
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  const cellSize = Math.min(400 / (resolution + 1), 10);
  const plotSize = cellSize * (resolution + 1);

  const handlePlotClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / plotSize;
    const y = 1 - (e.clientY - rect.top) / plotSize;
    setEmInit({ a: 0.01 + x * 0.98, b: 0.01 + y * 0.98 });
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Two-Coin EM: Log-Likelihood Surface</h1>
      
      <div className="flex flex-wrap gap-8">
        <div className="flex-shrink-0">
          <div 
            className="relative cursor-crosshair"
            style={{ width: plotSize, height: plotSize }}
            onClick={handlePlotClick}
          >
            {/* Heatmap */}
            {surface.grid.map((row, i) => (
              row.map((val, j) => (
                <div
                  key={`${i}-${j}`}
                  style={{
                    position: 'absolute',
                    left: i * cellSize,
                    bottom: j * cellSize,
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: getColor(val, surface.minLL, surface.maxLL),
                  }}
                />
              ))
            ))}
            
            {/* Contour lines */}
            <svg className="absolute inset-0 pointer-events-none" style={{ width: plotSize, height: plotSize }}>
              {(() => {
                const contours = [];
                const numContours = 50;
                const range = surface.maxLL - surface.minLL;
                
                // Generate contour levels (more density near the max)
                const levels = Array.from({ length: numContours }, (_, i) => {
                  const t = (i + 1) / (numContours + 1);
                  return surface.minLL + Math.pow(t, 0.6) * range;
                });
                
                // Marching squares for each contour level
                levels.forEach((level, levelIdx) => {
                  const segments = [];
                  
                  for (let i = 0; i < resolution; i++) {
                    for (let j = 0; j < resolution; j++) {
                      const v00 = surface.grid[i][j];
                      const v10 = surface.grid[i + 1][j];
                      const v01 = surface.grid[i][j + 1];
                      const v11 = surface.grid[i + 1][j + 1];
                      
                      // Determine which corners are above the level
                      const idx = (v00 >= level ? 1 : 0) |
                                  (v10 >= level ? 2 : 0) |
                                  (v01 >= level ? 4 : 0) |
                                  (v11 >= level ? 8 : 0);
                      
                      if (idx === 0 || idx === 15) continue;
                      
                      // Linear interpolation helper
                      const lerp = (va, vb, pa, pb) => {
                        if (Math.abs(vb - va) < 1e-10) return [(pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2];
                        const t = (level - va) / (vb - va);
                        return [pa[0] + t * (pb[0] - pa[0]), pa[1] + t * (pb[1] - pa[1])];
                      };
                      
                      const x0 = i * cellSize;
                      const x1 = (i + 1) * cellSize;
                      const y0 = plotSize - (j + 1) * cellSize;
                      const y1 = plotSize - j * cellSize;
                      
                      // Edge midpoints
                      const bottom = lerp(v00, v10, [x0, y1], [x1, y1]);
                      const top = lerp(v01, v11, [x0, y0], [x1, y0]);
                      const left = lerp(v00, v01, [x0, y1], [x0, y0]);
                      const right = lerp(v10, v11, [x1, y1], [x1, y0]);
                      
                      // Marching squares cases
                      const addSegment = (p1, p2) => segments.push({ x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1] });
                      
                      switch (idx) {
                        case 1: addSegment(bottom, left); break;
                        case 2: addSegment(right, bottom); break;
                        case 3: addSegment(right, left); break;
                        case 4: addSegment(left, top); break;
                        case 5: addSegment(bottom, top); break;
                        case 6: addSegment(left, bottom); addSegment(right, top); break;
                        case 7: addSegment(right, top); break;
                        case 8: addSegment(top, right); break;
                        case 9: addSegment(top, bottom); addSegment(left, right); break;
                        case 10: addSegment(top, bottom); break;
                        case 11: addSegment(top, left); break;
                        case 12: addSegment(left, right); break;
                        case 13: addSegment(bottom, right); break;
                        case 14: addSegment(bottom, left); break;
                      }
                    }
                  }
                  
                  segments.forEach((seg, segIdx) => {
                    contours.push(
                      <line
                        key={`${levelIdx}-${segIdx}`}
                        x1={seg.x1}
                        y1={seg.y1}
                        x2={seg.x2}
                        y2={seg.y2}
                        stroke="rgba(0,0,0,0.6)"
                        strokeWidth="1"
                      />
                    );
                  });
                });
                
                return contours;
              })()}
            </svg>
            
            {/* True values marker */}
            <div
              className="absolute w-4 h-4 border-2 border-white rounded-full"
              style={{
                left: ((trueTheta_A - 0.01) / 0.98) * plotSize - 8,
                bottom: ((trueTheta_B - 0.01) / 0.98) * plotSize - 8,
              }}
              title={`True: (${trueTheta_A}, ${trueTheta_B})`}
            />
            
            {/* EM path */}
            {showEMPath && emPath.length > 1 && (
              <svg className="absolute inset-0 pointer-events-none" style={{ width: plotSize, height: plotSize }}>
                <path
                  d={emPath.map((p, i) => {
                    const x = ((p.a - 0.01) / 0.98) * plotSize;
                    const y = plotSize - ((p.b - 0.01) / 0.98) * plotSize;
                    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                  }).join(' ')}
                  stroke="#ff4444"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Start point */}
                <circle
                  cx={((emPath[0].a - 0.01) / 0.98) * plotSize}
                  cy={plotSize - ((emPath[0].b - 0.01) / 0.98) * plotSize}
                  r="5"
                  fill="#ff4444"
                />
                {/* End point */}
                <circle
                  cx={((emPath[emPath.length - 1].a - 0.01) / 0.98) * plotSize}
                  cy={plotSize - ((emPath[emPath.length - 1].b - 0.01) / 0.98) * plotSize}
                  r="6"
                  fill="#44ff44"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </svg>
            )}
            
            {/* Axis labels */}
            <div className="absolute -bottom-6 left-0 right-0 text-center text-sm">θ_A</div>
            <div className="absolute -left-6 top-0 bottom-0 flex items-center">
              <span className="text-sm -rotate-90">θ_B</span>
            </div>
          </div>
          
          {/* Color bar */}
          <div className="mt-8 flex items-center gap-2">
            <span className="text-xs">Low LL</span>
            <div className="flex h-4 w-48">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: getColor(i / 49, 0, 1) }}
                />
              ))}
            </div>
            <span className="text-xs">High LL</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-64">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">True Parameters</h3>
              <label className="block text-sm">
                θ_A (true): {trueTheta_A.toFixed(2)}
                <input
                  type="range"
                  min="0.05"
                  max="0.95"
                  step="0.05"
                  value={trueTheta_A}
                  onChange={(e) => setTrueTheta_A(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
              <label className="block text-sm">
                θ_B (true): {trueTheta_B.toFixed(2)}
                <input
                  type="range"
                  min="0.05"
                  max="0.95"
                  step="0.05"
                  value={trueTheta_B}
                  onChange={(e) => setTrueTheta_B(parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Data Generation</h3>
              <label className="block text-sm">
                Experiments: {numExperiments}
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={numExperiments}
                  onChange={(e) => setNumExperiments(parseInt(e.target.value))}
                  className="w-full"
                />
              </label>
              <label className="block text-sm">
                Flips per experiment: {flipsPerExperiment}
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={flipsPerExperiment}
                  onChange={(e) => setFlipsPerExperiment(parseInt(e.target.value))}
                  className="w-full"
                />
              </label>
              <label className="block text-sm">
                Random seed: {seed}
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={seed}
                  onChange={(e) => setSeed(parseInt(e.target.value))}
                  className="w-full"
                />
              </label>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">EM Algorithm</h3>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showEMPath}
                  onChange={(e) => setShowEMPath(e.target.checked)}
                />
                Show EM path
              </label>
              <p className="text-xs text-gray-400 mt-1">
                Click on the plot to set EM starting point
              </p>
              <p className="text-xs text-gray-400">
                Start: ({emInit.a.toFixed(2)}, {emInit.b.toFixed(2)})
              </p>
              <p className="text-xs text-gray-400">
                End: ({emPath[emPath.length - 1].a.toFixed(3)}, {emPath[emPath.length - 1].b.toFixed(3)})
              </p>
              <p className="text-xs text-gray-400">
                Iterations: {emPath.length - 1}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Generated Data</h3>
              <div className="text-xs space-y-1 max-h-40 overflow-y-auto">
                {data.map((exp, i) => (
                  <div key={i} className="text-gray-300">
                    Exp {i + 1}: {exp.heads}H/{exp.tails}T (was coin {exp.trueCoin})
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-800 rounded text-sm">
            <p className="font-semibold">Legend:</p>
            <p>○ White circle = true (θ_A, θ_B)</p>
            <p>● Red dot = EM start</p>
            <p>● Green dot = EM convergence</p>
            <p className="mt-2 text-gray-400">
              Notice the symmetry along the diagonal — swapping θ_A ↔ θ_B gives the same likelihood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
