<template lang="pug">
  div.row(:class="{'q-pa-xl': !($q.screen.xs)}")
    .col-xs-12.col-md-6(v-center='' v-for='(work,index) in works' :key='work.id' )
      q-card.q-ma-lg.max-500.card-hover
        q-card-media
          transition-group(
            duration="500"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            )
            img.full-width.max-500( key="image" :src='work.projectLogo')
            q-btn.hidden.absolute-center.bg-primary.text-white.details(
              key="button"
              @click="showModal(index)"
              ) {{$t('buttons.details')}}
          q-card-title(:class="{'q-pa-none': $q.screen.xs}" slot="overlay")
            p.q-body-1.q-ma-none {{work.projectName}}
            span(slot='subtitle'  v-if="!($q.screen.xs)") {{work.period}}
      q-modal.in-front.relative-position( v-model="modal" maximized :content-css="{padding: '50px'}")
        .absolute-right(style="top: 10px;right: 30px")
          q-btn(round color="tertiary" @click.native="modal = false" icon="fa fa-times")
        .row.justify-center
          .col-xs-12.col-sm-6
            img.full-width(:src='worksModal.projectLogo')
            .q-headline.q-mb-sm(v-center="") {{worksModal.projectName}}
            .col-xs-12.relative-position
              p {{$t('sections.workExperience.attr.company')}}: {{worksModal.company}}
              p {{$t('sections.workExperience.attr.position')}}: {{worksModal.position}}
              div(:class="{'absolute-right': !$q.screen.xs}" )
                img.vertical-middle.q-mr-xs(:src="worksModal.countryFlag")
                span {{worksModal.country}}
            q-item-separator
            p.text-grey-9(v-html="worksModal.description")
            div(v-center="" v-if='worksModal.projectName != "API Gateways"')
              q-btn(color="primary" @click="open(worksModal.url)") {{$t('buttons.visit')}}
            q-item-separator
            div(v-center="") {{worksModal.period}}
            div(v-center="" )
              img( v-for="tech in worksModal.technologies" style="width: 32px;margin-right: 6px;" :src="tech")
</template>

<script>
import { openURL } from 'quasar'

