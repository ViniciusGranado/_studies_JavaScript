function validateForm(){
    // Input data variables and html objects
    let employee_name_input = document.querySelector('input#employeeName')
    let employee_name = document.querySelector('input#employeeName').value

    let employee_salary_input = document.querySelector('input#employeeSalary')
    let employee_salary_value = Number(employee_salary_input.value.replace(',','.'))

    let adjustment_input = document.querySelector('input#adjustment')
    let adjustment_value = Number(adjustment_input.value)

    //Error html objects
    let error_message_name = document.querySelector('div#errorAreaName')
    let error_message_salary = document.querySelector('div#errorAreaSalary')
    let error_message_adjustment = document.querySelector('div#errorAreaAdjustment')

    //Check if the inputs are valid
    let name_check = true
    let salary_check = true
    let adjustment_check = true

    if(employee_name==''){
        name_check = false

        employee_name_input.classList.add('error')
        error_message_name.innerHTML = `<p class="error">Nome inválido. Não pode estar em branco.</p>`
    }else{
        employee_name_input.classList.remove('error')
        error_message_name.innerHTML = ``
    }
    if (isNaN(employee_salary_value) || employee_salary_value==0){
        salary_check = false

        employee_salary_input.classList.add('error')
        error_message_salary.innerHTML = `<p class="error">Salário inválido, confira os dados.</p>`
    }else{
        employee_salary_input.classList.remove('error')
        error_message_salary.innerHTML = ``
    }
    if(adjustment_value==0){
        adjustment_check = false
        
        adjustment_input.classList.add('error')
        error_message_adjustment.innerHTML = `<p class="error">O reajuste deve ser um valor positivo ou negativo diferente de zero.</p>`
    }else{
        adjustment_input.classList.remove('error')
        error_message_adjustment.innerHTML = ``
    }

    //If all input are valid, call calculate_result() function
    if(salary_check && adjustment_check && name_check){ 
        calculate_result(employee_name,employee_salary_value,adjustment_value)
    }
}

function calculate_result(employee_name,employee_salary,adjustment){
    //variables and html objects
    let result_area = document.querySelector('div#result')
    let final_salary = 0
    let adjustment_ammount = employee_salary*adjustment/100
    let positive_negative = []

    //Check if the adjustment is positive or negative and execute the adjustment
    if(adjustment>0){
        result_area.innerHTML = `<h2>${employee_name} recebeu um aumento salarial.</h2>`
        final_salary = (employee_salary+adjustment_ammount)
        positive_negative[0] = 'um aumento'
        positive_negative[1] = 'aumentar'
        
    }else{
        result_area.innerHTML = `<h2>${employee_name} recebeu uma redução salarial.</h2>` 
        final_salary = (employee_salary - Math.abs(adjustment_ammount))
        positive_negative[0] = 'uma redução'
        positive_negative[1] = 'diminuir'
    }
    

    //Variables format for result
    employee_salary_formatted = number_format(employee_salary.toFixed(2))
    adjustment_ammount_formatted = number_format(Math.abs(adjustment_ammount.toFixed(2)))
    final_salary_formatted = number_format(final_salary.toFixed(2))

    //Final result
    result_area.innerHTML += `<p>O salário atual era R$${employee_salary_formatted}</p>
    <p>Com ${positive_negative[0]} de ${(Math.abs(adjustment))}%, o salário irá ${positive_negative[1]} R$${(adjustment_ammount_formatted)}</p>
    <p>O novo salário de ${employee_name} será R$${final_salary_formatted}</p>
    <input type="button" value="Voltar" onclick="window.location.reload(true)">`
    }


function number_format(number){
    //Format numbers to Brazilian pattern
    return Intl.NumberFormat('de-DE').format(number)
}