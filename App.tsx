import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
			<StatusBar barStyle="dark-content" />
			<WebView
				source={{
					uri: 'https://gize.delivery.frontend.codenilesolutions.com/',
				}}
				style={{ flex: 1 }}
			/>
		</SafeAreaView>
	)
}

export default App
