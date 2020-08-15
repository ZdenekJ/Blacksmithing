<template>
  <div>
    <nav>
      <nuxt-link to="/" class="home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1220">
          <path
              d="M621 1c-6 3-12 6-18 13-4 4-8 11-20 33l-15 29-5-2c-6-3-15-4-21-2-7 3-10 7-18 22-8 14-9 20-7 28 1 5 8 13 14 15l4 3a1264 1264 0 01-44 88l47 25 71 36 23 12 22-43 23-44a332424 332424 0 00565 286c5 1 13-1 18-4 3-2 5-6 11-18 8-14 9-15 9-22 0-5-1-7-3-11l-6-7-57-30-427-219-71-37-6-3 15-29c16-31 18-37 17-48-1-9-5-19-11-23a1024 1024 0 00-99-49l-11 1zM432 688v14h-51v8H191L0 711l4 10c25 60 78 102 166 130 32 10 54 15 133 31l69 16c49 12 85 28 106 48 19 20 32 51 38 93 2 16 3 23 0 33-5 28-28 51-67 70l-29 12-15 5v61h172v-2l1-6 3-13c9-37 38-65 77-75 9-2 77-3 92-1a102 102 0 0191 90v7h152v-59l-8-4c-41-22-73-50-91-77-15-21-22-42-25-70-2-15-1-49 1-62 10-49 44-88 105-117a803 803 0 01164-48l18-4 1-53v-53H432v14zm-317 77a588 588 0 00266 64c6 2 13 9 14 14 3 10-1 18-10 22-5 3-6 3-17 2-15 0-41-3-59-7A423 423 0 0173 743l11 6 31 16z"/>
        </svg>
        Blacksmithing
      </nuxt-link>
    </nav>
    <nuxt/>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
nav{
  height: 3rem;
  box-shadow: 0 0 0.2rem 0 var(--text-color-main);
  display: flex;
  align-items: center;

  .home{
    height: 3rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;

    svg{
      height: 1.6rem;
      width: auto;
      margin-right: 0.5rem;
    }
  }

  a,
  a:active,
  a:hover{
    color: var(--text-color-main);
    text-decoration: none;
  }
}
h1{
  margin: 0 auto;
}
</style>