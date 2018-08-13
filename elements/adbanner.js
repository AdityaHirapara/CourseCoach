import { AdMobBanner } from 'expo';
import React from 'react';
import { View } from 'react-native';

export class AdBanner extends React.Component {
  render() {
    return(
      <View>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          onDidFailToReceiveAdWithError={this.bannerError} />
      </View>
    );
  }
}