<template lang="pug">
  .row.justify-center.content-center.background-hire
    .col-xs-12.q-my-xl(v-center="").relative-position
      //- .absolute-top(v-scroll-fire="sendAssistant")
      .q-display-2.text-white {{$t('sections.hire.description')}}
      br
      .q-display-1.text-white {{$t('sections.hire.subdescription')}}
    .col-sm-2.col-xs-12.round-borders.q-ma-md(v-center="" :key="index" v-for="(platform,index) in platforms")
      q-card.bg-grey-2
        q-item
          q-item-main(v-center="")
            q-btn.bg-white.q-ma-sm.buton-icon-size( round )
              img(:class="'size-'+platform.iconWidth" :src="platform.icon")
            p.text-grey-8 {{platform.name}}
            q-btn.q-ma-sm(color="primary" @click="hire(platform.url)") {{$t('buttons.hire')}}
</template>

<script>

import {openURL} from 'quasar'
export default {
  computed: {
    platforms () {
      return [
        {
          name: this.$t('sections.hire.attr.upwork'),
          url: 'https://www.upwork.com/freelancers/~01d28b1483a5603b29',
          icon: './assets/upwork.png',
          iconWidth: '46'
        },
        {
          name: this.$t('sections.hire.attr.remote'),
          url: 'https://remote.com/javiercestau',
          icon: './assets/remote.png',
          iconWidth: '32'
        },
        {
          name: this.$t('sections.hire.attr.email'),
          url: 'javier.cestau1209@gmail.com',
          icon: './assets/email.svg',
          iconWidth: '32'
        }
      ]
    }
  },
  methods: {
    hire (url) {
      if (url === 'javier.cestau1209@gmail.com') {
        this.google_a('/copy_email')
        this.$q.notify({
          message: `Email was copied to clipboard`,
          timeout: 2000,
          icon: 'fas fa-copy',
          color: 'green',
          position: 'bottom'
        })
      } else {
        this.google_a(url)
        openURL(url)
      }
    },
    sendAssistant () {
      this.$root.$emit('speak', 'Here you can hire Javier')
    },
    openURL
  }
}
</script>

<style lang="stylus">

.size-46
  width: 46px
  height: 46px
  position: relative;
  left: 2px;
.size-32
  width: 32px
  height: 32px
.buton-icon-size
  width: 64px
  height: 64px
.q-ma-auto
  margin: 0 auto
.background-hire
  background: url('/assets/hireme3.jpg')
  background-size: cover
  min-height: 100vh

</style>
