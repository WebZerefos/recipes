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
	row: {
		alignItems: 'center',
	},
	title: {
		fontSize: 14,
		color: colors.grey,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	dishImage: {
		width: 100,
		height: 100,
		borderRadius: 60,
		marginTop: -60,
	},
	time: {
		color: colors.grey,
		fontSize: 11,
	},
	footer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 60,
	},
})

export default styles
