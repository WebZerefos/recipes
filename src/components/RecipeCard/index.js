import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Rating from '../Rating'

const RecipeCard = ({ title, style, image, author, rating, time }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<Text
					style={styles.title}
					numberOfLines={1}
				>
					{title}
				</Text>
				<Image
					style={styles.dishImage}
					source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg' }}
				/>
			</View>
			<View style={styles.rating}>
				<Rating rating={3.4} />
			</View>
			<View style={[styles.row, { justifyContent: 'space-between' }]}>
				<View style={styles.row}>
					<Image
						style={styles.authorImage}
						source={{ uri: image }}
					/>
					<Text style={styles.authorName}>By {author}</Text>
				</View>
				<View style={styles.row}>
					<Image
						style={styles.icon}
						source={require('../../../assets/timer.png')}
					/>

					<Text style={styles.time}>{time}</Text>
				</View>
			</View>
		</View>
	)
}

export default RecipeCard
