import { View } from '@tarojs/components';
import { defineComponent, ref } from 'vue';
import { Video } from '@nutui/nutui-taro';
import { widgetDataProps } from '@/utils';

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

    return {
      model
    };
  },

  render () {
    return (
      <View class='video-player' style={{
        paddingLeft: `${this.model.pagePadding}px`,
        paddingRight: `${this.model.pagePadding}px`,
        height: '210px'
      }}>
        {
          this.model.type === 'resource' && this.model.resource.src ? (
            <Video
              source={this.model.resource}
              options={this.model.options}
              style={{
                borderRadius: this.model.radioType === 'round' ? '8px' : 0,
                overflow: 'hidden'
              }}
            >
            </Video>
          ) : this.model.network.src ? (
            <Video
              source={this.model.network}
              options={this.model.options}
              style={{
                borderRadius: this.model.radioType === 'round' ? '8px' : 0,
                overflow: 'hidden'
              }}
            >
            </Video>
          ) : <Video
            options={this.model.options}
            style={{
              borderRadius: this.model.radioType === 'round' ? '8px' : 0,
              overflow: 'hidden'
            }}
          >
          </Video>
        }
      </View>
    );
  }
});
