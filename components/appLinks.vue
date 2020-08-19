<template>
  <div>
    <ul>
      <li @click="closeMenu"><nuxt-link to="/">{{ $t("pages.hp") }}</nuxt-link></li>
      <li @click="closeMenu"><nuxt-link to="/shouldering">{{ $t("pages.shouldering") }}</nuxt-link></li>
    </ul>
  </div>
</template>
<script>

export default {
  methods:{
    closeMenu() {
      this.$store.commit('menu/close');
    }
  }
}
</script>
<style scoped>
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a,
a:hover,
a:active,
a:visited{
  color: var(--text-color-main);
}
a{
  display: block;
  min-height: 3rem;
  padding: 1rem;
}


</style>