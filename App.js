import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking, Dimensions, Share } from 'react-native';
import { BigCard, SmallCard } from './elements/card';
import { StackNavigator } from 'react-navigation';
import DrawerLayout from 'react-native-drawer-layout';

class Home extends React.Component {

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
          source={require('./images/ic_launcher.png')}
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
      <View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
        <View style={styles.menuHeader}>
          <Image
            resizeMode="cover"
            style={styles.menuHeaderBackground}
            source={require('./images/bg.jpg')}
          />
          <View style={styles.menuHeaderOverlay} />

          <Text style={styles.menuHeaderText}>Course Coach</Text>
        </View>
        <TouchableOpacity accessible={true}
        onPress={() => this._shareApp()}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_near_me.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Share us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('https://play.google.com/store/apps/details?id=com.coursecoach.blog&hl=en')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_star.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Rate us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('mailto:coursecoach1998@gmail.com')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_comment.png')} style={styles.linkicon}/>
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
          drawerWidth={Dimensions.get('window').width - 100}
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
              <Text style={styles.heading}>B.Tech I</Text>
              <ScrollView horizontal={true}>
                <TouchableOpacity accessible={true}
                onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='SEM I' src={require('./images/sem1.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='SEM II' src={require('./images/sem2.jpg')}/>
                </TouchableOpacity>
              </ScrollView>
              <Text style={styles.heading}>B.Tech II</Text>
              <ScrollView horizontal={true}>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                  'course': 'btech1'
                })}>
                  <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
                </TouchableOpacity>
              </ScrollView>
              <Text style={styles.heading}>B.Tech III</Text>
              <ScrollView horizontal={true}>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
              </TouchableOpacity>
              </ScrollView>
              <Text style={styles.heading}>B.Tech IV</Text>
              <ScrollView horizontal={true}>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Computer Engineering' src={require('./images/comp2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Mechanical Engineering' src={require('./images/mech2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Chemical Engineering' src={require('./images/chem2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Electrical Engineering' src={require('./images/elec2.png')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Electronics Engineering' src={require('./images/ec2.jpg')}/>
              </TouchableOpacity>
              <TouchableOpacity accessible={true} onPress={() => this.props.navigation.navigate('Subjects', {
                'course': 'btech1'
              })}>
                <SmallCard title='Civil Engineering' src={require('./images/civil2.jpg')}/>
              </TouchableOpacity>
              </ScrollView>
            </ScrollView>
          </View>
        </DrawerLayout>

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
          source={require('./images/ic_launcher.png')}
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
      <View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
        <View style={styles.menuHeader}>
          <Image
            resizeMode="cover"
            style={styles.menuHeaderBackground}
            source={require('./images/bg.jpg')}
          />
          <View style={styles.menuHeaderOverlay} />

          <Text style={styles.menuHeaderText}>Course Coach</Text>
        </View>
        <TouchableOpacity accessible={true}
        onPress={() => this._shareApp()}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_near_me.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Share us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('https://play.google.com/store/apps/details?id=com.coursecoach.blog&hl=en')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_star.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Rate us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('mailto:coursecoach1998@gmail.com')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_comment.png')} style={styles.linkicon}/>
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <DrawerLayout
        ref={view => {
          this._drawerLayout = view;
        }}
        drawerWidth={Dimensions.get('window').width - 100}
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
      </DrawerLayout>
    );
  }
}

class Topic extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://coursecoachserver.herokuapp.com/topics', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: this.props.navigation.state.params.subject
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
        style={styles.menuButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('./images/ic_launcher.png')}
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
      <View style={{ backgroundColor: '#F9F9F9', flex: 1 }}>
        <View style={styles.menuHeader}>
          <Image
            resizeMode="cover"
            style={styles.menuHeaderBackground}
            source={require('./images/bg.jpg')}
          />
          <View style={styles.menuHeaderOverlay} />

          <Text style={styles.menuHeaderText}>Course Coach</Text>
        </View>
        <TouchableOpacity accessible={true}
        onPress={() => this._shareApp()}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_near_me.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Share us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('https://play.google.com/store/apps/details?id=com.coursecoach.blog&hl=en')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_star.png')} style={styles.linkicon}/>
            <Text style={styles.menulink}>Rate us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity accessible={true}
        onPress={ ()=>{ this._handleClick('mailto:coursecoach1998@gmail.com')}}>
          <View style={styles.menutab}>
            <Image source={require('./images/ic_comment.png')} style={styles.linkicon}/>
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <DrawerLayout
        ref={view => {
          this._drawerLayout = view;
        }}
        drawerWidth={Dimensions.get('window').width - 100}
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
            {this.state.data.map( (x, i) => {

              return <Text style={styles.links} onPress={ ()=>{ this._handleClick(x.link)}}>{i+1}. {x.name}</Text>;
            })
            }
          </ScrollView>
        </View>
      </DrawerLayout>
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
    flex: 1,
    flexDirection: 'row',
  },
  appTitle: {
    color: '#f79449',
    fontSize: 24,
    paddingTop: 3,
    paddingLeft: 20,
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
  },
  menuHeader: {
    height: 150,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  menuHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 150,
  },
  menuHeaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  menuButtonContainer: {
    position: 'relative',
    top: 5,
    left: 10,
  },
  menuButton: {
    width: 35.5,
    height: 28.5,
  },
  menulink: {
    fontSize: 16,
  },
  linkicon: {
    position: 'relative',
    top: -3,
    left: 0,
    height: 30,
    width: 30,
  },
  menutab: {
    padding: 5,
    paddingLeft: 18,
    paddingBottom: 2,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
  }
});
