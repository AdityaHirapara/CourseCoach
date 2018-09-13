import { Linking, Share } from 'react-native';

const _handleClick = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

const _shareApp = () => {
  Share.share({
      message: 'Take a look at "Course Coach" \n https://play.google.com/store/apps/details?id=com.coursecoach.blog'
    })
    .catch(errorMsg => console.log(errorMsg));
}

module.exports = { _handleClick, _shareApp };