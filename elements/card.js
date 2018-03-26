import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class SmallCard extends React.Component {
  render() {

    return (
      <View style={[styles.scard,styles.card]}>
        <Image
          source={this.props.src}
          style={styles.small}
        />
        <Text>{this.props.title}</Text>
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
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    paddingBottom: 10,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  scard: {
    width: 180,
  },
  bcard: {
    flex: 1,
    height: 220,
  },
  small: {
    height: 120,
    width: 176,
  },
  big: {
    height: 180,
  },
});
