<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
document.addEventListener("DOMContentLoaded", () => {
  let winWidth = window.innerWidth;
  let fontSize = winWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  const html = document.querySelector("html");
  html.style.fontSize = fontSize + "px";
});
</script>

<style lang="less">
@import url("../src/assets/css/global.less");
#app {
  // font-family: "Days One";
}
</style>