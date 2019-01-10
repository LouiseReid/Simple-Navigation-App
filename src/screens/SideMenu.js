import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class SideMenu extends Component {

  handleLogOutPress = () => {
    Navigation.push('CenterStack', {
      component: {
        id: 'FourthTab',
        name: 'navigationApp.FourthTabScreen',
        passProps: {
          text: 'Logged Out'
        },
        options: {
          topBar: {
            visible: false
          }
        }
      }
    })
    Navigation.mergeOptions('CenterStack', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleLogOutPress}>
          <View style={styles.drawerItem}>
              <Icon.Button
              name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
              size={30}
              color='#000'
              backgroundColor='transparent'
              style={styles.drawerItemIcon}
              onPress={this.handleLogOutPress}
              underlayColor='transparent'
              />
              <Text>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemIcon: {
    marginRight: 10
  }
})

export default SideMenu;
