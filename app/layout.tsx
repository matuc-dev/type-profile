import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matu',
  description: 'Please wait until the portfolio site is complete.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
