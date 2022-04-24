import SearchBarWidget from '@/components/free/search-bar';
import TitleTextWidget from '@/components/free/title-text';
import WhiteHeightWidget from '@/components/free/white-height';
import NoticeBarWidget from '@/components/free/notice-bar';
import VideoPlayerWidget from '@/components/free/video-player';
import ImageNavWidget from '@/components/free/image-nav';
import ImageAdWidget from '@/components/free/image-ad';

import { Component, defineComponent, markRaw, VNode } from 'vue';

const widgets: {
  [key: string]: ReturnType<typeof defineComponent> | VNode | Component;
} =  {
  'title-text': markRaw(TitleTextWidget),
  'white-height': markRaw(WhiteHeightWidget),
  'search': markRaw(SearchBarWidget),
  'search-bar': markRaw(SearchBarWidget),
  'notice-bar': markRaw(NoticeBarWidget),
  'video-player': markRaw(VideoPlayerWidget),
  'image-nav': markRaw(ImageNavWidget),
  'image-ad': markRaw(ImageAdWidget),
};

export default widgets;
