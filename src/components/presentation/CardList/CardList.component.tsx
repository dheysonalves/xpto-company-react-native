import React from 'react';
import { FlatList } from 'react-native';
import { Card } from '../../composites';
import Companies from '../../../mocks/companies';

const CardList = () => {

	const renderItem = (({ item }) => {
		return (
			<Card data={item} />
		)
	})

	return (
		<FlatList
			data={Companies}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
		/>
	);
}

export default CardList;
