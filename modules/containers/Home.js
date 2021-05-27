import React, { Component } from 'react'
import { Dimensions, View, Text, Platform } from 'react-native'
import { Button, Avatar } from 'react-native-paper'
// import person from '../assets/drawables/person1.png'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  static getDerivedStateFromProps(newProps, newState) {
    let state

    if (newProps.route?.params?.data !== undefined) {
      debugger
      state = { data: newState.data.push(newProps.route.params.data) }
    }

    return {
      ...newState,
      ...state
    }
  }

  _handleAdd = () => {}

  _renderList() {
    return null
  }

  render() {
    debugger
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00a46c',
            height: '28%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30
            // paddingHorizontal: 20 //casca and ariana banks
          }}>
          <Text>{`Hello, ${this.props.route.params.username}`}</Text>
        </View>
        <Avatar.Image
          style={{
            backgroundColor: '#ddd',
            alignSelf: 'center',
            top: '22%',
            position: 'absolute'
          }}
          size={100}
          // icon={Platform.OS === 'ios' ? 'person-circle' : 'md-person-circle'}
          // source={require('../assets/drawables/person3.png')}
        />
        <View style={{ top: '8%', borderWidth: 1, flex: 1 }}>
          {this.state.data?.length !== 0 ? this._renderList() : null}
          {
            <Button
              mode={'outlined'}
              style={{ width: 150, alignSelf: 'center' }}
              icon={Platform.OS === 'ios' ? 'camera' : 'md-camera'}
              onPress={() => this.props.navigation.navigate('Camera')}>
              Add Bill
            </Button>
          }
        </View>
      </View>
    )
  }
}

export { Home }
