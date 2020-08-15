<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home page</nuxt-link></li>
      <li><nuxt-link to="/shouldering">Shouldering</nuxt-link></li>
    </ul>
  </div>
</template>

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