import { View, Text, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Input from '../../components/Input'
import Title from '../../components/Title'
import Categories from '../../components/Categories'
import RecipeCard from '../../components/RecipeCard'
import Card from '../../components/Card'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={{ marginHorizontal: -24 }}>
				<Input
					pressable
					onPress={() => navigation.navigate('Search')}
				/>

				<Title text='Featured Recipes' />

				<FlatList
					style={styles.recipeCard}
					showsHorizontalScrollIndicator={false}
					horizontal
					data={[1, 2, 3, 4]}
					renderItem={({ index }) => (
						<RecipeCard
							style={index === 0 ? { marginLeft: 24 } : {}}
							title={'Steak with tomato sauce and bulgur rice.'}
							image={'https://media.istockphoto.com/id/1336524166/photo/young-book-author.jpg?b=1&s=170667a&w=0&k=20&c=kKFMhHdaNewiWER1eiosb-3KVFO7o57Mz4lvzIoAJOo='}
							author={'James Milner'}
							time={'20 min'}
						/>
					)}
				/>

				<Categories
					categories={['Trending', 'Seasonal', 'Chocoholic', 'Seasonal1', 'Chocoholic1']}
					selectedCategory={'Trending'}
					onCategoryPress={() => {}}
				/>

				<FlatList
					style={styles.recipeCard}
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
