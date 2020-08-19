<template>
  <div>
    <navBar></navBar>
    <nuxt/>
  </div>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  components: {navBar},
  mounted() {
    const currentTheme = localStorage.getItem("theme");
    const currentLanguage = localStorage.getItem("language");

    // If the current theme in localStorage is "darkMode"...
    if (currentTheme === "darkMode")
    {
      document.body.classList.add("darkMode");
      document.body.classList.remove("lightMode");
    }
    else if(currentTheme === "lightMode")
    {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
    }

    if(currentLanguage !== null)
    {
      this.$i18n.locale = currentLanguage;
    }
    else
    {
      this.$i18n.locale = navigator.language.split('-')[0];
    }
  }
}

</script>

<style lang="scss" scoped>

</style>