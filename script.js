const container = document.getElementById('container')
const colors = ['red', 'redorange', 'orange', 'yellow', 'green', 'blue', 'purple' ]
const squares = 500

for (let i = 0; i < squares.length; i++) {
    const squares = document.createElement('div')
    square.classList.add('square')

    square.addEventListner('mouseover', () => setColor(square))
    square.addEventListner('mouseout', () => removeColor(square))
    
    container.appendChild(square)
    
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}'
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '#000'
}

function getRandomColor() {
    return colros[Math.floor(Math.random() * colors.length)]
}