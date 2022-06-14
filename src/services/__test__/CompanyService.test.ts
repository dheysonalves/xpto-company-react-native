import axios from "axios";

import { BASE_URL } from "../CompanyService";
import { createCompany, getAllCompanies } from "../CompanyService";

jest.mock("axios");

describe("getAllCompanies", () => {
	describe("when API call is successful", () => {
		it("should return companies list", async () => {
			const companies = [
				{
					id: "7eb626fe-064e-4441-977a-adc276a31969",
					name: "Testing",
					cnpj: "84649484946464",
					description: "MEI",
					logo: "https://google.com",
					createdAt: "2022-05-31T04:34:03.153286Z",
					address: {
						zip: "49944994",
						state: "CE",
						city: "Quixada",
						neighborhood: "Centro",
						street: "Rua 11",
						number: "5",
						complement: "",
					},
				},
				{
					id: "53f750ae-f773-4f55-a066-5fabd8cd2118",
					name: "Jardel House",
					cnpj: "84649494649494",
					description: "MEI",
					logo: "https://jardelgoncalves.dev/favicon.png",
					createdAt: "2022-05-31T05:57:14.940704Z",
					address: {
						zip: "64949494",
						state: "CE",
						city: "Quixadá",
						neighborhood: "Centro",
						street: "Rua José de Queiroz Pessoa",
						number: "10",
						complement: "",
					},
				},
				{
					id: "9bb04a05-4846-4e7f-8ba2-b382fe3b219c",
					name: "teste isaac",
					cnpj: "15465465465465",
					description: "empresa teste222",
					logo: "https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/empresa-02.jpg?w=720&ssl=1",
					createdAt: "2022-03-15T11:27:48.076162Z",
					address: {
						zip: "52020-140",
						state: "PE",
						city: "Recife",
						neighborhood: "G",
						street: "Rua Vigário Barreto",
						number: "112",
						complement: "",
					},
				},
				{
					id: "d3f67bf4-09c4-4aa6-a3ea-c9dd405fd638",
					name: "Jardel testing 1",
					cnpj: "94649494644949",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-06-13T18:11:05.033765Z",
					address: {
						zip: "55020605",
						state: "CE",
						city: "Quixada",
						neighborhood: "Rua 11",
						street: "Rua 111",
						number: "94",
						complement: "",
					},
				},
				{
					id: "f84698fb-ea04-4bb1-9f6a-546f0d16df41",
					name: "loja 11",
					cnpj: "44947443000160",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T16:13:58.749755Z",
					address: {
						zip: "16075-310",
						state: "SP",
						city: "Araçatuba",
						neighborhood: "Parque Industrial",
						street: "Rua São Carlos",
						number: "291",
						complement: "S/C",
					},
				},
				{
					id: "373ea290-f046-45cf-b871-3bd429f397a1",
					name: "Loja 5",
					cnpj: "55555555555555",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T14:42:10.191826Z",
					address: {
						zip: "55555-555",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 5",
						street: "Rua 5",
						number: "5",
						complement: "",
					},
				},
				{
					id: "40b5b96a-e03f-4d1f-ad71-85860c8899c4",
					name: "Débora e Isis Advocacia Ltdaaa",
					cnpj: "44947443000160",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T13:26:13.776963Z",
					address: {
						zip: "16075-310",
						state: "SP",
						city: "Araçatuba",
						neighborhood: "Parque Industrial",
						street: "Rua São Carlos",
						number: "291",
						complement: "S/C",
					},
				},
				{
					id: "21d79670-00ff-4335-bca5-8ada2be9792a",
					name: "Loja 6",
					cnpj: "66666666666666",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T15:06:31.314791Z",
					address: {
						zip: "66666-666",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 6",
						street: "Rua 6",
						number: "6",
						complement: "",
					},
				},
				{
					id: "f6d5e1ef-0230-483e-b79d-1f71be2c3379",
					name: "loja 9",
					cnpj: "13423232323233",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T16:28:58.664098Z",
					address: {
						zip: "22344-432",
						state: "Sp",
						city: "Sao paulo",
						neighborhood: "bairro",
						street: "s/n",
						number: "33",
						complement: "",
					},
				},
				{
					id: "0d194e18-17d5-49df-8b67-9cc38713f293",
					name: "Loja 10",
					cnpj: "12345678912345",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T14:06:14.443683Z",
					address: {
						zip: "12345-678",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 1",
						street: "Rua 1",
						number: "1",
						complement: "",
					},
				},
				{
					id: "72af6d1e-fd07-4330-9576-8a755c646536",
					name: "Loja 4",
					cnpj: "44444444444444",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T14:40:59.625033Z",
					address: {
						zip: "44444-444",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 4",
						street: "Rua 4",
						number: "4",
						complement: "",
					},
				},
				{
					id: "16500486-c97a-4477-9e55-b8df7e051b31",
					name: "Loja 2",
					cnpj: "98765432165498",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T14:16:39.915768Z",
					address: {
						zip: "98765-432",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 2 Editado",
						street: "Rua 2",
						number: "2",
						complement: "",
					},
				},
				{
					id: "1765e811-e46a-4fcf-a7d2-9ef5aa4bb14e",
					name: "Empresa Teste",
					cnpj: "33366699933366",
					description: "MEI Teste",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T19:01:05.630861Z",
					address: {
						zip: "04710-010",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Santo Amaro",
						street: "Rua Diogo de Quadros",
						number: "123",
						complement: "",
					},
				},
				{
					id: "4a849feb-38d4-43c2-bdf8-9a554c3efe47",
					name: "loja 8",
					cnpj: "22323232323232",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T16:27:27.897448Z",
					address: {
						zip: "05728-040",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Vila Andrade",
						street: "Rua Castelhano",
						number: "60",
						complement: "",
					},
				},
				{
					id: "6ccb1dbc-9195-4f29-81ca-c400c7d7f3d7",
					name: "Empresa teste final editado",
					cnpj: "77744411122255",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T19:15:57.483207Z",
					address: {
						zip: "05728-040",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Vila Andrade",
						street: "Rua Castelhano",
						number: "60",
						complement: "",
					},
				},
				{
					id: "80ff26bc-4980-43a2-a83e-b893be5dce25",
					name: "Última empresa cadastrada",
					cnpj: "66554499887733",
					description: "Última MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T20:21:39.594843Z",
					address: {
						zip: "04710-010",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Santo Amaro",
						street: "Rua Diogo de Quadros",
						number: "340",
						complement: "",
					},
				},
				{
					id: "40fdcea8-656f-4afe-a547-8578bee7c494",
					name: "Loja 3",
					cnpj: "78912378912378",
					description: "MEI",
					logo: "https://banqi.com.br/assets/img/uploads/img-app.png",
					createdAt: "2022-03-14T14:18:23.135571Z",
					address: {
						zip: "65478-932",
						state: "SP",
						city: "São Paulo",
						neighborhood: "Bairro 3",
						street: "Rua 3",
						number: "3",
						complement: "",
					},
				},
				{
					id: "0fd3b041-a906-42c8-a12f-3d9419fab72a",
					name: "eeeeddddddd",
					cnpj: "55555555555556",
					description: "abc",
					logo: "https://www.google.com/",
					createdAt: "2022-03-15T12:03:32.602430Z",
					address: {
						zip: "52020-150",
						state: "PE",
						city: "Recife",
						neighborhood: "Espinheiro",
						street: "Rua Amélia",
						number: "2",
						complement: "",
					},
				},
				{
					id: "c4995dc8-5378-487d-adee-0687a64fc983",
					name: "Jardel testing 2",
					cnpj: "94649494644949",
					description: "MEI",
					logo: "https://gmail.com",
					createdAt: "2022-05-31T04:38:18.569343Z",
					address: {
						zip: "94649949",
						state: "CE",
						city: "Quixada",
						neighborhood: "Rua 11",
						street: "Rua 111",
						number: "94",
						complement: "",
					},
				},
			];

			(axios.get as jest.Mock).mockResolvedValueOnce(companies);

			const response = await getAllCompanies();

			expect(axios.get as jest.Mock).toHaveBeenCalledWith(
				`${BASE_URL}/companies/`
			);
			expect(response).toEqual(companies);
		});
	});

	// describe("when API call fails", () => {
	// 	it("should return empty companies list", async () => {
	// 		// given
	// 		const message = "getAllCompanies: Error: Network Error";
	// 		(axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));

	// 		// when
	// 		const result = await getAllCompanies();

	// 		// then
	// 		expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/companies/`);
	// 		expect(result).toEqual([]);
	// 	});
	// });
});
