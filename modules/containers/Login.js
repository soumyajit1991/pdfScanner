import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native'
// import Feather from 'react-native-vector-icons/Feather'

import LoginProcessor from '../processors/LoginProcessor'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      secure: true,
      username: '',
      password: ''
    }
  }

  _onSignIn = () => {
    this.setState({
      showModal: true
    })
  }
  _handlePassword = (value) => {
    this.setState({
      password: value
    })
  }
  _handleUserName = (value) => {
    this.setState({
      username: value
    })
  }
  _updateSecurity = () => {
    this.setState({
      secure: !this.state.secure
    })
  }

  _renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showModal}
        onRequestClose={() => {
          this.setState({
            showModal: false
          })
        }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
            <TextInput
              style={styles.textContainer}
              placeholder={'Username'}
              placeholderTextColor={'#333'}
              onEndEditing={(value) =>
                this._handleUserName(value.nativeEvent.text)
              }
            />
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <TextInput
                style={styles.textContainer}
                secureTextEntry={this.state.secure ? true : false}
                placeholder={'Password'}
                placeholderTextColor={'#333'}
                onEndEditing={(value) =>
                  this._handlePassword(value.nativeEvent.text)
                }
              />
              {/* <TouchableOpacity
                style={{ position: 'absolute', borderWidth: 1 }}
                onPress={() => this._updateSecurity()}>
                {this.state.secure ? (
                  <Feather name="eye-off" color="grey" size={15} />
                ) : (
                  <Feather name="eye" color="grey" size={15} />
                )}
              </TouchableOpacity> */}
            </View>

            <Button
              onPress={(val) => {
                LoginProcessor.validateUser(
                  this.state.username,
                  this.state.password
                )
                  .then((response) => {
                    this.setState({
                      showModal: false
                    })
                    this.props.navigation.navigate('Home')
                  })
                  .catch((error) => alert(error))
              }}
              title="Login"
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Button onPress={() => this._onSignIn()} title="Sign In" />
        {this.state.showModal && this._renderModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d8fff8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 250,
    width: Dimensions.get('window').width - 80,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    height: 40,
    width: Dimensions.get('window').width - 150,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf'
  }
})

export { Login }
