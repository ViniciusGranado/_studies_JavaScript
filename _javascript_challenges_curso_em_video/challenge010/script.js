const button = document.querySelector('input#button_calculate')
button.addEventListener('click',calculate_delta)

function calculate_delta(){
    // Variables and html objects declaration
    const a_value = Number(document.querySelector('input#a_value').value)
    const b_value = Number(document.querySelector('input#b_value').value)
    const c_value = Number(document.querySelector('input#c_value').value)

    //Calculate Delta
    const delta = ((b_value**2)-(4*a_value*c_value))

    calculate_roots(delta,a_value,b_value,c_value)
}


function calculate_roots(delta,a_value,b_value,c_value){
    //Result area declaration 
    const result_area = document.querySelector('div#result')

    result_area.innerHTML = `<h2 id="result">Resultado</h2>
    <p>Considerando os valores:</p>
    <p><span class="result_values">a = ${a_value}</span>
     <span class="result_values">b = ${b_value}</span> 
     <span class="result_values">c = ${c_value}</span> 
     <span class="result_values">Delta = ${delta}</span></p>`


    if (delta<0){
        //NO REAL ROOTS
        result_area.innerHTML += `<p class="result_message">Como delta é um valor negativo, não há raízes reais <span id="result_message">para essa equação.</span></p>`
    }else if(delta==0){
        //ONE REAL ROOT
        const result_positive = ((-b_value)+Math.sqrt(delta))/2*a_value

        result_area.innerHTML += `<p class="result_message">Como delta é igual a zero, há apenas uma raíz real.</p>
        <p>O valor de X é = ${Intl.NumberFormat('pt-BR').format(result_positive)}</p>`        
    }else{
        //TWO REAL ROOTS
        const result_positive = ((b_value)+Math.sqrt(delta))/2*a_value
        const result_negative = ((b_value)-Math.sqrt(delta))/2*a_value

        result_area.innerHTML += `<p class="result_message">Como delta é maior que zero, há duas raízes reais.</p>
        <p>O valor de X' é = ${Intl.NumberFormat('pt-BR').format(result_positive)}</p>
        <p>O valor de X'' é = ${Intl.NumberFormat('pt-BR').format(result_negative)}</p>`
    }

    result_area.innerHTML += `<input id="back_button" type="button" value="VOLTAR"></input>`
    const back_button = document.querySelector('input#back_button')
    back_button.addEventListener('click',refresh_page)
}


function refresh_page(){
    location.reload()
}