import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import Input from '../../components/Input'

const Search = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Input />
		</SafeAreaView>
	)
}

export default memo(Search)
