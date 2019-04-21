<template lang="pug">
  div.row.flex-center
    q-card( inline class="col-xs-12 col-md-4 q-ma-md " v-for="recommendation in recommendations" :key="recommendation.author")
      q-card-title.relative-position
        q-btn(fab-mini color="tertiary" icon="fas fa-thumbs-up" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);")
        div.ellipsis-2-lines {{recommendation.author}} - {{recommendation.company}}
        span(slot="subtitle")
          span {{recommendation.position}}
          br
        q-rating.q-mt-sm( slot="subtitle" v-model="stars" :readonly="true" :max="5")
      q-card-main
        p.text-faded {{recommendation.comment}}
      q-card-separator
      q-card-actions
        q-btn( flat :label="'Vía - '+ recommendation.url" @click="openURL(recommendation.via)")
        q-btn(color="primary" @click="CopyContact(recommendation.contactInfo)") {{$t('buttons.contact')}}
</template>

<script>

import { openURL } from 'quasar'

export default {
  computed: {
    recommendations () {
      return [
        {
          company: 'Tas Automation',
          author: 'Irfanul Hassan',
          comment: this.$t('sections.recommendations.attr.hassan.comment'),
          position: this.$t('sections.recommendations.attr.hassan.position'),
          url: 'Ziprecruiter',
          contactInfo: 'hassan@tasautomation.com',
          via: 'https://www.ziprecruiter.com'
        },
        {
          company: 'Tas Automation',
          author: 'Valeria Villalobos',
          comment: this.$t('sections.recommendations.attr.valeria.comment'),
          position: this.$t('sections.recommendations.attr.valeria.position'),
          url: 'Ziprecruiter',
          via: 'https://www.ziprecruiter.com',
          contactInfo: 'https://www.linkedin.com/in/vvillalobosc/'
        },
        {
          company: 'The Daily Post',
          author: 'Henry Zelaya',
          comment: this.$t('sections.recommendations.attr.henry.comment'),
          position: this.$t('sections.recommendations.attr.henry.position'),
          url: 'Workana',
          via: 'http://workana.com',
          contactInfo: 'https://www.linkedin.com/in/hescobarsv/'
        },
        {
          company: 'Unigleam',
          author: 'Kenny Luna',
          comment: this.$t('sections.recommendations.attr.kenny.comment'),
          position: this.$t('sections.recommendations.attr.kenny.position'),
          url: 'Upwork',
          via: 'https://www.upwork.com/freelancers/~01d28b1483a5603b29',
          contactInfo: 'https://www.facebook.com/kennyluna'
        },
        {
          company: 'Pandicorn',
          author: 'David Bustel',
          comment: this.$t('sections.recommendations.attr.david.comment'),
          position: this.$t('sections.recommendations.attr.david.position'),
          url: 'Upwork',
          via: 'https://www.upwork.com/freelancers/~01d28b1483a5603b29',
          contactInfo: 'https://www.linkedin.com/in/davidverbustel/'
        },
        {
          company: 'Zemobile',
          author: 'Alexi Monardez',
          comment: this.$t('sections.recommendations.attr.alexi.comment'),
          position: this.$t('sections.recommendations.attr.alexi.position'),
          url: 'Upwork',
          via: 'https://www.upwork.com/freelancers/~01d28b1483a5603b29',
          contactInfo: 'https://www.linkedin.com/in/aleximonardezmiranda/'
        }
      ]
    }
  },
  data () {
    return {
      stars: 5
    }
  },
  methods: {
    openURL,
    CopyContact (contactInfo) {
      var patt = new RegExp('.com$')
      if (patt.test(contactInfo)) {
        this.$copyText(contactInfo)
          .then((e) => {
            this.$q.notify({
              message: `Email was copied to clipboard`,
              timeout: 2000,
              icon: 'fas fa-copy',
              color: 'green',
              position: 'bottom'
            })
          })
          .catch((e) => {
            this.$q.notify({
              message: `${contactInfo} cannot be copied to clipboard`,
              timeout: 10000,
              icon: 'fas fa-copy',
              color: 'red',
              position: 'bottom'
            })
          })
      } else {
        openURL(contactInfo)
      }
    }
  }
}
</script>

<style lang="stylus">

</style>
