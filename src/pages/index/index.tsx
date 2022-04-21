import { getHome } from '@/api/decorate/decorate';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { defineComponent, h, ref } from 'vue';
import widgets from './widgets';

export default defineComponent({
  name: 'Index',

  setup () {
    const pageWidgets = ref<any[]>([]);

    // 获取首页
    async function handleGetHome () {
      try {
        const response = await getHome();
        console.log(response);
        handleSetPageTitle(response.title);

        handleWidgets(response.data.page);
      } catch (error) {
        console.log(error);
      }
    }

    function handleWidgets (page: any[]) {
      page.forEach((data) => {
        Object.prototype.hasOwnProperty.call(widgets, data.key) ? pageWidgets.value.push({
          ...data,
          widget: widgets[data.key]
        }) : console.log(`Widget =======> ${data.key} 不存在`);
      });
    }

    function handleSetPageTitle (title: string) {
      Taro.setNavigationBarTitle({
        title
      });
    }

    handleGetHome();

    return {
      pageWidgets
    };
  },

  render () {
    const {
      pageWidgets
    } = this;

    return (
      <View class='index'>
        {pageWidgets.map(({ widget, data }, id) => {
          return h(widget, {
            id,
            data
          });
        })}
      </View>
    );
  }
});
