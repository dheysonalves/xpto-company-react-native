import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

interface ICardProps {
	data: {
		id?: string;
		name: string;
		cnpj: string;
		description: string;
		logo: string;
		createdAt?: string;
	};
	onHandleSubmit?: () => void;
}

const Card = ({ data, onHandleSubmit }: ICardProps) => {
	return (
		<Pressable style={styles.container} onPress={onHandleSubmit}>
			{data.logo && (
				<Image
					style={styles.image}
					source={{
						uri: data.logo,
					}}
					height={52}
					width={52}
				/>
			)}
			<View style={styles.content}>
				<View style={styles.topContent}>
					<Text style={styles.text}>{data.cnpj}</Text>
					<Text style={styles.text}>{data.createdAt}</Text>
				</View>
				<View style={styles.bottomContent}>
					<Text style={[styles.text, styles.name]}>{data.name}</Text>
					<Text style={styles.text}>{data.description}</Text>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderRadius: 5,
		borderColor: "#000",
		borderWidth: 2,
		padding: 16,
		marginVertical: 16,
	},
	image: {
		borderRadius: 50,
		width: 64,
		height: 64,
		marginRight: 16,
	},
	content: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	topContent: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomContent: {
		width: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	text: {
		fontSize: 16,
	},
	name: {
		textTransform: 'uppercase',
		fontWeight: '700',
	}
});

export default Card;
