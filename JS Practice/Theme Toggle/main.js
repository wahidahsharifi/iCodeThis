const content = document.querySelector('html')

document.getElementById('toggler').addEventListener('change', e => {
    if (e.target.checked) {
        content.style.color = '#fff'
    } else {
        content.style.color = '#000'
    }
})