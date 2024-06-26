/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Em desenvolvimento vai ser acessado como http://localhost:3000/public-only
  // no MF main é possível configurar para qualquer outra rota, mas o mais ideal
  // é que ambas tenham a mesma nomeclatura
  // ------ disabled due SWA ------
  basePath: "/public-only",

  // Configura para que os recursos (css, js, etc) sejam baixados da URL de deploy
  // desse MF, caso contrário, o MF vai tentar baixar do MF main, resultado em 404
  //
  // Obs.: Comente a linha abaixo caso esteja desenvolvendo fora de forma extena aos
  // microfrontends (caso opte por desenvolver o app e depois conectar aos MF main)
  assetPrefix: `${process.env.BASE_URL}/public-only`,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: `${process.env.BASE_URL}/public-only`,
          basePath: false
        }
      ]
    }
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/public-only',
  //       basePath: false,
  //       permanent: false
  //     }
  //   ]
  // }
  // ------ disabled due SWA ------
};

export default nextConfig;
