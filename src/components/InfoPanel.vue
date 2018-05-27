<template lang="pug">
  div.row
    div.col-xs-12
      intro
    div.col-xs-12.height-menu
      menu-toolbar(:references='$refs')
    div.col-md-4.q-pa-sm.bg-grey-1(ref="personal")
      languages
    div.col-md-4.q-pa-sm
      personal-info
    div.col-md-4.q-pa-sm.bg-grey-1
      education
    div.col-xs-12.q-px-xl.q-pt-xl(ref='skills')
      div.bg-primary(style="width: 75px;height:2px;")
      h3 {{$t('sections.skills.title')}}
    div.col-xs-12
      skills
    div.col-xs-12(v-center='' ref='moreskills')
      others-skills
    div.col-xs-12.q-pa-xl(ref='work')
      div.bg-primary(style="width: 75px;height:2px;")
      h3 {{$t('sections.workExperience.title')}}
      work-experience
    div.justify-center.col-md-12.q-pa-xl(ref='certificates')
      div.bg-primary(style="width: 75px;height:2px;")
      h3.q-mb-none {{$t('sections.certificates.title')}}
      Certificates
    div.col-md-12.q-pa-xl(ref='recommendations')
      div.bg-primary(style="width: 75px;height:2px;")
      h3 {{$t('sections.recommendations.title')}}
      recommendations
    div.col-md-12(ref='hireme')
      hire
</template>

<script>
import Intro from 'sections/Intro.vue'
import MenuToolbar from 'components/MenuToolbar.vue'
import PersonalInfo from 'sections/PersonalInfo.vue'
import Education from 'sections/Education.vue'
import Languages from 'sections/Languages.vue'
import WorkExperience from 'sections/WorkExperience.vue'
import Skills from 'sections/Skills.vue'
import OthersSkills from 'sections/OthersSkills.vue'
import Recommendations from 'sections/Recommendations.vue'
import Certificates from 'sections/Certificates.vue'
import Hire from 'sections/Hire.vue'

import TypeIt from 'typeit'

export default {
  name: 'InfoPanel',
  components: {
    Intro,
    PersonalInfo,
    Certificates,
    Languages,
    WorkExperience,
    Skills,
    OthersSkills,
    Recommendations,
    Education,
    Hire,
    MenuToolbar
  },
  data () {
    return {
      companion: false,
      message_bubble: 'Hello, How can I help you?'
    }
  },
  mounted () {
    // this.$root.$on('speak', this.speak)
    new TypeIt('.bubble', {
      cursor: false
    })
      .type(' Hello, how can I help you?')
  },
  methods: {
    speak (message) {
      this.$refs.mouth.classList.add('mouth-animation')
      new TypeIt('.bubble', {
        afterComplete: function (step, queue, instance) {
          this.$refs.mouth.classList.remove('mouth-animation')
          // new TypeIt('#position', {
          //   afterComplete: function (step, queue, instance) {
          //   },
          //   speed: 45
          // })
          //   .type('Back-end/Front-end Web developer')
        }.bind(this),
        cursor: false,
        speed: 45
      })
        .type(message)
    },
    closeFace () {
      this.companion = false
      this.message_bubble = 'Bye'
    },
    showCompanion () {
      this.companion = true
    }
  }
}
</script>

<style>

.circle {
     border-radius: 550px;
     border: 3px solid #555;
     background: #428bca;
     width: 175px;
}

.name{
  top: 15px;;
  left: 20px;;
  z-index: 1
}

.height-menu{
  height: 50px;
}

.face {
  transition: all 0.5s;
  z-index: 8000;
  position: fixed;
  width: 55px;
  height: 55px;
  background: #FCFCFC;
  border-radius: 50%;
  border: 1px solid #777777;
  bottom: 15px;
  right: 15px;
  z-index: 2;
  animation: bounce 1s ease-in infinite;
}

.eye {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #777777;
  border-radius: 50%;
  top: 40%;
  left: 20%;
}

.right {
  left: 68%;
}

.mouth {
  position: absolute;
  top: 43%;
  left: 41%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.happy {
  border: 2px solid;
  border-color: transparent #777777 #777777 transparent;
  transform: rotate(45deg);
}

.shadow {
  position: fixed;
  width: 50px;
  height: 5px;
  opacity: 0.5;
  background: #777777;
  right: 12px;
  bottom: 2px;
  border-radius: 50%;
  filter: invert(100%);
  z-index: 8000;
  transition: all 1s;
  animation: translate-x 1s ease-in infinite;

}

.mouth-animation {
  animation: mouth 0.15s ease infinite;
  animation-direction: alternate-reverse;
}

@keyframes bounce {
  50% {
    transform: translateY(-10px);
  }
}
@keyframes bounce-bubble {
  50% {
    transform: translateY(-5px);
  }
}
@keyframes mouth {
  0% {
    border-width: 2px;
  }
  100% {
    border-width: 5px;
  }
}
@keyframes translate-x {
  50% {
    transform: translateX(-3px);
  }
}
@keyframes move-out-x {
  0% {
    right: 0px;
  }
  100% {
    right: -70px;
  }
}
@keyframes move-in-x {
  0% {
    right: -70px;
  }
  100% {
    right: 0px;
  }
}

@keyframes roll-right {
  0% {
    transform: rotate(0deg);
    right: 15px;
  }

  100% {
    transform: rotate(360deg);
    right: -70px;
  }
}
@keyframes roll-left {
  0% {
    transform: rotate(360deg);
    right: -70px;
  }

  100% {
    transform: rotate(0deg);
    right: 15px;
  }
}

.bubble {
  background: #f99;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 1px 9px;
  color: #fff;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  bottom: 100px;
  right: 23px;
  width: 200px;
}

.bubble:after {
  border-color: transparent #f99 #f99 transparent;
  border-style: solid;
  border-width: 10px;
  bottom: -10px;
  content: "";
  right: 15px;
  position: absolute;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
/* aniamtoin class*/

.face-enter-active {
  animation: roll-left 1s ease-in;
}
.shadow-enter-active {
  animation: move-in-x 1s ease-in;
}
.face-leave-active {
  animation: roll-right 1.5s ease-in;
}
.shadow-leave-active {
  animation: move-out-x 1.5s ease-in;
}

</style>
