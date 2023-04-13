// Calculator { scores: [ 12, 890, 500, 0.2222222222222222 ]

const Calculator = require('./function')

describe('UnitTests', function () {
    it('add numbers', function () {
    calc = new Calculator(),
    calc.add([3,4,5])
  })

  it('subtract numbers', function () {
    calc = new Calculator(),
    calc.subtract([100, ,1000, 10])
  })

  it('multiply numbers', function () {
    calc = new Calculator(),
    calc.multiply([2,5,50])
  })

  it('divide numbers', function () {
    calc = new Calculator(),
    calc.divide([120, 320, 3, 4])
  })
})