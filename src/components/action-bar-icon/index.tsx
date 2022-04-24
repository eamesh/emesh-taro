import { Button, Icon } from '@nutui/nutui-taro';
import { Text } from '@tarojs/components';
import { defineComponent } from 'vue';

import './style.scss';

export default defineComponent({
  name: 'ActionBarIcon',

  render () {
    return (
      <Button class='action-bar-icon'>
        <Icon size='14' class='action-bar-icon__icon' name='dongdong' />
        <Text class='action-bar-icon__text'>客服</Text>
      </Button>
    );
  }
});
