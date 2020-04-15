function convert(){
    let result = document.querySelector("p.result-area")
    let distanceMeters = Number(prompt(`Digite uma distância em metros(m): `))
    if(isNaN(distanceMeters)){//Testa se o dado digitado foi um número
        alert("[ERRO]Dado inválido, tente novamente!")
        convert()
    } 


    result.innerHTML = `<h2>A distância de ${Intl.NumberFormat('de-DE').format(distanceMeters)} metros, corresponde à...</h2>
    <ul>
        <li>${Intl.NumberFormat('de-DE').format(metersToKilometers(distanceMeters))} quilômetros (Km)</li>  
        <li>${Intl.NumberFormat('de-DE').format(metersToHectometer(distanceMeters))} hectômetros (Hm)</li>
        <li>${Intl.NumberFormat('de-DE').format(metersToDecameters(distanceMeters))} decâmetros (Dam)</li>
        <li>${Intl.NumberFormat('de-DE').format(metersToDecimeters(distanceMeters))} decímetros (dm)</li>
        <li>${Intl.NumberFormat('de-DE').format(metersToCentimeters(distanceMeters))} centímetros (cm)</li>
        <li>${Intl.NumberFormat('de-DE').format(metersToMilimeters(distanceMeters))} milímetros (mm)</li>                 
    <ul>`
}

function metersToKilometers(meters){
    //Converte um valor em metros(variável meters) para quilômetros
    return (meters/1000).toFixed(3)
}
function metersToHectometer(meters){
    //Converte um valor em metros(variável meters) para hectômetros
    return (meters/100).toFixed(3)
}
function metersToDecameters(meters){
    //Converte um valor em metros(variável meters) para Decâmetros
    return (meters/10).toFixed(3)
}
function metersToDecimeters(meters){
    //Converte um valor em metros(variável meters) para Decímetros
    return (meters*10).toFixed(1)
}
function metersToCentimeters(meters){
    //Converte um valor em metros(variável meters) para Centímetros
    return (meters*100).toFixed(1)
}
function metersToMilimeters(meters){
    //Converte um valor em metros(variável meters) para Milímetros
    return (meters*1000).toFixed(1)
}




