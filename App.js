import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Home } from './screens/HomeScreen';
import { Subject } from './screens/SubjectScreen';
import { Topic } from './screens/TopicScreen';

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Subjects: {
      screen: Subject
    },
    Topics: {
      screen: Topic
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default class App extends React.Component{
  render() {
    return <RootNavigator />;
  }
}
