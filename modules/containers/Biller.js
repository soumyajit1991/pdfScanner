import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
    debugger
    let state
    if (props.data && props.data !== undefined)
      state = { data: props.route.params.params }
    // this.setState({
    //   data: this.props.navigation.params
    // })
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
    debugger
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
        {/* {this.state.data ? } */}
      </View>
    )
  }
}

export default Biller
