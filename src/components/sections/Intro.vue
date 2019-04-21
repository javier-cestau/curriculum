<template lang="pug">
  q-parallax.col-xs-12.background-cover(src="assets/bg_intro.jpg")
    div.position(v-center='' v-position='"absolute"')
      transition(appear enter-active-class="animated-3s fadeIn" :duration="{ enter: 10500, leave: 800 }" leave-active-class="animated fadeOut")
        img.responsive.circle.animated(src="~assets/front.jpg")
    span.name(v-position='"absolute"')
      p.q-display-1.text-white.q-ma-none#name(v-scroll-fire="typeName")
      p.q-subheading.text-white.q-mt-sm.q-ml-sx#position
      q-btn.animated-btn-github.q-ma-sm.bounceIn( @click="open('https://github.com/raxor123')" round color="white")
        q-icon(color="black" name="fab fa-github")
        q-tooltip(anchor="bottom middle"  self="top middle"  :offset="[10, 10]") raxor123
      q-btn.animated-btn-facebook.q-ma-sm.bounceIn( @click="open('https://linkedin.com/in/javier-cestau-774679161/')" round color="white")
        q-icon(color="black" name="fab fa-linkedin")
        q-tooltip(anchor="bottom middle"  self="top middle"  :offset="[10, 10]") javier-cestau
      q-btn.animated-btn-email.q-ma-sm.bounceIn( round color="white"   v-clipboard:copy="'javier.cestau1209@gmail.com'" v-clipboard:success="onCopy")
        q-icon(color="black" name="fas fa-envelope")
        q-tooltip(anchor="bottom middle"  self="top middle"  :offset="[10, 10]") javier.cestau1209@gmail.com
</template>

<script>
import TypeIt from 'typeit'
import {openURL} from 'quasar'

export default {
  methods: {
    typeName () {
      new TypeIt('#name', {
        afterComplete: function (step, queue, instance) {
          new TypeIt('#position', {
            afterComplete: function (step, queue, instance) {
            },
            speed: 45
          })
            .type('Back-end/Front-end Web developer')
        },
        speed: 45
      })
        .pause(1000)
        .type('Javier ')
        .pause(100)
        .type('C')
        .pause(200)
        .type('e')
        .pause(200)
        .type('s')
        .pause(200)
        .type('t')
        .pause(100)
        .type('a')
        .pause(100)
        .type('u')
    },
    open (url) {
      this.google_a(url)
      openURL(url)
    },
    onCopy () {
      this.google_a('/copy_email')
      this.$q.notify({
        message: `Email was copied to clipboard`,
        timeout: 2000,
        icon: 'fas fa-copy',
        color: 'green',
        position: 'bottom'
      })
    }
  }
}
</script>

<style lang="css">
.background-cover{
  height: 93vh !important;
}

.position{
  width: 175px;
  transform: translateY(-50%);
  margin: 0 auto;
  left: 0;
  right: 0;
}

.name{
  text-align: center;
  width: 325px;
  top: 53%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1
}

.animated-3s{
  animation-duration: 2s;
  animation-delay: 4.5s;
  animation-fill-mode: both;
}

.animated-btn-github{
  animation-duration: 2s;
  animation-delay: 4.5s;
  animation-fill-mode: both;
}
.animated-btn-facebook{
  animation-duration: 2s;
  animation-delay: 4.7s;
  animation-fill-mode: both;
}
.animated-btn-email{
  animation-duration: 2s;
  animation-delay: 4.9s;
  animation-fill-mode: both;
}
.q-parallax-image img{
  transform: translate3d(-50%, 287px, 0px) !important;
  filter: brightness(50%);
}
</style>
