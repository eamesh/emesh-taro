import { defineComponent, ref } from 'vue';
import { Grid, GridItem } from '@nutui/nutui-taro';
import { View } from '@tarojs/components';
import { widgetDataProps } from '@/utils';

import './style.scss';

export type ImageNavType = 'image' | 'text';
export type ImageNavImageType = 'fixed' | 'slide';
export type ImageNavImageDirection = 'horizontal' | 'vertical';

export interface ImageNavStyle {
  backgroundColor: string;
  color: string;
  borderColor: string;
}

export interface ImageNavItem {
  title: string;
  imgUrl?: string;
  redirect: any;
}

export interface NutuiImageNavProps {
  type: ImageNavType;
  imageType: ImageNavImageType;
  direction: ImageNavImageDirection;
  style: ImageNavStyle;
  navs: ImageNavItem[];
  max: number;
  columnNum: number;
  reverse: boolean;
}

const nutuiImageNavProps = widgetDataProps<NutuiImageNavProps>({
  type: 'image',
  imageType: 'fixed',
  direction: 'horizontal',
  style: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    borderColor: '#f5f6f7'
  },
  max: 12,
  columnNum: 3,
  reverse: false,
  navs: [
    {
      title: '导航一',
      imgUrl: '',
      redirect: {}
    },
    {
      title: '导航二',
      imgUrl: '',
      redirect: {}
    },
    {
      title: '导航三',
      imgUrl: '',
      redirect: {}
    },
    {
      title: '导航四',
      imgUrl: '',
      redirect: {}
    }
  ]
});

export default defineComponent({
  name: 'ImageNav',

  props: nutuiImageNavProps,

  setup (props) {
    const model = ref(props.data);

    return {
      model
    };
  },

  render () {
    const {
      model
    } = this;

    return (
      <View class='image-nav'>
        <Grid
          style={`--border-color: ${model.style.borderColor}`}
          direction={model.direction}
          columnNum={model.columnNum}
          reverse={model.reverse}
        >
          {
            model.type === 'image'
              ? model.navs.map(item => (
              <GridItem style={model.style} icon={item.imgUrl || 'dongdong'} iconSize={20} text={item.title}></GridItem>
              ))
              : model.navs.map(item => (
                  <GridItem style={model.style}>
                    <View class='nut-grid-item__text'>
                      {item.title}
                    </View>
                  </GridItem>
              ))
          }
        </Grid>
      </View>
    );
  }
});
