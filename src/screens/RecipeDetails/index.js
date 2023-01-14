import { Image, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'

import Title from '../../components/Title'

const RecipeDetails = ({ route }) => {
	const recipe = route.params || {}

	console.log(recipe)
	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: recipe?.thumbnail_url }}
			/>
			<Title text={recipe?.name} />
		</SafeAreaView>
	)
}

export default memo(RecipeDetails)
