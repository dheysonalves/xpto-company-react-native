import React from "react";

import CompanyForm from "./CompanyForm.component";

import {
	fireEvent,
	render,
	waitFor,
	cleanup,
} from "@testing-library/react-native";
import { act } from "react-test-renderer";

afterEach(cleanup);

describe("CompanyForm component testing suite ", () => {
	it("rendering and typing a basic Formik form", async () => {
		const handleSubmit = jest.fn();

		const { getByText, getByTestId } = render(
			<CompanyForm
				onSubmit={handleSubmit}
				route={{
					params: {
						newCompany: true,
						item: {
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
						},
					},
				}}
			/>
		);

		const name = getByText("Name");
		const description = getByText("Description");
		const cnpj = getByText("CNPJ");
		const ZIP = getByText("ZIP Code");
		const state = getByText("State");
		const city = getByText("City");
		const neighborhood = getByText("Neighborhood");
		const street = getByText("Street");
		const number = getByText("Number");
		const complement = getByText("Complement");

		const button = getByTestId("formSubmitButton");

		await waitFor(() => {
			fireEvent.changeText(name, "Ada Lovelace");
			fireEvent.changeText(description, "First Worlds's Programmer");
			fireEvent.changeText(cnpj, "33.113.309/0001-47");
			fireEvent.changeText(ZIP, "55020-605");
			fireEvent.changeText(state, "PE");
			fireEvent.changeText(city, "Caruaru");
			fireEvent.changeText(neighborhood, "Cedro");
			fireEvent.changeText(street, "Lourinaldo Araujo");
			fireEvent.changeText(number, "35");
			fireEvent.changeText(complement, "Casa");
			fireEvent.press(button);
		});
	});
});
