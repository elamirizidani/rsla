import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation'
import CategoryScreen from './screens/CategoryScreen'

export class App extends Component {
  render() {
    return (
      <Tabs/>
    )
  }
}

export default App
