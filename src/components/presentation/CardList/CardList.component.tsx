import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../composites";
import Companies from "../../../mocks/companies";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Params {
	id: string;
}

const CardList = () => {
	const { navigate } = useNavigation();

	const renderItem = ({ item }) => {
		return (
			<Card
				data={item}
				onHandleSubmit={() => {
					navigate("CompanyView", {
						item
					});
				}}
			/>
		);
	};

	return (
		<FlatList
			data={Companies}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default CardList;
