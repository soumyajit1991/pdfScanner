import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { RNCamera } from 'react-native-camera'

class Camera extends Component {
  constructor(props) {
    super(props)
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      // console.log(data.uri)
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
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={{
              flex: 0,
              backgroundColor: '#fff',
              borderRadius: 5,
              padding: 15,
              paddingHorizontal: 20,
              alignSelf: 'center',
              margin: 20
            }}>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 10,
                widht: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'white'
              }}
            />
            {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
          </TouchableOpacity>
        </View>
      </RNCamera>
    )
  }
}

export { Camera }
