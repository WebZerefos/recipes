import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Input
				pressable
				onPress={() => navigation.navigate('Search')}
			/>

			<Title text='Featured Recipes' />
		</SafeAreaView>
	)
}

export default memo(Home)
