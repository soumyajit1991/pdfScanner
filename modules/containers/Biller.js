import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { IconButton, Button } from 'react-native-paper'
import { RNCamera } from 'react-native-camera'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export class Biller extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ''
    }
  }

  static getDerivedStateFromProps(props, newState) {
    let state

    if (props?.route?.params !== undefined)
      state = { data: props.route.params.params }

    return {
      ...newState,
      ...state
    }
  }

  _renderCamera = () => {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <RNCamera
          style={{ flex: 1, justifyContent: 'flex-end' }}
          ref={(ref) => {
            this.camera = ref
          }}
          type={RNCamera.Constants.Type.back}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
        <IconButton
          icon={'camera-plus'}
          color={'red'}
          size={30}
          onPress={() => {
            debugger
            this.props.navigation.navigate('Camera')
          }}
        />
        {this.state?.data ? (
          <Image
            style={{
              borderRadius: 5,
              width: Dimensions.get('window').width - 100,
              height: 400
            }}
            source={{ uri: this.state.data }}
          />
        ) : null}
      </View>
    )
  }
}

export default Biller
