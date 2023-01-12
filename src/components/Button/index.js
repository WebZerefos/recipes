import { Image, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'

const Button = ({ onPress, children }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
			<Image
				style={styles.icon}
				source={require('../../../assets/arrowRight.png')}
			/>
		</TouchableOpacity>
	)
}

export default memo(Button)
