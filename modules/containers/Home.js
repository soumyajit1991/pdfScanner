import React, { Component } from 'react'
import { Dimensions, View, Text, Platform, StyleSheet } from 'react-native'
import { Button, Avatar } from 'react-native-paper'

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
    return (
      <View style={{ flex: 1 }}>
        <View style={styles['mainContainer']}>
          <Text>{`Hello, ${this.props.route.params.username}`}</Text>
        </View>
        <Avatar.Image style={styles['avatarContainer']} size={100} />
        <View style={styles['footerContainer']}>
          {this.state.data?.length !== 0 ? this._renderList() : null}
          {
            <Button
              mode={'outlined'}
              style={styles['billButton']}
              // onPress={() => this.props.navigation.navigate('Camera')}
              onPress={() => this.props.navigation.navigate('Details')}>
              Add Bill
            </Button>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: { top: '8%', flex: 1 },
  billButton: {
    width: 150,
    alignSelf: 'center',
    top: 200
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a46c',
    height: '28%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  avatarContainer: {
    backgroundColor: '#ddd',
    alignSelf: 'center',
    top: '22%',
    position: 'absolute'
  }
})

export { Home }
