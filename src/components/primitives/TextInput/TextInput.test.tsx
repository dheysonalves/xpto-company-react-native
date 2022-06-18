import React from "react";

import TextInput from "./TextInput.component";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react-native";

afterEach(cleanup);

const TextInputRender = () => {
	const [name, setName] = React.useState("");

	return (
		<>
			<TextInput
				dataValue={name}
				onHandleDataValue={setName}
				hasError={false}
				title="Input"
				testID="textInputType"
				accessibilityLabel="Type me"
			/>
			{name !== "" && <Text testID="printed-username">{name}</Text>}
		</>
	);
};

describe("Styled TextInput Test Suite", () => {
	it("should render the TextInput", () => {
		const tree = renderer.create(<TextInputRender />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should find the TextInput title", () => {
		const title = "Input";

		const { getByText } = render(<TextInputRender />);

		const foundButtonTitle = getByText(title);

		expect(foundButtonTitle.props.children).toEqual(title);
	});

	it("should type and return a text in the screen", async () => {
		const famousProgrammerInHistory = "Ada Lovelace";

		const { getByText, getByTestId, queryByTestId } = render(
			<TextInputRender />
		);

		const input = getByTestId("textInputType");
		fireEvent.changeText(input, famousProgrammerInHistory);

		await waitFor(() => expect(queryByTestId("printed-username")).toBeTruthy());
	});
});
