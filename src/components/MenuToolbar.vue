<template lang="pug">
  div
    q-scroll-observable( @scroll="attachMenu")
    q-toolbar.z-top.bg-primary(ref='menu' v-transition='1')
     q-toolbar-title Javier Cestau
     q-btn.q-mr-xs(v-show="hiddenOnSmall()" v-center="" v-for='button in buttons' flat @click.native='scrollToElement(button.target)' :key='button.target')
       span {{button.name}}
     //- q-btn.bg-white.text-black(fab-mini @click="popover = true" ref='language' round icon="fas fa-globe")
     //-   q-popover(v-model="popover")
     //-     q-list( separator link)
     //-       q-item( @click.native="changeLanguage(language.value),popover = false" :key="index" v-for="(language,index) in languages")
     //-         q-item-side(:avatar="language.icon")
     //-         q-item-main(:label="language.name" label-lines="1")
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  data () {
    return {
      popover: false
    }
  },
  props: ['references'],
  computed: {
    myName () {
      if (this.$q.screen.xs || this.$q.screen.sm) {
        return ''
      } else {
        return 'Javier Cestau'
      }
    },
    languages () {
      return [
        {
          name: this.$t('languages.es'),
          icon: 'https://countryflags.io/es/flat/24.png',
          value: 'es'
        },
        {
          name: this.$t('languages.en'),
          icon: 'https://countryflags.io/us/flat/24.png',
          value: 'en'
        },
        {
          name: this.$t('languages.fr'),
          icon: 'https://countryflags.io/fr/flat/24.png',
          value: 'fr'
        },
        {
          name: this.$t('languages.it'),
          icon: 'https://countryflags.io/it/flat/24.png',
          value: 'it'
        }
      ]
    },
    buttons () {
      return [
        {
          name: this.$t('sections.personalInfo.title'),
          target: 'personal'
        },
        {
          name: this.$t('sections.skills.title'),
          target: 'skills'
        },
        {
          name: this.$t('sections.workExperience.title'),
          target: 'work'
        },
        {
          name: this.$t('sections.certificates.title'),
          target: 'certificates'
        },
        {
          name: this.$t('sections.recommendations.title'),
          target: 'recommendations'
        },
        {
          name: this.$t('sections.hire.title'),
          target: 'hireme'
        }
      ]
    }
  },
  methods: {
    changeLanguage (language) {
      this.$i18n.locale = language
      localStorage.setItem('locale', language)
    },
    hiddenOnSmall () {
      if (this.$q.screen.xs || this.$q.screen.sm) {
        return false
      }
      return true
    },
    scrollToElement (elementName) {
      var el = this.references[elementName]
      let target = getScrollTarget(el)
      let offset = el.offsetTop - el.scrollHeight
      let duration = 500
      setScrollPosition(target, (el.offsetTop - 70), duration)
    },
    attachMenu (scroll) {
      if ((scroll.position + 50) > window.innerHeight) {
        this.$refs.menu.$el.classList.add('fixed-top')
      } else {
        this.$refs.menu.$el.classList.remove('fixed-top')
      }
    }
  }
}
</script>

<style lang="css">

</style>
