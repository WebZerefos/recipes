import { View, Text, ImageBackground, Image, SafeAreaView, FlatList } from 'react-native'
import React, { memo, useContext, useEffect, useState } from 'react'
import styles from './styles'
import Input from '../../components/Input'
import { RecipesContext } from '../../../App'
import Card from '../../components/Card'

const Search = () => {
	const { recipes } = useContext(RecipesContext)
	const [filteredRecipes, setFilteredRecipes] = useState([])
	const [keyword, setKeyword] = useState('')

	useEffect(() => {
		if (keyword.length > 2) {
			const filteredItems = recipes?.filter((rec) => rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase()))
			setFilteredRecipes(filteredItems)
		} else {
			setFilteredRecipes([])
		}
	}, [keyword])

	return (
		<SafeAreaView style={styles.container}>
			<Input
				autoFocus
				onChangeText={setKeyword}
				value={keyword}
			/>
			<FlatList
				style={{ flexGrow: 1 }}
				data={filteredRecipes}
				numColumns={2}
				keyExtractor={(item) => String(item?.id)}
				renderItem={({ item, index }) => (
					<Card
						style={index === 0 ? { marginLeft: 24 } : {}}
						title={item.name}
						image={item.thumbnail_url}
						servings={item?.num_servings}
					/>
				)}
			/>
		</SafeAreaView>
	)
}

export default memo(Search)
