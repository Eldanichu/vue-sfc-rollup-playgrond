<template>
  <div class="bg-gray-800 index-warp">
    hello Vue,
    <span class="footer"> welcome to use webpack!</span>
    <EldanUiDrawer :disp="true" top="300">
      <div class="bg-gray-400">
        drawer
      </div>
    </EldanUiDrawer>
    <EldanUiProgress></EldanUiProgress>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>

</style>
