console.log("program starting");
let highlights = [];
let hm = false;

const canvas = document.getElementById('cursor-highlight');
const context = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(event) {
    console.log("moving!!!");
    drawHighlights();
    const mousex = event.offsetX;
    const mousey = event.offsetY;
    drawHighlightPoint(mousex, mousey, true);
});


function getPoint() {
    hm = true;
    return new Promise((resolve) => {
        canvas.addEventListener('click', function (event) {
            hm = false;
            console.log(event.offsetX, event.offsetY);
            resolve({ x: event.offsetX, y: event.offsetY });
        }, { once: true });
    });
}

document.addEventListener('crop', async function (event) {
    console.log("cropping!");
    const point = await getPoint();
    highlights.push(point);
    drawHighlights();
});

function drawHighlightPoint(x, y, temporary = false) {
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI);
    context.fillStyle = temporary ? 'blue' : 'red';
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
}

function drawHighlights() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < highlights.length; i++) {
        drawHighlightPoint(highlights[i].x, highlights[i].y);
    }
}