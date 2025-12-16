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


Suppose we have two biased coins, $A$ and $B$, with unknown head probabilities $\theta_A$ and $\theta_B$. We conduct $n$ trials. In each trial $i$, we flip one of the coins (chosen with equal probability) $m_i$ times and observe $x_i$ heads. However, we do not know which coin was used in each trial.

Specifically, suppose we conduct $n=2$ trials with the following observations:

- Trial $1$: $m_1=10$ flips, $x_1=2$ heads

- Trial $2$: $m_2=10$ flips, $x_2=9$ heads

Our goal is to estimate the unknown parameters $\theta_A$ and $\theta_B$ from the observed data, even though we don't know which coin was used in each trial.

We wish to model the data by specifying a joint distribution $p(x_i, z_i \mid \theta_A, \theta_B)$. Here, $z_i \in \{0,1\}$ is a binary indicator where $z_i=1$ means coin $A$ was used in trial $i$ and $z_i=0$ means coin $B$ was used. We have $p(z_i=1) = p(z_i=0) = 1/2$.

Given which coin is used, the number of heads follows a binomial distribution: $x_i \mid z_i=1 \sim B(m_i, \theta_A)$ and $x_i \mid z_i=0 \sim B(m_i, \theta_B)$.

Note that the $z_i$'s are **latent random variables**, meaning that they're hidden/unobserved. This is what will make our estimation problem difficult.

The generative process works as follows: For each trial $i$, we first choose which coin to use (coin $A$ with probability $1/2$, coin $B$ with probability $1/2$). Then, given the chosen coin, we flip it $m_i$ times and observe $x_i$ heads. The challenge is that we observe $x_i$ and $m_i$, but not which coin was chosen.

We want to find the maximum likelihood estimates of the parameters $\theta_A$ and $\theta_B$.

If we knew what the $z_i$'s were, the maximum likelihood problem would be straightforward. Specifically, we could then write down the complete-data log-likelihood as

\begin{align*}

\ell(\theta_A, \theta_B) &= \sum_{i=1}^{n} \log p(x_i, z_i \mid \theta_A, \theta_B) \\[5pt]

&= \sum_{i=1}^{n} \log p(x_i \mid z_i; \theta_A, \theta_B) + \log p(z_i).

\end{align*}

Maximizing this with respect to $\theta_A$ and $\theta_B$ gives the parameters:

\begin{align*}

\theta_A &= \frac{\sum_{i=1}^{n} z_i \, x_i}{\sum_{i=1}^{n} z_i \, m_i} \\[5pt]

\theta_B &= \frac{\sum_{i=1}^{n} (1-z_i) \, x_i}{\sum_{i=1}^{n} (1-z_i) \, m_i}

\end{align*}

These are the maximum likelihood estimates of the parameters of the binomial distributions.

In these formulas, the $z_i$'s act as indicator variables. To estimate $\theta_A$, we simply divide the total number of heads from trials where coin $A$ was used by the total number of flips where coin $A$ was used. Similarly, to estimate $\theta_B$, we divide the total number of heads from trials where coin $B$ was used by the total number of flips where coin $B$ was used.

This is a simple and elegant solution—if only we knew which coin was used in each trial!

However, in our problem, the $z_i$'s are not known. Since we do not know the $z_i$'s, we need to marginalize them out to compute the log-likelihood of the observed data:

\begin{align*}

\ell(\theta_A, \theta_B) &= \sum_{i=1}^{n} \log p(x_i \mid \theta_A, \theta_B) \\[5pt]

&= \sum_{i=1}^{n} \log \sum_{z_i \in \{0,1\}} p(x_i \mid z_i; \theta_A, \theta_B) \, p(z_i).

\end{align*}

This log-likelihood involves a sum inside a logarithm, which makes it difficult to maximize directly. If we try to solve for the maximum likelihood estimates of the parameters by setting to zero the derivatives of this formula with respect to the parameters, we'll find that it is *not* possible to get a closed-form solution.

