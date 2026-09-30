import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';

const manrope = localFont({
  src: '../public/fonts/manrope-variable.ttf',
  variable: '--font-manrope',
  display: 'swap',
  weight: '200 800',
});

// Google Search Console verification tokens are public by design. Keeping this
// fallback in the source also makes verification work on the first deployment;
// the environment variable can still override it for a future token.
const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
  'fT-Rv6UVbgyzPGH_mKD1GiPiUnI7NKkxxJZcu5aqC5E';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: '/manifest.webmanifest',
  verification: {
    google: googleSiteVerification,
  },
  category: 'technology',
  classification: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.image,
        width: 879,
        height: 865,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@JospinNdagano',
    images: [siteConfig.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="author" href={siteConfig.url} />
        {siteConfig.sameAs.map((profileUrl) => (
          <link key={profileUrl} rel="me" href={profileUrl} />
        ))}
      </head>
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
