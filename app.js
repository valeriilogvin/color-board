const board = document.querySelector('#board')
const colors = ['#A52A2A', '#DEB887', '#5F9EA0', '#FF7F50', '#D2691E', '#6495ED', '#DC143C']
const SQUARES_NUMBER = 960

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = ''
    element.style.boxShadow =  ''
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
}