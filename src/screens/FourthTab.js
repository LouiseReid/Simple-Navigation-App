import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import LoggedOut from '../components/LoggedOut';

class FourthTab extends Component {

  render() {
    return (
      <LoggedOut style={styles.color} id={this.props.id}>{this.props.text}</LoggedOut>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'purple'
  }
})

export default FourthTab;
