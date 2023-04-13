const stringLength = require('./script')

test('string length', () => {
	expect(stringLength('tracetrace')).toBe(10)
})