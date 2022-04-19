import { defineComponent, ref } from 'vue';
import { widgetDataProps } from '@/utils';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

export type WhiteHeightType = 'empty' | 'line';
export type WhiteHeightLineStyle = 'solid' | 'dashed' | 'dotted';
export interface WhiteHeightProps {
  type: WhiteHeightType,
  empty: {
    height: number
  },
  line: {
    style: WhiteHeightLineStyle
    paddingX: number
    color: string
  }
}

export default defineComponent({
  name: 'WhiteHeight',

  props: widgetDataProps<WhiteHeightProps>({
    type: 'line',
    empty: {
      height: 30
    },
    line: {
      style: 'solid',
      paddingX: 0,
      color: '#e5e5e5'
    }
  }),

  setup (props) {
    const model = ref<WhiteHeightProps>(props.data);

    return {
      model
    };
  },

  render () {
    const {
      model
    } = this;

    return (
      <View>
        {
          model.type === 'empty'
            ? (
                <View class='white-height' style={{
                  height: Taro.pxTransform(model.empty.height)
                }}></View>
              )
            : (
                <View class='white-line' style={{
                  height: Taro.pxTransform(8),
                  padding: `0 ${Taro.pxTransform(model.line.paddingX)}`
                }}>
                  <View style={{
                    borderTop: `1px ${model.line.style} ${model.line.color}`
                  }}></View>
                </View>
              )
        }
      </View>
    );
  }
});
