/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
const Sound = require('react-native-sound');

Sound.setCategory('Playback');

const woof = new Sound('woof.mp3', Sound.MAIN_BUNDLE);
const meow = new Sound('meow.mp3', Sound.MAIN_BUNDLE);
const tweet = new Sound('tweet.mp3', Sound.MAIN_BUNDLE);
const oink = new Sound('oink.mp3', Sound.MAIN_BUNDLE);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu :)))',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: ""
  }

  onPress = (mode) => {
    let text = "";
    switch (mode) {
      case 'DOG':
        woof.play();
        text = "Woof woof goes the doggie!";
        break;
      case 'CAT':
        meow.play();
        text = "Meow meow goes the kitty!";
        break;
      case 'BIRD':
        tweet.play();
        text = "Tweet tweet goes the birdie!";
        break;
      case 'PIG':
        text = "Oink oink goes the piggie!";
        oink.play();
        break;
    }
    this.setState({
      text: text
    })    
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.onPress("DOG")}}>
          <Image 
            style={{
              width: 100,
              height: 100
            }}
            source={require('./img/dog.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.onPress("CAT") }}>
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./img/cat.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.onPress("BIRD") }}>
          <Image
            style={{
              width: 100,
              height: 80
            }}
            source={require('./img/bird.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.onPress("PIG") }}>
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./img/pig.png')} />
        </TouchableHighlight>
        <Text style={{
          fontSize: 30
        }}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
    backgroundColor: '#ff8000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
