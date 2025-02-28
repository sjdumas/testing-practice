const capitalize = require("./capitalize");

test("capitalize the first letter of a string", () => {
	expect(capitalize("hello")).toBe("Hello");
	expect(capitalize("Jon")).toBe("Jon");
	expect(capitalize("")).toBe("");
	expect(capitalize("a")).toBe("A");
});

test("Multiple words", () => {
	expect(capitalize("hello world")).toBe("Hello world");
	expect(capitalize("jon snow")).toBe("Jon snow");
	expect(capitalize("a b c")).toBe("A b c");
});
