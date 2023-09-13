/*
  Aquí va tu JavaScript
*/
let nombre;
let Opcion;
let preguntas;
let indicePregunta = 0;
let puntaje = 0;

function iniciarTrivia() {
    nombre = document.getElementById('nombre').value;
    equipo = document.getElementById('Opcion').value;
    preguntas = [
        [" ¿A que pais pertenece esta bandera? ", ["Argentina", "Brasil", "España"], 0],
        ["¿A que pais pertenece esta bandera?", ["Peru", "Venezuela", "Ecuador"], 1],
        ["¿A que pais pertenece esta bandera?", ["Bolivia", "Colombia", "Peru"], 0]
    ];
   
    document.getElementById('nombreJugador').textContent = nombre;
    document.getElementById('equipoJuego').textContent = equipo;
    mostrarPregunta();
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('trivia').style.display = 'block';
}

function mostrarPregunta() {
    const preguntaActual = preguntas[indicePregunta];
    document.getElementById('numeroPregunta').textContent = indicePregunta + 1;
    document.getElementById('pregunta').textContent = preguntaActual[0];
    document.getElementById('opcionA').textContent = preguntaActual[1][0];
    document.getElementById('opcionB').textContent = preguntaActual[1][1];
    document.getElementById('opcionC').textContent = preguntaActual[1][2];
    document.getElementById('respuestaCorrecta').value = preguntaActual[2];
}

function responderPregunta() {
    const respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');
    const respuestaCorrecta = document.getElementById('respuestaCorrecta').value;

    if (!respuestaUsuario) {
        alert('Por favor, selecciona una respuesta.');
        return false;
    }

    if (respuestaUsuario.value == respuestaCorrecta) {
        puntaje++;
    }

    if (indicePregunta < preguntas.length - 1) {
        indicePregunta++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }

    return false;
}

function mostrarResultado() {
    document.getElementById('puntajeFinal').textContent = puntaje;
    document.getElementById('trivia').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}

function volverAJugar() {
    document.getElementById('bienvenida').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    indicePregunta = 0;
    puntaje = 0;
}