/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },

  // FIXME: for local dev
  async rewrites() {
    return [
      {
        source: '/prpc/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/prpc/:path*`, // Proxy to Backend
      },
    ]
  },
}
