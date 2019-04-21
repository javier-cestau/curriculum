<template lang="pug">
  div
    .row.justify-center
      .col-xs-12.col-md-6.col-lg-6.row.gutter-sm.relative-position
        .absolute-top(v-scroll-fire="sendAssistant")
        .col-xs-12.col-sm-6.col-lg-4.q-pa-none(v-for="certificate in certificates" v-center="")
          .main-wrapper
            .badge.yellow.transition(@click="open(certificate.url)" :id="certificate.id")
              .circle
                img(:src="certificate.logo")
              .ribbon {{certificate.title}}
</template>

<script>
import {openURL} from 'quasar'

export default {
  data () {
    return {
      certificates: [
        {
          title: 'Ruby on Rails',
          logo: './assets/certificates/ror.png',
          id: 'ror',
          url: 'https://platzi.com/@javier_cestau/curso/ruby-on-rails/diploma/'
        },
        {
          title: 'Ruby',
          id: 'ruby',
          logo: './assets/certificates/ruby.png',
          url: 'https://platzi.com/@javier_cestau/curso/ruby/diploma/'
        },
        {
          title: 'Javascript Fundaments',
          id: 'javascript',
          logo: './assets/certificates/javascript.png',
          url: 'https://platzi.com/@javier_cestau/curso/fundamentos-javascript/diploma/'
        },
        {
          title: 'Node.js Basics',
          id: 'nodejs',
          logo: './assets/certificates/nodejs_basics.png',
          url: 'https://platzi.com/@javier_cestau/curso/1380-basico-nodejs/diploma/detalle/'
        },
        {
          title: 'Node.js Essentials',
          id: 'nodejs',
          logo: './assets/certificates/nodejs_essentials.png',
          url: 'https://platzi.com/@javier_cestau/curso/1381-node-js/diploma/detalle/'
        },
        {
          title: 'Advanced Node.js',
          id: 'nodejs',
          logo: './assets/certificates/nodejs_advance.png',
          url: 'https://platzi.com/@javier_cestau/curso/1151-nodejs/diploma/detalle/'
        },
        {
          title: 'Sails.js',
          id: 'sails',
          logo: './assets/certificates/sails.png',
          url: 'https://platzi.com/@javier_cestau/curso/1197-javascript-pro/diploma/detalle/'
        },
        {
          title: 'React.JS',
          id: 'react',
          logo: './assets/certificates/react.png',
          url: 'https://platzi.com/@javier_cestau/curso/react/diploma/'
        },
        {
          title: 'Redux',
          id: 'redux',
          logo: './assets/certificates/redux.png',
          url: 'https://platzi.com/@javier_cestau/curso/redux/diploma/'
        },
        {
          title: 'React Native',
          id: 'react',
          logo: './assets/certificates/react_native.png',
          url: 'https://platzi.com/@javier_cestau/curso/react-native/diploma/'
        },
        {
          title: 'React Navigation',
          id: 'react',
          logo: './assets/certificates/react_navigation.png',
          url: 'https://platzi.com/@javier_cestau/curso/react-navigation/diploma/'
        },
        {
          title: 'Vue.js Profesional',
          id: 'vuejs',
          logo: './assets/certificates/vuejs.png',
          url: 'https://platzi.com/@javier_cestau/curso/vuejs-profesional/diploma/'
        },
        {
          title: 'Webpack',
          id: 'webpack',
          logo: './assets/certificates/webpack.png',
          url: 'https://platzi.com/@javier_cestau/curso/webpack/diploma/'
        },
        {
          title: 'Wordpress',
          id: 'wordpress',
          logo: './assets/certificates/wordpress.png',
          url: 'https://platzi.com/@javier_cestau/curso/wordpress/diploma/'
        },
        {
          title: 'PostgreSQL',
          id: 'postgresql',
          logo: './assets/certificates/postgresql.png',
          url: 'https://platzi.com/@javier_cestau/curso/postgresql/diploma/'
        },
        {
          title: 'MongoDB y Redis',
          id: 'mongodb',
          logo: './assets/certificates/mongodb-redis.png',
          url: 'https://platzi.com/@javier_cestau/curso/mongodb-redis/diploma/'
        },
        {
          title: 'MongoDB for nodejs',
          id: 'mongodb_node',
          logo: './assets/certificates/university-mongodb.png',
          url: 'https://university.mongodb.com/course_completion/38de2711-7890-4fea-a364-ab00b4bc'
        },
        {
          title: 'Amazon Web services',
          id: 'aws',
          logo: './assets/certificates/aws.png',
          url: 'https://platzi.com/@javier_cestau/curso/amazon-web-services/diploma/'
        },
        {
          title: 'Heroku',
          id: 'heroku',
          logo: './assets/certificates/heroku.png',
          url: 'https://platzi.com/@javier_cestau/curso/heroku-2015/diploma/'
        },
        {
          title: 'Git y Github',
          id: 'github',
          logo: './assets/certificates/github.png',
          url: 'https://platzi.com/@javier_cestau/curso/git-github/diploma/'
        },
        {
          title: 'SEO',
          id: 'seo',
          logo: './assets/certificates/seo.png',
          url: 'https://platzi.com/@javier_cestau/curso/posicionamiento-buscadores/diploma/'
        },
        {
          title: 'English for STEM',
          id: 'stem',
          logo: './assets/certificates/stem.png',
          url: 'https://www.coursera.org/account/accomplishments/verify/AK8JEF53VJFW'
        }
      ]
    }
  },
  methods: {
    sendAssistant () {
      this.$root.$emit('speak', 'You can click the certificates')
    },
    open (url) {
      this.google_a(url)
      openURL(url)
    }
  }
}
</script>

