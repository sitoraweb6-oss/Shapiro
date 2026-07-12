import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/shared/site-header';
import { SiteFooter } from '@/components/shared/site-footer';
import { SmoothScroll } from '@/components/shared/smooth-scroll';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const mono = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shapiro Legal Group | Mass Tort Law Firm',
  description: 'Justice. Built on Experience. Won Through Precision. Representing injured people nationwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased font-sans text-text bg-bg selection:bg-secondary selection:text-white" suppressHydrationWarning>
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}