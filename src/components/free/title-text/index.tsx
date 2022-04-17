import { View } from '@tarojs/components';
import { widgetDataProps } from '@/utils';
import { computed, defineComponent, ref, unref } from 'vue';

import './style.scss';
import Taro from '@tarojs/taro';

export type TitleTextTitleAligin = 'left' | 'center';
export type TitleTextWeight = 'bold' | '400';
export type TitleTextFontSize = 16 | 14 | 12;

export interface TitleTextProps {
  bottomDivider: boolean,
  style: {
    backgroundColor: string
  },
  title: {
    text: string,
    aligin: TitleTextTitleAligin,
    style: {
      fontSize: TitleTextFontSize,
      fontWeight: TitleTextWeight,
      color: string
    }
  },
  description: {
    text: string,
    style: {
      fontSize: TitleTextFontSize,
      fontWeight: TitleTextWeight,
      color: string
    }
  }
}

export default defineComponent({
  name: 'title-text',

  props: widgetDataProps<TitleTextProps>({
    bottomDivider: true,
    style: {
      backgroundColor: '#fff'
    },
    title: {
      text: '标题',
      aligin: 'left',
      style: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#323233'
      }
    },
    description: {
      text: '',
      style: {
        fontSize: 12,
        fontWeight: '400',
        color: '#969799'
      }
    }
  }),

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);

    const titleStyle = computed(() => {
      return {
        ...modelUnref.title.style,
        fontSize: Taro.pxTransform(modelUnref.title.style.fontSize)
      };
    });

    const descriptionStyle = computed(() => {
      return {
        ...modelUnref.description.style,
        fontSize: Taro.pxTransform(modelUnref.description.style.fontSize)
      };
    });

    return {
      model,
      titleStyle,
      descriptionStyle
    };
  },

  render () {
    const {
      model,
      titleStyle,
      descriptionStyle
    } = this;

    return (
      <View class='free-title-text' style={model.style}>
        <View class={[
          'free-title-text__content',
          {
            'free-title-text-center': model.title.aligin === 'center',
            divider: model.bottomDivider
          }
        ]}>
          <View class='free-title-text__title' style={titleStyle}>{model.title.text}</View>
          {
            model.description.text && (
              <View class='free-title-text__sub'>
                <View class='free-title-text__desc' style={descriptionStyle}>{model.description.text}</View>
              </View>
            )
          }
        </View>
      </View>
    );
  }
});
