const reverseString = require("./reverseString");

test("reverse a string", () => {
	expect(reverseString("hello")).toBe("olleh");
	expect(reverseString("Jon")).toBe("noJ");
	expect(reverseString("")).toBe("");
	expect(reverseString("a")).toBe("a");
});
