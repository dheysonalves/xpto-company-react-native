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

/**
 * Breaks text to avoid widow word.
 * @param text (string) - Full phrase to format.
 */
const removeWidowWord = (text: string): string => {
	let formattedText = text;

	const wordArray = text.split(' ');

	if (wordArray.length > 1) {
		wordArray[wordArray.length - 2] += `\u00A0${
			wordArray[wordArray.length - 1]
		}`;
		wordArray.pop();
		formattedText = wordArray.join(' ');
	}

	return formattedText;
};

function isImage(url: string) {
	return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export default {
	formatDate,
	formatCNPJ,
	removeWidowWord,
	isImage,
};
