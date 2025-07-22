import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Webview from 'react-native-webview'

const index = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Webview
				source={{ uri: 'http://user-portal-dev.license.aafda.gov.et/' }}
				style={{ flex: 1 }}
			/>
		</SafeAreaView>
	)
}

export default index
