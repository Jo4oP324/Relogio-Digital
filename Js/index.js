const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundo = document.getElementById('segundos')
const milessegundos = document.getElementById('milessegundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()
    let m = dateToday.getMilliseconds()

    if (hr < 10) hr = '0' + hr

    if (min <10) min = '0' + min
    
    if (s < 10) s = '0' + s

    if (m < 10) m = '0'  + m

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
    milessegundos.textContent = m
})