import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		marginTop: 47,
		marginLeft: 16,
		marginBottom: 15,
		marginRight: 10,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
		padding: 10,
		width: width * 0.7,
		height: 120,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},

	title: {
		fontSize: 14,
		color: colors.grey,
		fontWeight: 'bold',
		flex: 1,
		margin: 5,
		marginBottom: 20,
	},
	dishImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginTop: -50,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rating: {
		position: 'absolute',
		marginTop: 50,
		marginLeft: 16,
	},
	authorName: {
		color: colors.lightGrey2,
		fontSize: 12,
	},
	authorImage: {
		width: 30,
		height: 30,
		borderRadius: 20,
		marginRight: 8,
	},
	icon: {
		width: 17,
		height: 17,
		marginRight: 8,
	},
	time: {
		color: colors.lightGrey2,
	},
})

export default styles
