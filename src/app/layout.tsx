
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation'
import { ThemeProvider } from 'next-themes'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxwell Demos",
  description: "Demos by Maxwell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}