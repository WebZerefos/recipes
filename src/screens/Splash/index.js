import { View, Text, ImageBackground, Image } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Button from '../../components/Button'

const Splash = ({ navigation }) => {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../../../assets/splash.png')}
		>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require('../../../assets/logo.png')}
				/>
				<Text style={styles.title}>100K+ Premium Recipe</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.bigTitle}>Get</Text>
				<Text style={styles.bigTitle}>Cooking</Text>
				<Text style={styles.subtitle}>Simple way to find Tasty Recipe</Text>

				<Button onPress={() => navigation.navigate('Home')}>Start Cooking</Button>
			</View>
		</ImageBackground>
	)
}

export default memo(Splash)
