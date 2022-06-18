import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputDataProps {
	title: string;
	dataValue: string;
	onHandleDataValue: (value: string) => void;
	onHandleBlur?: (value: string) => void;
	hasError: boolean;
	errorMessage?: string;
}

const InputData = ({
	title,
	dataValue,
	onHandleDataValue,
	hasError,
	errorMessage,
	onHandleBlur,
	...props
}: InputDataProps & TextInput['props']) => {
	const [isFocused, setIsFocused] = useState(false);
	const handleDataValue = (value: string) => {
		onHandleDataValue(value);
	};

	return (
		<View style={styles.container}>
			<View style={styles.wrapperText}>
				<Text style={[styles.baseText, styles.title]}>{title}</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={[
						styles.input,
						isFocused ? styles.focused : null,
						hasError ? styles.error : null,
					]}
					selectionColor="hsl(183, 100%, 15%)"
					value={dataValue}
					onChangeText={handleDataValue}
					onFocus={() => {
						setIsFocused(true);
					}}
					onBlur={() => {
						setIsFocused(false);
						onHandleBlur;
					}}
					{...props}
				/>
			</View>
			{hasError && (
				<Text style={[styles.baseText, styles.errorText]}>{errorMessage}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
		margin: 12,
	},
	baseText: {
		fontWeight: "700",
		letterSpacing: 0.6,
		fontSize: 18,
		marginVertical: 4,
	},
	wrapperText: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: '100%',
	},
	title: {
		color: "hsl(184, 14%, 56%)",
	},
	inputContainer: {
		width: "100%",
	},
	input: {
		backgroundColor: "hsl(189, 41%, 97%)",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 5,
		fontSize: 24,
		color: "hsl(183, 100%, 15%)",
		fontWeight: "700",
		letterSpacing: 0.6,
	},
	focused: {
		borderColor: "hsl(172, 67%, 45%)",
		borderWidth: 1,
	},
	errorText: {
		color: "red",
		fontSize: 14,
	},
	error: {
		borderColor: "red",
		borderWidth: 1,
	},
});

export default InputData;
