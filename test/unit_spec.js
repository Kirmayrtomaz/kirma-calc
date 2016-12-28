const calc = require('./../index');
const assert = require('assert');

describe('Teste de soma', function() {

  it('Verificando soma',function (done) {

      assert.equal(5, calc.sum(2,3).value())
      calc.clear()
      done()
  })

  it('Verificando soma vazia',function (done) {

      assert.equal(0, calc.sum(0).value())
      calc.clear()
      done()
  })

});
