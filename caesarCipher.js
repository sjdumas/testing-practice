const caesarCipher = (str, num) => {
	num = num % 26; // Ensure the shift is within the range of 0-25
	return str
		.split("")
		.map((char) => {
			let code = char.charCodeAt(0);
			if (code >= 65 && code <= 90) {
				code = ((code - 65 + num + 26) % 26) + 65;
			} else if (code >= 97 && code <= 122) {
				code = ((code - 97 + num + 26) % 26) + 97;
			} else {
				return char; // Non-alphabetic characters remain unchanged
			}
			return String.fromCharCode(code);
		})
		.join("");
};

module.exports = caesarCipher;
