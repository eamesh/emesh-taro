export default defineAppConfig({
  pages: [
    'pages/main/index/index',
    'pages/main/category/index'
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
      }
    ]
  }
});
