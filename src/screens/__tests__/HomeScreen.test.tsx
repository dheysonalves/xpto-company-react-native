import React from "react";

import HomeScreen from "../HomeScreen";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { RootState, store } from "../../app/store";
import { NavigationContainer } from "@react-navigation/native";
import { fetchAllCompanies } from "../../app/features/company/companyAsyncThunk";
import Companies from "../../mocks/companies";

afterEach(cleanup);
jest.useFakeTimers();

const renderWithContext = (element: JSX.Element) => {
	return (
		<NavigationContainer>
			<Provider store={store}>{element}</Provider>
		</NavigationContainer>
	);
};

describe("Home Screen test", () => {
	it("should render the home screen", () => {
		const tree = renderer.create(renderWithContext(<HomeScreen />)).toJSON();

		expect(tree).toMatchSnapshot();
	});
	it("it should get all the companies", async () => {
		const dispatch = jest.fn();
		const state: RootState = {
			company: {
				companies: [],
				company: {
					address: {
						city: "",
						complement: "",
						neighborhood: "",
						number: "",
						state: "",
						street: "",
						zip: "",
					},
					cnpj: "",
					description: "",
					name: "",
					createdAt: "",
					id: "",
					logo: "",
				},
				error: {},
				isError: false,
				loading: "idle",
			},
		};
		const thunk = fetchAllCompanies();
		await thunk(dispatch, () => state, undefined);
		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);
		expect(calls[0][0].type).toEqual("company/fetchAllCompanies/pending");
		expect(calls[1][0].type).toEqual("company/fetchAllCompanies/fulfilled");
		expect(calls[1][0].payload).toEqual(Companies);
	});
});
