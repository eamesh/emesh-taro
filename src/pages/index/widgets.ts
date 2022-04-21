import TitleText from '@/components/free/title-text';
import WhiteHeight from '@/components/free/white-height';
import { Component, defineComponent, VNode } from 'vue';

const widgets: {
  [key: string]: ReturnType<typeof defineComponent> | VNode | Component;
} =  {
  'title-text': TitleText,
  'white-height': WhiteHeight,
};

export default widgets;
