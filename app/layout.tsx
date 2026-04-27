
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jayasurya | Website Developer for Businesses",
    template: "%s | Jayasurya",
  },
  description:
    "I build fast, high-converting websites and landing pages for businesses. Get a modern website that attracts customers and increases conversions.",
  
  keywords: [
    "website developer",
    "freelance web developer",
    "landing page developer",
    "business website design",
    "responsive web design",
    "frontend developer portfolio"
  ],

  authors: [{ name: "Jayasurya" }],
  creator: "Jayasurya",

  metadataBase: new URL("https://portfolio-jayasurya.vercel.app"),

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://portfolio-jayasurya.vercel.app",
    siteName: "Jayasurya Portfolio",
    title: "Jayasurya | Website Developer",
    description:
      "Modern, fast, and conversion-focused websites for businesses.",
    images: [
      {
        url: "/og-image.png", // 👉 create this later
        width: 1200,
        height: 630,
        alt: "Jayasurya Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jayasurya | Website Developer",
    description:
      "High-converting websites and landing pages for businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#5A3BFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
