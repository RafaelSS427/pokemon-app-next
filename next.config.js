/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { // con esto le decimos a next que permita consumir imagenes desde el dominio agregado
    domains: [
      "raw.githubusercontent.com"
    ]
  }
}

module.exports = nextConfig
