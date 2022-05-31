/** @type {import('next').NextConfig} */

const redirects = async ()=>{
  return [
    {
      source: '/',
      destination: '/home/products',
      permanent: true,
    },
    {
      source: '/home',
      destination: '/home/products',
      permanent: true,
    },
  ]
}

const nextConfig = {
  reactStrictMode: true,
  redirects
}

module.exports = nextConfig
