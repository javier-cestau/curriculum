<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('position', {
  // When the bound element is inserted into the DOM...
  bind: function (el, binding) {
    // Focus the element
    el.style.position = binding.value
  }
})

Vue.directive('center', {
  // When the bound element is inserted into the DOM...
  bind: function (el) {
    // Focus the element
    el.style.textAlign = 'center'
  }
})

Vue.directive('transition', {
  // When the bound element is inserted into the DOM...
  bind: function (el, binding) {
    // Focus the element
    el.style.transition = `all ${binding.value}s`
  }
})

Vue.mixin({
  methods: {
    google_a (url) {
      if (typeof ga === 'function') {
        ga('gtag_UA_119554236_1.send', 'event', {
          eventCategory: 'External Link',
          eventAction: 'click',
          eventLabel: url
        })
      }
    }
  }
})

export default {
  name: 'App'
}
</script>

<style>
</style>
