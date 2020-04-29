//Functions 
const validate_input = () => {
    const input_object = document.querySelector('input#input_year')
    const error_area = document.querySelector('p#error_message')
    const input_value = Number.parseInt(input_object.value)


    if(isNaN(input_value)){
        input_object.classList.add('error_message')
        error_area.innerHTML = `Você deve digitar algum valor.`  
    }else if (input_value<0){
        input_object.classList.add('error_message')
        error_area.innerHTML = `O ano deve ser maior que zero.`   
    }else{
        calculate_result(input_value)
    }
}


const calculate_result = (year) => {
    let is_bissextile = false

    if ((year%400 == 0) || (year%4 == 0 && year%100 != 0)){
        is_bissextile = true
    }
    give_result(year, is_bissextile)
}


const give_result = (year, is_bissextile) => {
    let result = ''
    if (is_bissextile){
        result = `<span class='bissextile'>É BISSEXTO </span>&#x2705;`
    }else{
        result =`<span class='not_bissextile'>NÃO É BISSEXTO </span>&#x274c;`
    }

    const result_area = document.querySelector('div#result')

    result_area.innerHTML = `<p id="result_text">O ano de ${year} ${result}</p>
    <p><input class="button" type="button" value="VOLTAR">`

    const back_button = document.querySelector('input.button')
    back_button.addEventListener('click',page_refresh)

}


function page_refresh(){
    location.reload()
}


//Variables and html objects
const button = document.querySelector('input.button')
button.addEventListener('click',validate_input)

