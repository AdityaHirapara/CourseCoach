import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { BigCard, SmallCard } from './elements/card';

export default class App extends React.Component {
  render() {

    return (
      <View>
        <View style={styles.bar}>
          <View style={styles.statusBar} />
          <View style={styles.titleBar}>
            <Text style={{color: '#f79449', fontSize: 20, fontWeight: '300',}}>Course Coach</Text>
          </View>
        </View>
        <ScrollView style={styles.main}>
          <Text style={styles.heading}>B.Tech I</Text>
          <ScrollView horizontal={true}>
            <SmallCard title='SEM I' src={require('./images/sem1.jpg')}/>
            <SmallCard title='SEM II' src={require('./images/sem2.jpg')}/>
          </ScrollView>
          <Text style={styles.heading}>B.Tech II</Text>
          <ScrollView horizontal={true}>
            <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
            <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
            <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
            <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
            <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
            <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
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
    height: 70,
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 0.4,
    borderColor: '#b1b1b0',
  },
  titleBar: {
    padding: 10,
  },
  main: {
    position: 'relative',
    top: 70,
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
});
