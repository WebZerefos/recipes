import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.lightGrey,
		marginRight: 16,
		marginTop: 80,
		padding: 10,
		width: width * 0.4,
		height: width * 0.5,
		borderRadius: 10,
	},
	title: {
		fontSize: 14,
		color: colors.grey,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	dishImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginTop: -80,
	},
	column: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 90,
	},
	icon: {
		width: 25,
		height: 25,
		marginRight: 8,
	},
	time: {
		color: colors.grey,
		fontSize: 11,
	},
})

export default styles
