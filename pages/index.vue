<template>
  <article>
    <appLinks></appLinks>
  </article>
</template>

<script>
import appLinks from "@/components/appLinks";

export default {
  components: { appLinks },
    methods: {
      /**
       * Called when a language button is clicked
       * Changes the i18n context variable's locale to the one selected
       */
      changeLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
}
</script>