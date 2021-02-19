let plugins = [
    require('tailwindcss'),
    require('autoprefixer'), 
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('postcss-nested'),
  ];

  console.log(process.env.REACT_APP_ENV)
  
  // Add the purge CSS plugin for both TEST and PROD environments
  if(process.env.REACT_APP_ENV !== 'development') {
    plugins.push(require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.{js,jsx,ts,tsx}', 
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }))
  }
  
  module.exports = { plugins };
    