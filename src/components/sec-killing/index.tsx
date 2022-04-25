import { Text, View } from '@tarojs/components';
import { defineComponent, reactive } from 'vue';
import { CountDown } from '@nutui/nutui-taro';

import './style.scss';

export default defineComponent({
  name: 'SecKilling',

  setup () {
    const model = reactive({
      end: Date.now() + 50 * 1000,
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00'
      }
    });

    return {
      model
    };
  },

  render () {
    const {
      model
    } = this;

    return (
      <View class='sec-killing'>
        <View class='content'>
          <View class='nut-price'>
            <nut-price nut-price={15213.1221} decimalDigits={2} needSymbol thousands ></nut-price>
          </View>
          <View class='countdown'>
            <View class='countdown-header'>距结束还剩</View>
            <View class='countdown-content'>
              <CountDown v-model={model.resetTime} endTime={model.end} {...{
                'onUpdate:modelValue': () => {}
              }}>
                <View class="countdown-part-box">
                  <View class="part-item-symbol">{ model.resetTime.d }天</View>
                  <View class="part-item h">{ model.resetTime.h }</View>
                  <Text class="part-item-symbol">:</Text>
                  <View class="part-item m">{ model.resetTime.m }</View>
                  <Text class="part-item-symbol">:</Text>
                  <View class="part-item s">{ model.resetTime.s }</View>
                </View>
              </CountDown>
            </View>
          </View>
        </View>
      </View>
    );
  }
});
