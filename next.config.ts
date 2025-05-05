import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/phonebook',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
