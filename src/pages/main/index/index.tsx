import { getHome } from '@/api/decorate/decorate';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { computed, defineComponent, h, ref } from 'vue';
import widgets from './widgets';

export default defineComponent({
  name: 'Index',

  setup () {
    const pageWidgets = ref<any[]>([]);
    const pageStyle = ref<any>({});

    const pageStyleComputed = computed(() => {
      return {
        backgroundColor: pageStyle.value.backgroundColor
      };
    });

    // 获取首页
    async function handleGetHome () {
      try {
        const response = await getHome();
        console.log(response);
        handleSetPage(response.data);
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

    function handleSetPage (pageData: any) {
      const freePage = pageData['free-page'];
      const freeHeader = pageData['free-header'];

      pageStyle.value = freePage;

      Taro.setBackgroundColor({
        backgroundColor: freePage.backgroundColor
      });
      Taro.setNavigationBarColor({
        backgroundColor: freeHeader.backgroundColor,
        frontColor: '#000000'
      });
      Taro.setNavigationBarTitle({
        title: freePage.title
      });
    }

    handleGetHome();

    return {
      pageWidgets,
      pageStyleComputed,
    };
  },

  render () {
    const {
      pageWidgets,
      pageStyleComputed,
    } = this;

    return (
      <View class='page' style={pageStyleComputed}>
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
