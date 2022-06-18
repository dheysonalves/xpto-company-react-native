import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../composites";

import { useNavigation } from "@react-navigation/native";
import { ICompanyInformation } from "../../../services/companyService";

interface ICardListProps {
	data: ICompanyInformation[];
}

const CardList = ({ data } : ICardListProps) => {
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
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item.id as string}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default CardList;
