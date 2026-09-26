import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',}
      //   port: '',
      //   pathname: '/free-photo/**',
      //   search: '',
      // },
    ],
  },
};

export default nextConfig;
