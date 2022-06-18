import axios from "axios";
import { CompanyService } from "..";
import Companies from "../../mocks/companies";

import { BASE_URL } from "../CompanyService";

jest.mock("axios");

describe("getAllCompanies", () => {
	describe("when API call is successful", () => {
		it("should return companies list", async () => {

			(axios.get as jest.Mock).mockResolvedValueOnce({
				data: Companies,
				status: 200,
				statusText: "Ok",
				headers: {},
				config: {},
			});

			const response = await CompanyService.getAllCompanies();

			expect(axios.get as jest.Mock).toHaveBeenCalledWith(
				`${BASE_URL}/companies/`
			);
			expect(response).toEqual(Companies);
		});
	});
});
