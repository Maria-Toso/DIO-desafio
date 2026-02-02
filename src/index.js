/**
 * Validador de Cartão de Crédito - Desafio DIO
 * Assistente: GitHub Copilot (e um pouco da minha genialidade)
 */

const CREDIT_CARD_RULES = {
  VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MASTERCARD: /^(5[1-5][0-9]{14}|222[1-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
  AMEX: /^3[47][0-9]{13}$/,
  DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  // A regex para ELO foi ajustada para validar o comprimento total de 16 dígitos,
  // agrupando os prefixos por seu tamanho para aplicar a validação correta.
  ELO: /^(?:(?:4011(?:78|79)|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368)\d{10}|(?:65003[1-3]|65003[5-9]|65004[0-9]|65005[0-1]|65040[5-9]|6504[1-3][0-9]|65048[5-9]|65054[1-9]|6505[5-8][0-9]|65059[0-8]|65072[0-7]|65090[1-9]|65165[2-9]|6516[6-7][0-9]|65500[0-9]|65502[1-9]|65505[0-8])\d{11})$/,
  HIPERCARD: /^(606282\d{10}(\d{3})?)|(3841\d{12})$/
};

/**
 * Valida o número do cartão usando o Algoritmo de Luhn (Mod 10)
 * @param {string} number 
 * @returns {boolean}
 */
const validateLuhn = (number) => {
  let sum = 0;
  let shouldDouble = false;

  // Itera do último dígito para o primeiro
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) === 0;
};



/**
 * Identifica a bandeira e valida o número
 * @param {string} cardNumber 
 */
const getCardInfo = (cardNumber) => {
  const cleanNumber = cardNumber.replace(/\D/g, '');
 
  // Default state for invalid/empty inputs
  if (!cleanNumber) {
    return { brand: 'INVÁLIDO', valid: false, message: 'Por favor, insira um número.', imagePath: 'images/unknown.png' };
  }
 
  let brand = 'DESCONHECIDA';
  for (const [name, regex] of Object.entries(CREDIT_CARD_RULES)) {
    if (regex.test(cleanNumber)) {
      brand = name;
      break;
    }
  }
 
  const isValidLuhn = validateLuhn(cleanNumber);
  const imagePath = (brand !== 'DESCONHECIDA') ? `images/${brand.toLowerCase()}.png` : 'images/unknown.png';
 
  return {
    brand,
    valid: isValidLuhn,
    message: isValidLuhn ? `Cartão ${brand} válido.` : `Número de cartão inválido.`,
    imagePath
  };
};

// --- CLI e Runner de Testes ---
// O bloco de código abaixo só será executado quando o script for chamado diretamente pelo Node.
if (typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
  const cardNumber = process.argv[2]; // Pega o primeiro argumento da linha de comando

  if (cardNumber) {
    // Se um número de cartão foi passado como argumento, valida ele.
    console.log(`Validando o cartão: ${cardNumber}`);
    const result = getCardInfo(cardNumber);
    console.log("Resultado:", result);
  } else {
    // Se nenhum argumento foi passado, executa a suíte de testes.
    console.log("Nenhum número de cartão fornecido. Executando a bateria de testes...\n");
    const testCases = [
      { description: "VISA Válido", number: "4539923456789012" },
      { description: "MASTERCARD Válido", number: "5555555555554444" },
      { description: "AMEX Válido", number: "378282246310005" },
      { description: "ELO Válido", number: "6363682563458796" },
      { description: "HIPERCARD Válido", number: "6062828828828822" },
      { description: "Número Inválido (Luhn)", number: "4539923456789013" },
      { description: "Bandeira Desconhecida", number: "9999999999999999" },
      { description: "Input com espaços", number: "4539 9234 5678 9012" },
      { description: "Input com hífens", number: "5555-5555-5555-4444" },
      { description: "Input Vazio", number: "" },
      { description: "Input com letras", number: "4539 9234 5678 901a" },
    ];

    testCases.forEach(test => {
      console.log(`[Teste: ${test.description}]`);
      console.log(`Input: "${test.number}"`);
      console.log("Resultado:", getCardInfo(test.number), "\n");
    });
  }
}

// Exporta as funções para que possam ser usadas em outros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCardInfo, validateLuhn, CREDIT_CARD_RULES };
} else {
  window.getCardInfo = getCardInfo;
  window.validateLuhn = validateLuhn;
  window.CREDIT_CARD_RULES = CREDIT_CARD_RULES;
}