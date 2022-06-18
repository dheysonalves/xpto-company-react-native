
import axios from 'axios';

export const BASE_URL = "https://banqi-pj-challenge.herokuapp.com";

export interface ICompanyInformation {
	id?: string;
	name: string;
	cnpj: string;
	description: string;
	logo?: string;
	createdAt?: string;
	address: {
		zip: string;
		state: string;
		city: string;
		neighborhood: string;
		street: string;
		number: string;
		complement: string;
	};
}

/**
 * Get all the companies information
 * @method get /companies
 * @returns Information about all the companies
 */
async function getAllCompanies(): Promise<ICompanyInformation[]> {
	try {
		const response = await axios.get(
			`${BASE_URL}/companies/`
		);

		return response.data;
	} catch (error) {
		const message = `${getAllCompanies.name}: ${error}`;

		throw Error(message);
	}
}

/**
 * Get the company information
 * @method get /companies
 * @param id (string) company id
 * @returns Information about the company
 */
async function getCompany(id: string): Promise<ICompanyInformation> {
	try {
		const response: ICompanyInformation[] = await axios.get(
			`${BASE_URL}/companies/`
		);

		const company = response.find((value) => value.id?.includes(id));

		if (!company) {
			throw Error;
		}

		return company;
	} catch (error) {
		const message = `${getCompany.name}: ${error}`;

		throw Error(message);
	}
}

/**
 * Creates a company with new information
 * @method post /companies
 * @param body (ICompanyInformation) Body Object with company information
 * @returns Creates a new company
 */
async function createCompany(
	body: ICompanyInformation
): Promise<ICompanyInformation> {
	try {
		const { data: response } = await axios.post(`${BASE_URL}/companies/`, body);

		return response;
	} catch (error) {
		new Error(`${createCompany.name}: ${error}`);

		throw error;
	}
}

export default {
	getAllCompanies,
	getCompany,
	createCompany,
};
