import { getHome } from '@/api/decorate/decorate';
import { View } from '@tarojs/components';
import { defineComponent, h } from 'vue';
import widgets from './widgets';

export default defineComponent({
  name: 'Index',

  setup () {
    // 获取首页
    async function handleGetHome () {
      try {
        const response = await getHome();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    handleGetHome();
  },

  render () {
    return (
      <View class='index'>
        {Object.values(widgets).map((widget, index) => {
          return h(widget, {
            id: index
          });
        })}
      </View>
    );
  }
});
