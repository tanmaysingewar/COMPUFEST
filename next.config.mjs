/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]',
            publicPath: '/_next',
            outputPath: 'static/media',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;