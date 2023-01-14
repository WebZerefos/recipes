import { SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { memo, useContext } from 'react'
import styles from './styles'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Categories from '../../components/Categories'
import RecipeCard from '../../components/RecipeCard'
import Card from '../../components/Card'
import { HealthyRecipesContext, RecipesContext } from '../../../App'

const Home = ({ navigation }) => {
	const { healthyRecipes } = useContext(HealthyRecipesContext)
	const { recipes } = useContext(RecipesContext)

	console.log(healthyRecipes)
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
					renderItem={({ item, index }) => (
						<RecipeCard
							style={index === 0 ? { marginLeft: 24 } : {}}
							title={item.name}
							image={item.thumbnail_url}
							rating={item?.user_ratings?.score}
							time={item?.instructions?.end_time}
							author={item.credits?.length ? { name: item.credits[0].name, image: item.credits[0].image_url } : null}
						/>
					)}
				/>

				<Categories
					categories={['Trending', 'Seasonal', 'Chocoholic', 'Seasonal1', 'Chocoholic1']}
					selectedCategory={'Trending'}
					onCategoryPress={() => {}}
				/>

				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					data={[1, 2, 3, 4]}
					renderItem={({ index }) => (
						<Card
							style={index === 0 ? { marginLeft: 24 } : {}}
							title={'Steak Bulgur Rice Salad.'}
							image={'https://media.istockphoto.com/id/1336524166/photo/young-book-author.jpg?b=1&s=170667a&w=0&k=20&c=kKFMhHdaNewiWER1eiosb-3KVFO7o57Mz4lvzIoAJOo='}
							author={'James Milner'}
							time={'20 min'}
						/>
					)}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default memo(Home)
