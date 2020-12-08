//VARIABLES
const carrito = document.getElementById('carrito');
const listaCursos = document.getElementById('lista-cursos'); 



//LISTENERS
cargarEventListeners();

function cargarEventListeners(){
     //dispara cuando se presiona agregar carrito
     listaCursos.addEventListener('click', comprarCurso);
}



//FUNCIONES
//funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault;

    //Delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    };
}

//Lee los datos del curso

function leerDatosCurso(curso){
    console.log(curso)
}
