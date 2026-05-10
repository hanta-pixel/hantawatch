import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://hantawatch.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HantaWatch | Canlı Hantavirüs Takip Paneli',
    template: '%s | HantaWatch',
  },
  description:
    'Canlı vaka tablosu, ülke bazlı sağlık takibi ve doğrulanmış hantavirüs haberlerini sunan modern dashboard.',
  openGraph: {
    title: 'HantaWatch Dashboard',
    description: 'Gerçek zamanlı hantavirüs izleme paneli.',
    url: siteUrl,
    siteName: 'HantaWatch',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HantaWatch Dashboard',
    description: 'Gerçek zamanlı hantavirüs izleme paneli.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="bg-black text-white">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const saved=localStorage.getItem('theme');const systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(saved==='light'||saved==='dark')?saved:(systemDark?'dark':'light')}catch{document.documentElement.dataset.theme='dark'}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
