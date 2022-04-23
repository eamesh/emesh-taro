import { computed, defineComponent, ref, unref } from 'vue';
import { Swiper, SwiperItem } from '@nutui/nutui-taro';
import { View, Image } from '@tarojs/components';
import { widgetDataProps } from '@/utils';
import Default from './assets/default.png';

import './style.scss';
import Taro from '@tarojs/taro';

export interface AdItemData {
  imgUrl: string;
  redirect: object;
}

export interface NutuiImageAdProps {
  type: 'default' | 'small' | 'dot' | 'block' | 'rectangle';
  radioType: 'square' | 'round';
  imageType: 'shadow' | 'regular';
  pagePadding: number;
  imagePadding: number;
  ads: AdItemData[];
}

const nutuiImageAdProps = widgetDataProps<NutuiImageAdProps>({
  type: 'default',
  imageType: 'regular',
  radioType: 'square',
  pagePadding: 0,
  imagePadding: 0,
  ads: []
});

export default defineComponent({
  name: 'ImageAd',

  props: nutuiImageAdProps,

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);

    const swiperItemStyle = computed(() => {
      return {
        paddingLeft: Taro.pxTransform(modelUnref.pagePadding),
        paddingRight: Taro.pxTransform(modelUnref.pagePadding),
      };
    });

    const swiperImageStyle = computed(() => {
      return {
        borderRadius: modelUnref.radioType === 'round' ? Taro.pxTransform(10) : 0
      };
    });

    // Swiper 高度
    const swiperContainerHeight = computed(() => {
      return (parseInt(Taro.pxTransform(375).replace(/[a-z]+/, '')) / 750 * Taro.getSystemInfoSync().windowWidth) / (375/200);
    });

    return {
      model,
      swiperItemStyle,
      swiperImageStyle,
      swiperContainerHeight
    };
  },

  render () {
    const {
      model,
      swiperItemStyle,
      swiperImageStyle,
      swiperContainerHeight
    } = this;

    return (
      <View class='image-ad'>
        <Swiper
          height={swiperContainerHeight}
          initPage={0}
          paginationVisible={true}
          paginationColor="#426543"
          autoPlay="3000"
        >
          {
            model.ads.length ? model.ads.map(ad => {
              return (
                <SwiperItem style={swiperItemStyle}>
                  <Image class='swiper-image' src={ad.imgUrl} style={swiperImageStyle} />
                </SwiperItem>
              );
            }) : [...Array(3)].map(() => {
              return (
                <SwiperItem style={swiperItemStyle}>
                  <Image class='swiper-image' src={Default} alt="" style={swiperImageStyle} />
                </SwiperItem>
              );
            })
          }
        </Swiper>
      </View>
    );
  }
});
