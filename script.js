const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSegundos = new Date(newYearsDate - currentDate) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos % 60);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time) {
    return time < 10? `0${time}` : time;
}

countdown();

setInterval(countdown, 100);

