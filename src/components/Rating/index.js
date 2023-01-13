import { Image, Text, View } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'

const Rating = ({ rating }) => {
	const starArray = [1, 2, 3, 4, 5]

	const renderStars = () => {
		return starArray?.map((star) => {
			if (Math.round(rating) >= star) {
				return (
					<Image
						style={styles.star}
						source={require('../../../assets/starfill.png')}
					/>
				)
			}

			return (
				<Image
					style={styles.star}
					source={require('../../../assets/star.png')}
				/>
			)
		})
	}

	return <View style={styles.row}>{renderStars()}</View>
}

export default memo(Rating)
