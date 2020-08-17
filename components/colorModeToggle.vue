<template>
  <div class="colorMode">
    <div class="colorMode__button colorMode__button--light" @click="lightMode">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.897 405.897">
        <path d="M202.948 118.395c-46.623 0-84.561 37.931-84.561 84.554 0 46.631 37.938 84.562 84.561 84.562 46.624 0 84.561-37.931 84.561-84.562 0-46.624-37.938-84.554-84.561-84.554zm0 141.056c-31.155 0-56.502-25.349-56.502-56.502 0-31.148 25.347-56.495 56.502-56.495s56.502 25.347 56.502 56.495c0 31.153-25.347 56.502-56.502 56.502zM202.948 98.59c7.749 0 14.03-6.282 14.03-14.029V14.03c0-7.748-6.281-14.029-14.03-14.029-7.748 0-14.029 6.281-14.029 14.029v70.531c-.001 7.747 6.28 14.029 14.029 14.029zM286.659 133.274c3.59 0 7.187-1.37 9.926-4.11l49.871-49.878c5.474-5.479 5.474-14.365-.008-19.838-5.479-5.48-14.357-5.48-19.838 0l-49.871 49.877c-5.48 5.48-5.48 14.365 0 19.839 2.74 2.74 6.33 4.11 9.92 4.11zM391.866 188.919l-70.531.007c-7.754 0-14.028 6.281-14.028 14.029s6.282 14.029 14.028 14.029l70.531-.007c7.748 0 14.031-6.28 14.031-14.029 0-7.748-6.283-14.029-14.031-14.029zM296.571 276.748c-5.48-5.479-14.357-5.479-19.838 0-5.481 5.479-5.48 14.365 0 19.839l49.877 49.87c2.74 2.74 6.33 4.109 9.92 4.109s7.186-1.369 9.926-4.109c5.474-5.479 5.474-14.365-.008-19.838l-49.877-49.871zM202.934 307.306c-7.748 0-14.022 6.282-14.022 14.028l.007 70.531c0 7.748 6.281 14.031 14.036 14.031 7.748 0 14.023-6.283 14.023-14.031l-.008-70.531c0-7.745-6.282-14.028-14.036-14.028zM109.303 276.74L59.44 326.619c-5.474 5.479-5.474 14.365.007 19.838 2.74 2.74 6.329 4.109 9.919 4.109s7.18-1.369 9.919-4.109l49.864-49.877c5.48-5.479 5.48-14.364 0-19.84-5.481-5.48-14.366-5.48-19.846 0zM98.589 202.949c0-7.748-6.282-14.029-14.029-14.029H14.029C6.281 188.92 0 195.201 0 202.949c0 7.749 6.281 14.03 14.029 14.03H84.56c7.747-.002 14.029-6.282 14.029-14.03zM109.317 129.15c2.74 2.74 6.33 4.11 9.92 4.11 3.589 0 7.179-1.37 9.919-4.11 5.48-5.48 5.48-14.365 0-19.839L79.285 59.448c-5.479-5.48-14.365-5.48-19.845 0-5.474 5.479-5.474 14.365.007 19.838l49.87 49.864z"/>
      </svg>

      <span>Light mode</span>
    </div>
    <div class="colorMode__button colorMode__button--dark" @click="darkMode">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            d="M495 331c-6-6-15-7-23-4a214 214 0 01-303-225c3-21 9-42 18-62a21 21 0 00-27-27C116 32 30 94 14 211c-26 186 139 285 218 289 56 3 190 8 267-145 4-8 2-18-4-24zM238 459A216 216 0 01132 79l-3 17c-27 194 143 283 218 289 29 3 58 4 86-2-46 57-120 87-195 76z"/>
      </svg>
      <span>Dark mode</span></div>
  </div>
</template>

<script>
export default {
  name: "colorModeToggle",
  methods: {
    lightMode() {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
      localStorage.setItem("theme", "lightMode");

    },
    darkMode() {
      document.body.classList.add("darkMode");
      document.body.classList.remove("lightMode");
      localStorage.setItem("theme", "darkMode");
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/scss/helpers/colors';
.colorMode{
  display: flex;
}
.colorMode__button{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 1rem;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;

  svg{
    height: 1.4rem;
    width: auto;
    margin-right: 0.6rem;
  }
}
.colorMode__button--light{
  color: $text-color-main-light;
  background-color: $background-color-main-light;
}
.colorMode__button--dark{
  color: $text-color-main-dark;
  background-color: $background-color-main-dark;
}
</style>