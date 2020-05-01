//Functions
const validate_input = () => {
    //Html objects
    const name_input = document.querySelector('input.input_name')
    const name_error = document.querySelector('span.span_name')

    const grade1_input = document.querySelector('input.input_grade1')
    const grade1_error = document.querySelector('span.span_grade1')

    const grade2_input = document.querySelector('input.input_grade2')
    const grade2_error = document.querySelector('span.span_grade2')


    //Values
    const name_value = name_input.value
    const grade1_value = Number((grade1_input.value).replace(',', '.'))
    const grade2_value = Number((grade2_input.value).replace(',', '.'))


    let control_name = false
    let control_grade1 = false
    let control_grade2 = false

    //Validate input
    if(name_value == ''){
        name_input.classList.add('input_error')
        name_error.classList.add('error_message')
    }else{
        name_input.classList.remove('input_error')
        name_error.classList.remove('error_message')
        control_name = true
    }

    if(isNaN(grade1_value) || grade1_value == 0){
        grade1_input.classList.add('input_error')
        grade1_error.classList.add('error_message')
    }else{
        grade1_input.classList.remove('input_error')
        grade1_error.classList.remove('error_message')
        control_grade1 = true
    }

    if(isNaN(grade2_value) || grade2_value == 0){
        grade2_input.classList.add('input_error')
        grade2_error.classList.add('error_message')
    }else{
        grade2_input.classList.remove('input_error')
        grade2_error.classList.remove('error_message')
        control_grade2 = true
    }

    if (control_name && control_grade1 && control_grade2){
        const mean = calculate_mean(grade1_value, grade2_value)
        show_results(name_value, grade1_value, grade2_value, mean)
    }

}


const calculate_mean = (number1, number2) => (number1+number2)/2

const show_results = (name, grade1, grade2, mean) => {
    const result_html_area = document.querySelector('div.result')
    let message = ''

    if (mean>6){
        message = 'Com média acima de 6,0, o aluno está <span class="approved">APROVADO</span>'
    }else if(mean>3){
        message = 'Com média entre 3,0 e 6,0, o aluno está em <span class="retake">RECUPERAÇÃO</span>'
    }else{
        message = 'Com média abaixo de 3,0, o aluno está <span class="failed">REPROVADO</span>'
    }

    result_html_area.innerHTML = `<h2 class="result_title">Resultado</h2>
    <h3 class="result_subtitle">Situação do aluno: ${name}</h3>
    <p class="result_text">Com as notas ${grade1.toFixed(1).replace('.', ',')} e ${grade2.toFixed(1).replace('.', ',')}, a <b>média é ${mean.toFixed(1).replace('.', ',')}</b>.</p>
    <p class="result_text">${message}</p>
    <input type="button" class="button back_button" value="Voltar">`

    const back_button = document.querySelector('input.back_button')
    back_button.addEventListener('click', reload_page)

}

const reload_page = () => location.reload()
//End Functions


//Script
const verify_button = document.querySelector('input.verify_button')
verify_button.addEventListener('click', validate_input)