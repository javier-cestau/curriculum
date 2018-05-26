<template lang="pug">
  div
    div.row.flex
      div.col-xs-12
        q-list(inline="" no-border="" link="" inset-delimiter="")
          div.bg-primary(style="width: 75px;height:2px;")
          q-list-header(v-center='') {{$t('sections.education.title')}}
          q-item.black
            q-item-side
              img(style="width:50px;height:50px" src="assets/unimar.png")
            q-item-main
              q-item-tile(label='') {{$t('sections.education.attr.name')}}
              q-item-tile(sublabel='') UNIMAR
          q-item
            q-item-side
              q-item-tile( color="primary" icon='fas fa-map')
            q-item-main
              q-item-tile(label='') {{$t('sections.education.attr.country')}}
              q-item-tile(sublabel='') Venezuela
          q-item
            q-item-side
              q-item-tile( color="primary" icon='fas fa-book')
            q-item-main
              q-item-tile(label='') {{$t('sections.education.attr.degree')}}
              q-item-tile(sublabel='') {{$t('sections.education.attr.system')}}
          q-item
            q-item-side
              q-item-tile( color="primary" icon='fas fa-calendar-alt')
            q-item-main
              q-item-tile(label='') {{$t('sections.education.attr.year')}}
              q-item-tile(sublabel='') 2013-2017
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
