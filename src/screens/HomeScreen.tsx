import React, { useState } from "react";
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CardList from "../components/presentation/CardList/CardList.component";

import { TextInput } from "../components/primitives";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchAllCompanies } from "../app/features/company/companyAsyncThunk";
import { ICompanyInformation } from "../services/companyService";

export default function HomeScreen() {
	const [search, updateSearch] = React.useState("");
	const { companies, loading } = useAppSelector(
		(state: RootState) => state.company
	);
	const [filteredCompanies, updateFilteredCompanies] =
		useState<ICompanyInformation[]>(companies);
	const dispatch = useAppDispatch();

	const filterCompanies = React.useCallback(() => {
		updateFilteredCompanies(
			companies.filter((item) => item.name.includes(search) || item.cnpj.includes(search))
		);
	}, [search]);

	React.useEffect(() => {
		dispatch(fetchAllCompanies());
	}, [dispatch, fetchAllCompanies]);

	React.useEffect(() => {
		if (loading === "idle") {
			updateFilteredCompanies(companies);
		}
	}, [loading]);

	React.useEffect(() => {
		filterCompanies();
	}, [search]);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
			<View>
				<Text style={styles.title}>BANQI PROJECT</Text>
				<TextInput
					title="Search"
					dataValue={search}
					onHandleDataValue={updateSearch}
					hasError={false}
					keyboardType="web-search"
					testID="textInputSearch"
				/>
			</View>
			{loading === "loading" ? (
				<View style={styles.indicator}>
					<ActivityIndicator style={styles.loader} testID="loader" />
				</View>
			) : (
				<>
					<CardList data={filteredCompanies} testId="cardList" />
				</>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		backgroundColor: "#fff",
		padding: 24,
	},
	indicator: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	loader: {
		color: "#000",
		width: 64,
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
