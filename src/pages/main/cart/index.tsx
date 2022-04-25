import { View } from '@tarojs/components';
import { defineComponent } from 'vue';
import { Button } from '@nutui/nutui-taro';
import { redirectTo } from '@/utils/common';

export default defineComponent({
  name: 'Cart',

  setup () {
    //
  },

  render () {
    return (
      <View class='page'>
        <Button onClick={() => redirectTo('/pages/goods/detail/index')}>商品详情</Button>
      </View>
    );
  }
});
