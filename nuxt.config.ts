export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxt/fonts'],

  fonts: {
    families: [
      {
        name: 'General Sans',
        provider: 'fontshare',
        weights: [400, 500, 600],
      },
    ],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Alberto Glez — Product Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Product Engineer con background en diseño industrial. Construyo interfaces donde la lógica y la forma tienen el mismo peso.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

})
