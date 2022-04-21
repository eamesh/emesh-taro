import TitleText from '@/components/free/title-text';
import WhiteHeight from '@/components/free/white-height';
import { Component, defineComponent, markRaw, VNode } from 'vue';

const widgets: {
  [key: string]: ReturnType<typeof defineComponent> | VNode | Component;
} =  {
  'title-text': markRaw(TitleText),
  'white-height': markRaw(WhiteHeight),
};

export default widgets;
