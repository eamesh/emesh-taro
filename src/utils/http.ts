import { ACCESS_TOKEN } from '@/constants/user';
import Taro, { Chain } from '@tarojs/taro';

class Http {
  constructor () {
    Taro.addInterceptor(this.httpInterceptor);
    Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);
  }

  httpInterceptor (chain: Chain) {
    console.log(chain);
    const requestParams = chain.requestParams;
    return chain.proceed(requestParams).then((response) => {
      console.log(response);
    });
  }

  request <T = any> (option: Taro.request.Option) {
    return new Promise((resolve, reject) => {
      const header: TaroGeneral.IAnyObject = {
        'content-type': 'application/json',
      };

      //
      try {
        const token = Taro.getStorageSync(ACCESS_TOKEN);

        if (token) {
          header.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.log(error);
      }

      Taro.request<T>(Object.assign({
        timeout: 30000,
        header,
        success: (response) => {
          resolve(response.data as T);
        },
        fail: (error) => {
          reject(error);
        }
      }, option, {
        url: `${process.env.HOST}/${process.env.API_PREFIX}/${process.env.API_VERSION}${option.url}`,
      }));
    });
  }
}

export default new Http();