This is the fundamental challenge: the complete-data log-likelihood is easy to maximize, but we don't have complete data. The marginalized log-likelihood is what we actually need to maximize, but it's mathematically difficult to work with directly.

The two-coin problem is an example of a **mixture model**. In general, a mixture model assumes that our data comes from a combination (or "mixture") of several different probability distributions, where each data point is generated from one of these distributions, but we don't know which one.

In our two-coin example:

- We have $K=2$ components (coins $A$ and $B$)

- Each component has its own parameters ($\theta_A$ and $\theta_B$)

- The latent variable $z_i$ indicates which component generated data point $i$

- The mixing weights are equal ($\pi_A = \pi_B = 1/2$)

More generally, for a mixture model with $K$ components, the probability of observing data point $x_i$ is:

$$

p(x_i) = \sum_{k=1}^{K} \pi_k \, p(x_i \mid z_i=k; \theta_k)

$$

where $\pi_k$ are the mixing weights (satisfying $\sum_{k=1}^{K} \pi_k = 1$), and $\theta_k$ are the parameters of component $k$.

Since we can't directly maximize the marginalized log-likelihood, we need another approach. This leads us to the Expectation-Maximization algorithm, which we'll explore in the next lesson.


In the previous lesson, we introduced mixture models using the two-coin problem as a concrete example. We have two biased coins $A$ and $B$ with unknown head probabilities $\theta_A$ and $\theta_B$. In each trial $i$, one of the coins is chosen (with equal probability) and flipped $m_i$ times, yielding $x_i$ heads. However, we do not know which coin was used in each trial.

The key challenge is that we have **latent variables** $z_i \in \{0,1\}$ indicating which coin was used, but these are unobserved. To estimate the parameters, we need to maximize the log-likelihood:

$$
\ell(\theta_A, \theta_B) = \sum_{i=1}^{n} \log \sum_{z_i \in \{0,1\}} p(x_i \mid z_i; \theta_A, \theta_B) \, p(z_i)
$$

This log-likelihood involves a sum inside a logarithm, which makes it difficult to maximize directly. We saw that if we knew the latent variables $z_i$, then maximum likelihood estimation would be straightforward—we could simply compute the proportion of heads for each coin separately. However, since the $z_i$'s are unknown, we need a different approach.

The **EM algorithm** provides an iterative solution to this problem. It updates our estimates of the parameters with two steps:

- In the **E-step**, we "guess" the values of the $z_i$'s based on the observed data and the current parameter estimates. 
- In the **M-step**, we update the parameter estimates to maximize the log-likelihood of the data given the guessed values of the $z_i$'s.

Since in the M-step we assume that the guesses from the E-step are correct, the maximization becomes easy.

Here's the algorithm:

**Initialize** $\theta_A^{(0)}$ and $\theta_B^{(0)}$ with some initial guesses.

**Repeat** until convergence of $\theta_A^{(t)}$ and $\theta_B^{(t)}$: 

* **(E-step)** For each trial $i$, compute
\begin{align*}
\gamma_{iA} &= p(z_i=1 \mid x_i; \theta_A^{(t)}, \theta_B^{(t)}) \\
\gamma_{iB} &= p(z_i=0 \mid x_i; \theta_A^{(t)}, \theta_B^{(t)}) = 1 - \gamma_{iA}
\end{align*}

* **(M-step)** Update the parameters:
\begin{align*}
\theta_A^{(t+1)} &:= \frac{\sum_{i=1}^{n} \gamma_{iA} \, x_i}{\sum_{i=1}^{n} \gamma_{iA} \, m_i} \\[5pt]
\theta_B^{(t+1)} &:= \frac{\sum_{i=1}^{n} \gamma_{iB} \, x_i}{\sum_{i=1}^{n} \gamma_{iB} \, m_i}
\end{align*}

