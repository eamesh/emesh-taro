import { Button } from '@nutui/nutui-taro';
import { Text } from '@tarojs/components';
import { defineComponent } from 'vue';

import './style.scss';

export default defineComponent({
  name: 'ActionBarButton',

  render () {
    const {
      $slots,
      $props
    } = this;

    return (
      <Button class='action-bar-button' {
        ...$props
      }>
        <Text>立即购买</Text>
        {$slots.default && $slots.default()}
      </Button>
    );
  }
});
