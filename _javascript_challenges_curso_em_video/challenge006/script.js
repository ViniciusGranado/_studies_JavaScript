function convertCtoKnF(){
    //Converte uma temperatura em Celsius(var C) para Fahrenheit e Kelvin.
    //(number) -> [number,number]

    let C = Number(prompt("Digite uma temperatura em °C(Celsius)"))
    if (isNaN(C)){
        alert("[ERRO]Dado inválido, tente novamente!")
        convertCtoFnK()
    }

    let temperatureKnF = []
    temperatureKnF[0] = ( C+273.15 )//Conversão C para K
    temperatureKnF[1] = ( C*(9/5)+32 )//Conversão C para F

    let resultDivArea = document.querySelector("div.result")
    resultDivArea.innerHTML = `<h2 class="listHeader">A temperatura de ${Intl.NumberFormat('de-DE').format(C)}°C, corresponde à:</h2>
        <ul class="listTemperature">
            <li>${ Intl.NumberFormat('de-DE').format(temperatureKnF[0]) }°K (Kelvin)</li>
            <li>${ Intl.NumberFormat('de-DE').format(temperatureKnF[1]) }°F (Fahrenheit)</li>
        <ul>
    `
}
