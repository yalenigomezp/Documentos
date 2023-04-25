//console.log('funcionando Ok.');
//const formularioUs=document.getElementById('formulario')
const formularioUs = document.querySelector('#formulario'); //esta opcion no solo puede seleccionar aid, tambien puede seleccionar clases.
const listaRamosUS = document.getElementById('listaRamos');

let arryClases =[]; //parte vacio el arreglo


//Creando una funcion:
const Creaitem =(curso)=>{
    let item={
        curso:curso,
        Estado:false
    }

    arryClases.push(item); //agrego el contenido que tiene el objeto item
    return item;

}
const SaveDB= () =>{
    localStorage.setItem('rutina', JSON.stringify(arryClases));
    ready();
}

//Funcion mostar la información que está en localStorage
const ready = ()=>{
    listaRamosUS.innerHTML ='';

    arryClases = JSON.parse(localStorage.getItem('rutina'));
    console.log('arryClases');

    if(arryClases === null){
        arryClases = [];

    }else{
        arryClases.forEach(element => {
            listaRamosUS.innerHTML +=`<div class="alert alert-danger" role="alert">
            <span class="material-icons mr-3" >
                school
            </span>
            <b>${element.curso}</b> -${element.Estado}
            <span class="float-right"></span>
                <span class="material-icons">
                   done
                </span>
                <span class="material-icons" onclick="EliminarCookies('${element.curso}')">
                  delete

                </span>
        </div>`	
        });
    }
}
/* let ramo1 = Creaitem('Programacion Front End');
let ramo2 = Creaitem('Base de Datos');
console.log(ramo1);
console.log(arryClases);  */  //Estoy imprimiendo por consola el contenido del arreglo

//EventListener

formularioUs.addEventListener('submit', (flecha) =>{

    flecha.preventDefault(); //previene de cualquier evento
    let ramosUs= document.querySelector('#ramos').value; //capturamos el valorque 
                                                         //viene del input
    //console.log(ramosUs);    
    Creaitem(ramosUs);
    SaveDB();

    formularioUs.reset();
    
    
})

//Mostarndo información por pantalla
//document.addEventListener('DomContentLoaded', MostrarDb);
document.addEventListener("DOMContentLoaded", ready);

listaRamosUS.addEventListener('click',(e) =>{
    e.preventDefault();
   
})

//Eliminando registros
function EliminarCookies(tmpCurso){
    let tmpIndex=0;
    arryClases.forEach((elemento,index)=>{
        if(elemento.curso===tmpCurso){
            tmpIndex=index;
        }
    });
        
    arryClases.splice(tmpIndex,1);
    SaveDB();
    }
