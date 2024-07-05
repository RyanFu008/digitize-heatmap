document.addEventListener('discrete', async () => {
    var amt = parseInt(document.getElementById('discreteInput').value);
    var colorMap = new Map();
    for (let i = 0; i < amt; i++) {
        while (true) {
            var pt = await getPoint();
            var x = pt.x; var y = pt.y;
            console.log(x, y);
            var col = getColorAtPosition(x, y);
            var colhex = rgbToHex(col.r, col.g, col.b);
            if (!colorMap.has(colhex)) {
                while (true) {
                    var val = parseFloat(prompt('Enter the value for the color: '));
                    if (val != NaN) break;
                    alert('Invalid input. Please enter a valid number (decimal allowed).');
                }
                colorMap.set(colhex, val);
                console.log(colorMap);
                break;
            } else {
                alert('Color already selected. Please select another color.');
            }
        }
    }
    sharedData.colorMap = colorMap;
    sharedData.colorMapType = 'discrete';
    document.getElementById('getData').innerText = 'Get Data (Discrete)';
    alert("Colormap created successfully! Get Data to download results!");
});

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}