import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, Dimensions, Share } from 'react-native';
import { BigCard } from '../elements/card';
import DrawerLayout from 'react-native-drawer-layout';
import { styles } from '../styles/style';
import { Bars } from 'react-native-loader';
import { AdBanner } from '../elements/adBanner';

export class Subject extends React.Component {
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

  _renderMenuButton() {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={() => {
          this._drawerLayout.openDrawer();
        }}
        style={subStyle.menuButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('../images/ic_launcher.png')}
        />
      </TouchableOpacity>
    );
  }

  _renderBackButton() {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={() => {
          this.props.navigation.goBack();
        }}
        style={subStyle.backButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('../images/ic_arrow_back.png')}
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
    const { params } = this.props.navigation.state;

    if(this.state.isLoading){
      return(
        <View style={styles.loader}>
          <Bars size={15} color="#101c25" spaceBetween={5}/>
        </View>
      )
    }

    return (
      <DrawerLayout
        ref={view => {
          this._drawerLayout = view;
        }}
        drawerWidth={Dimensions.get('window').width - 70}
        renderNavigationView={this._renderMenu.bind(this)}>

        <View style={{flex: 1}}>
          <View style={styles.bar}>
            <View style={styles.titleBar}>
              {this._renderBackButton()}
              <Text style={styles.appTitle}>Course Coach</Text>
              {this._renderMenuButton()}
            </View>
          </View>
          <ScrollView style={styles.main}>

          <AdBanner/>

            {this.state.data.map( (x, i) => {
              i++;
              switch (i) {
                case 1:
                  var icon = require('../images/1.jpg');
                  break;
                case 2:
                  var icon = require('../images/2.jpg');
                  break;
                case 3:
                  var icon = require('../images/3.jpg');
                  break;
                case 4:
                  var icon = require('../images/4.jpg');
                  break;
                case 5:
                  var icon = require('../images/5.jpg');
                  break;
                case 6:
                  var icon = require('../images/6.jpg');
                  break;
                case 7:
                  var icon = require('../images/7.jpg');
                  break;
                case 8:
                  var icon = require('../images/8.jpg');
                  break;
                case 9:
                  var icon = require('../images/9.jpg');
                  break;
                case 10:
                  var icon = require('../images/10.jpg');
                  break;
                case 11:
                  var icon = require('../images/11.jpg');
                  break;
                case 12:
                  var icon = require('../images/12.jpg');
                  break;
                default:
                  var icon = require('../images/logo.png');
                  break;
              }
              return <TouchableOpacity accessible={true}
                onPress={() => this.props.navigation.navigate('Topics', {
                  'subject': x,
                  'course': this.props.navigation.state.params.course
                })}><BigCard title={x} src={icon} /></TouchableOpacity>;
            })
            }
          </ScrollView>
        </View>
      </DrawerLayout>
    );
  }
}

const subStyle = {
  menuButtonContainer: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  backButtonContainer: {
    position: 'relative',
    top: 5,
    left: 10,
  }
}
