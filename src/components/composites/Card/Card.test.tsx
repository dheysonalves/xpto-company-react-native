import React from "react";

import renderer from "react-test-renderer";
import {
	render,
} from "@testing-library/react-native";
import Card from "./Card.component";
import Companies from "../../../mocks/companies";

const CardRender = () => {
	return <Card data={Companies[0]} onHandleSubmit={() => {}} />;
};

describe("Card component test suite", () => {
	it("should return the Card component", () => {
		const tree = renderer.create(<CardRender />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should render the component texts", async () => {
		const cnpjText = "CNPJ";
		const createdAtText = "Created At";
		const nameText = "nameText";
		const descriptionText = "descriptionText";

		const { getByText, getByTestId, queryByTestId } = render(<CardRender />);

		const cnpj = getByText(cnpjText);
		const createdAt = getByText(cnpjText);
		const name = getByText(cnpjText);
		const description = getByText(cnpjText);


		expect(cnpj.props.children).toEqual(cnpjText);
		expect(createdAt.props.children).toEqual(cnpjText);
		expect(name.props.children).toEqual(cnpjText);
		expect(description.props.children).toEqual(cnpjText);
	});
});
