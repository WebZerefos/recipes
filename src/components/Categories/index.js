/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
	return (
		<FlatList
			horizontal
			style={{ marginTop: 38 }}
			data={categories}
			keyExtractor={(item) => String(item)}
			showsHorizontalScrollIndicator={false}
			renderItem={({ item, index }) => {
				const selected = selectedCategory === item

				return (
					<TouchableOpacity
						onPress={() => onCategoryPress(item)}
						style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 24 } : {}]}
					>
						<Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
					</TouchableOpacity>
				)
			}}
		/>
	)
}

export default React.memo(Categories)
