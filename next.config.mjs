/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['images.unsplash.com','www.directfn.com','www.docker.com','v4.material-ui.com'],
      },
      basePath: '/portfolio', //remove this if not working
      assetPrefix: '/portfolio/', //remove this if not working
};

export default nextConfig;
