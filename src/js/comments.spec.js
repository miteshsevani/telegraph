const formatDate = require("./comments");


test("should format date", () => {
	expect(formatDate('2019-04-23T22:26:43.511Z')).toBe('23 Apr 2019, 10:26PM');
});
