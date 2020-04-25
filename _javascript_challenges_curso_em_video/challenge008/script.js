function validar_formulario(){
    let nome_produto = document.querySelector('input#nomeProduto').value
    let valor_produto = Number((document.querySelector('input#valorProduto').value).replace(',','.')).toFixed(2)
    let desconto = document.querySelector('input#desconto').value 
    
    if (isNaN(valor_produto)){
        alert('[ERRO] Valor do produto inválido. Confira os dados.')
    }else if (desconto<0){
        alert('[ERRO] Desconto inválido. O valor deve ser positivo.')
    }else{
        calcular_desconto(nome_produto,valor_produto,desconto)
    }
}

function calcular_desconto(nome_produto,valor_produto,desconto){
    let valor_do_desconto = valor_produto*desconto/100
    let valor_com_desconto = valor_produto-valor_do_desconto

    let divResultado = document.querySelector('div#result')
    divResultado.innerHTML = `<p>O preço original era R$${Intl.NumberFormat('de-DE').format(valor_produto)}.</p>
    <p>Você acaba de ganhar R$${Intl.NumberFormat('de-DE').format(valor_do_desconto.toFixed(2))} de desconto (-${desconto}%).</p>
    <p>No fim, você vai pagar R$${Intl.NumberFormat('de-DE').format(valor_com_desconto.toFixed(2))} no produto ${nome_produto}.</p>`
}