import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HantaWatch',
    short_name: 'HantaWatch',
    description: 'Premium health intelligence dashboard',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#7f1d1d',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
