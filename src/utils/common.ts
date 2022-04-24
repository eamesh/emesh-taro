import Taro from '@tarojs/taro';
import queryString from 'query-string';

/**
 * 跳转.
 *
 * @param path
 * @param params
 * @param mode
 */
export const redirectTo = (path: string, params: Object = {}, mode: 'tabbar' | 'redirectTo' | 'reLaunch' | 'navigateTo' = 'navigateTo') => {
  let { url, query } = queryString.parseUrl(path);
  // 拼接参数
  url += '?' + queryString.stringify({
    ...query,
    ...params
  });

  switch (mode) {
    // 跳转到tabBar页面
    case 'tabbar':
      Taro.switchTab({
        url
      });

      break;

    // 关闭当前页面，跳转
    case 'redirectTo':
      Taro.redirectTo({
        url
      });

      break;

    // 关闭所有页面，打开
    case 'reLaunch':
      Taro.reLaunch({
        url
      });

      break;

    // 保留当前页面 跳转
    case 'navigateTo':
    default:
      Taro.navigateTo({
        url
      });

      break;
  }
};
