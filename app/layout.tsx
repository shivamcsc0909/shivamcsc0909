import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baseUrl = 'https://shivam-portfolio-pandey.netlify.app';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Shivam Pandey | Full Stack & Mobile Developer • UI/UX & 3D Specialist',
    template: '%s | Shivam Pandey Portfolio',
  },
  description: 'Shivam Pandey is a Full Stack & Mobile Developer specializing in Node.js, React, TypeScript, PostgreSQL, TimescaleDB, React Native, Three.js 3D animations, Docker, and AWS cloud deployment. Explore 28+ verified live production projects.',
  applicationName: 'Shivam Pandey Developer Hub',
  authors: [{ name: 'Shivam Pandey', url: baseUrl }],
  generator: 'Next.js',
  keywords: [
    'Shivam Pandey',
    'Full Stack Developer',
    'Mobile Developer',
    'React Native',
    'Node.js Developer',
    'PostgreSQL Specialist',
    'TimescaleDB OHLCV',
    'Real Time WebSockets',
    'Three.js 3D Portfolio',
    'WebGL GSAP Animation',
    'Docker AWS Deployment',
    'Play Store Mobile Apps',
    'UI UX Specialist Delhi',
    'Freelance Senior Developer'
  ],
  creator: 'Shivam Pandey',
  publisher: 'Shivam Pandey',
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Shivam Pandey | Full Stack & Mobile Developer • UI/UX & 3D Specialist',
    description: 'Transforming complex systems into production-ready web and mobile applications with Node.js, React, TypeScript, React Native, TimescaleDB, Three.js, and AWS.',
    siteName: 'Shivam Pandey Portfolio',
    images: [
      {
        url: '/shivampandey.webp',
        width: 800,
        height: 800,
        alt: 'Shivam Pandey - Full Stack & Mobile Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Pandey | Full Stack & Mobile Developer',
    description: 'Full-stack web & mobile apps with Node.js, React, TypeScript, PostgreSQL, React Native & 3D WebGL animations.',
    creator: '@shivamcsc0909',
    images: ['/shivampandey.webp'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shivam Pandey',
  url: baseUrl,
  image: `${baseUrl}/shivampandey.webp`,
  jobTitle: 'Full Stack & Mobile Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'RJ UrbanPower Pvt. Ltd.',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Maharaja Agrasen Himalayan Garhwal University',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Ashok Nagar',
    addressRegion: 'Delhi',
    addressCountry: 'India',
  },
  sameAs: [
    'https://github.com/shivamcsc0909',
    'https://www.linkedin.com/in/shivampandey-tech/',
    'https://wa.me/919554584978',
    'https://shivam-portfolio-pandey.netlify.app',
  ],
  knowsAbout: [
    'Full Stack Development',
    'React Native Mobile Development',
    'Node.js & Express API Architecture',
    'PostgreSQL & TimescaleDB',
    'Real-Time WebSocket & OHLCV Streaming',
    'Three.js & WebGL 3D Animations',
    'Docker & AWS Cloud Deployments',
    'UI/UX Design & Core Web Vitals Optimization',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
} catch (e) { }
`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}


