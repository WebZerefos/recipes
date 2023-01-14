import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		flex: 1,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 20,
	},
})

export default styles
