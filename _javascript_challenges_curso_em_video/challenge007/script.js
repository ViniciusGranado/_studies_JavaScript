let dolarPrice = 0
let userMoney = 0

function ask_conversion_rate(){
    dolarPrice = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',','.')).toFixed(2)
}

function convert_reais_to_dollars(){
    userMoney = Number(prompt('Quantos R$ você tem na sua carteira?').replace(',','.')).toFixed(2)
    let user_can_buy = 'US$' + String((userMoney/dolarPrice).toFixed(2)).replace('.',',')
    
    let divResult = window.document.querySelector('div.result')
    divResult.innerHTML = `<p>Na cotação atual de US$1,00->R$${dolarPrice}, é possível comprar ${user_can_buy} com R$${userMoney}.</p>`
}
