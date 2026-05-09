import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HantaWatch',
  description: 'Canlı Hantavirüs Takip Platformu',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
