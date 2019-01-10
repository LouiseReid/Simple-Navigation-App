import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DefaultView from '../components/DefaultView'

class ThirdTab extends Component {

  render() {
    return (
      <DefaultView style={styles.color} id={this.props.id}>{this.props.text}</DefaultView>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'orange'
  }
})

export default ThirdTab;
