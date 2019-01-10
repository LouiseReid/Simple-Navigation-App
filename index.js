import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { registerScreens } from './src/screens/'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-home' : 'ios-home', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-search' : 'ios-search', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share' : 'ios-share', 30)
  ]).then(images => {
    Navigation.setRoot({

      root: {
        sideMenu: {
          left: {
            component: {
              id: 'SideMenu',
              name: 'navigationApp.SideMenu'
            }
          },
          center: {
            stack: {
              id: 'CenterStack',
              children: [
                {
                  bottomTabs: {
                    children: [
                      {
                        component: {
                          id: 'FirstTab',
                          name: 'navigationApp.FirstTabScreen',
                          passProps: {
                            text: 'Home',
                            id: 'FirstTab'
                          },
                          options: {
                            bottomTab: {
                              icon: images[0],
                              text: 'Home',
                              iconColor: 'darkblue',
                              selectedIconColor: 'lightblue'
                            },
                            topBar: {
                              visible: false
                            }
                          }
                        },
                      },
                      {
                        component: {
                          id: 'SecondTab',
                          name: 'navigationApp.SecondTabScreen',
                          passProps: {
                            text: 'Search',
                            id: 'SecondTab'
                          },
                          options: {
                            bottomTab: {
                              icon: images[1],
                              text: 'Search',
                              iconColor: 'darkblue',
                              selectedIconColor: 'lightblue'
                            },
                            topBar: {
                              visible: false
                            }
                          }
                        },
                      },
                      {
                        component: {
                          id: 'ThirdTab',
                          name: 'navigationApp.ThirdTabScreen',
                          passProps: {
                            text: 'Share',
                            id: 'ThirdTab'
                          },
                          options: {
                            bottomTab: {
                              icon: images[2],
                              text: 'Share',
                              iconColor: 'darkblue',
                              selectedIconColor: 'lightblue'
                            },
                            topBar: {
                              visible: false
                            }
                          }
                        }
                      },
                    ],
                    options: {

                    },
                  }
                }
              ],
            },
          }
        }
      }
    })
  })
})
