console.log('program starting')
const highlights = []
let hm = false

const canvas = document.getElementById('cursor-highlight')
const context = canvas.getContext('2d')

function getPoint () {
  hm = true
  return new Promise((resolve) => {
    canvas.addEventListener('click', function (event) {
      hm = false
      console.log(event.offsetX, event.offsetY)
      resolve({ x: event.offsetX, y: event.offsetY })
    }, { once: true })
  })
}

canvas.addEventListener('mousemove', function (event) {
  context.clearRect(0, 0, canvas.width, canvas.height)
  // Go through all highlights, draw
  for (const highlight of highlights) {
    context.beginPath()
    context.moveTo(0, highlight.y)
    context.lineTo(canvas.width, highlight.y)
    context.moveTo(highlight.x, 0)
    context.lineTo(highlight.x, canvas.height)
    context.strokeStyle = 'black'
    context.lineWidth = 1 // Ensure line width
    context.stroke()

    context.beginPath()
    context.arc(highlight.x, highlight.y, 5, 0, 2 * Math.PI)
    context.fillStyle = 'red'
    context.fill()
  }
  if (hm) {
    context.beginPath()
    context.moveTo(0, event.offsetY)
    context.lineTo(canvas.width, event.offsetY)
    context.moveTo(event.offsetX, 0)
    context.lineTo(event.offsetX, canvas.height)
    context.strokeStyle = 'black'
    context.lineWidth = 1 // Ensure line width
    context.stroke()

    context.beginPath()
    context.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI)
    context.fillStyle = 'blue'
    context.fill()
  }
})
