<template lang="pug">
  div
    q-list(
      no-border
      link
      inset-delimiter
      )
      div.bg-primary(style="width: 75px;height:2px;")
      q-list-header(v-center='') {{$t('sections.personalInfo.title')}}
      q-item(:key="index" v-for="(information,index) in informations")
        q-item-side( :icon="information.icon")
        q-item-main(:label="information.label" :sublabel="information.sublabel")
</template>

<script>
export default {
  computed: {
    informations () {
      return [
        {
          label: this.$t('sections.personalInfo.attr.date.label'),
          sublabel: this.$t('sections.personalInfo.attr.date.sublabel'),
          icon: 'fas fa-calendar-alt'
        },
        {
          label: this.$t('sections.personalInfo.attr.address.label'),
          sublabel: this.$t('sections.personalInfo.attr.address.sublabel'),
          icon: 'fas fa-map-marker-alt'
        },
        {
          label: this.$t('sections.personalInfo.attr.phoneNumber.label'),
          sublabel: this.$t('sections.personalInfo.attr.phoneNumber.sublabel'),
          icon: 'fas fa-address-book'
        },
        {
          label: this.$t('sections.personalInfo.attr.nationality.label'),
          sublabel: this.$t('sections.personalInfo.attr.nationality.sublabel'),
          icon: 'fas fa-id-card'
        },
        {
          label: this.$t('sections.personalInfo.attr.motherLanguage.label'),
          sublabel: this.$t('sections.personalInfo.attr.motherLanguage.sublabel'),
          icon: 'fas fa-language'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
