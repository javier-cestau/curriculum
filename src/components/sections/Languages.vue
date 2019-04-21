<template lang="pug">
  q-list.row(
    no-border
    link
    inset-delimiter
    )
    div.col-xs-12
      div.bg-primary(style="width: 75px;height:2px;")
      q-list-header(v-center='') {{$t('sections.languages.title')}}
    div.col-sm-6.q-mt-lg.flex.flex-center(v-for="language in languages" :key="language.name")
      q-knob(
        v-model="language.percentage"
        :min="0"
        color="blue-10"
        :max="100"
      ) {{language.name}}
</template>

<script>
export default {
  computed: {
    languages () {
      return [
        {
          name: this.$t('sections.languages.attr.es'),
          percentage: 100
        },
        {
          name: this.$t('sections.languages.attr.en'),
          percentage: 70
        },
        {
          name: this.$t('sections.languages.attr.fr'),
          percentage: 30
        },
        {
          name: this.$t('sections.languages.attr.it'),
          percentage: 45
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
