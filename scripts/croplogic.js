document.addEventListener('crop', async () => {
  const point1 = await getPoint()
  highlights.push(point1)
  const point2 = await getPoint()
  highlights.push(point2)
  // crop the image
  cropCanvas(point1.x, point1.y, point2.x, point2.y)
  highlights.length = 0
})
