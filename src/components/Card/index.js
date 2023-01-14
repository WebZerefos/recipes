import { Text, View, Image } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Rating from '../Rating'

const Card = ({ title, style, image, time }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<Image
					style={styles.dishImage}
					source={{ uri: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/11e6176999dd4d3fa7444224e8891cdb.jpeg' }}
				/>

				<Text
					numberOfLines={2}
					style={styles.title}
				>
					{title}
				</Text>
			</View>

			<View style={styles.column}>
				<Image
					style={styles.icon}
					source={require('../../../assets/timer.png')}
				/>

				<Text style={styles.time}>{time}</Text>
			</View>
		</View>
	)
}

export default memo(Card)
