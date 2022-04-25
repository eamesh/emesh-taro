import { View, Image, Video, Text } from '@tarojs/components';
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { Swiper, SwiperItem, Tag, Row, Col, Cell, CellGroup, Sku } from '@nutui/nutui-taro';
import Taro from '@tarojs/taro';
import SecKilling from '@/components/sec-killing';

import './style.scss';
import ActionBar from '@/components/action-bar';
import ActionBarIcon from '@/components/action-bar-icon';
import ActionBarButton from '@/components/action-bar-button';
import jsonData from './data';

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

    const base = ref(false);
    const data = reactive<any>({
      sku: [],
      goods: {}
    });

    onMounted(() => {
      const { Sku, Goods } = jsonData;
      data.sku = Sku;
      data.goods = Goods;
    });
    // 切换规格类目
    const selectSku = (ss: any) => {
      const { sku, parentIndex } = ss;
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '4599.00',
        imagePath:
          '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op);
    };
    // 关闭商品规格弹框
    const close = ()=>{};


    return {
      model,
      swiperData,
      showMode,
      showModes,
      handleSwiperChange,
      handleSwichMode,
      swiperContainerHeight,
      videoContainerStyle,
      base,
      selectSku,
      clickBtnOperate,
      close,
      data
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
      videoContainerStyle,
      selectSku,
      clickBtnOperate,
      close,
      data
    } = this;

    return (
      <View class='page page-goods'>
        <View class='page-goods__header'>
          <View class='goods-slider' style={videoContainerStyle}>
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
                  <nut-con name='star' />
                  <Text>收藏</Text>
                </View>
              </View>
            </View>
          </View>

          <View class='page-wrap goods-container'>
            <Cell>
              <View class='flex column'>
                <View class='price-wrap'>
                  <nut-rice class='price' price='1250.22' decimalDigits='2' needSymbol thousands />
                  <nut-rice class='text-decoration' price='1250.22' decimalDigits='2' needSymbol thousands size='small' />
                </View>
                <View class='wrap title-wrap'>
                  精品速冻咖啡【买2盒送吸管杯】
                </View>
                <View class='wrap extra-wrap'>
                  已售卖30500+件
                </View>
              </View>
            </Cell>

            <CellGroup>
              <Cell>
                <View class='flex items-center goods-cell'  onClick={() => {
                    console.log(this.base = true);
                  }}>
                  <View class='cell-title'>选择</View>
                  <View class='flex items-center justify-space-between flex-1'>
                    <View class='cell-extra'>asd</View>
                    <View class='cell-link'>
                      <Text>多种可选</Text>
                      <nut-con size='8' name='right' />
                    </View>
                  </View>
                </View>
              </Cell>
              <Cell>
                <View class='flex items-center goods-cell'>
                  <View class='cell-title'>运费</View>
                  <View class='flex items-center justify-space-between flex-1'>
                    <View class='cell-extra'>免运费</View>
                  </View>
                </View>
              </Cell>
            </CellGroup>

            <Cell>
              <View class='goods-content'>
                <View class='content-label'>商品详情</View>
              </View>
            </Cell>
          </View>
        </View>

        <View class='page-goods__bottom'>
          <View class='goods-action'>
            <ActionBar>
              <ActionBarIcon />
              <ActionBarIcon />
              <ActionBarIcon />

              <ActionBarButton {...{
                openType: 'contact'
              }} />
              <ActionBarButton {...{
                openType: 'contact'
              }} />

            </ActionBar>
            {/* <View class='goods-action__bar'>
              <View role='button' class='goods-action__icon'>
                <nut-con name='dongdong'></Icon>
                客服
              </View>
              <View role='button' class='goods-action__icon'>
                <nut-con name='dongdong'></Icon>
                购物车
              </View>
              <View role='button' class='goods-action__icon'>
                <nut-con name='dongdong'></Icon>
                店铺
              </View>
            </View> */}
          </View>
        </View>

        <Sku
          v-model:visible={this.base}
          sku={data.sku}
          btnOptions={['buy', 'cart']}
          goods={data.goods}
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={close}
        >
        </Sku>
      </View>
    );
  }
});
