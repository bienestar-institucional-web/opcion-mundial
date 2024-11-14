




function previewFirma(event) {
    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function() {
        const preview = document.getElementById('firma-estudiante-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
}

function previewFirmaAprobacion(event) {
    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function() {
        const preview = document.getElementById('firma-aprobacion-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
}