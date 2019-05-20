import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
} from 'react-native';

const frameData = [
  {
      name: "Mario",
      jab1: "Startup: 2 frames, Total: 19 frames",
      jab2: "Startup: 2 frames, Total: 21 frames",
      jab3: "Startup: 2 frames, Total: 33 frames",
      fTilt: "Startup: 5 frames, Total: 25 frames"
  },
  {
      name: "Donkey Kong",
      jab1: "Startup: 5 frames, Total: 24 frames",
      jab2: "Startup: 4 frames, Total: 34 frames",
      jab3: "N/A",
      fTilt: "Startup: 7 frames, Total: 34 frames"
  }
]

export default class Hello extends Component {
  state = {
    modalVisible: false,
    selectedCharacter: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  populateModal(character) {
    for (let i = 0; i < frameData.length; i++) {
      if (character === frameData[i].name) {
        return (
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View>
            <View style={styles.modal} key={i}>
              <Text style={{ fontSize: 30 }}>{frameData[i].name}</Text>
              <View>
                <Text>
                  <Text style={styles.moveText}>Jab 1: </Text>
                  {frameData[i].jab1}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles.moveText}>Jab 2: </Text>
                  {frameData[i].jab2}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles.moveText}>Jab 3: </Text>
                  {frameData[i].jab3}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles.moveText}>F-Tilt: </Text>
                  {frameData[i].fTilt}
                </Text>
              </View>
            </View>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{ textAlign: 'center' }}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.page}>
        {this.populateModal(this.state.selectedCharacter)}
        <Image source={require('./assets/images/smash-background.png')} style={{width: 420, height: 210}}/>
        <Text style={styles.header}>Smash Ultimate Frame Data</Text>
        <Text style={styles.subHeader}>Click on a character to view frame data</Text>
        <View style={{flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            this.setState({ selectedCharacter: "Mario" });
            this.setModalVisible(true);
          }}>
            <Image source={require('./assets/images/Mario.png')} style={styles.character}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({ selectedCharacter: "Donkey Kong" });
            this.setModalVisible(true);
          }}>
            <Image source={require('./assets/images/DonkeyKong.png')} style={styles.character} />
          </TouchableOpacity>
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
  },
  modal: {
    alignItems: 'center'
  },
  moveText: {
    fontSize: 30,
    color: 'skyblue',
    textShadowColor: 'black',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  }
});