import { defineComponent } from 'vue';
import { View } from '@tarojs/components';

import './style.scss';

const actionBarProps = {
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  }
};

export default defineComponent({
  name: 'ActionBar',

  props: actionBarProps,

  setup () {

  },

  render () {
    const {
      $slots,
      safeAreaInsetBottom
    } = this;

    return (
      <View class={[
        'action-bar',
        {
          'safe-area-bottom': safeAreaInsetBottom
        }
      ]}>
        {$slots.default()}
      </View>
    );
  }
});
