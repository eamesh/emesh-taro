import { widgetDataProps } from '@/utils';
import { View } from '@tarojs/components';
import { defineComponent, ref } from 'vue';
import { SearchBar, Icon } from '@nutui/nutui-taro';

import './style.scss';

export interface NutuiSearchProps {
  text: string,
  scan: false,
  background: string,
  inputBackground: string,
  textColor: string
}

const nutuiSearchProps = widgetDataProps<NutuiSearchProps>({
  text: '',
  scan: false,
  background: '#ffffff',
  inputBackground: '#f7f7f7',
  textColor: '#9f9f9f'
});

export default defineComponent({
  name: 'Search',

  props: nutuiSearchProps,

  setup (props) {
    const model = ref(props.data);

    return {
      model
    };
  },

  render () {
    return (
      <View class='search' style={{
        '--search-text-color': this.model.textColor
      }}>
        {
          this.model.text ? (
            <SearchBar background={this.model.background} inputBackground={this.model.inputBackground}>
              {{
                rightout: () => this.model.text,
                leftin: () => {
                  return <Icon color={this.model.textColor} size="14" name="search2"></Icon>;
                },
                rightin: () => {
                  return this.model.scan ? <Icon color={this.model.textColor} size="14" name="scan2"></Icon> : null;
                }
              }}
            </SearchBar>
          ) : (
            <SearchBar background={this.model.background} inputBackground={this.model.inputBackground}>
              {{
                leftin: () => {
                  return <Icon color={this.model.textColor} size="14" name="search2"></Icon>;
                },
                rightin: () => {
                  return this.model.scan ? <Icon color={this.model.textColor} size="14" name="scan2"></Icon> : null;
                }
              }}
            </SearchBar>
          )
        }
      </View>
    );
  }
});
