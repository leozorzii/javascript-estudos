/**
 * Validação e operações matemáticas
 */

function validateNumbers(...numbers) {
  return numbers.every(n => typeof n === 'number' && !Number.isNaN(n));
}

export function soma(num1, num2) {
  if (!validateNumbers(num1, num2)) {
    throw new TypeError('Ambos argumentos devem ser números válidos');
  }
  return num1 + num2;
}

export function subtracao(num1, num2) {
  if (!validateNumbers(num1, num2)) {
    throw new TypeError('Ambos argumentos devem ser números válidos');
  }
  return num1 - num2;
}

export function multiplicacao(num1, num2) {
  if (!validateNumbers(num1, num2)) {
    throw new TypeError('Ambos devem ser números válidos');
  }
  return num1 * num2;
}

export function divisao(num1, num2) {
  if (!validateNumbers(num1, num2)) {
    throw new TypeError('Ambos devem ser números válidos');
  }
  if (num2 === 0) {
    throw new Error('Divisão por zero não permitida');
  }
  return num1 / num2;
}