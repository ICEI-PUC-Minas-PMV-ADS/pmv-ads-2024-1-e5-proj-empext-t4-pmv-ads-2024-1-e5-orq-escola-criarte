export function validaCPF(cpf) {
    // Extrai os dígitos do CPF
    const num1 = parseInt(cpf.charAt(0));
    const num2 = parseInt(cpf.charAt(1));
    const num3 = parseInt(cpf.charAt(2));
    const num4 = parseInt(cpf.charAt(4));
    const num5 = parseInt(cpf.charAt(5));
    const num6 = parseInt(cpf.charAt(6));
    const num7 = parseInt(cpf.charAt(8));
    const num8 = parseInt(cpf.charAt(9));
    const num9 = parseInt(cpf.charAt(10));
    const num10 = parseInt(cpf.charAt(12));
    const num11 = parseInt(cpf.charAt(13));

    // Validação de CPFs inválidos conhecidos
    if (
        num1 === num2 &&
        num2 === num3 &&
        num3 === num4 &&
        num4 === num5 &&
        num5 === num6 &&
        num6 === num7 &&
        num7 === num8 &&
        num8 === num9 &&
        num9 === num10 &&
        num10 === num11
    ) {
        return false;
    }

    // Cálculo do primeiro dígito verificador
    let soma1 = num1 * 10;
    soma1 += num2 * 9;
    soma1 += num3 * 8;
    soma1 += num4 * 7;
    soma1 += num5 * 6;
    soma1 += num6 * 5;
    soma1 += num7 * 4;
    soma1 += num8 * 3;
    soma1 += num9 * 2;

    let resto1 = (soma1 * 10) % 11;
    if (resto1 === 10) {
        resto1 = 0;
    }

    // Cálculo do segundo dígito verificador
    let soma2 = num1 * 11;
    soma2 += num2 * 10;
    soma2 += num3 * 9;
    soma2 += num4 * 8;
    soma2 += num5 * 7;
    soma2 += num6 * 6;
    soma2 += num7 * 5;
    soma2 += num8 * 4;
    soma2 += num9 * 3;
    soma2 += num10 * 2;

    let resto2 = (soma2 * 10) % 11;
    if (resto2 === 10) {
        resto2 = 0;
    }

    // Retorna true se os dígitos verificadores forem válidos
    return resto1 === num10 && resto2 === num11;
}
