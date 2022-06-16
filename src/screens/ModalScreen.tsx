import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import CardList from "../components/presentation/CardList/CardList.component";

import { Text, View, TextInput, Button } from "../components/primitives";

export default function ModalScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<CardList />
			<Button text="test" handleSubmit={() => console.log("submit")} />
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
