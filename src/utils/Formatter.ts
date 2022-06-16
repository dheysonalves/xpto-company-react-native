function zeroPreffix(numero: number | string) {
	if (numero <= 9) return "0" + numero;
	else return numero;
}

function formatDate(date: string) {
	const value = new Date(date);
	return (
		zeroPreffix(value.getDate().toString()) +
		"/" +
		zeroPreffix(value.getMonth() + 1).toString() +
		"/" +
		value.getFullYear()
	);
}

function formatCNPJ(cnpj: string) {
	return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

export default {
	formatDate,
	formatCNPJ,
}
