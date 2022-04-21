import Http from '@/utils/http';

export const getHome = (): Promise<any> => {
  return Http.request({
    url: '/decorate/home'
  });
};
