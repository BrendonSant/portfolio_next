/** @type {import('next').NextConfig} */
const nextConfig = {

  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.cosmicjs.com',
        
        },
      ],
    },
  
    //Configuração de WebPack para importar svg como componente.
    
    webpack(config) {           
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
};

export default nextConfig;
