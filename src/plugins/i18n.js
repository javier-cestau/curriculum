import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  var lang = 'en'

  if (localStorage.getItem('locale')) {
    lang = localStorage.getItem('locale')
  } else {
    if (/^es/g.test(navigator.language)) {
      lang = 'es'
    }
    if (/^it/g.test(navigator.language)) {
      lang = 'it'
    }
    if (/^fr/g.test(navigator.language)) {
      lang = 'fr'
    }
  }

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: lang,
    fallbackLocale: 'en',
    messages
  })
}
