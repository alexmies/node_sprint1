//* NIVELL 1
/*PUNT-1. Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions. */
const {
  sumar,
  restar,
  multiplicar,
  dividir,
} = require('../app/1.1 sumar-restar-mult-div');

// describe('sumar', () => {
//   test('sumar throws error if one param is undefined or null', () => {
//     expect(() => sumar(2, null)).toThrow('input data missing (undefined)');
//   });
//   test('sumar throws error if one param is NaN', () => {
//     expect(() => sumar('a', 9)).toThrow('invalid input data');
//   });
//   test('sumar 2 + 3 is equal to 5', () => {
//     const result = sumar(2, 3);
//     expect(result).toBe(5);
//   });
// });
// // --------------------------------------------
// describe('restar', () => {
//   test('restar throws error if one param is undefined or null', () => {
//     expect(() => restar(2, null)).toThrow('input data missing (undefined)');
//   });
//   test('restar throws error if one param is NaN', () => {
//     expect(() => restar('a', 9)).toThrow('invalid input data');
//   });
//   test('restar 2 + 3 is equal to 5', () => {
//     const result = restar(5, 2);
//     expect(result).toBe(3);
//   });
// });
// // --------------------------------------------
// describe('multiplicar', () => {
//   test('multiplicar throws error if one param is undefined or null', () => {
//     expect(() => multiplicar(2, null)).toThrow('input data missing (undefined)');
//   });
//   test('multiplicar throws error if one param is NaN', () => {
//     expect(() => multiplicar('a', 9)).toThrow('invalid input data');
//   });
//   test('multiplicar 5 * 2 is equal to 10', () => {
//     const result = multiplicar(5, 2);
//     expect(result).toBe(10);
//   });
// });
// // --------------------------------------------
// describe('dividir', () => {
//   test('dividir throws error if one param is undefined or null', () => {
//     expect(() => dividir(2, null)).toThrow('input data missing (undefined)');
//   });
//   test('dividir throws error if one param is NaN', () => {
//     expect(() => dividir('a', 9)).toThrow('invalid input data');
//   });
//   test('dividir throws error if BOTH params are 0', () => {
//     expect(() => dividir(0, 0)).toThrow('result is undetermined');
//   });
//   test('dividir throws error the second param is 0', () => {
//     expect(() => dividir(5, 0)).toThrow('result does not exist, denominator is zero');
//   });
//   test('dividir 10 * 2 is equal to 5', () => {
//     const result = dividir(10, 2);
//     expect(result).toBe(5);
//   });
// });

/*PUNT-2. Crea els tests corresponents per verificar el funcionament de les dues funcions de
l'exercici Promises i Callbacks N1 E2. */
const { funcioParamCb, cb } = require('../app/1.2 promises-cb-N1E2');

describe('funcioParamCb', () => {
  test('funcioParamCb throws error if 1st parameter is NOT a boolean', () => {
    expect(() => funcioParamCb(7, cb).toThrow('parameter must be a boolean'));
    expect(() => funcioParamCb('a', cb).toThrow('parameter must be a boolean'));
    expect(() => funcioParamCb([true], cb).toThrow('parameter must be a boolean'));
  });
  test('funcioParamCb throws error if 2nd parameter is NOT a function', () => {
    expect(() => funcioParamCb(7,3).toThrow('A callback function must be passed in'));
  });
});
// // --------------------------------------------
describe('callback - (cb)', () => {
  test('cb receives and uses ONE parameter or else it throws an error', () => {
    expect.assertions(1);
    function cb(x) {
      expect(x).toBeTruthy();
      console.log(x);
    }
    funcioParamCb(true, cb);
  });
  test('cb function throws error in case parameter is NOT of type string', () => {
    expect(() => cb(2).toThrow('cb function received invalid data'));
    expect(() => cb(true).toThrow('cb function received invalid data'));
  });
});

/*PUNT-3. Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici
 Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).*/