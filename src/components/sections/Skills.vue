<template lang="pug">
  div.q-pa-xl
    ul.q-pa-none.skills-bar-container(v-scroll-fire="addAnimation")
      li.q-mt-lg(  v-for="(language,index) in languages" :key="language.id")
        div.progressbar-title
          p.q-title
            span {{language.name}}
            img.q-ml-sm(v-position='"relative"' style="top:9px;width: 32px;" :src="language.icon")
          span.percentage.q-mt-sm {{language.year}}
        div
          q-progress(height='10px' animate stripe :buffer='100' :percentage='language.percentage' :color="language.color")
          //- span.progressbar( :class="'bg-'+language.color" :ref="language.id" :id="language.id+'-progress'")
</template>

<script>
export default {
  data () {
    return {
      languages: [
        {
          name: 'Ruby on Rails',
          percentage: 100,
          icon: './assets/rails.png',
          year: '5+ years',
          color: 'red',
          id: 'rails'
        },
        {
          name: 'Nodejs',
          percentage: 60,
          icon: './assets/nodejs.png',
          year: '3+ years',
          color: 'nodejs',
          id: 'javascript'
        },
        {
          name: 'VueJs',
          percentage: 60,
          icon: './assets/vuejs.svg',
          year: '3+ years',
          color: 'vuejs',
          id: 'vuejs'
        },
        {
          name: 'React',
          percentage: 30,
          year: '1+ years',
          icon: './assets/react.svg',
          color: 'react',
          id: 'react'
        },
        {
          name: 'PostgreSQL',
          percentage: 100,
          year: '5+ years',
          icon: './assets/postgresql.png',
          color: 'postgres',
          id: 'postgres'
        },
        {
          name: 'Amazon Web Services',
          percentage: 60,
          year: '3+ years',
          icon: './assets/aws.svg',
          color: 'aws',
          id: 'aws'
        }
      ]
    }
  },
  methods: {
    addAnimation (el) {
      let counter = 1
      // for (let language of this.languages) {
      //   var ref = this.$refs[language.id]
      //   ref[0].style.animationName = `${language.id}-progress`
      //   ref[0].style.animationDelay = counter * 0.7
      //   counter++
      // }
    }
  }
}
</script>

<style lang="scss">

// colors
$background-color: #1a1a1a;
$progressbar-title-color: black;

@mixin border-radius($radius){
-webkit-border-radius: $radius;
   -moz-border-radius: $radius;
    -ms-border-radius: $radius;
        border-radius: $radius;
}

.skills-bar-container{
list-style:none;
margin: 0;
li{
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  .progressbar-title{
    color: $progressbar-title-color;

    h3{
      display: inline-block;
    }
    .percentage{
      position: absolute;
      right: 5px;
    }
  }// end progressbar-title

  .bar-container{
    background: #555;
    position: relative;
    width: 100%;
    height: 5px;
    margin-top: 5px;
    display: block;
    @include border-radius(5px);

    .progressbar{
      position:absolute;
      width:0%;
      height: 100%;
      @include border-radius(5px);

      -webkit-animation-duration: 2s;
      animation-duration: 2s;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
  }// end bar-container
}
}

$list: (
  rails: 100%,
  javascript: 75%,
  );

@each $language,$percentage in $list {
  @keyframes #{$language}-progress {
    0% {
      width: 0%;
    }

    100% {
      width: $percentage;
    }
  }
}
</style>
