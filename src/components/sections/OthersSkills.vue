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
              name: 'Vuetify'
            },
            {
              name: 'Materialize'
            },
            {
              name: 'Quasar'
            },
            {
              name: 'Stylus'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.server'),
          icon: 'fas fa-server',
          skills: [
            {
              name: 'Heroku'
            },
            {
              name: 'Zeit'
            },
            {
              name: 'Digital Ocean'
            },
            {
              name: 'Nginx'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.performances'),
          icon: 'fas fa-chart-line',
          skills: [
            {
              name: 'Redis'
            },
            {
              name: 'Sidekiq'
            },
            {
              name: 'Nuxt'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.databases'),
          icon: 'fas fa-database',
          skills: [
            {
              name: 'MySQL'
            },
            {
              name: 'Firebase'
            },
            {
              name: 'MongoDB'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.seo'),
          icon: 'fab fa-searchengin',
          skills: [
            {
              name: 'Google Analytics'
            },
            {
              name: 'XML Sitemaps'
            },
            {
              name: 'Credentials'
            },
            {
              name: 'SERP Display'
            },
            {
              name: 'Schema structure'
            }
          ]
        },
        {
          name: this.$t('sections.skills.attr.dev'),
          icon: 'fas fa-laptop',
          skills: [
            {
              name: 'Webpack'
            },
            {
              name: 'Eslint'
            },
            {
              name: 'Docker'
            },
            {
              name: 'Git'
            },
            {
              name: 'Babel'
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
