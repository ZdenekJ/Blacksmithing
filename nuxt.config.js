export default {
  target: 'static',
  buildModules: [
    '@nuxtjs/pwa',
  ],
  css: [
    // CSS file in the project
    '@/static/css/main.css',
  ],
  head: {
    htmlAttrs: {
      lang: 'cz'
    },
    titleTemplate: 'Blacksmithing',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {hid: 'description', name: 'description', content: 'Meta description'}
    ]
  },
  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://angry-mirzakhani-acff38.netlify.app/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        },
        {
          urlPattern: 'https://angry-mirzakhani-acff38.netlify.app/shouldering/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        }
      ]
    }
  }
}