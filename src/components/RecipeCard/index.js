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
					source={{ uri: image }}
				/>
			</View>
			<View style={styles.rating}>
				<Rating rating={rating} />
			</View>
			<View style={[styles.row, { justifyContent: 'space-between' }]}>
				{author ? (
					<View style={styles.row}>
						<Image
							style={styles.authorImage}
							source={{ uri: author?.image }}
						/>
						<Text style={styles.footerText}>By {author?.name}</Text>
					</View>
				) : (
					<View />
				)}

				{time ? (
					<View style={styles.row}>
						<Image
							style={styles.timerIcon}
							source={require('../../../assets/timer.png')}
						/>
						<Text style={styles.footerText}>{time}</Text>
					</View>
				) : (
					<View />
				)}
			</View>
		</View>
	)
}

export default RecipeCard
