import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  _handleAdd = () => {}

  _renderList = () => {
    alert('no Bills')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          style={{ width: 140 }}
          mode="contained"
          onPress={() => this.props.navigation.navigate('Biller')}>
          Add Bill
        </Button>
        <Button
          style={{ width: 140, margin: 20 }}
          mode="contained"
          onPress={() => this._renderList()}>
          View Bills
        </Button>
      </View>
    )
  }
}

export { Home }
