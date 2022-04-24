export default defineAppConfig({
  pages: [
    'pages/main/index/index',
    'pages/main/category/index',
    'pages/main/cart/index',
    'pages/main/member/index',
    'pages/goods/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/main/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/main/category/index',
        text: '分类'
      },
      {
        pagePath: 'pages/main/cart/index',
        text: '购物车'
      },
      {
        pagePath: 'pages/main/member/index',
        text: '我的'
      },
    ]
  }
});
