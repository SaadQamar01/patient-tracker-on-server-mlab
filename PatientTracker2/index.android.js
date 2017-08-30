import React, { Component } from 'react';
import App from './container/app.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import PatientList from './container/patientList.js';
import PatientForm from './container/patientForm.js';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import {  TabNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PatientTracker2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      // <View><Text>Hello World</Text></View>
    )
  }
}

AppRegistry.registerComponent('PatientTracker2', () => PatientTracker2);
