# Two-Coin EM: Log-Likelihood Surface Visualization

An interactive visualization of the Expectation-Maximization algorithm applied to the classic two-coin problem, showing the log-likelihood surface and how EM converges to local maxima.

## Features

- Interactive heatmap of the log-likelihood surface
- Contour lines showing the topology
- Adjustable true parameters (θ_A, θ_B)
- Configurable data generation (experiments, flips, random seed)
- Visual EM algorithm path from any starting point (click to set)
- Shows symmetry in the likelihood surface

## Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Vercel auto-detects Create React App settings
5. Click "Deploy"

### Option 2: Via Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow the prompts

## Local Development

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Embedding in Substack

After deploying, copy your Vercel URL (e.g., `https://two-coin-em.vercel.app`) and use Substack's embed block to add it to your post.
