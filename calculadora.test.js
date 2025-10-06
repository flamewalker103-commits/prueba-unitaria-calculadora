const Calculadora = require('./index');

describe('Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('suma 1 + 2 = 3', () => {
        expect(calc.suma(1, 2)).toBe(3);
    });

    test('resta 5 - 3 = 2', () => {
        expect(calc.resta(5, 3)).toBe(2);
    });

    test('multiplicación 2 * 3 = 6', () => {
        expect(calc.multiplicacion(2, 3)).toBe(6);
    });

    test('division 6 / 3 = 2', () => {
        expect(calc.division(6, 3)).toBe(2);
    });

    test('division por cero lanza un error', () => {
        expect(() => calc.division(1, 0)).toThrow('No se puede dividir por cero');
    });

    test('potencia 2 ^ 3 = 8', () => {
        expect(calc.potencia(2, 3)).toBe(8);
    });

    test('raiz cuadrada de 4 = 2', () => {
        expect(calc.raizCuadrada(4)).toBe(2);
    });

    test('raiz cuadrada de -1 lanza un error', () => {
        expect(() => calc.raizCuadrada(-1)).toThrow('No se puede calcular la raíz cuadrada de un número negativo');
    });
});