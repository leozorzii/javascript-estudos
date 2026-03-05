import { createInterface } from 'readline';
import {
  soma,
  subtracao,
  multiplicacao,
  divisao,
} from './operacoesMatematicas.js';

/**
 * Wrapper Promise para readline.question
 */
function pergunta(prompt) {
  return new Promise((resolve) => {
    const leitor = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    leitor.question(prompt, (resposta) => {
      leitor.close();
      resolve(resposta);
    });
  });
}

/**
 * Converte e valida entrada do usuário
 */
function converterParaNumero(entrada, nome) {
  const num = Number(entrada);
  if (Number.isNaN(num)) {
    throw new Error(`${nome} inválido: "${entrada}" não é um número`);
  }
  return num;
}

/**
 * Mapa de operações
 */
const operacoes = {
  '+': { func: soma, nome: 'Soma' },
  '-': { func: subtracao, nome: 'Subtração' },
  'x': { func: multiplicacao, nome: 'Multiplicação' },
  '/': { func: divisao, nome: 'Divisão' },
};

const MENU = `
Escolha uma operação:
  +: Soma
  -: Subtração
  x: Multiplicação
  /: Divisão
>`;

/**
 * Fluxo principal
 */
async function executarCalculadora() {
  try {
    const num1Entrada = await pergunta('Digite o primeiro número: ');
    const numero1 = converterParaNumero(num1Entrada, 'Primeiro número');

    const operacao = await pergunta(MENU);

    if (!(operacao in operacoes)) {
      throw new Error(`Operação "${operacao}" não reconhecida`);
    }

    const num2Entrada = await pergunta('Digite o segundo número: ');
    const numero2 = converterParaNumero(num2Entrada, 'Segundo número');

    const { func, nome } = operacoes[operacao];
    const resultado = func(numero1, numero2);

    console.log(
      `\n${nome}: ${numero1} ${operacao} ${numero2} = ${resultado}\n`
    );
  } catch (erro) {
    console.error(`\n❌ Erro: ${erro.message}\n`);
    process.exit(1);
  }
}

// Executa a calculadora
executarCalculadora();