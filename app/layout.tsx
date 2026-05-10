import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hantawatch.example.com'),
  title: {
    default: 'HantaWatch | Canlı Hantavirüs Takip Paneli',
    template: '%s | HantaWatch',
  },
  description: 'Canlı vaka tablosu, ülke bazlı sağlık takibi ve doğrulanmış hantavirüs haberlerini sunan modern dashboard.',
  openGraph: {
    title: 'HantaWatch Dashboard',
    description: 'Gerçek zamanlı hantavirüs izleme paneli.',
    url: 'https://hantawatch.example.com',
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
    canonical: 'https://hantawatch.example.com',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const saved=localStorage.getItem('theme');const systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=(saved==='light'||saved==='dark')?saved:(systemDark?'dark':'light')}catch(e){document.documentElement.dataset.theme='dark'}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
