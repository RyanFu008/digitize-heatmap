document.addEventListener('continuous', async () => {
    var pt1 = await getPoint();
    var colorMap = new Map();
    var lo = parseFloat(prompt('Enter the value for the color: '));
    var pt2 = await getPoint();
    var hi = parseFloat(prompt('Enter the value for the color: '));
    var slope = (pt2.y - pt1.y) / (pt2.x - pt1.x);
    for (let i=pt1.x; i<=pt2.x; i++) {
        console.log(i);
        //get corresponding y value that lies on this line
        let y = pt1.y + slope * (i - pt1.x);
        var col = getColorAtPosition(i,y);
        var colhex = rgbToHex(col.r, col.g, col.b);
        if (!colorMap.has(colhex)) {
            var colval = (i-pt1.x)/(pt2.x-pt1.x+1)*(hi-lo+1)+lo;
            console.log(colval);
            colorMap.set(colhex, colval);
        }
    }
    sharedData.colorMap = colorMap;
    sharedData.colorMapType = 'continuous';
    document.getElementById('getData').innerText = 'Get Data (Cont)';
    alert("Colormap created successfully! Get Data to download results!");
});

async function ttt() {
    var pt1 = await getPoint();
    var colorMap = new Map();
    var lo = parseFloat(prompt('Enter the value for the color: '));
    var pt2 = await getPoint();
    var hi = parseFloat(prompt('Enter the value for the color: '));
    var slope = (pt2.y - pt1.y) / (pt2.x - pt1.x);
    for (let i=pt1.x; i<=pt2.x; i++) {
        //get corresponding y value that lies on this line
        let y = pt1.y + slope * (i - pt1.x);
        var col = getColorAtPosition(i,y);
        var colhex = rgbToHex(col.r, col.g, col.b);
        if (!colorMap.has(colhex)) {
            var colval = (i-pt1.x)/(pt2.x-pt1.x+1)*(hi-lo+1)+lo;
            console.log(colval);
        }
    }
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}