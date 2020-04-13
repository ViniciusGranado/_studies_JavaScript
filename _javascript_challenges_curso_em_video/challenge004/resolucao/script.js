function calcular(){
    let product = prompt("Que produto você está comprando?")
    let productValue = Number(prompt(`Quanto custa "${product}" que você está comprando?`))
    let userMoney = Number(prompt(`Qual foi o valor que você deu para pagar "${product}`))
    let userChange = userMoney-productValue
    
    if(userChange>=0){
        alert(`Você comprou "${product}" que custou R$${productValue.toFixed(2)}\nDeu R$${userMoney.toFixed(2)} em dinheiro e vai receber R$${userChange.toFixed(2)} de troco\nVolte Sempre!`)
    }else(
        alert(`Você não deu dinheiro suficiente para comprar o produto\nFaltam R$${Math.abs(userChange).toFixed(2)} para completar o valor total`)
    )
}