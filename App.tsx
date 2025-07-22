import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'

const App = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor:'#FFF'}}>

    <WebView
        source={{ uri: 'https://gize.delivery.frontend.codenilesolutions.com/' }}
        style={{ flex: 1 }}
    />
</SafeAreaView>
  )
}

export default App