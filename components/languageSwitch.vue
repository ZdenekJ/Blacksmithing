<template>
  <div class="languageSwitch">
    <div class="languageSwitch__button" @click="setCZE">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0"
           viewBox="0 0 900 600">
        <path fill="#d7141a" d="M0 300h900v300H0z"/>
        <path fill="#fff" d="M0 0h900v300H0z"/>
        <path fill="#11457e" d="M450 300L0 0v600z"/>
      </svg>
      <span>Česky</span></div>
    <div class="languageSwitch__button" @click="setENG">
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1235 650">
        <defs>
          <g id="b">
            <use transform="rotate(-144)" xlink:href="#a"/>
            <use transform="rotate(-72)" xlink:href="#a"/>
            <use xlink:href="#a"/>
            <use transform="rotate(72)" xlink:href="#a"/>
            <use transform="rotate(144)" xlink:href="#a"/>
          </g>
          <g id="c">
            <use x="-.252" xlink:href="#b"/>
            <use x="-.126" xlink:href="#b"/>
            <use xlink:href="#b"/>
            <use x=".126" xlink:href="#b"/>
            <use x=".252" xlink:href="#b"/>
          </g>
          <g id="d">
            <use x="-.063" xlink:href="#c"/>
            <use x=".315" xlink:href="#b"/>
          </g>
          <g id="e">
            <use xlink:href="#d"/>
            <use y=".054" xlink:href="#c"/>
            <use y=".108" xlink:href="#d"/>
            <use y=".162" xlink:href="#c"/>
          </g>
          <g id="g">
            <use y="-.216" xlink:href="#e"/>
            <use xlink:href="#e"/>
            <use y=".216" xlink:href="#d"/>
          </g>
          <path id="a" fill="#FFF" d="M-.162 0L0-.5l.162.5z"
                transform="scale(.0616)"/>
          <path id="f" fill="#BB133E" d="M0 0h1235v50H0z"/>
        </defs>
        <path fill="#FFF" d="M0 0h1235v650H0z"/>
        <use xlink:href="#f"/>
        <use y="100" xlink:href="#f"/>
        <use y="200" xlink:href="#f"/>
        <use y="300" xlink:href="#f"/>
        <use y="400" xlink:href="#f"/>
        <use y="500" xlink:href="#f"/>
        <use y="600" xlink:href="#f"/>
        <path fill="#002664" d="M0 0h494v350H0z"/>
        <use transform="matrix(650 0 0 650 247 175)" xlink:href="#g"/>
      </svg>
      <span>English</span></div>
  </div>
</template>

<script>
export default {
  name: "languageSwitch",
  methods: {
    setCZE() {
      this.$i18n.locale = 'cs';
      localStorage.setItem("language", "cs");

    },
    setENG() {
      this.$i18n.locale = 'en';
      localStorage.setItem("language", "en");
    }
  }
}
</script>

<style lang="scss">
.languageSwitch{
  display: flex;
  border-top: 1px solid var(--text-color-main);
}
.languageSwitch__button{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 1rem;
  width: 50%;
  text-align: center;
  cursor: pointer;

  svg{
    height: 1.4rem;
    width: auto;
    margin-right: 0.6rem;
    fill: inherit;
    stroke: inherit;
  }

  & + .languageSwitch__button{
    border-left: 1px solid var(--text-color-main);
  }
}

</style>