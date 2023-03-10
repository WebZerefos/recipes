import { Image, TextInput, View, Pressable } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import colors from '../../constants/colors'

const Input = ({ showSearchIcon, pressable, onPress, style, ...props }) => {
	const renderInput = () => (
		<View style={styles.container}>
			{showSearchIcon ? (
				<Image
					style={[styles.icon, style]}
					source={require('../../../assets/searchIcon.png')}
				/>
			) : null}

			<TextInput
				style={[styles.input, style]}
				{...props}
				placeholderTextColor={colors.lightGrey}
				editable={!pressable}
			/>
		</View>
	)

	if (pressable) {
		return <Pressable onPress={onPress}>{renderInput()}</Pressable>
	}

	return renderInput()
}

Input.defaultProps = {
	placeholder: 'Search recipe',
	showSearchIcon: true,
}

export default memo(Input)
