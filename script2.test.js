const reverseString = require('./script2')

test('string length', () => {
	expect(reverseString('tracetrace')).toBe('ecartecart')
})