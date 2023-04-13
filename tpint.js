const nom=document.getElementById("nombre");
const apel=document.getElementById("apellido");
const tele=document.getElementById("telefono");
const emai=document.getElementById("email1");
const pai=document.getElementById("pais");
const ciud=document.getElementById("ciudad");
const adult=document.getElementById("adultos");
const nin=document.getElementById("ninos");
let coment=document.getElementById("comentario");



const precioAdultos=5000;
const precioNinos=3000;

let presup=0;

const siguiente=document.getElementById("siguiente");
const anterior=document.getElementById("anterior");
const enviar = document.getElementById("enviar");

const formu1=document.getElementById("form1");
const formu2=document.getElementById("form2");


function envi(e){
    e.preventDefault();
    const precioAdultos=5000;
    const precioNinos=3000;
    
    let presup=0; 
    let cal=0;
    let mensaje="";

    presupuesto=precioAdultos*adult.value+precioNinos*nin.value;
    cal=precioNinos*nin.value;

    mensaje=mensaje.concat(nom.value + " "+apel.value +", con tel nro "+tele.value+", y email: "+emai.value+", del pais "+pai.value+", de la ciudad "+ciud.value);
    mensaje=mensaje.concat(", su presupusto es U$S "+presupuesto);
    document.getElementById("comentario").value = mensaje;

    nom.value="";
    apel.value="";
    tele.value="";
    emai.value="";
    pai.value="";
    ciud.value="";
    adult.value="";
    nin.value="";


    formu2.classList.add("d-none");
    formu1.classList.remove("d-none");
}



function sig(e){
    e.preventDefault();
formu1.classList.add("d-none");
formu2.classList.remove("d-none");


}

function ante(e){
    e.preventDefault();
    
    formu2.classList.add("d-none");
    formu1.classList.remove("d-none");
    
}

siguiente.addEventListener("click", sig);
anterior.addEventListener("click", ante);
enviar.addEventListener("click",envi)

