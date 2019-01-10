import React from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const sideBarButton = (props) => {

  function showSideMenu(){
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    })
  }
  return (
    <View style={props.style}>
      <Icon.Button
        name={Platform.OS === 'ios' ? 'ios-menu' : 'android-menu'}
        color='#fff'
        backgroundColor='transparent'
        size={30}
        onPress={showSideMenu}
        underlayColor='transparent'
      />
    </View>
  )
}


export default sideBarButton;
