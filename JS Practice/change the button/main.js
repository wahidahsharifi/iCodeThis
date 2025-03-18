document.querySelector('.btn').addEventListener('click', (e) => {
    Object.assign(e.target.style, {
        backgroundColor: "#fef6f5",
        color: "#f55153"
    })
    e.target.textContent = 'clicked'
})