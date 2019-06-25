import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
  ScrollView
} from 'react-native';
import FrameData from './frameData/frameData.js';

export default class Hello extends Component {
  state = {
    modalVisible: false,
    selectedCharacter: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  populateModal(character) {
    for (let i = 0; i < FrameData.length; i++) {
      if (character === FrameData[i].name) {
        return (
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <ScrollView>
            <View style={styles.modal} key={i}>
              <Text style={{ fontSize: 30 }}>{FrameData[i].name}</Text>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Jab 1: </Text>
                  {`Startup: ${FrameData[i].jab1.startup}
                  On shield: ${FrameData[i].jab1.onShield}
                  Active: ${FrameData[i].jab1.active}
                  Total: ${FrameData[i].jab1.total}
                  Base Damage: ${FrameData[i].jab1.baseDamage}
                  Shield Lag: ${FrameData[i].jab1.shieldLag}
                  Shield Stun: ${FrameData[i].jab1.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Jab 2: </Text>
                  {`Startup: ${FrameData[i].jab2.startup}
                  On shield: ${FrameData[i].jab2.onShield}
                  Active: ${FrameData[i].jab2.active}
                  Total: ${FrameData[i].jab2.total}
                  Base Damage: ${FrameData[i].jab2.baseDamage}
                  Shield Lag: ${FrameData[i].jab2.shieldLag}
                  Shield Stun: ${FrameData[i].jab2.shieldStun}`}
                </Text>
              </View>
              <View>
                <Text style={styles.moveDiv}>
                  <Text style={styles.moveText}>Jab 3: </Text>
                  {`Startup: ${FrameData[i].jab3.startup}
                  On shield: ${FrameData[i].jab3.onShield}
                  Active: ${FrameData[i].jab3.active}
                  Total: ${FrameData[i].jab3.total}
                  Base Damage: ${FrameData[i].jab3.baseDamage}
                  Shield Lag: ${FrameData[i].jab3.shieldLag}
                  Shield Stun: ${FrameData[i].jab3.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>F-Tilt: </Text>
                  {`Startup: ${FrameData[i].fTilt.startup}
                  On shield: ${FrameData[i].fTilt.onShield}
                  Active: ${FrameData[i].fTilt.active}
                  Total: ${FrameData[i].fTilt.total}
                  Base Damage: ${FrameData[i].fTilt.baseDamage}
                  Shield Lag: ${FrameData[i].fTilt.shieldLag}
                  Shield Stun: ${FrameData[i].fTilt.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Up-Tilt: </Text>
                  {`Startup: ${FrameData[i].upTilt.startup}
                  On shield: ${FrameData[i].upTilt.onShield}
                  Active: ${FrameData[i].upTilt.active}
                  Total: ${FrameData[i].upTilt.total}
                  Base Damage: ${FrameData[i].upTilt.baseDamage}
                  Shield Lag: ${FrameData[i].upTilt.shieldLag}
                  Shield Stun: ${FrameData[i].upTilt.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Down-Tilt: </Text>
                  {`Startup: ${FrameData[i].downTilt.startup}
                  On shield: ${FrameData[i].downTilt.onShield}
                  Active: ${FrameData[i].downTilt.active}
                  Total: ${FrameData[i].downTilt.total}
                  Base Damage: ${FrameData[i].downTilt.baseDamage}
                  Shield Lag: ${FrameData[i].downTilt.shieldLag}
                  Shield Stun: ${FrameData[i].downTilt.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Dash Attack: </Text>
                  {`Startup: ${FrameData[i].dashAttack.startup}
                  On shield: ${FrameData[i].dashAttack.onShield}
                  Active: ${FrameData[i].dashAttack.active}
                  Total: ${FrameData[i].dashAttack.total}
                  Base Damage: ${FrameData[i].dashAttack.baseDamage}
                  Shield Lag: ${FrameData[i].dashAttack.shieldLag}
                  Shield Stun: ${FrameData[i].dashAttack.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Forward Smash: </Text>
                  {`Startup: ${FrameData[i].forwardSmash.startup}
                  On shield: ${FrameData[i].forwardSmash.onShield}
                  Active: ${FrameData[i].forwardSmash.active}
                  Total: ${FrameData[i].forwardSmash.total}
                  Base Damage: ${FrameData[i].forwardSmash.baseDamage}
                  Shield Lag: ${FrameData[i].forwardSmash.shieldLag}
                  Shield Stun: ${FrameData[i].forwardSmash.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Up Smash: </Text>
                  {`Startup: ${FrameData[i].upSmash.startup}
                  On shield: ${FrameData[i].upSmash.onShield}
                  Active: ${FrameData[i].upSmash.active}
                  Total: ${FrameData[i].upSmash.total}
                  Base Damage: ${FrameData[i].upSmash.baseDamage}
                  Shield Lag: ${FrameData[i].upSmash.shieldLag}
                  Shield Stun: ${FrameData[i].upSmash.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Down Smash: </Text>
                  {`Startup: ${FrameData[i].downSmash.startup}
                  On shield: ${FrameData[i].downSmash.onShield}
                  Active: ${FrameData[i].downSmash.active}
                  Total: ${FrameData[i].downSmash.total}
                  Base Damage: ${FrameData[i].downSmash.baseDamage}
                  Shield Lag: ${FrameData[i].downSmash.shieldLag}
                  Shield Stun: ${FrameData[i].downSmash.shieldStun}`}
                </Text>
              </View>
              <View style={styles.moveDiv}>
                <Text>
                  <Text style={styles.moveText}>Neutral Air: </Text>
                  {`Startup: ${FrameData[i].nair.startup}
                  On shield: ${FrameData[i].nair.onShield}
                  Active: ${FrameData[i].nair.active}
                  Total: ${FrameData[i].nair.total}
                  Base Damage: ${FrameData[i].nair.baseDamage}
                  Landing Lag: ${FrameData[i].nair.landingLag}
                  Shield Lag: ${FrameData[i].nair.shieldLag}
                  Shield Stun: ${FrameData[i].nair.shieldStun}`}
                </Text>
              </View>
            </View>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{ textAlign: 'center' }}>Close</Text>
            </TouchableHighlight>
          </ScrollView>
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
    
  },
  moveText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'gray',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  moveDiv: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    margin: 5,
  },
});