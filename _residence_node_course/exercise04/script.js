const numeroPorExtenso = (numeroString) => {
  const numero = Number.parseFloat(numeroString);

  if (numero < -999999999.99 || numero > 999999999.99) {
    return undefined;
  }

  let extenso = [];

  console.log(numero.toLocaleString('pt-BR').split('.').reverse());
  numero
    .toLocaleString('pt-BR')
    .split('.')
    .reverse()
    .forEach((item, index) => {
      switch (index) {
        case 0:
          extenso.push(escreverPorExtenso(item));
          break;

        case 1:
          extenso.push(`${escreverPorExtenso(item)} MIL`);
          break;

        case 2:
          extenso.push(`${escreverPorExtenso(item)} MILHOES`);
          break;

        default:
          break;
      }
    });

  return extenso.reverse().join(' ');
};

const getCentenas = (numero) => {
  switch (Number.parseInt(numero)) {
    case 1:
      return 'CENTO';
    case 2:
      return 'DUZENTOS';
    case 3:
      return 'TREZENTOS';
    case 4:
      return 'QUATROCENTOS';
    case 5:
      return 'QUINHENTOS';
    case 6:
      return 'SEISCENTOS';
    case 7:
      return 'SETECENTOS';
    case 8:
      return 'OITOCENTOS';
    case 9:
      return 'NOVECENTOS';
    case 0:
    default:
      return '';
  }
};

const getDezenas = (numero) => {
  if (Number.parseInt(numero) < 20) {
    switch (Number.parseInt(numero)) {
      case 1:
        return getUnidades(numero);
      case 2:
        return getUnidades(numero);
      case 3:
        return getUnidades(numero);
      case 4:
        return getUnidades(numero);
      case 5:
        return getUnidades(numero);
      case 6:
        return getUnidades(numero);
      case 7:
        return getUnidades(numero);
      case 8:
        return getUnidades(numero);
      case 9:
        return getUnidades(numero);
      case 10:
        return `DEZ`;
      case 11:
        return `ONZE`;
      case 12:
        return `DOZE`;
      case 13:
        return `TREZE`;
      case 14:
        return `CATORZE`;
      case 15:
        return `QUINZE`;
      case 16:
        return `DEZESSEIS`;
      case 17:
        return `DEZESSETE`;
      case 18:
        return `DEZOITO`;
      case 19:
        return `DEZENOVE`;
      default:
        return '';
    }
  }

  const numeroPad = numero.padStart(2, '0');
  const dezena = numeroPad[0];
  const unidade = numeroPad[1];
  switch (Number.parseInt(dezena)) {
    case 2:
      return `VINTE${getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''}`;
    case 3:
      return `TRINTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 4:
      return `QUARENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 5:
      return `CINQUENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 6:
      return `SESSENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 7:
      return `SETENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 8:
      return `OITENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 9:
      return `NOVENTA${
        getUnidades(unidade) ? ` E ${getUnidades(unidade)}` : ''
      }`;
    case 0:
    default:
      return '';
  }
};

const getUnidades = (numero) => {
  switch (Number.parseInt(numero)) {
    case 1:
      return 'UM';
    case 2:
      return 'DOIS';
    case 3:
      return 'TRES';
    case 4:
      return 'QUATRO';
    case 5:
      return 'CINCO';
    case 6:
      return 'SEIS';
    case 7:
      return 'SETE';
    case 8:
      return 'OITO';
    case 9:
      return 'NOVE';
    case 0:
    default:
      return '';
  }
};

const escreverPorExtenso = (numero) => {
  if (Number.parseInt(numero) === 100) return 'CEM';

  let retorno = '';

  numero.split(',').forEach((item, index) => {
    console.log(item);
    switch (index) {
      case 0:
        const numeroComZeros = item.padStart(3, '0');
        retorno += `${getCentenas(numeroComZeros[0])}${
          getDezenas(numeroComZeros[0]) ? ` E ` : ''
        }${getDezenas(numeroComZeros.slice(1))}`;
        break;
      case 1:
        console.log(escreverPorExtenso(item));
        retorno += item ? ` PONTO ${escreverPorExtenso(item)}` : '';
    }
  });

  return retorno;
};

// do {
const numeroUsuario = prompt('Digite um número: ');
console.log(numeroPorExtenso(numeroUsuario));
// } while (true);

// for (let i = 0; i < 10; i++) {
//   console.log(getCententas(String(i)));
// }
// for (let i = 0; i < 1000; i++) {
//   console.log(escreverPorExtenso(String(i)));
// }
// for (let i = 0; i < 10; i++) {
//   console.log(getCententas(String(i)));
// }
