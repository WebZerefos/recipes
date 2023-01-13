import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
	item: {
		fontSize: 14,
		color: colors.green,
		padding: 8,
		paddingHorizontal: 12,
	},
	selectedItem: {
		color: colors.white,
	},
	itemContainer: {
		marginRight: 8,
		marginBottom: 14,
	},
	selectedItemContainer: {
		backgroundColor: colors.green,
		borderRadius: 10,
	},
})

export default styles
