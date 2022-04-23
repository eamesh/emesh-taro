import { View } from '@tarojs/components';
import { computed, defineComponent, ref, unref } from 'vue';
import { Video } from '@nutui/nutui-taro';
import { widgetDataProps } from '@/utils';
import Taro from '@tarojs/taro';

export interface NutuiVideoPlayerProps {
  type: 'resource' | 'network',
  coverType: 'default' | 'resource',
  radioType: 'square' | 'round',
  pagePadding: number,
  resource: {
    src: string,
    type: string
  },
  network: {
    src: string,
    type: string
  },
  options: {
    controls: boolean,
    poster: string,
    autoplay: boolean,
    muted: boolean,
    loop: boolean
  }
}

const nutuiVideoPlayerProps = widgetDataProps<NutuiVideoPlayerProps>({
  type: 'resource',
  coverType: 'default',
  radioType: 'square',
  pagePadding: 0,
  resource: {
    src: '',
    type: 'video/mp4'
  },
  network: {
    src: '',
    type: 'video/mp4'
  },
  options: {
    controls: true,
    poster: '',
    autoplay: false,
    muted: true,
    loop: true
  }
});


export default defineComponent({
  name: 'VideoPlayer',

  props: nutuiVideoPlayerProps,

  setup (props) {
    const model = ref(props.data);
    const modelUnref = unref(model);

    const videoPlayerStyle = computed(() => {
      return {
        paddingLeft: Taro.pxTransform(modelUnref.pagePadding),
        paddingRight:  Taro.pxTransform(modelUnref.pagePadding),
        // height: Taro.pxTransform(210)
        height: `${Taro.getSystemInfoSync().windowWidth / (375/210)}px`
      };
    });

    const videoStyle = computed(() => {
      return {
        borderRadius: modelUnref.radioType === 'round' ? Taro.pxTransform(8) : 0,
        overflow: 'hidden'
      };
    });

    return {
      model,
      videoStyle,
      videoPlayerStyle
    };
  },

  render () {
    const {
      model,
      videoStyle,
      videoPlayerStyle
    } = this;

    return (
      <View class='video-player' style={videoPlayerStyle}>
        {
          model.type === 'resource' && model.resource.src ? (
            <Video
              source={model.resource}
              options={model.options}
              style={videoStyle}
            >
            </Video>
          ) : model.network.src ? (
            <Video
              source={model.network}
              options={model.options}
              style={videoStyle}
            >
            </Video>
          ) : <Video
            options={model.options}
            style={videoStyle}
          >
          </Video>
        }
      </View>
    );
  }
});
