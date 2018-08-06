import React from 'react';
import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking, Dimensions, Share } from 'react-native';
import { BigCard, SmallCard } from '../elements/card';
import DrawerLayout from 'react-native-drawer-layout';
import { styles } from '../styles/style';
import { AdBanner } from '../elements/addbanner';
export class Home extends React.Component {

  _renderMenuButton() {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={() => {
          this._drawerLayout.openDrawer();
        }}
        style={styles.menuButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('../images/ic_launcher.png')}
        />
      </TouchableOpacity>
    );
  }

  _shareApp() {
    Share.share({
        message: 'Take a look at "Course Coach" \n https://play.google.com/store/apps/details?id=com.coursecoach.blog'
      })
      .catch(errorMsg => console.log(errorMsg));
  }

  _handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  _renderMenu() {
    return (
      <View style={{ backgroundColor: '#18344a', flex: 1 }}>
        <View style={styles.menuHeader}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
          <Text style={styles.menuHeaderText}>Course Coach</Text>
        </View>
        <Text style={styles.menuTag}>A way to conquer your Course.</Text>
        <TouchableOpacity accessible={true}
        onPress={() => this._shareApp()}>
          <View style={styles.menutab}>
            <Image source={require('../images/ic_near_me1.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Share us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('https://play.google.com/store/apps/details?id=com.coursecoach.blog&hl=en')}}>
          <View style={styles.menutab}>
            <Image source={require('../images/ic_star1.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Rate us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('mailto:coursecoach1998@gmail.com')}}>
          <View style={styles.menutab}>
            <Image source={require('../images/ic_comment1.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {

    return (
      <DrawerLayout
        ref={view => {
          this._drawerLayout = view;
        }}
        drawerWidth={Dimensions.get('window').width - 70}
        renderNavigationView={this._renderMenu.bind(this)}>

        <View style={{flex: 1}}>
          <View style={styles.bar}>
            <View style={styles.statusBar} />
            <View style={styles.titleBar}>
              {this._renderMenuButton()}
              <Text style={styles.appTitle}>Course Coach</Text>
            </View>
          </View>
          <ScrollView style={styles.main}>
          
          <AdBanner/>

            <Text style={styles.heading}>B.Tech I</Text>
            <ScrollView horizontal={true}>
              <TouchableOpacity accessible={true}
              onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1sem1'
              })}>
                <SmallCard title='SEM I' src={require('../images/sem1.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1sem2'
              })}>
                <SmallCard title='SEM II' src={require('../images/sem2.jpg')}/>
              </TouchableOpacity>
            </ScrollView>
            <Text style={styles.heading}>B.Tech II</Text>
            <ScrollView horizontal={true}>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'comp2'
              })}>
                <SmallCard title='Computer Engineering' src={require('../images/co.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'mech2'
              })}>
                <SmallCard title='Mechanical Engineering' src={require('../images/me.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'chem2'
              })}>
                <SmallCard title='Chemical Engineering' src={require('../images/ch.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'electrical2'
              })}>
                <SmallCard title='Electrical Engineering' src={require('../images/ee.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'electronics2'
              })}>
                <SmallCard title='Electronics Engineering' src={require('../images/ec.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'civil2'
              })}>
                <SmallCard title='Civil Engineering' src={require('../images/ce.jpg')}/>
              </TouchableOpacity>
            </ScrollView>
          </ScrollView>
        </View>
      </DrawerLayout>
    );
  }
}
