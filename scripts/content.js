// Ensure pdfjsLib is initialized
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';

document.addEventListener('fileUploaded', function(event) {
    const file = event.detail.file;
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const typedarray = new Uint8Array(e.target.result);
        pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
            window.sharedData.pdfDoc = pdf; // Store the PDF document in sharedData
            renderPage(1); // Render the first page by default
        });
    };
    
    reader.readAsArrayBuffer(file);
});

document.addEventListener('pageChanged', function(event) {
    const pageNumber = event.detail.page;
    renderPage(pageNumber);
});

function renderPage(pageNumber) {
    const pdfDoc = window.sharedData.pdfDoc;
    if (pdfDoc) {
        pdfDoc.getPage(pageNumber).then(function(page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            const canvas = document.getElementById('content');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const canvas1 = document.getElementById('cursor-highlight');
            const canvas2 = document.getElementById('highlight-points');
            canvas1.height = viewport.height;
            canvas1.width = viewport.width;
            canvas2.height = viewport.height;
            canvas2.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext);
        }).catch(function(error) {
            console.error('Error rendering page:', error);
        });
    }
}
