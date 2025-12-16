# Two-Coin EM Visualization

An interactive visualization of the Expectation-Maximization (EM) algorithm applied to the classic two-coin problem.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/two-coin-em)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What it shows

- **Log-likelihood surface** for estimating the bias parameters (θ_A, θ_B) of two coins
- **Contour lines** to visualize the topology of the likelihood function
- **EM algorithm path** showing how the algorithm converges from different starting points
- **Symmetry** along the diagonal (swapping coin labels gives the same likelihood)

## The Two-Coin Problem

You have two coins with unknown biases. Someone randomly picks a coin, flips it multiple times, and records the outcomes — but doesn't tell you which coin was used. Given only the flip results, estimate the bias of each coin.

This is a classic example of a **latent variable problem** where EM shines.

## Interactive Features

- Adjust true coin biases
- Change the number of experiments and flips
- Click anywhere on the plot to set the EM starting point
- Watch EM converge to different local maxima depending on initialization
