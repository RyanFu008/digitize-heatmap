document.addEventListener('discreteData', function(event) {
    var canvas = document.getElementById('content');
    var context = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    if (width * height > 1000000) {
        alert('Image too large to process (more than 1 million pixels). Please crop the image first.');
        return;
    }
    var array2d = [];
    for (let i = 0; i < height; i++) { // Iterate over height first
        var row = [];
        for (let j = 0; j < width; j++) { // Then iterate over width
            var color = getColorAtPosition(j, i); // Correct order of coordinates
            var hexval = rgbToHex(color.r, color.g, color.b);
            if (sharedData.colorMap.has(hexval)) {
                row.push(sharedData.colorMap.get(hexval));
            } else {
                row.push(0);
            }
        }
        array2d.push(row);
    }
    var csv = 'data:text/csv;charset=utf-8,';
    array2d.forEach(function(row) {
        csv += row.join(',');
        csv += '\n';
    });
    var encodedUri = encodeURI(csv);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
});

function getColorAtPosition(x, y) {
    const canvas = document.getElementById('content');
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(x, y, 1, 1);
    const r = imageData.data[0];
    const g = imageData.data[1];
    const b = imageData.data[2];
    return { r, g, b };
}
