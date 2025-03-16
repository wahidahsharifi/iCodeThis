const display = document.getElementById('time')

function updateTime() {
    const date = new Date()

    display.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`.split(':').map(e => e.padStart(2, '0')).join(':')
}

setInterval(updateTime, 1000)