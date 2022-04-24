import { defineComponent } from 'vue';
import { Tabbar, TabbarItem } from '@nutui/nutui-taro';
import { View } from '@tarojs/components';

import './style.scss';

export default defineComponent({
  name: 'CustomTabBar',

  setup () {

  },

  render () {
    return (
      <View class='global-tabbar'>
        <Tabbar class='tabbar' safeAreaInsetBottom>
          <TabbarItem tabTitle='首页' icon='home'></TabbarItem>
          <TabbarItem tabTitle='分类' icon='category'></TabbarItem>
        </Tabbar>
      </View>
    );
  }
});
