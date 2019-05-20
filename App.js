import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
  Button,
} from 'react-native';

export default class Hello extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.page}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View>
            <Text>Works</Text>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Image source={require('./assets/images/smash-background.png')} style={{width: 420, height: 210}}/>
        <Text style={styles.header}>Welcome to the Smash App!</Text>
        <Text style={styles.subHeader}>Click on a character to view frame data</Text>
        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            this.setModalVisible(true);
          }}>
            <Image source={require('./assets/images/Mario.png')} style={styles.character}
            />
          </TouchableOpacity>
            <Image source={require('./assets/images/DonkeyKong.png')} style={styles.character} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    color: 'goldenrod',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  subHeader: {
    color: 'goldenrod',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  character: {
    width: 150,
    height: 150,
    margin: 10
  }
});