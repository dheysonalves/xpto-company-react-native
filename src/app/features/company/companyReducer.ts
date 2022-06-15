import { createSlice, isFulfilled, isRejected, isPending, PayloadAction } from "@reduxjs/toolkit";
import { ErrorType } from "../../../@types/requests";
import { ICompanyInformation } from "../../../services/companyService";
import { fetchAllCompanies } from './companyAsyncThunk';

export interface CompanyState {
	companies: ICompanyInformation[];
	company: ICompanyInformation | null;
	loading: 'loading' | 'idle';
	error: ErrorType;
	isError: boolean;
}

const initialState: CompanyState = {
	companies: [],
	company: null,
	loading: 'idle',
	error: undefined,
	isError: false,
};

const isAFulfilledAction = isFulfilled(fetchAllCompanies);
const isAPendingAction = isPending(fetchAllCompanies);
const isARejectedAction = isRejected(fetchAllCompanies);

export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
		setLoadingState: (
			state: CompanyState,
			{ payload }: PayloadAction<"loading" | "idle">
		) => {
			state.loading = payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchAllCompanies.fulfilled, (state, { payload }) => {
				state.companies = payload;
			})
			.addMatcher(isAFulfilledAction, (state) => {
				state.loading = "idle";
			})
			.addMatcher(isAPendingAction, (state) => {
				state.loading = "loading";
				state.error = undefined;
				state.isError = false;
			})
			.addMatcher(isARejectedAction, (state, { error }) => {
				state.loading = "idle";
				state.error = error;
				state.isError = true;
			});
	},
});

// Action creators are generated for each case reducer function
export const { setLoadingState } = companySlice.actions;

export default companySlice.reducer;