In the E-step, we calculate the posterior probability of the $z_i$'s given the $x_i$'s and the current parameter estimates. We can find this from the prior probabilities $p(z_i=1)$ and $p(z_i=0)$ and the conditional probabilities $p(x_i \mid z_i=1; \theta_A^{(t)})$ and $p(x_i \mid z_i=0; \theta_B^{(t)})$ using Bayes' rule.

Notice the similarity between the updates in the M-step and the formulas we had when the $z_i$'s were known exactly. They are identical, except that instead of the "hard" indicator functions $z_i$ and $(1-z_i)$ indicating which coin was used for each trial, we now have the "soft" **responsibilities** $\gamma_{iA}$ and $\gamma_{iB}$ that indicate the probability that coin $A$ or $B$ was used for each trial.

At the end of the lesson we will prove that the EM algorithm finds a local maximum of the log-likelihood. For now, let's get some practice with it.



Suppose we have an estimation problem in which we have some data $x$ and we wish to fit a model with parameters $\theta$ by maximizing the log-likelihood of the data, defined by

$$
\ell(\theta)=\log p(x \mid \theta)
$$

Suppose we have an unknown latent variable $z$ (which for simplicity we assume takes a finite number of values). We can obtain the density for $x$ by marginalizing over the latent variable $z$:

$$
\log p(x \mid \theta)=\log \sum_{z} p(x, z \mid \theta)
$$

In such a setting, the EM algorithm gives an efficient method for maximum likelihood estimation. Maximizing $\ell(\theta)$ explicitly might be difficult, and our strategy will be to instead repeatedly construct a lower-bound on $\ell$ (E-step), and then optimize that lower-bound (M-step). 

Let $Q$ be a probability distribution over the possible values of $z$. That is, $\sum_{z} Q(z)=1$ and $Q(z) \geq 0$.

Now, consider the following:

\begin{align*}
\log p(x \mid \theta) &= \log \sum_{z} p(x, z \mid \theta) \\[5pt]
&= \log \sum_{z} Q(z) \frac{p(x, z \mid \theta)}{Q(z)} \\[5pt]
&\geq \sum_{z} Q(z) \log \frac{p(x, z \mid \theta)}{Q(z)}
\end{align*}

In the last step, we used Jensen's inequality to obtain a lower-bound on $\log p(x \mid \theta)$. We won't discuss the proof here, but the inequality above is true for *any* valid probability distribution $Q$. 

