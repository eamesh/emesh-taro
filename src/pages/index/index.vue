<template>
  <view class="index">
    <TitleText id={1} />
    <WhiteHeight id={2} />
  </view>
</template>

<script>
import TitleText from '@/components/free/title-text';
import WhiteHeight from '@/components/free/white-height';
import { getHome } from '@/api/decorate/decorate';

export default {
  name: 'Index',
  components: {
    TitleText,
    WhiteHeight
  },
  setup(){
    async function handleGetHome () {
      const response = await getHome();
      console.log(response);
    }

    handleGetHome();
  }
};
</script>

<style lang="scss">
.index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
