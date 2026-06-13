import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExitSurveyor — Learn Why Customers Really Cancel',
  description: 'Embeddable exit surveys for subscription cancellation flows. Analyze churn patterns and reduce cancellations with actionable insights.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7bc21a9b-b6c4-4503-b7c1-a3a87ff594c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
