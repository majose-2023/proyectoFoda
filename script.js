//seccion de lectura y carga de Debilidad
const buttonDeb = document.getElementById("deb");
buttonDeb.addEventListener("click", cargarDebilidad);
function cargarDebilidad(){
    let caracteristica = leer();
    const DEB = document.getElementById("itemdeb");
    DEB.innerHTML += "-" + caracteristica + "<br>";
}

//seccion de lectura y carga de Fortaleza
const buttonFor = document.getElementById("for");
buttonFor.addEventListener("click", cargarFortaleza);
function cargarFortaleza(){
    let caracteristica = leer();
    const DEB = document.getElementById("itemfor");
    DEB.innerHTML += "-" + caracteristica + "<br>";
}

//seccion de lectura y carga de Amenazas
const buttonAme = document.getElementById("ame");
buttonAme.addEventListener("click", cargarAmenaza);
function cargarAmenaza(){
    let caracteristica = leer();
    const DEB = document.getElementById("itemame");
    DEB.innerHTML += "-" + caracteristica + "<br>";
}

//seccion de lectura y carga de Amenazas
const buttonOpo = document.getElementById("opo");
buttonOpo.addEventListener("click", cargarOportunidad);
function cargarOportunidad(){
    let caracteristica = leer();
    const DEB = document.getElementById("itemopo");
    DEB.innerHTML += "-" + caracteristica + "<br>";
}

//funcion de lectura
function leer(){
    let carga = document.getElementById("guess-input");
    carga = carga.value; 
    return carga;
}

//mostrar cuadro y ocultar carga
const buttonMos = document.getElementById("btncuadro");
buttonMos.addEventListener("click", mostrar);
function mostrar(){
    const MOS = document.getElementById("cuadro");
    MOS.style.display = "block";
    const CAR = document.getElementById("carga");
    CAR.style.display = "none";

}