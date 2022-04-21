import Http from '@/utils/http';

export const getHome = () => {
  return Http.request({
    url: '/decorate/home'
  });
};
