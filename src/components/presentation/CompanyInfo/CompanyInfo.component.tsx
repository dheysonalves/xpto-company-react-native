import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ICompanyInformation } from "../../../services/CompanyService";
import Formatter from "../../../utils/Formatter";

const CompanyInfo = (data: ICompanyInformation) => {
	return (
		<View>
			<Image
				source={{
					uri: Formatter.isImage(data.logo)
						? data.logo
						: "https://banqi.com.br/assets/img/uploads/img-app.png",
				}}
				style={[styles.image]}
			/>
			<View style={[styles.wrapper]}>
				<View style={[styles.row]}>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>CNPJ</Text>
						<Text style={[styles.text]}>{Formatter.formatCNPJ(data.cnpj)}</Text>
					</View>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>Created At</Text>
						<Text style={[styles.text]}>
							{Formatter.formatDate(data.createdAt as string)}
						</Text>
					</View>
				</View>
				<View style={styles.contentPadding}>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>Name</Text>
						<Text style={[styles.text]}>{data.name}</Text>
					</View>
					<View style={[styles.column]}>
						<Text style={[styles.title]}>Description</Text>
						<Text style={[styles.text]}>{data.description}</Text>
					</View>
				</View>
			</View>
			<Text style={[styles.title]}>Address</Text>
			<View style={[styles.wrapper]}>
				<View style={[styles.column, styles.contentPadding]}>
					<Text style={[styles.title]}>ZIP CODE</Text>
					<Text style={[styles.text]}>{data.address.zip}</Text>
				</View>
				<View style={[styles.row]}>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>State</Text>
						<Text style={[styles.text]}>{data.address.state}</Text>
					</View>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>City</Text>
						<Text style={[styles.text]}>{data.address.city}</Text>
					</View>
				</View>
				<View style={[styles.column, styles.contentPadding]}>
					<Text style={[styles.title]}>Neighborhood</Text>
					<Text style={[styles.text]}>{data.address.neighborhood}</Text>
				</View>
				<View style={[styles.row]}>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>Street</Text>
						<Text style={[styles.text]}>{data.address.street}</Text>
					</View>
					<View style={[styles.column, styles.contentPadding]}>
						<Text style={[styles.title]}>Number</Text>
						<Text style={[styles.text]}>{data.address.number}</Text>
					</View>
				</View>
				<View style={[styles.column, styles.contentPadding]}>
					<Text style={[styles.title]}>Complement</Text>
					<Text style={[styles.text]}>{data.address.complement || "None"}</Text>
				</View>
			</View>
		</View>
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

export default CompanyInfo;
