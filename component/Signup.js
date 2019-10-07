
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

export default class Signup extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
      />
    );
  }
}