import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import DefaultView from '../components/DefaultView';

class FirstTab extends Component {

  static get options () {
    return {topBar: {title: {text: 'Screen1'}}};
}

  render() {
    return (
      <DefaultView style={styles.color} id={this.props.id}>{this.props.text}</DefaultView>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'green'
  }
})

export default FirstTab;
