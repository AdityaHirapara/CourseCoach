import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking, Dimensions, Share } from 'react-native';
import { BigCard, SmallCard } from '../elements/card';
import DrawerLayout from 'react-native-drawer-layout';
import { styles } from '../styles/style';

export class Topic extends React.Component {
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
        subject: this.props.navigation.state.params.subject,
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
        style={topicStyle.menuButtonContainer}>
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
        style={topicStyle.backButtonContainer}>
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

  _renderHeadingOne(){
    if (this.state.data.books.length > 0) {
      return (<View style={styles.linkContainer}><Text style={topicStyle.heading}>E-Books</Text></View>);
    }
  }

  _renderHeadingTwo(){
    if (this.state.data.papers.length > 0) {
      return (<View style={styles.linkContainer}><Text style={topicStyle.heading}>Previous Year Papers</Text></View>);
    }
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
        drawerWidth={Dimensions.get('window').width - 70}
        renderNavigationView={this._renderMenu.bind(this)}>

        <View style={{flex: 1}}>
          <View style={styles.bar}>
            <View style={styles.statusBar} />
            <View style={styles.titleBar}>
              {this._renderBackButton()}
              <Text style={styles.appTitle}>Course Coach</Text>
              {this._renderMenuButton()}
            </View>
          </View>

          <ScrollView style={topicStyle.main}>
            {
              this.state.data.general.map( (x, i) => {
                return <View style={styles.linkContainer}><Text style={{paddingBottom: 15, paddingLeft: 30, fontSize: 16}} >{i+1}.</Text><Text style={styles.links} onPress={ ()=>{ this._handleClick(x.link)}}> {x.name}</Text></View>;
              })
            }
            { this._renderHeadingOne() }
            {
              this.state.data.books.map( (x, i) => {
                return <View style={styles.linkContainer}><Text style={{paddingBottom: 15, paddingLeft: 30, fontSize: 16}} >{i+1}.</Text><Text style={styles.links} onPress={ ()=>{ this._handleClick(x.link)}}> {x.name}</Text></View>;
              })
            }
            { this._renderHeadingTwo() }
            {
              this.state.data.papers.map( (x, i) => {
                return <View style={styles.linkContainer}><Text style={{paddingBottom: 15, paddingLeft: 30, fontSize: 16}} >{i+1}.</Text><Text style={styles.links} onPress={ ()=>{ this._handleClick(x.link)}}> {x.name}</Text></View>;
              })
            }
          </ScrollView>
        </View>
      </DrawerLayout>
    );
  }
}

const topicStyle = {
  main: {
    position: 'relative',
    top: 80,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingRight: 20,
    marginBottom: 90,
    backgroundColor: '#f2f2f2',
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  backButtonContainer: {
    position: 'relative',
    top: 5,
    left: 10,
  },
  heading: {
    marginTop: 30,
    paddingBottom: 15,
    marginLeft: 25,
    fontSize: 18,
    color: '#868682',
    fontWeight: '100',
  }
}
