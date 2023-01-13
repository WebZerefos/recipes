import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Categories from '../../components/Categories'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Input
				pressable
				onPress={() => navigation.navigate('Search')}
			/>

			<Title text='Featured Recipes' />

			<Categories
				categories={['Trending', 'Seasonal', 'Chocoholic']}
				selectedCategory={'Trending'}
				onCategoryPress={() => {}}
			/>
		</SafeAreaView>
	)
}

export default memo(Home)
