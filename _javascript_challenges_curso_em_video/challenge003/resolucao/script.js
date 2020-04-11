function showNumbers(){

    let userNumberString = prompt(`Digite um número qualquer:`).replace("," , ".")
    let userNumberConverted = Number(userNumberString)//Converte string para number 

    if (isNaN(userNumberConverted)){//Checa se o dado digitado foi um número
        alert('[ERRO]Dados inválidos, tente novamente.')
        showNumbers()
    }

    //Resultado final
    alert(`Antes de ${userNumberConverted}, temos o número ${userNumberConverted-1}.\nDepois de ${userNumberConverted}, temos o número ${userNumberConverted+1}.`)

}