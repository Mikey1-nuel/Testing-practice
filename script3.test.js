const capitalize = require('./script3')

test('string length', () => {
	expect(capitalize('babe')).toBe('Babe')
})