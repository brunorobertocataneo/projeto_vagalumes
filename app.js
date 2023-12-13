const days = document.getElementById('days')
const hours = document.getElementById('hours'); 
const minutes = document.getElementById('minutes'); 
const seconds = document.getElementById('seconds'); 

const currentYear = new Date().getFullYear();

const time_left = new Date(`Febuary 17 ${currentYear + 1} 00:00:00`); // dara o nome a  variavel

function updateCountdown() {
    const currentTime = new Date();
    const diff = time_left - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24); // Calcula os dias
    const h = Math.floor(diff / 1000 / 60 / 60) % 24; // Calcula as horas
    const m = Math.floor(diff / 1000 / 60) % 60;      // Calcula os minutos
    const s = Math.floor(diff / 1000) % 60;           // Calcula os segundos



    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m; 
    seconds.innerHTML = s < 10 ? '0' + s : s; 
}

setInterval(updateCountdown, 1000);
