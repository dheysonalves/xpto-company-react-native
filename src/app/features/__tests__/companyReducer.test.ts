import axios from "axios";
import Companies from "../../../mocks/companies";
import { ICompanyInformation } from "../../../services/companyService";
import { store } from "../../store";
import { fetchAllCompanies } from "../company/companyAsyncThunk";

const companyId = "53f750ae-f773-4f55-a066-5fabd8cd2118";

jest.mock("axios");

const mockNetworkResponse = () => {
	(axios.get as jest.Mock).mockResolvedValueOnce(Companies);
};

describe("Company slice redux state tests", () => {
	beforeAll(() => {
		mockNetworkResponse();
	});

	it("should initially set companies to an empty array", () => {
		const state = store.getState().company;

		expect(state.companies).toEqual([]);
	});

	it("should be able to fetch the company list", async () => {
		const result = await store.dispatch(fetchAllCompanies());
		const companies = result.payload as ICompanyInformation[];

		expect(result.type).toBe("company/fetchAllCompanies/fulfilled");
		expect(companies[0].name).toEqual(Companies[0].name);

		const state = store.getState().company;
		expect(state.companies).toEqual(Companies);

	})
});
