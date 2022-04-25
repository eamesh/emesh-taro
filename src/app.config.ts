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
    color: '#333333',
    selectedColor: '#d34716',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/main/index/index',
        text: '首页',
        iconPath: './assets/images/tabbar/home-regular.png',
        selectedIconPath: './assets/images/tabbar/home.png'
      },
      {
        pagePath: 'pages/main/category/index',
        text: '分类',
        iconPath: './assets/images/tabbar/layout-fluid-regular.png',
        selectedIconPath: './assets/images/tabbar/layout-fluid.png'
      },
      {
        pagePath: 'pages/main/cart/index',
        text: '购物车',
        iconPath: './assets/images/tabbar/shopping-cart-regular.png',
        selectedIconPath: './assets/images/tabbar/shopping-cart.png'
      },
      {
        pagePath: 'pages/main/member/index',
        text: '我的',
        iconPath: './assets/images/tabbar/user-regular.png',
        selectedIconPath: './assets/images/tabbar/user.png'
      },
    ]
  }
});
