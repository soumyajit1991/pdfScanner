import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

class Camera extends Component {
  constructor(props) {
    super(props)
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.navigate('Details', { imageData: data.uri })
    }
  }

  render() {
    return (
      <RNCamera
        style={{ flex: 1, justifyContent: 'flex-end' }}
        ref={(ref) => {
          this.camera = ref
        }}
        type={RNCamera.Constants.Type.back}>
        <View style={styles['mainContainer']}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles['buttonContainer']}>
            <Text style={styles['textContainer']}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  textContainer: {
    fontSize: 14
  }
})

export { Camera }
