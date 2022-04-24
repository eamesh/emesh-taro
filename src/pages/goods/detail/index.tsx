import { View, Image, Video, Text } from '@tarojs/components';
import { computed, defineComponent, reactive, ref } from 'vue';
import { Swiper, SwiperItem, Tag, Row, Col, Cell, Icon, Price } from '@nutui/nutui-taro';
import Taro from '@tarojs/taro';
import SecKilling from '@/components/sec-killing';

import './style.scss';

export default defineComponent({
  name: 'GoodsDetail',

  setup () {
    const model = reactive({
      video: {
        source: {
          src: 'http://oss.ease.smhx.net/CtwiPWJhBLuAdfgOAk6s2Fy-320071.mp4',
          type: 'video/mp4'
        },
        options: {
          poster: 'http://oss.ease.smhx.net/1650784652827.jpg'
        },
      }
    });
    const swiperData = reactive({
      page: 0,
      current: 1
    });
    const showMode = ref('video');
    const showModes = [
      {
        text: '视频',
        key: 'video'
      },
      {
        text: '图片',
        key: 'image'
      }
    ] as const;

    function handleSwichMode (e: MouseEvent, key: typeof showModes[number]['key']) {
      console.log('click', key);
      showMode.value = key;
    }

    function handleSwiperChange (index: number) {
      swiperData.current = index + 1;
    }

    // Swiper 高度
    const swiperContainerHeight = computed(() => {
      return Taro.getSystemInfoSync().windowWidth / (375/280);
    });

    const videoContainerStyle = computed(() => {
      return {
        width: Taro.pxTransform(375),
        height: `${swiperContainerHeight.value}px`
      };
    });

    return {
      model,
      swiperData,
      showMode,
      showModes,
      handleSwiperChange,
      handleSwichMode,
      swiperContainerHeight,
      videoContainerStyle
    };
  },

  render () {
    const {
      model,
      swiperData,
      showMode,
      showModes,
      handleSwiperChange,
      handleSwichMode,
      swiperContainerHeight,
      videoContainerStyle
    } = this;

    return (
      <View class='page page-goods'>
        <View class='goods-slider'>
          {
            showMode === 'image' ? (
              <Swiper
                page={swiperData.page}
                onChange={handleSwiperChange}
                loop
                class='swiper-container'
                height={swiperContainerHeight}
              >
                {{
                  default: () => {
                    return (
                      <>
                        <SwiperItem>
                          <Image class='swiper-image' src='http://oss.ease.smhx.net/1650784652827.jpg' />
                        </SwiperItem>
                        <SwiperItem>
                          <Image class='swiper-image' src='http://oss.ease.smhx.net/1650784652827.jpg' />
                        </SwiperItem>
                        <SwiperItem>
                          <Image class='swiper-image' src='http://oss.ease.smhx.net/1650784652827.jpg' />
                        </SwiperItem>
                      </>
                    );
                  },

                  page: () => {
                    return <View class='swiper-page'>
                      <Tag color='rgba(0, 0, 0, 0.33);'>{swiperData.current} / 3</Tag>
                    </View>;
                  }
                }}
              </Swiper>
            ) : (
              <Video style={videoContainerStyle} class='goods-video' controls src={model.video.source.src} poster={model.video.options.poster}></Video>
            )
          }
          <Row class='goods-slider__switch' type='flex' wrap='nowrap' justify='center'>
            {
              showModes.map(item => {
                return <Col span='3'>
                  <Tag onClickCapture={(e) => handleSwichMode(e, item.key)}>{item.text}</Tag>
                </Col>;
              })
            }
          </Row>
        </View>

        <SecKilling />

        <View class='goods-area'>
          <View class='page-wrap'>
            <View class='goods-name'>
              <Text class='goods-text'>摩托罗拉 edge s pro 旗舰骁龙870 1亿像素 50X潜望式变焦 10亿色144Hz臻彩屏 轻薄5G手机 12GB+256GB 青玉案</Text>
              <View class='goods-favorite'>
                <Icon name='star' />
                <Text>收藏</Text>
              </View>
            </View>
          </View>
        </View>

        <View class='page-wrap goods-container'>
          <Cell>
            <View class='price-wrap'>
              <Price class='price' price='1250.22' decimalDigits='2' needSymbol thousands />
              <Price class='text-decoration' price='1250.22' decimalDigits='2' needSymbol thousands size='small' />
            </View>
          </Cell>
        </View>
      </View>
    );
  }
});
