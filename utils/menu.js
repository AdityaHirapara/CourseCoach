import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { _shareApp, _handleClick } from './handler';

const _renderMenu = () => {
  return (
    <View style={{ backgroundColor: '#18344a', flex: 1 }}>
      <View style={styles.menuHeader}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <Text style={styles.menuHeaderText}>Course Coach</Text>
      </View>
      <Text style={styles.menuTag}>A way to conquer your Course.</Text>
      <TouchableOpacity accessible={true}
      onPress={() => _shareApp()}>
        <View style={styles.menutab}>
          <Image source={require('../images/ic_near_me1.png')} style={styles.linkicon}/>
          <Text style={styles.menulink}>Share us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity accessible={true}
      onPress={ ()=>{ _handleClick('https://play.google.com/store/apps/details?id=com.coursecoach.blog&hl=en')}}>
        <View style={styles.menutab}>
          <Image source={require('../images/ic_star1.png')} style={styles.linkicon}/>
          <Text style={styles.menulink}>Rate us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity accessible={true}
      onPress={ ()=>{ _handleClick('mailto:coursecoach1998@gmail.com')}}>
        <View style={styles.menutab}>
          <Image source={require('../images/ic_comment1.png')} style={styles.linkicon}/>
          <Text style={styles.menulink}>Feedback</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

module.exports = { _renderMenu };