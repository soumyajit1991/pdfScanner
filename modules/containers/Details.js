import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native'
import { IconButton, Button } from 'react-native-paper'
import { RNCamera } from 'react-native-camera'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const detailsObj = {
  shop: {
    value: 'Shop Name'
  },
  Bill_Number: {
    value: 'Bill Number'
  },
  Total: {
    value: 'Total Amount'
  },
  Bill_Date: {
    value: 'Bill Date'
  }
}

export class Details extends Component {
  constructor(props) {
    super(props)

    let shopName, billNumber, billDate, billAmount

    this.state = {
      imageData: ''
    }
  }

  static getDerivedStateFromProps(props, newState) {
    let state

    if (props?.route?.params !== undefined)
      state = { imageData: props.route.params.imageData }

    return {
      ...newState,
      ...state
    }
  }

  _renderContent() {
    return (
      <View>
        <Image
          style={styles['imageContainer']}
          source={{ uri: this.state.imageData }}
        />
        <View style={styles['detailsContainer']}>
          {Object.values(detailsObj).map(
            (item) => (
              (<Text>{item.value}</Text>),
              (
                <TextInput
                  style={styles.textContainer}
                  onEndEditing={(value) => {
                    debugger
                    switch (item.value) {
                      case 'Shop Name':
                        this.shopName = value.nativeEvent.text
                        break

                      case 'Bill Number':
                        this.billNumber = value.nativeEvent.text
                        break

                      case 'Total Amount':
                        this.billAmount = value.nativeEvent.text
                        break

                      case 'Bill Date':
                        this.billDate = value.nativeEvent.text
                        break
                    }
                  }}
                  placeholderTextColor={'#111'}
                  placeholder={`Enter ${item.value}`}
                />
              )
            )
          )}
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles['mainContainer']}>
        {this._renderContent()}
        {/* {this.state?.imageData ? this._renderContent() : null} */}
        {
          <Button
            mode={'outlined'}
            style={styles['buttonContainer']}
            onPress={() =>
              this.props.navigation.navigate('Home', {
                shopName: this.shopName,
                billNumber: this.billNumber,
                billAmount: this.billAmount,
                billDate: this.billDate
              })
            }>
            Add
          </Button>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: { width: 100, alignSelf: 'center' },
  mainContainer: { flex: 1, alignItems: 'center', margin: 10 },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  imageContainer: {
    borderRadius: 5,
    width: Dimensions.get('window').width - 100,
    height: 400,
    margin: 10,
    borderWidth: 1 //to be removed
  },
  textContainer: {
    height: 40,
    width: Dimensions.get('window').width - 150,
    margin: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderBottomColor: '#dfdfdf'
  }
})

export default Details
