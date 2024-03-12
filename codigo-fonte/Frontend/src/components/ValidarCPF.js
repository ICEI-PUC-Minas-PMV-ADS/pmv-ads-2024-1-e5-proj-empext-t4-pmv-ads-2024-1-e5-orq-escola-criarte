export default function ValidaCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito === 10 || primeiroDigito === 11) primeiroDigito = 0;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito === 10 || segundoDigito === 11) segundoDigito = 0;

    return cpf[9] === primeiroDigito.toString() && cpf[10] === segundoDigito.toString();
}
