const genID = require('./genID');

test('should return string value', () => {
	const result = genID.idGenerated();

	expect(result).toHaveLength(10);
});