import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IconButton, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export class Biller extends Component {
  constructor(props) {
    super(props)
  }

  _renderCamera() {}

  render() {
    let ic = <Icon name="camera-plus" size={20} />
    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
        <IconButton
          icon={'camera-plus'}
          color={'red'}
          size={30}
          onPress={() => this._renderCamera()}
        />
      </View>
    )
  }
}

export default Biller
