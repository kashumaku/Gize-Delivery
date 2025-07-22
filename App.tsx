import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <WebView
        source={{ uri: 'http://user-portal-dev.license.aafda.gov.et/' }}
        style={{ flex: 1 }}
    />
</SafeAreaView>
  )
}

export default App