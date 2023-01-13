import { Text, View, Image } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Rating from '../Rating'

const Card = ({ title, style, image, time }) => {
	return (
		<View style={[styles.container, style]}>
			<View>
				<Image
					style={styles.dishImage}
					source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg' }}
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
