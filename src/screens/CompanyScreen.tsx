import { useNavigation } from "@react-navigation/native";
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
import CompanyInfo from "../components/presentation/CompanyInfo/CompanyInfo.component";
import { Button } from "../components/primitives";
import { ICompanyInformation } from "../services/companyService";

type CompanyParams = {
	item: ICompanyInformation;
};

const CompanyScreen = ({ route }) => {
	const { item } = route.params as CompanyParams;
	const { navigate } = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<CompanyInfo {...item} />
			</ScrollView>
			<Button
				text="EDIT COMPANY"
				handleSubmit={() => navigate("NewCompanyView", {
					item,
					newCompany: false,
				})}
			/>
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

export default CompanyScreen;
