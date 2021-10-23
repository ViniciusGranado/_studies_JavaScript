const validaNumero = (numeroString) => {
  const numero = Number.parseFloat(numeroString);

  return !(Number.isNaN(numero) || numero < -999999999.99 || numero > 999999999.99);
}

const converteStringDeNumeroParaExtenso = (numeroString) => {
  if (!validaNumero(numeroString)) return undefined;
  if (Number.parseFloat(numeroString) === 0) return "ZERO";

  let extenso = [];
  let isNegativo = false;

  if (Number.parseFloat(numeroString) < 0) {
    isNegativo = true;
    numeroString = numeroString.slice(1);
  }


  const numero = Number.parseFloat(numeroString);
  const numeroArray =  numero.toLocaleString('pt-BR').split('.').reverse();

  const centenas = Number.parseFloat(numeroArray[0]);
  const milhares = Number.parseInt(numeroArray[1]);
  const milhoes = Number.parseInt(numeroArray[2]);

  numeroArray.forEach((item, index, array) => {
    switch (index) {
      case 0:
        extenso.unshift(escreverPorExtenso(item));

        if (
          (
            (item === "100" || (centenas % 100 === 0  && centenas)) &&
            (milhares || milhoes)
          ) || 
          (milhoes && !milhares && centenas) ||
          (milhares && centenas && centenas < 100)
        ) {
          extenso.unshift('E');
        };

        break;

      case 1:
        if (milhares) {
          extenso.unshift('MIL');
          extenso.unshift(`${escreverPorExtenso(item)}`);
        };
        break;

      case 2:
        extenso.unshift(milhoes === 1 ? "MILHÃO" : "MILHÕES");
        extenso.unshift(`${escreverPorExtenso(item)}`);
        break;

      default:
        break;
    }
  });

  if (isNegativo) extenso.unshift('MENOS');
  return extenso.join(' ');
};

const getCentenas = (numero) => {
  const centenas = [
    '',
    'CENTO',
    'DUZENTOS',
    'TREZENTOS',
    'QUATROCENTOS',
    'QUINHENTOS',
    'SEISCENTOS',
    'SETECENTOS',
    'OITOCENTOS',
    'NOVECENTOS',
  ];
  return centenas[Number.parseInt(numero)];
};

const getDezenas = (numero) => {
  const numeroPad = numero.padStart(2, '0');
  const dezena = numeroPad[0];
  const unidade = numeroPad[1];

  if (dezena === "1") {
    const conjuntoDez = [
      'DEZ',
      'ONZE',
      'DOZE',
      'TREZE',
      'CATORZE',
      'QUINZE',
      'DEZESSEIS',
      'DEZESSETE',
      'DEZOITO',
      'DEZENOVE',
    ];
    
    return conjuntoDez[unidade];
  }

  const dezenas = [
    '',
    '',
    'VINTE',
    'TRINTA',
    'QUARENTA',
    'CINQUENTA',
    'SESSENTA',
    'SETENTA',
    'OITENTA',
    'NOVENTA',
  ]

  return dezenas[dezena];
};

const getUnidades = (numero) => {
  const unidades = ['', 'UM', 'DOIS', 'TRES', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE'];
  return unidades[Number.parseInt(numero)];
};

const escreverPorExtenso = (numero) => {
  if (Number.parseInt(numero) === 100) return 'CEM';

  let retorno = '';

  numero.split(',').forEach((item, index) => {
    switch (index) {
      case 0:
        const numeroComZeros = item.padStart(3, '0');
        const centena = Number.parseInt(numeroComZeros[0]);
        const dezena = Number.parseInt(numeroComZeros[1]);
        const unidade = Number.parseInt(numeroComZeros[2]);

        retorno += `${getCentenas(numeroComZeros[0])}`;
        retorno += `${(dezena || unidade) && centena ? " E " : ""}`;
        retorno += `${getDezenas(numeroComZeros.slice(1))}`;
        retorno += `${dezena && unidade && dezena !== 1 ? " E " : ""}`
        retorno += `${(dezena !== 1) ? getUnidades(numeroComZeros[2]) : ""}`;

        break;
      case 1:
        retorno += item ? ` PONTO ${escreverPorExtenso(item)}` : '';
    }
  });

  return retorno;
};

const programa = () => {
  let desejaContinuar;

  do {
    const numeroUsuario = prompt('Digite um número: ');
    const numeroPorExtenso = converteStringDeNumeroParaExtenso(numeroUsuario);

    if (!numeroPorExtenso) {
      alert("Digite um número válido!");
      desejaContinuar = true;
      continue;
    };

    alert(numeroPorExtenso);

    desejaContinuar = confirm('Deseja realizar outra conversão?');
  } while (desejaContinuar);
}

programa();