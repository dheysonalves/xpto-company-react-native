import React from "react";

import { render, cleanup } from "@testing-library/react-native";
import Button from "./Button.component";
import renderer from "react-test-renderer";

const ButtonRender = () => (
	<Button
		text="SUBMIT"
		handleSubmit={() => {}}
		testID="pressMeButton"
		accessibilityLabel="Press me"
	/>
);

afterEach(cleanup);

describe("Button Component Test Suite", () => {
	it("should render the Button", () => {
		const tree = renderer.create(<ButtonRender />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should find the Button testID", () => {
		const testIdName = "pressMeButton";

		const { getByTestId } = render(<ButtonRender />);

		const foundButton = getByTestId(testIdName);

		expect(foundButton).toBeTruthy();
	});

	it("should find the Button via accessibilityLabel", () => {
		const accessibilityLabel = "Press me";

		const { getByA11yLabel } = render(<ButtonRender />);

		const foundButton = getByA11yLabel(accessibilityLabel);

		expect(foundButton).toBeTruthy();
	});

	it("should find the Button title", () => {
		const title = "SUBMIT";

		const { getByText } = render(<ButtonRender />);

		const foundButtonTitle = getByText(title);

		expect(foundButtonTitle.props.children).toEqual(title);
	});
});
