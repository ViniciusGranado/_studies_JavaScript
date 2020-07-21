// Functions
function showProductsTable (productsList) {
  console.log('--------------------------------------------------');
  console.log('                LISTAGEM DE PREÇOS                ');
  console.log('--------------------------------------------------');

  for (const i of productsList) {
    console.log(i.name.padEnd(40, '.') + 'R$ ' + i.price.toFixed(2).replace('.', ',').padStart(6, ' '));
  };

  console.log('--------------------------------------------------');
}

// Main code
const products = [
  { name: 'Lápis', price: 1.75 },
  { name: 'Borracha', price: 2 },
  { name: 'Caderno', price: 15.90 },
  { name: 'Estojo', price: 25 },
  { name: 'Transferidor', price: 4.2 },
  { name: 'Compasso', price: 9.99 },
  { name: 'Mochila', price: 120.32 },
  { name: 'Canetas', price: 22.30 },
  { name: 'Livro', price: 34.90 }
];

showProductsTable(products);
