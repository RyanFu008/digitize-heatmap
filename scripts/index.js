window.sharedData = {};

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        window.sharedData.uploadedFile = file;
        const fileUploadedEvent = new CustomEvent('fileUploaded', { detail: { file } });
        document.dispatchEvent(fileUploadedEvent);
    }
});

document.getElementById('pageButton').addEventListener('click', function(event) {
    const page = parseInt(document.getElementById('pageInput').value);
    const pageChangedEvent = new CustomEvent('pageChanged', { detail: { page } });
    document.dispatchEvent(pageChangedEvent);
});