<template lang="pug">
  div
    p.q-display-1 {{$t('sections.skills.subtitle')}}
    .row
      .col-xs-12.q-pa-xl.col-md-4(v-for='(item,index) in items')
          span.circle-icon.bg-primary
            i(v-position='"relative"' :class="item.icon")
          p.q-title.q-my-lg
            strong {{item.name}}
          p.q-body-1(v-for='skill in item.skills' :key='skill.name') {{skill.name}}
</template>

<script>
export default {
  computed: {
    items () {
      return [
        {
          name: 'CSS',
          icon: 'fab fa-css3-alt',
          skills: [
            {
              name: 'Vuetify',
              icon: './assets/otherSkills/vuetify.png'
            },
            {
              name: 'Materialize',
              icon: './assets/otherSkills/materialize.png'
            },
            {
              name: 'Quasar',
              icon: './assets/otherSkills/quasar.svg'
            },
            {
              name: 'Stylus',
              icon: './assets/otherSkills/stylus.svg'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.server'),
          icon: 'fas fa-server',
          skills: [
            {
              name: 'Heroku',
              icon: './assets/otherSkills/heroku.png'
            },
            {
              name: 'Zeit',
              icon: './assets/otherSkills/zeit.png'
            },
            {
              name: 'Digital Ocean',
              icon: './assets/otherSkills/digital.png'
            },
            {
              name: 'Nginx',
              icon: './assets/otherSkills/nginx.png'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.performances'),
          icon: 'fas fa-chart-line',
          skills: [
            {
              name: 'Redis',
              icon: './assets/otherSkills/redis.svg'
            },
            {
              name: 'Sidekiq',
              icon: './assets/otherSkills/sidekiq.svg'
            },
            {
              name: 'Nuxt',
              icon: './assets/otherSkills/nuxt.png'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.databases'),
          icon: 'fas fa-database',
          skills: [
            {
              name: 'MySQL',
              icon: './assets/otherSkills/mysql.jpg'
            },
            {
              name: 'Firebase',
              icon: './assets/otherSkills/firebase.png'
            },
            {
              name: 'MongoDB',
              icon: './assets/otherSkills/mongodb.png'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.seo'),
          icon: 'fab fa-searchengin',
          skills: [
            {
              name: 'Google Analytics',
              icon: './assets/otherSkills/analytics.jpg'
            },
            {
              name: 'XML Sitemaps',
              icon: './assets/otherSkills/xml.png'
            },
            {
              name: 'Credentials',
              icon: './assets/otherSkills/credentials.png'
            },
            {
              name: 'SERP Display',
              icon: './assets/otherSkills/serp.png'
            },
            {
              name: 'Schema structure',
              icon: './assets/otherSkills/schema.png'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.dev'),
          icon: 'fas fa-laptop',
          skills: [
            {
              name: 'Webpack',
              icon: './assets/otherSkills/webpack.png'
            },
            {
              name: 'Docker',
              icon: './assets/otherSkills/docker.jpg'
            },
            {
              name: 'Git',
              icon: './assets/otherSkills/git.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="css">
.circle-icon{
  width: 60px;
  height: 60px;
  display: inline-block;
  color: white;
  border-radius: 40px;
}
.circle-icon i{
  top: 16px;
  font-size: 24px;
}
</style>
