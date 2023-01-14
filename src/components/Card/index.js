import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'

const Card = ({ title, style, image, servings, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.container, style]}
			onPress={onPress}
		>
			<View style={styles.row}>
				<Image
					style={styles.dishImage}
					source={{ uri: image }}
				/>

				<Text
					numberOfLines={2}
					style={styles.title}
				>
					{title}
				</Text>
			</View>
			<View style={styles.footer}>
				{servings ? (
					<>
						<Text>Servings</Text>

						<Text style={styles.time}>{servings}</Text>
					</>
				) : null}
			</View>
		</TouchableOpacity>
	)
}

export default memo(Card)
