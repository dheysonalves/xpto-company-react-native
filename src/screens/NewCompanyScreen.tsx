import React from "react";
import {
	View,
	Text,
	ScrollView,
	SafeAreaView,
	StyleSheet,
	Image,
} from "react-native";
import CompanyForm from "../components/behavior/CompanyForm/CompanyForm.component";

const NewCompanyScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<CompanyForm />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#fff",
		padding: 24,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 16,
	},
	title: {
		color: "#0a0a0a",
		fontWeight: "500",
		fontSize: 18,
		textTransform: "uppercase",
	},
	text: {
		fontSize: 16,
	},
	wrapper: {
		paddingVertical: 24,
	},
	contentPadding: {
		paddingBottom: 18,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	column: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
});

export default NewCompanyScreen;
