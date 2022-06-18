import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Formatter from "../../../utils/Formatter";

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
		<TouchableOpacity
			style={styles.container}
			onPress={onHandleSubmit}
			activeOpacity={0.5}>
			<Image
				style={styles.image}
				source={{
					uri: Formatter.isImage(data.logo)
						? data.logo
						: "https://banqi.com.br/assets/img/uploads/img-app.png",
				}}
				height={52}
				width={52}
			/>
			<View style={styles.content}>
				<View style={styles.topContent}>
					<View>
						<Text style={[styles.title]} testID="cnpjText">
							CNPJ
						</Text>
						<Text style={styles.text}>{Formatter.formatCNPJ(data.cnpj)}</Text>
					</View>
					<View>
						<Text style={[styles.title]} testID="createdAtText">
							Created At
						</Text>
						<Text style={styles.text}>
							{Formatter.formatDate(data.createdAt as string)}
						</Text>
					</View>
				</View>
				<View style={styles.bottomContent}>
					<View style={styles.nameWrapper}>
						<Text style={[styles.title]} testID="nameText">Name</Text>
						<Text style={[styles.text]}>{data.name}</Text>
					</View>
					<View>
						<Text style={[styles.title]} testID="descriptionText">Description</Text>
						<Text style={styles.text}>
							{Formatter.removeWidowWord(data.description)}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
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
		paddingBottom: 12,
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
	title: {
		color: "#0a0a0a",
		fontWeight: "500",
		fontSize: 14,
		textTransform: "uppercase",
	},
	nameWrapper: {
		paddingBottom: 8,
	},
});

export default Card;
