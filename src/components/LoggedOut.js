import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

const loggedOut = (props) => {

  function handleLoginPress(){
    Navigation.mergeOptions('FirstTab', {
      bottomTabs: {
        currentTabIndex: 0
      }
    });
    Navigation.popToRoot('CenterStack')
  }

  return (
  <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <View style={styles.logoutButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  logoutButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    margin: 5
  }
})

export default loggedOut;
