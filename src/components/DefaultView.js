import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SideBarButton from '../components/SideBarButton';

const defaultView = (props) => (
  <View style={[styles.container, props.style]}>
      <SideBarButton style={styles.sideBar} componentId={props.id}/>
      <Text style={styles.text}>{props.children}</Text>
  </View>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  sideBar: {
    position: 'absolute',
    left: 10,
    right: 0,
    top: 40,
    bottom: 0
  }
})

export default defaultView;
