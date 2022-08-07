// titulo h1 "¿Estas buscando un desarrollador Web?"
const cambiarPregunta = () => document.getElementById("titulo").innerHTML = "Lo encontraste!";
document.getElementsByTagName("h1")[0].style.color = "white";



const volverAPreguntar = () => document.getElementById("titulo").innerHTML = "¿Estas buscando un desarrollador Web?";
document.getElementsByTagName("h1")[0].style.color = "white";


//probando API de chuck norris para el footer


async function obtenerApi() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const data = await response.json();

    const { value, icon_url } = data;

    const idChuck = document.querySelector("#chuckId").querySelector("#chuck").textContent = "The latest news about Chuck Norris: " + value;
};
obtenerApi()


async function recargar() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const data = await response.json();

    const { value } = data;
    document.querySelector("#chuckId").querySelector("#chuck").textContent = "The latest news about Chuck Norris: " + value;
}