import React from "react";
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

import { TextInput, Button } from "../components/primitives";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { fetchAllCompanies } from "../app/features/company/companyAsyncThunk";

export default function HomeScreen() {
	const [search, updateSearch] = React.useState("");
	const { companies, loading } = useAppSelector(
		(state: RootState) => state.company
	);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAllCompanies());
	}, [dispatch, fetchAllCompanies]);

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
					<CardList data={companies} testId="cardList" />
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
