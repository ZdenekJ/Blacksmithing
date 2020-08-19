<template>
  <div class="menu">
    <div class="menu__button" :class="{'menu__button--close' : showMenu}" @click="toggleMenu">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <line class="menu__line menu__line--1" stroke-width="2"
              stroke-linecap="round" x1="0" y1="3"
              x2="24" y2="3"></line>
        <line class="menu__line menu__line--2" stroke-width="2"
              stroke-linecap="round" x1="0" y1="12"
              x2="24" y2="12"></line>
        <line class="menu__line menu__line--3" stroke-width="2"
              stroke-linecap="round" x1="0" y1="21"
              x2="24" y2="21"></line>
      </svg>
      <span v-if="!showMenu">{{ $t("menu.open")}}</span>
      <span v-else>{{ $t("menu.close")}}</span></div>
    <transition name="menuShow">
      <div class="menu__popup" v-show="showMenu">
        <appLinks></appLinks>
        <colorModeToggle></colorModeToggle>
        <languageSwitch></languageSwitch>
      </div>
    </transition>
  </div>
</template>

<script>
import appLinks from "@/components/appLinks";
import colorModeToggle from "@/components/colorModeToggle";
import languageSwitch from "@/components/languageSwitch";

import {mapGetters} from "vuex";

export default {
  components: {appLinks, colorModeToggle, languageSwitch},
  computed: {
    ...mapGetters({
      showMenu: 'menu/show'
      })
  },
  methods:{
    openMenu() {
      this.$store.commit('menu/open');
    },
    closeMenu() {
      this.$store.commit('menu/close');
    },
    toggleMenu() {
      this.$store.commit('menu/toggle');
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{

}
.menu__button{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;

  &:hover{
    cursor: pointer;
  }

  svg{
    display: block;
    flex-shrink: 0;
    width: 1.125rem;
    height: 1.125rem;
  }

  span{
    text-transform: uppercase;
    font-size: 0.5rem;
    font-weight: bold;
  }
}
.menu__popup{
  position: absolute;
  top: 3.125rem;
  right: 0;
  width: 80%;
  max-width: 480px;
  border-bottom: 1px solid var(--text-color-main);
  border-left: 1px solid var(--text-color-main);
  background: var(--background-color-main);
}

.menuShow-enter-active, .menuShow-leave-active {
  transition: all .5s;
}
.menuShow-enter, .menuShow-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.menu__line{
  transition: transform 0.3s ease-in-out;
  transform-origin: left center;
}
.menu__button--close{

  .menu__line--2{
    opacity: 0;
  }
  .menu__line--1{
    transform: rotate(45deg) translateX(-10%);
  }
  .menu__line--3{
    transform: rotate(-45deg) translateX(-10%);
  }


}
</style>

<style lang="scss">

.menu__popup{

  li + li,
  .colorMode{
    border-top: 1px solid  var(--text-color-main);
  }

}

</style>