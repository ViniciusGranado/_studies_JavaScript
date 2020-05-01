// Functions
const validate_input = () => {
    //HTML objetcs
    const old_price_input = document.querySelector('input#old_price_input')
    const new_price_input = document.querySelector('input#new_price_input')
    const old_error_message = document.querySelector('p#old_price_error')
    const new_error_message = document.querySelector('p#new_price_error')


    //Get Values
    const old_price_value = Number((old_price_input.value).replace(',', '.'))
    const new_price_value = Number((new_price_input.value).replace(',','.'))


    //Validate values
    let is_old_valid = false
    let is_new_valid = false
    if(isNaN(old_price_value) || old_price_value == 0){
        old_price_input.classList.add('input_error')      
        old_error_message.classList.add('error_message')
        old_error_message.innerHTML = 'Valor inválido'
    }else{
        old_price_input.classList.remove('input_error')
        old_error_message.classList.remove('error_message')
        old_error_message.innerHTML = ''
        is_old_valid = true
    }

    if(isNaN(new_price_value) || new_price_value == 0){
        new_price_input.classList.add('input_error')      
        new_error_message.classList.add('error_message')
        new_error_message.innerHTML = 'Valor inválido'
    }else{
        new_price_input.classList.remove('input_error')
        new_error_message.classList.remove('error_message')
        new_error_message.innerHTML = ''
        is_new_valid = true
    }
  
    //If they're valid, call function
    if (is_old_valid && is_new_valid){
        calculate_result(old_price_value, new_price_value)
    } 
}


const calculate_result = (old_value, new_value) => {
    price_difference = old_value - new_value
    price_variation = (Math.abs(price_difference)*100)/old_value  

    show_result(old_value,new_value,price_difference,price_variation)
}


const show_result = (old_value,new_value,price_difference,price_variation) =>{
    const formatted_old_value = format_value(old_value)
    const formatted_new_value = format_value(new_value)
    const formatted_price_difference = format_value(Math.abs(price_difference))
    const result_area = document.querySelector('div#result')

    if (price_difference == 0){
        result_area.innerHTML = `<h2 id='result_title'>Analisando os valores informados:</h2>
        <p>Não houve variação no valor.</p>
        <p> <input class='button' id='back_button' type='button' value='Voltar'>`
    }else{
        const message = []
        if (price_difference < 0){
            message.push('caro', 'subiu', 'cima')
        }else{
            message.push('barato', 'caiu', 'baixo')
        }

        result_area.innerHTML = `<h2 id='result_title'>Analisando os valores informados:</h2>
        <p>O produto custava R$ ${formatted_old_value} e agora custa R$ ${formatted_new_value}</p>
        <p>Hoje o produto está mais ${message[0]}.</p>
        <p>O preço ${message[1]} R$ ${formatted_price_difference} em relação ao preço anterior.</p>
        <p>Uma variação de ${price_variation.toFixed(2)}% para ${message[2]}</p>
        <p> <input class='button' id='back_button' type='button' value='Voltar'>`
    }

    const back_button = document.querySelector('input#back_button')
    back_button.addEventListener('click', refresh_page)

}


const format_value = (value) =>{
    return Intl.NumberFormat('pt-BR').format(value)
}


const refresh_page = () => location.reload()



const verify_button = document.querySelector('input#verify_button')
verify_button.addEventListener('click', validate_input)

