import { View } from '@tarojs/components';
import { defineComponent, ref } from 'vue';
import { NoticeBar } from '@nutui/nutui-taro';
import { widgetDataProps } from '@/utils';

export interface NutuiNoticeBarProps {
  title: string;
  color: string;
  background: string;
}

const nutuiNoticeBarProps = widgetDataProps<NutuiNoticeBarProps>({
  title: '',
  color: '#D9500B',
  background: 'rgb(255, 248, 233)'
});


export default defineComponent({
  name: 'SearchBar',

  props: nutuiNoticeBarProps,

  setup (props) {
    const model = ref(props.data);

    return {
      model
    };
  },

  render () {
    return (
      <View class='notice-bar'>
        <NoticeBar
          color={this.model.color}
          background={this.model.background}
          scrollable={true}
          text={this.model.title || '请填写内容，如果过长，将会在手机上滚动显示'}
        >

        </NoticeBar>
      </View>
    );
  }
});
