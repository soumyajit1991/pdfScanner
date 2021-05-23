import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class LoginProcessor {
  static validateUser = (user, password) => {
    return new Promise(function (resolve, reject) {
      if (user.length > 0 || password.length > 0) {
        if (user === 'Ankit' && password === '123') resolve(true)
        else reject('Wrong Credentials')
      } else reject('Please enter username and password')
    })
  }
}

export default LoginProcessor
