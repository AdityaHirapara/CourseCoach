import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { BigCard, SmallCard } from './elements/card';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {

    return (
      <View>
        <View style={styles.bar}>
          <View style={styles.statusBar} />
          <View style={styles.titleBar}>
            <Text style={styles.appTitle}>Course Coach</Text>
          </View>
        </View>
        <ScrollView style={styles.main}>
          <Text style={styles.heading}>B.Tech I</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity accessible={true}
            onPress={() => this.props.navigation.navigate('Subjects', {
              'course': 'btech1'
            })}>
              <SmallCard title='SEM I' src={require('./images/sem1.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='SEM II' src={require('./images/sem2.jpg')}/>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.heading}>B.Tech II</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects')}>
              <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.heading}>B.Tech III</Text>
          <ScrollView horizontal={true}>
            <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
            <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
            <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
            <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
            <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
            <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
          </ScrollView>
          <Text style={styles.heading}>B.Tech IV</Text>
          <ScrollView horizontal={true}>
            <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
            <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
            <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
            <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
            <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
            <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

class Subject extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://coursecoachserver.herokuapp.com/subjects', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: this.props.navigation.state.params.course
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        data: responseJson
      }, () => {
        
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    const { params } = this.props.navigation.state;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View>
        <View style={styles.bar}>
          <View style={styles.statusBar} />
          <View style={styles.titleBar}>
            <Text style={styles.appTitle}>Course Coach</Text>
          </View>
        </View>
        <ScrollView style={styles.main}>
          {this.state.data.map( (x) => {
            switch (x) {
              case 'Engineering Physics':
                var icon = require('./images/physics.png');
                break;
              case 'Engineering Mechanics':
                var icon = require('./images/mechanics.png');
                break;
              default:
                var icon = require('./images/civil2.jpg');
                break;
            }
            return <TouchableOpacity accessible={true} accessibilityLabel={'Tap me!'}
              onPress={() => this.props.navigation.navigate('Topics', {
                'subject': x
              })}><BigCard title={x} src={icon} /></TouchableOpacity>;
          })
          }
        </ScrollView>
      </View>
    );
  }
}

class Topic extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.bar}>
          <View style={styles.statusBar} />
          <View style={styles.titleBar}>
            <Text style={styles.appTitle}>Course Coach</Text>
          </View>
        </View>
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  statusBar: {
    height: 24,
    backgroundColor: '#18344a'
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 0.4,
    borderColor: '#b1b1b0',
  },
  titleBar: {
    padding: 10,
  },
  appTitle: {
    color: '#f79449',
    fontSize: 24,
    paddingTop: 3,
    fontWeight: '300',
  },
  main: {
    position: 'relative',
    top: 80,
    left: 0,
    right: 0,
    paddingTop: 10,
    marginBottom: 70,
    backgroundColor: '#f2f2f2',
  },
  heading: {
    marginLeft: 15,
    fontSize: 18,
    color: '#868682',
    fontWeight: '100',
  },
  banner: {
    height: 160,
  },
  links: {
    paddingTop: 15,
    paddingLeft: 30,
    fontSize: 16
  }
});
