document.querySelectorAll('a').forEach(link => link.addEventListener('click', (e) => {
    document.querySelectorAll('a').forEach(a => a.classList.remove('active'))
    e.target.classList.add('active')
}))