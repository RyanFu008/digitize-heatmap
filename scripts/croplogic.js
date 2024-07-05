document.addEventListener('crop', async () => {
    var point1 = await getPoint();
    highlights.push(point1);
    var point2 = await getPoint();
    highlights.push(point2);
    //crop the image
    cropCanvas(point1.x, point1.y, point2.x, point2.y);

    highlights = [];
});