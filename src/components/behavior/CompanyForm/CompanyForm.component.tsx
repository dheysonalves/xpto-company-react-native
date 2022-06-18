import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { Button, TextInput } from "../../primitives";
import { ICompanyInformation } from "../../../services/CompanyService";
import Formatter from "../../../utils/Formatter";
import { useNavigation } from "@react-navigation/native";

const SchemaValidation = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Field Required"),
	description: Yup.string()
		.required("Field Required")
		.min(2, "Too Short!")
		.max(50, "Too Long!"),
	cnpj: Yup.string()
		.matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "It must be a CNPJ")
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Field Required"),
	address: Yup.object({
		zip: Yup.string()
			.matches(/^[0-9]{5}-[0-9]{3}$/, "It must be a Zip Code")
			.required("Field Required"),
		state: Yup.string().required("Field Required"),
		city: Yup.string().required("Field Required"),
		neighborhood: Yup.string().required("Field Required"),
		street: Yup.string().required("Field Required"),
		number: Yup.number()
			.required("Field Required")
			.positive("It must be positive")
			.integer(),
		complement: Yup.string().notRequired(),
	}),
});

type CompanyParams = {
	newCompany: boolean;
	item: ICompanyInformation;
};

const CompanyForm = ({ route }) => {
	const { navigate } = useNavigation();
	const { newCompany, item } = route.params as CompanyParams;

	const initialValues: ICompanyInformation = {
		name: "",
		cnpj: "",
		description: "",
		address: {
			zip: "",
			state: "",
			city: "",
			neighborhood: "",
			street: "",
			number: "",
			complement: "",
		},
	};
	return (
		<Formik
			enableReinitialize={true}
			initialValues={newCompany ? initialValues : item}
			onSubmit={(values, actions) => {
				navigate("Home");
				console.log(values);
			}}
			validationSchema={SchemaValidation}>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<View>
					<TextInput
						onHandleDataValue={handleChange("name")}
						onHandleBlur={handleBlur("name")}
						dataValue={values.name}
						title="Name"
						hasError={!!errors.name && (touched.name as boolean)}
						errorMessage={errors.name}
					/>
					<TextInput
						onHandleDataValue={handleChange("description")}
						onHandleBlur={handleBlur("description")}
						dataValue={values.description}
						title="Description"
						hasError={!!errors.description && (touched.description as boolean)}
						errorMessage={errors.description}
						multiline
					/>
					<TextInput
						onHandleDataValue={handleChange("cnpj")}
						onHandleBlur={handleBlur("cnpj")}
						dataValue={values.cnpj}
						title="CNPJ"
						hasError={!!errors.cnpj && (touched.cnpj as boolean)}
						errorMessage={errors.cnpj}
						keyboardType="numbers-and-punctuation"
						maxLength={18}
					/>
					<Text style={styles.text}>ADDRESS</Text>
					<TextInput
						onHandleDataValue={handleChange("address.zip")}
						onHandleBlur={handleBlur("address.zip")}
						dataValue={values.address.zip}
						title="ZIP Code"
						hasError={
							!!errors.address?.zip && (touched.address?.zip as boolean)
						}
						errorMessage={errors.address?.zip}
						keyboardType="number-pad"
						maxLength={9}
					/>
					<TextInput
						onHandleDataValue={handleChange("address.state")}
						onHandleBlur={handleBlur("address.state")}
						dataValue={values.address.state}
						title="State"
						hasError={
							!!errors.address?.state && (touched.address?.state as boolean)
						}
						errorMessage={errors.address?.state}
					/>
					<TextInput
						onHandleDataValue={handleChange("address.city")}
						onHandleBlur={handleBlur("address.city")}
						dataValue={values.address.city}
						title="City"
						hasError={
							!!errors.address?.city && (touched.address?.city as boolean)
						}
						errorMessage={errors.address?.city}
					/>
					<TextInput
						onHandleDataValue={handleChange("address.neighborhood")}
						onHandleBlur={handleBlur("address.neighborhood")}
						dataValue={values.address.neighborhood}
						title="Neighborhood"
						hasError={
							!!errors.address?.neighborhood &&
							(touched.address?.neighborhood as boolean)
						}
						errorMessage={errors.address?.neighborhood}
					/>
					<TextInput
						onHandleDataValue={handleChange("address.street")}
						onHandleBlur={handleBlur("address.street")}
						dataValue={values.address.street}
						title="Street"
						hasError={
							!!errors.address?.street && (touched.address?.street as boolean)
						}
						errorMessage={errors.address?.street}
					/>
					<TextInput
						onHandleDataValue={handleChange("address.number")}
						onHandleBlur={handleBlur("address.number")}
						dataValue={values.address.number}
						title="Number"
						hasError={
							!!errors.address?.number && (touched.address?.number as boolean)
						}
						errorMessage={errors.address?.number}
						keyboardType="number-pad"
					/>
					<TextInput
						onHandleDataValue={handleChange("address.complement")}
						onHandleBlur={handleBlur("address.complement")}
						dataValue={values.address.complement}
						title="Complement"
						hasError={
							!!errors.address?.complement &&
							(touched.address?.complement as boolean)
						}
						errorMessage={errors.address?.complement}
					/>
					<View style={styles.buttonWrapper}>
						<Button handleSubmit={handleSubmit} text="Submit" />
					</View>
				</View>
			)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 24,
	},
	buttonWrapper: {
		marginTop: 24,
	}
});

export default CompanyForm;
