import { View } from '@tarojs/components';
import { defineComponent, reactive } from 'vue';
import { Tabs, TabPane } from '@nutui/nutui-taro';

import './style.scss';

export default defineComponent({
  name: 'Category',

  setup () {
    const model = reactive({
      currentTab: 0
    });

    return {
      model,
    };
  },

  render () {
    const {
      model,
    } = this;

    return (
      <View class='page page-category'>
        <View class='page-header'>
          header
        </View>
        <View class='page-tabs'>
          <Tabs style={{height: '100%'}} v-model={model.currentTab} titleScroll direction='vertical'>
            {[...Array(20)].map((_, item) => {
              return <TabPane title={`Tab ${item}`}>
                Tab {{item}}
              </TabPane>;
            })}
          </Tabs>
        </View>
      </View>
    );
  }
});
