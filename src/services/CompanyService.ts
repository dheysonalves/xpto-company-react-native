
import axios from 'axios';

export const BASE_URL = "https://banqi-pj-challenge.herokuapp.com";

interface ICompanyInformation {
	id?: string;
	name: string;
	cnpj: string;
	description: string;
	logo: string;
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
		const response: ICompanyInformation[] = await axios.get(
			`${BASE_URL}/companies/`
		);

		return response;
	} catch (error) {
		const message = `${getAllCompanies.name}: ${error}`;

		throw Error(message);
	}
}

/**
 * Get all the companies information
 * @method post /companies
 * @param body (ICompanyInformation) Body Object with company information
 * @returns Information about all the companies
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

export {
	getAllCompanies,
	createCompany,
};
