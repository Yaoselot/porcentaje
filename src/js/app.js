import '../scss/app.scss'

const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", calcular);


function calcular(){
    const cantidad_total = Number(document.getElementById("cantidad_total").value);
    const cantidad_a_calcular = Number(document.getElementById("cantidad_a_calcular").value); 
    const porcentaje = Number(document.getElementById("porcentaje").value);

    if (cantidad_total && cantidad_a_calcular) {
        // calcular el porcentaje
        const resultado = (cantidad_a_calcular / cantidad_total) * 100;
        document.getElementById("porcentaje").value = Number(resultado.toFixed(2));

    }  else if (cantidad_total && porcentaje) {
        // calcular cantidad a calcular
        const resultado = cantidad_total * porcentaje / 100;
        document.getElementById("cantidad_a_calcular").value = Number(resultado.toFixed(2));

    } else if (cantidad_a_calcular && porcentaje) {
        // calcular la cantidad total
        const resultado = cantidad_a_calcular * 100 / porcentaje;
        document.getElementById("cantidad_total").value = Number(resultado.toFixed(2));
    }



    const porcentaje_resultado = (cantidad_a_calcular / cantidad_total) * 100;

    /*
    document.getElementById("resultado").textContent =
        `${porcentaje}% de ${cantidad} = ${resultado}`;
        */

    console.log(`El porcentaje es ${porcentaje_resultado}%`);
}


//Lo siguiente no hace nada solo es una referencia de un ejemplo que me dio chatGPT


function calcular_chatgpt_funcion(){
    const cantidad = Number(document.getElementById("cantidad").value);
    const porcentaje = Number(document.getElementById("porcentaje").value);

    const resultado = cantidad * porcentaje / 100;

    document.getElementById("resultado").textContent =
        `${porcentaje}% de ${cantidad} = ${resultado}`;
}