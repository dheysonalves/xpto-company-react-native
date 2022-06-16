import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

interface IButtonProps {
	text: string;
	containerBg?: string;
	handleSubmit: () => void;
}

const Button = ({
	containerBg,
	text = "submit",
	handleSubmit,
	...otherProps
}: IButtonProps & TouchableOpacity["props"]) => {
	const bg = containerBg ? containerBg : "#000";
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: bg }]}
			activeOpacity={0.8}
			onPress={handleSubmit}
			{...otherProps}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		borderRadius: 4,
	},
	text: {
		color: "#fff",
		textTransform: "uppercase",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Button;
