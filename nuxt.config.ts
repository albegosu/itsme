const siteUrl = 'https://albertoglez.es'
const title = 'Alberto Glez — Product Engineer'
const description =
  'Product engineer with an industrial design background. I build interfaces where logic and form carry equal weight.'
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  experimental: {
    appManifest: false,
  },

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
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: title },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: title },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: siteUrl },
      ],
      script: [
        {
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()",
          type: 'text/javascript',
        },
      ],
    },
  },

})
