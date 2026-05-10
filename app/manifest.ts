import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HantaWatch',
    short_name: 'HantaWatch',
    description: 'Canlı sağlık dashboard ve hantavirüs takip uygulaması',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#b91c1c',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
