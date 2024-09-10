window.sharedData = {}
sharedData.colorMapType = 'none'
sharedData.tolerance = 0
sharedData.logarithmic = false
sharedData.mask = true

document.getElementById('uploadButton').addEventListener('click', function () {
  document.getElementById('fileInput').click()
})

document.getElementById('fileInput').addEventListener('change', function (event) {
  const file = event.target.files[0]
  if (file) {
    window.sharedData.uploadedFile = file
    const fileUploadedEvent = new CustomEvent('fileUploaded', { detail: { file } })
    document.dispatchEvent(fileUploadedEvent)
    document.getElementById('pageInput').value = 1
    document.getElementById('toleranceInput').value = 0
  }
})

document.getElementById('discreteButton').addEventListener('click', function (event) {
  const discreteEvent = new CustomEvent('discrete')
  document.dispatchEvent(discreteEvent)
})

document.getElementById('next').addEventListener('click', function (event) {
  let page = parseInt(document.getElementById('pageInput').value)
  page++
  document.getElementById('pageInput').value = page
  document.dispatchEvent(new CustomEvent('pageChanged', { detail: { page } }))
})

document.getElementById('prev').addEventListener('click', function (event) {
  let page = parseInt(document.getElementById('pageInput').value)
  page--
  document.getElementById('pageInput').value = page
  document.dispatchEvent(new CustomEvent('pageChanged', { detail: { page } }))
})
document.getElementById('keyEndpointsButton').addEventListener('click', function (event) {
  const discreteEvent = new CustomEvent('continuous')
  document.dispatchEvent(discreteEvent)
})

document.getElementById('pageButton').addEventListener('click', function (event) {
  const page = parseInt(document.getElementById('pageInput').value)
  const pageChangedEvent = new CustomEvent('pageChanged', { detail: { page } })
  document.dispatchEvent(pageChangedEvent)
})

document.getElementById('cropButton').addEventListener('click', function (event) {
  sharedData.crop = true; crop = 1
  const cropEvent = new CustomEvent('crop', { detail: { crop } })
  document.dispatchEvent(cropEvent)
})

document.getElementById('getData').addEventListener('click', function (event) {
  if (sharedData.colorMapType === 'none') {
    alert('Please select a colormap type first.')
    return
  }
  if (sharedData.colorMapType === 'discrete') {
    const discreteDataEvent = new CustomEvent('discreteData')
    document.dispatchEvent(discreteDataEvent)
  }
  if (sharedData.colorMapType === 'continuous') {
    const discreteDataEvent = new CustomEvent('discreteData')
    document.dispatchEvent(discreteDataEvent)
  }
})

document.getElementById('toleranceInput').addEventListener('change', function (event) {
  sharedData.tolerance = parseInt(document.getElementById('toleranceInput').value)
})

document.getElementById('scaleType').addEventListener('click', function (event) {
  sharedData.logarithmic = !sharedData.logarithmic
  if (sharedData.logarithmic) {
    document.getElementById('scaleType').innerText = 'Logarithmic Scale'
  } else {
    document.getElementById('scaleType').innerText = 'Linear Scale'
  }
})

document.getElementById('zoomIn').addEventListener('click', function (event) {
  const zoomEvent = new CustomEvent('zoomIn')
  document.dispatchEvent(zoomEvent)
})

document.getElementById('zoomOut').addEventListener('click', function (event) {
  const zoomEvent = new CustomEvent('zoomOut')
  document.dispatchEvent(zoomEvent)
})

document.getElementById('maskOrNot').addEventListener('click', function (event) {
  sharedData.mask = !sharedData.mask
  if (sharedData.mask) {
    document.getElementById('maskOrNot').innerText = 'Set Undefined to -1'
  } else {
    document.getElementById('maskOrNot').innerText = 'Interpolate Undefined'
  }
})
