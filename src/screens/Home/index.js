import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Button from '../../components/Button'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>Welcome</Text>
			<Text onPress={() => navigation.navigate('Search')}>Go to Search</Text>
		</SafeAreaView>
	)
}

export default memo(Home)