(We only consider probability distributions $Q$ that satisfy $p(x, z \mid \theta) > 0 \implies Q(z) > 0$ so that we aren't dividing by zero.)

We call the expression $$\sum_{z} Q(z) \log \dfrac{p(x, z \mid \theta)}{Q(z)}$$ the **evidence lower bound (ELBO)** and denote it by 
$\operatorname{ELBO}(x; Q, \theta).$

With this notation, we can write:

$$
\log p(x \mid \theta) \geq \operatorname{ELBO}(x; Q, \theta)
$$

for any probability distribution $Q$ and any value of $\theta$.



Now that we have a lower-bound on $\log p(x \mid \theta)$, we can use it to optimize $\ell(\theta)$ by adjusting $Q$ and $\theta$.

If we have some current guess $\theta$, we should try to make the lower-bound tight at that value of $\theta$. In other words, we will make the inequality 

$$
\log p(x \mid \theta) \geq \operatorname{ELBO}(x; Q, \theta)
$$

hold with equality at our particular value of $\theta$.

To make the bound tight for a particular value of $\theta$, we need the step involving Jensen's inequality to hold with equality. 

It turns out that we can achieve this by requiring that

$$
\frac{p(x, z \mid \theta)}{Q(z)}=c
$$

for some constant $c$ that does not depend on $z$. 

This means that

\begin{align*}
Q(z) &= \frac{p(x, z \mid \theta)}{c} \\[5pt]
&= \frac{p(z \mid x, \theta)\,p(x \mid \theta)}{c}
\end{align*}

Dropping the terms that do not depend on $z$, we get

$$
Q(z) \propto p(z \mid x, \theta)
$$

Since $Q$ and $p(z \mid x, \theta)$ are both probability distributions, the proportionality constant must be $1$. Thus, we simply set $Q$ to be the posterior distribution of $z$ given $x$ and the current setting of the parameters $\theta$:

$$
Q(z) = p(z \mid x, \theta)
$$

We can directly verify that when $Q(z)=p(z \mid x, \theta)$, the lower bound becomes tight:

\begin{align*}
\sum_{z} Q(z) \log \frac{p(x, z \mid \theta)}{Q(z)} &= \sum_{z} p(z \mid x, \theta) \log \frac{p(x, z \mid \theta)}{p(z \mid x, \theta)} \\[5pt]
&= \sum_{z} p(z \mid x, \theta) \log \frac{p(z \mid x, \theta)\, p(x \mid \theta)}{p(z \mid x, \theta)} \\[5pt]
&= \sum_{z} p(z \mid x, \theta) \log p(x \mid \theta) \\[5pt]
&= \log p(x \mid \theta) \sum_{z} p(z \mid x, \theta) \\[5pt]
&= \log p(x \mid \theta)
\end{align*}

where the last step uses the fact that $\sum_{z} p(z \mid x, \theta)=1$.



The EM algorithm alternately updates $Q$ and $\theta$ in two steps:

1. **(E-step)** Set $Q(z) = p(z \mid x, \theta)$ using the current value of $\theta$, so that $\operatorname{ELBO}(x; Q, \theta) = \log p(x \mid \theta)$.

2. **(M-step)** Update $\theta$ by maximizing $\operatorname{ELBO}(x; Q, \theta)$ with respect to $\theta$ while keeping $Q$ fixed.

More formally, the EM algorithm proceeds as follows:

**Initialize** $\theta^{(0)}$ with some initial guess.

**Repeat** until convergence:

* **(E-step)** For the current parameter $\theta^{(t)}$, set
$$
Q^{(t)}(z) := p(z \mid x, \theta^{(t)})
$$

* **(M-step)** Update the parameters:
$$
\theta^{(t+1)} := \arg\max_{\theta} \operatorname{ELBO}(x; Q^{(t)}, \theta)
$$

This algorithm is guaranteed to improve the log-likelihood at each iteration, which we will prove in the next section.



We will now prove that the EM algorithm monotonically improves the log-likelihood. Specifically, we will show that $\ell(\theta^{(t)}) \leq \ell(\theta^{(t+1)})$ for successive iterations.

The key to our proof lies in the choice of $Q$. 

On the iteration where the parameters are $\theta^{(t)}$, we choose $Q^{(t)}(z) := p(z \mid x, \theta^{(t)})$. We saw in the previous section that this choice ensures that the lower bound is tight, and hence

$$
\ell(\theta^{(t)}) = \log p(x \mid \theta^{(t)}) = \operatorname{ELBO}(x; Q^{(t)}, \theta^{(t)})
$$

The parameters $\theta^{(t+1)}$ are then obtained by maximizing $\operatorname{ELBO}(x; Q^{(t)}, \theta)$ with respect to $\theta$. Thus,

\begin{align*}
\ell(\theta^{(t+1)}) &= \log p(x \mid \theta^{(t+1)}) \\[5pt]
&\geq \operatorname{ELBO}(x; Q^{(t)}, \theta^{(t+1)}) \qquad \text{(lower bound holds for all } Q \text{ and } \theta\text{)} \\[5pt]
&\geq \operatorname{ELBO}(x; Q^{(t)}, \theta^{(t)}) \qquad \text{(} \theta^{(t+1)} \text{ maximizes the ELBO)} \\[5pt]
&= \ell(\theta^{(t)})
\end{align*}

Hence, EM causes the likelihood to converge monotonically. 

Note that while EM will find a local optimum of $\ell(\theta)$, it doesn't necessarily find the global optimum.