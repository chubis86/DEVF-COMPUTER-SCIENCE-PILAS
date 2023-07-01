/* 
1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
*/
console.log("1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).");

//La pila sigue la filosofía de LIFO (LAST IN FIRST OUT)
function devolver(arreglo, x){
    let elementos=arreglo.length;
    console.log(elementos);
    //Veamos si el arreglo tiene elementos
    if(elementos==0){
        console.log("EL ARREGLO NO CONTIENE ELEMENTOS");
    }else{
    //Veamos si el número de elementos solicitados es igual o menor al número de elementos de la pila 
        if(x<=elementos){
            let salida = "";
            for(let i=0; i<x; i++){
                salida+=arreglo[i]+" ";
            }
            console.log(salida);
        }else{
            console.log("NO EXISTEN LOS SUFICIENTES ELEMENTOS EN LA PILA");
        }    
        
    }
}

const arreglo=["ELEMENTO 1", "ELEMENTO 2", "ELEMENTO 3", "ELEMENTO 4"];

devolver(arreglo, 2);


/* 
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
*/

console.log("2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.");

const arreglo2=[14, 25, 98, 54, 87];

function reemplazar(arreglo, nuevo, viejo){
    //Comprobamos que el valor que se busca reemplazar se encuentre en la pila
    let posicion=arreglo2.indexOf(viejo);
    if(posicion>0){
        console.log("PILA ANTES DEL CAMBIO");
        console.log(arreglo2);
        arreglo[posicion]=nuevo;
        console.log("PILA DESPUÉS DEL CAMBIO");
        console.log(arreglo2);
        //Vamos a sacar a los elementos posteriores a la posición del cambio
        console.log("PILA HACIENDO POP");
        while(posicion<arreglo2.length-1){
            arreglo2.pop();
        }
        console.log(arreglo2);

    }else{
        console.log("EL VALOR "+viejo+" NO SE ENCUENTRA EN LA PILA");
    }
}

reemplazar(arreglo2, 42, 25);


/* 
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
*/

console.log("3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.");

const arreglo3=["ORIGEN", "PUEBLO 1", "PUEBLO 2", "PUEBLO 3", "PUEBLO 4", "DESTINO"];

let recorrido1="";
let recorrido2="";
let i=0;
//Se imprime el recorrido de ida
console.log("VIAJE DE IDA");
while(i<=arreglo3.length-1){
    recorrido1+=arreglo3[i]+" ";
    i++;
}
console.log(recorrido1);
//Se imprime el recorrido de regreso
console.log("VIAJE DE VUELTA");
while(i>=1){
    recorrido2+=arreglo3[i-1]+" ";
    i--;
}
console.log(recorrido2);

/* 
4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
*/
console.log("4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.");

const arreglo4=["CONTENEDOR 1", "CONTENEDOR 2", "CONTENEDOR 3", "CONTENEDOR 4", "CONTENEDOR 5", "CONTENEDOR 6"];
const temporal=[];

function retirar(arreglo, contenedor){
    
    
    //Imprimir estado de almacén
    console.log(arreglo4);
    let posicion=arreglo4.indexOf(contenedor);
    
    //Corroboramos que se encuentre el contenedor que se desea sacar en el almacén
    if(posicion>0){
        ///EMPEZAMOS PROCESO DE EXTRACCIÓN
        let i=arreglo4.length-1;
        
        while(posicion<=i){
            if(posicion==i){
                arreglo4.pop();
                break;
            }else{
                temporal.push(arreglo4.pop());
                i--;
            }
            console.log("IMPRIMIENDO PROCESO DE EXTRACCIÓN");
            console.log(arreglo4);
            console.log(temporal);
        }
        ////EMPEZAMOS PROCESO DE REINSERCIÓN
        console.log("EMPEZAMOS PROCESO DE INSERCIÓN");
        console.log(temporal.length);
        let tope=temporal.length;
        for(let i=0;i<tope;i++){
            arreglo4.push(temporal.pop());
            console.log(arreglo4);
            console.log(temporal);
            console.log();
        }
        console.log("ESTADO FINAL DEL ALMACÉN");
        console.log(arreglo4);
    }else{
        console.log("EL CONTENEDOR SOLICITADO NO SE ENCUENTRA EN ESTE ALMACÉN");
    }
}

retirar(arreglo4, "CONTENEDOR 2");

