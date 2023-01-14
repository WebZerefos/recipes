import { SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { memo, useContext, useEffect, useState } from 'react'
import styles from './styles'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Categories from '../../components/Categories'
import RecipeCard from '../../components/RecipeCard'
import Card from '../../components/Card'
import { HealthyRecipesContext, RecipesContext } from '../../../App'

const Home = ({ navigation }) => {
	const [tags, setTags] = useState([])
	const [selectedTag, setSelectedTag] = useState()
	const { healthyRecipes } = useContext(HealthyRecipesContext)
	const { recipes } = useContext(RecipesContext)

	useEffect(() => {
		const tagsList = []

		recipes.forEach((recipe) => {
			recipe?.tags?.forEach((tag) => {
				if (!tagsList?.includes(tag?.name)) {
					tagsList?.push(tag)
				}
			})
		})

		setTags(tagsList)
	}, [recipes])

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={{ marginHorizontal: -24 }}>
				<Input
					pressable
					onPress={() => navigation.navigate('Search')}
				/>

				<Title text='Healthy Recipes' />

				<FlatList
					style={styles.recipeCard}
					showsHorizontalScrollIndicator={false}
					horizontal
					data={healthyRecipes}
					keyExtractor={(item) => String(item?.name)}
					renderItem={({ item, index }) => (
						<RecipeCard
							style={index === 0 ? { marginLeft: 24 } : {}}
							onPress={() => navigation.navigate('RecipeDetails', item)}
							title={item?.name}
							time={item?.cook_time_minutes}
							image={item?.thumbnail_url}
							rating={item?.user_ratings?.score}
							author={item?.credits?.length ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url } : null}
						/>
					)}
				/>

				<Categories
					categories={tags}
					selectedCategory={selectedTag}
					onCategoryPress={setSelectedTag}
				/>

				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					data={recipes}
					keyExtractor={(item) => String(item?.id)}
					renderItem={({ item, index }) => (
						<Card
							style={index === 0 ? { marginLeft: 24 } : {}}
							onPress={() => navigation.navigate('RecipeDetails', item)}
							title={item.name}
							image={item.thumbnail_url}
							servings={item?.num_servings}
						/>
					)}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default memo(Home)
