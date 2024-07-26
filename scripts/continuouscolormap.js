document.addEventListener('continuous', async () => {
    var pt1 = await getPoint();
    var colorMap = new Map();
    var lo = parseFloat(prompt('Enter the value for the color: '));
    var pt2 = await getPoint();
    var hi = parseFloat(prompt('Enter the value for the color: '));

    var logarithmic = sharedData.logarithmic;

    // Calculate the differences in x and y
    var dx = pt2.x - pt1.x;
    var dy = pt2.y - pt1.y;

    // Determine which axis has more points and use that for iteration
    var steps = Math.max(Math.abs(dx), Math.abs(dy));

    for (let step = 0; step <= steps; step++) {
        let t = step / steps;
        let x = pt1.x + t * dx;
        let y = pt1.y + t * dy;
        var col = getColorAtPosition(x, y);
        var colhex = rgbToHex(col.r, col.g, col.b);
        if (!colorMap.has(colhex)) {
            var colval;
            if (logarithmic) {
                // Compute logarithmic interpolation
                colval = Math.exp(t * (Math.log(hi) - Math.log(lo)) + Math.log(lo));
            } else {
                // Compute linear interpolation
                colval = t * (hi - lo) + lo;
            }
            colorMap.set(colhex, colval);
        }
    }

    sharedData.colorMap = colorMap;
    sharedData.colorMapType = 'continuous';
    document.getElementById('getData').innerText = 'Get Data (Cont)';
    alert("Colormap created successfully! Get Data to download results!");
});

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
