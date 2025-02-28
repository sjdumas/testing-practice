const caesarCipher = require("./caesarCipher");

test("caesarCipher", () => {
	expect(caesarCipher("hello", 1)).toBe("ifmmp");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
	expect(caesarCipher("Jon", 2)).toBe("Lqp");
	expect(caesarCipher("", 3)).toBe("");
	expect(caesarCipher("a", 4)).toBe("e");
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
