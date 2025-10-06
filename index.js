class Calculadora {
    suma(a, b) {
        return a + b;
    }

    resta(a, b) {
        return a - b;
    }

    multiplicacion(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) throw new Error('No se puede dividir por cero');
        return a / b;
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(numero) {
        if (numero < 0) throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
        return Math.sqrt(numero);
    }
}

module.exports = Calculadora;