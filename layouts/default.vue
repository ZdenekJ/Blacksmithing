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
  }
}

</script>

<style lang="scss" scoped>

</style>