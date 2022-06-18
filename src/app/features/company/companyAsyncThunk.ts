import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompanyService } from "../../../services";
import { ICompanyInformation } from "../../../services/companyService";

const fetchAllCompanies = createAsyncThunk(
	"company/fetchAllCompanies",
	async () => {
		const response = await CompanyService.getAllCompanies();
		return response;
	}
);

export {
	fetchAllCompanies
}
