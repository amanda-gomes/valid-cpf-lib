/* eslint-disable no-undef */
const chai = require('chai');
const expect = chai.expect;
const valid = require('../src/index');

describe('valid cpf lib', () => {
  describe('validCPF', () => {
    it('menos que 11 dígitos', () => {
      expect(valid.validCPF('0101927678')).to.equal(false);
    });
    it('mais que 11 dígitos', () => {
      expect(valid.validCPF('7829279262543')).to.equal(false);
    });
    it('contém letras', () => {
      expect(valid.validCPF('AAA156151H6')).to.equal(false);
    });
    it('dígitos iguais', () => {
      expect(valid.validCPF('11111111111')).to.equal(false);
    });
    it('primeiro dígito verificador incorreto', () => {
      expect(valid.validCPF('12345678910')).to.equal(false);
    });
    it('segundo dígito verificador incorreto', () => {
      expect(valid.validCPF('12345678908')).to.equal(false);
    });
    it('cpf válido', () => {
      expect(valid.validCPF('12345678909')).to.equal(true);
    });
    it('cpf válido', () => {
      expect(valid.validCPF('66225711040')).to.equal(true);
    });
    it('cpf inválido com pontos e traço', () => {
      expect(valid.validCPF('190.678.567-00')).to.equal(false);
    });
    it('cpf válido com pontos e traço', () => {
      expect(valid.validCPF('461.469.950-29')).to.equal(true);
    });

  });
});