const formatDate = require("./formatDate");


// Test if function 'formatDate' exists
test('Function should exist', () => {
	expect(formatDate).toBeDefined()
});



describe('Test article date format', () => {
	//Test the function output
	test("should format date", () => {
		expect(formatDate('2019-04-23T22:06:43.511Z', 'article')).toBe('Tuesday 23 Apr 2019, 10:06PM');
	});


	//Test the function output with a midnight input date
	test("should format date with midnight date", () => {
		expect(formatDate('2019-04-23T00:00:00.001Z', 'article')).toBe('Tuesday 23 Apr 2019, 12:00AM');
	});
});


describe('Test comments date format', () => {
	//Test the function output
	test("should format date", () => {
		expect(formatDate('2019-04-23T22:06:43.511Z', 'comments')).toBe('23 Apr 2019, 10:06PM');
	});


	//Test the function output with a midnight input date
	test("should format date with midnight date", () => {
		expect(formatDate('2019-04-23T00:00:00.001Z', 'comments')).toBe('23 Apr 2019, 12:00AM');
	});
});
