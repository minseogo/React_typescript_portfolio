import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Noto_Sans_KR, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import '../css/main.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-kr',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
});

export const metadata: Metadata = {
  title: 'Daniela Go - Frontend Developer',
  description: 'Frontend Developer specializing in React, TypeScript, and Tailwind CSS',
  metadataBase: new URL('https://go-daniela-dev.vercel.app/'),
  openGraph: {
    title: 'Daniela Go - Frontend Developer',
    description: 'Frontend Developer specializing in React, TypeScript, and Tailwind CSS',
    url: 'https://go-daniela-dev.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniela Go portfolio preview',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
