import './globals.css'

export const metadata = {
  title: 'Two-Coin EM Visualization',
  description: 'Interactive visualization of the Expectation-Maximization algorithm for the two-coin problem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
