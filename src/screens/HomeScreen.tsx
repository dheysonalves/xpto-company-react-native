import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardList from "../components/presentation/CardList/CardList.component";

import { TextInput, Button } from "../components/primitives";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
	const [search, updateSearch] = React.useState('');
	const { navigate } = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
			<Text style={styles.title}>BANQI PROJECT</Text>
			<TextInput
				title="Search"
				dataValue={search}
				onHandleDataValue={updateSearch}
				hasError={false}
				keyboardType="web-search"
			/>
			<CardList />
			<View style={styles.buttonWrapper}>
				<Button
					text="ADD COMPANY"
					handleSubmit={() => navigate("NewCompanyView")}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#fff",
		padding: 24,
	},
	title: {
		fontSize: 42,
		fontWeight: "bold",
		color: "#0a0a0a",
		textAlign: "center",
		textTransform: "uppercase",
	},
	buttonWrapper: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		marginTop: 24,
	},
});
