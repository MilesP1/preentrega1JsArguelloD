/*Codigo Adivinanzas*/

function bienvenido(){

    /*BIENVENIDO */
    alert ("Hola Amiguito/a")
    
    let hola = prompt("¿Como te Llamas?")
    if (hola != ""){
        alert ("Bienvenido/a " +hola)
    }


    let bienv1 = prompt("Estas Preparado/a " +hola)
    if (bienv1 === "SI"){
        alert ("¿De verdad? ¡Vamos!")
    }else{
        alert ("Vamos a jugar aunque no Quieras")
    }
}




bienvenido ()

/* Adivinanza 1*/

let adiv1= prompt ("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...");

while(adiv1 != "ESC" ){
    switch(adiv1.toUpperCase()){
        case "TIEMPO":
                alert("Correcto");
                break;
        default:
                alert("Incorrecto");
        break;
    }
   adiv1= prompt("Cuando paso el Hierro se oxida, el acero se rompe y la carne se pudre. SOY EL...");
    break;    
}

 /* Adivinanza 2*/

let adiv2= prompt ("Si me nombran, desaparezco. SOY EL...");

while(adiv2 != "ESC" ){
    switch(adiv2.toUpperCase()){
        case "SILENCIO":
                alert("Correcto");
                break;
        default:
                alert("Incorrecto");
        break;
    }
   adiv2= prompt("Si me nombran, desaparezco. SOY EL...");
   break;
}

/* Adivinanza 3 */

let adiv3= prompt ("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...");

while(adiv3 != "ESC" ){
    switch(adiv3.toUpperCase()){
        case "PIANO":
                alert("Correcto");
                break;
        default:
                alert("Incorrecto");
        break;
    }
   adiv3= prompt("Cien hermanitos en una sola tabla, si nadie los toca ninguno habla. SOY EL...");
   break;
}

/* Adivinanza 4 */

let adiv4= prompt ("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...");

while(adiv4 != "ESC" ){
    switch(adiv4.toUpperCase()){
        case "RETRATO":
                alert("Correcto");
                break;
        default:
                alert("Incorrecto");
        break;
    }
   adiv4= prompt("Si soy joven, Joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. SOY UN...");
   break;
}


/*RESPUESTAS*/

let resp1 = "TIEMPO"
let resp2 = "SILENCIO"
let resp3 = "PIANO"
let resp4 = "RETRATO"
let resp5 = "SOMBRA"




/*

En esta parte tengo una consulta, Si se puede responder aca, seria de mucha ayuda:
No me quedo claro el tema del bucle, necesito saber como se aplica,
porque no pude entenderlo y cuando hice el codigo, No funcionaba
¡Muchas Gracias!


let adiv5= prompt ("TE SIGO TE SIGO");

while(adiv5 != resp5 ){
    switch(adiv5.toUpperCase()){
        case "SOMBRA":
                alert("Correcto");
                break;
        default:
                alert("Incorrecto");
        break;
    }
   adiv5= prompt("TE SIGO TE SIGO");
}
*/