<style lang="stylus">
.width-85 img
  width: 85px
  height: 85px

.main-wrapper {
  width: 90%;
  max-width: 900px;
  margin: 3em auto;
  text-align: center;
}

.badge {
  cursor: pointer;
  position: relative;
  margin: 1.5em 3em;
  width: 6em;
  height: 10.2em;
  border-radius: 10px;
  display: inline-block;
  top: 0;
  transition: all 0.2s ease;
}
.badge:before, .badge:after {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: inherit;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.badge:before {
  transform: rotate(60deg);
}
.badge:after {
  transform: rotate(-60deg);
}

.badge .circle {
  width: 100px;
  height: 100px;
  position: absolute;
  background: #fff;
  z-index: 10;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.badge .circle img {
  width: 93px;
}
.badge .font {
  display: inline-block;
  margin-top: 1em;
}
.badge .ribbon {
  position: absolute;
  border-radius: 4px;
  padding: 5px 5px 4px;
  width: 108px;
  z-index: 11;
  color: #fff;
  bottom: 0px;
  left: 53%;
  margin-left: -55px;
  height: auto;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  background: linear-gradient(to bottom right, #555 0%, #333 100%);
  cursor: default;
}

.yellow {
  background: linear-gradient(to bottom right, #ffec9d 0%, #c28509);
  color: #ffb300;
}
#ror:hover {

 -webkit-transition: background 1000ms linear;
 -ms-transition: background 1000ms linear;
 transition: background 1000ms linear;
  background: linear-gradient(to bottom right, #f81121 0%, #fba0a5 100%);
  color: #b7892b;
}
#ruby:hover {
  background: linear-gradient(to bottom right, #f81121 0%, #fba0a5 100%);
}
#vuejs:hover {
  background: linear-gradient(to bottom right, #efdb4f 0%, #ffed6d 100%);
}
#react:hover, #redux:hover  {
  background: linear-gradient(to bottom right, #5fd4e6 0%, #07303e 100%);
}
#webpack:hover {
  background: linear-gradient(to bottom right, #efd658 0%, #ffffff 100%);
}
#postgresql:hover {
  background: linear-gradient(to bottom right, #fcdb04 0%, #fff08e 100%);
}
#mongodb_node:hover {
  background: linear-gradient(to bottom right, #5c8656 0%, #58a84b);
}
#mongodb:hover {
  background: linear-gradient(to bottom right, #3edeff 0%, #2b5bff 100%);
}
#javascript:hover, #aws:hover, #heroku:hover, #nodejs:hover {
  background: linear-gradient(to bottom right, #f4d934 0%, #dcc00f 100%);
}
#github:hover {
  background: linear-gradient(to bottom right, #97ca3e 0%, #daff99 100%);
}
#wordpress:hover {
  background: linear-gradient(to bottom right, #7f22ff 0%, #7faeff 100%);
}
#seo:hover {
  background: linear-gradient(to bottom right, #a7e6f8 0%, #36bfee 100%);
}
#stem:hover {
  background: linear-gradient(to bottom right, #c3c5c8 0%, #e1e8ed 100%);
}
#sails:hover {
  background: linear-gradient(to bottom right, #238da0 0%, #e1e8ed 100%);
}
</style>