export default {
  data () {
    return {
      modal: false,
      currentModal: '',
      list: [
        'academia',
        'unigleam',
        'b2b',
        'tascolatam',
        'tdpost',
        'iqtest',
        'api'
      ]
    }
  },
  computed: {
    works () {
      return [
        {
          projectName: 'Academia Leiros',
          show: false,
          projectLogo: 'assets/sites/elearning.png',
          period: this.$t('sections.workExperience.attr.academia.period')
        },
        {
          projectName: 'Unigleam',
          show: false,
          projectLogo: 'assets/sites/unigleam.png',
          period: this.$t('sections.workExperience.attr.unigleam.period')
        },
        {
          projectName: 'B2b Leiros',
          show: false,
          projectLogo: 'assets/sites/b2b.png',
          period: this.$t('sections.workExperience.attr.b2b.period')
        },
        {
          projectName: 'Tasco Latam',
          show: false,
          projectLogo: 'assets/sites/tascolatam.png',
          period: this.$t('sections.workExperience.attr.tascolatam.period')
        },
        {
          projectName: 'The Daily Post',
          show: false,
          projectLogo: 'assets/sites/tdpost.png',
          period: this.$t('sections.workExperience.attr.tdpost.period')
        },
        {
          projectName: 'IQ Test',
          show: false,
          projectLogo: 'assets/sites/iqtest.png',
          period: this.$t('sections.workExperience.attr.iqtest.period')
        },
        {
          projectName: 'Payment Gateways API',
          show: false,
          projectLogo: 'assets/sites/api-aws.png',
          period: this.$t('sections.workExperience.attr.api.period')
        }
      ]
    },
    worksModal () {
      var array = {
        academia: {
          projectName: 'Academia Leiros',
          company: 'Grupo Leiros',
          projectLogo: 'assets/sites/elearning.png',
          country: 'Venezuela',
          countryFlag: 'https://countryflags.io/ve/flat/24.png',
          url: 'https://academia.leiros.com',
          technologies: [
            './assets/rails.png',
            './assets/vuejs.svg'
          ],
          period: this.$t('sections.workExperience.attr.academia.period'),
          position: this.$t('sections.workExperience.attr.academia.position'),
          description: this.$t('sections.workExperience.attr.academia.description')
        },
        unigleam: {
          projectName: 'Unigleam',
          period: this.$t('sections.workExperience.attr.unigleam.period'),
          company: 'Unigleam',
          projectLogo: 'assets/sites/unigleam.png',
          country: 'USA',
          style: 'width: 75% !important;',
          countryFlag: 'https://countryflags.io/us/flat/24.png',
          position: this.$t('sections.workExperience.attr.unigleam.position'),
          url: 'https://www.unigleam.com/',
          description: this.$t('sections.workExperience.attr.unigleam.description'),
          technologies: [
            './assets/rails.png'
          ]
        },
        b2b: {
          projectName: 'B2B Leiros',
          period: this.$t('sections.workExperience.attr.b2b.period'),
          company: 'Grupo Leiros',
          projectLogo: 'assets/sites/b2b.png',
          style: 'width: 70% !important;position: relative;bottom: 18px;',
          country: 'Venezuela',
          countryFlag: 'https://countryflags.io/ve/flat/24.png',
          position: this.$t('sections.workExperience.attr.b2b.position'),
          url: 'https://b2b.leiros.com',
          description: this.$t('sections.workExperience.attr.b2b.description'),
          technologies: [
            './assets/rails.png',
            './assets/vuejs.svg',
            './assets/nodejs.png'
          ]
        },
        tascolatam: {
          projectName: 'Tasco Latam',
          period: this.$t('sections.workExperience.attr.tascolatam.period'),
          company: 'Tas Automation',
          projectLogo: 'assets/sites/tascolatam.png',
          style: 'width: 75% !important;',
          country: 'USA',
          countryFlag: 'https://countryflags.io/us/flat/24.png',
          position: this.$t('sections.workExperience.attr.tascolatam.position'),
          url: 'https://tascolatam.com',
          description: this.$t('sections.workExperience.attr.tascolatam.description'),
          technologies: [
            './assets/rails.png',
            './assets/vuejs.svg'
          ]
        },
        tdpost: {
          projectName: 'The Daily Post',
          period: this.$t('sections.workExperience.attr.tdpost.period'),
          company: 'The Daily Post',
          projectLogo: 'assets/sites/tdpost.png',
          style: 'width: 75% !important;',
          country: 'El Salvador',
          countryFlag: 'https://countryflags.io/sv/flat/24.png',
          position: this.$t('sections.workExperience.attr.tdpost.position'),
          url: 'https://tdpost.net',
          description: this.$t('sections.workExperience.attr.tdpost.description'),
          technologies: [
            './assets/wordpress.svg'
          ]
        },
        iqtest: {
          projectName: 'IQ Test',
          period: this.$t('sections.workExperience.attr.iqtest.period'),
          company: 'Zemobile',
          projectLogo: 'assets/sites/iqtest.png',
          style: 'width: 75% !important;',
          country: 'Spain',
          countryFlag: 'https://countryflags.io/es/flat/24.png',
          position: this.$t('sections.workExperience.attr.iqtest.position'),
          url: 'https://iqtestnow.org/',
          description: this.$t('sections.workExperience.attr.iqtest.description'),
          technologies: [
            './assets/rails.png',
            './assets/heroku.png',
            './assets/webpack.png',
            './assets/circleci.svg',
            './assets/elastic.webp',
            './assets/docker.png'
          ]
        },
        api: {
          projectName: 'API Gateways',
          period: this.$t('sections.workExperience.attr.api.period'),
          company: 'Zemobile',
          projectLogo: 'assets/sites/api-aws.png',
          style: 'width: 75% !important;',
          country: 'Spain',
          countryFlag: 'https://countryflags.io/es/flat/24.png',
          position: this.$t('sections.workExperience.attr.api.position'),
          url: '',
          description: this.$t('sections.workExperience.attr.api.description'),
          technologies: [
            './assets/rails.png',
            './assets/nodejs.png',
            './assets/aws.svg',
            './assets/docker.png',
            './assets/sentry.jpg'
          ]
        }
      }

      return array[this.currentModal] || {}
    }
  },
  methods: {
    open (url) {
      this.google_a(url)
      openURL(url)
    },
    showModal (index) {
      this.google_a(`/${this.list[index]}`)
      this.currentModal = this.list[index]
      this.modal = true
    },
    openURL
  }
}
</script>

<style lang="stylus">
.max-500
  max-width: 800px
.float-none
  float: none
.in-front
  z-index: 7001

.card-hover:hover img
  transition: all 0.5s
  filter: brightness(50%) blur(2px)
.card-hover:hover .details
  display: block !important
</style>
