import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../styles/style';

export class SmallCard extends React.Component {
  render() {

    return (
      <View style={[styles.scard,styles.card]}>
        <Image
          source={this.props.src}
          style={styles.small}
        />
        <Text style={{color: "black"}}>{this.props.title}</Text>
      </View>
    );
  }
}

export class BigCard extends React.Component {
  render() {

    return (
      <View style={[styles.card,styles.bcard]}>
        <Image
          source={this.props.src}
          style={styles.big}
        />
        <Text style={{color: "black"}}>{this.props.title}</Text>
      </View>
    );
  }
}
