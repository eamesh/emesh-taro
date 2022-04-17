<template>
  <view class="index">
    <TitleText id={1} />
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import TitleText from '../../components/free/title-text';

export default {
  name: 'Index',
  components: {
    TitleText
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    };
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
