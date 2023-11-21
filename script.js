let uploadedFiles = [];

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const pdfList = document.getElementById('pdfList');
  
    const files = fileInput.files;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (file.type === 'application/pdf') {
        const fileInfo = {
            name: file.name,
            type: file.type
        };

        uploadedFiles.push(fileInfo); // Almacena la información del archivo

        const fileRow = document.createElement('tr');

        const fileNameCell = document.createElement('td');
        fileNameCell.textContent = fileInfo.name;

        const viewButtonCell = document.createElement('td');
        const viewButton = document.createElement('button');
        viewButton.textContent = 'Ver';
        viewButton.onclick = function() {
            viewPDF(file);
        };
        viewButtonCell.appendChild(viewButton);

        const deleteButtonCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            deleteFile(fileRow);
        };
        deleteButtonCell.appendChild(deleteButton);

        fileRow.appendChild(fileNameCell);
        fileRow.appendChild(viewButtonCell);
        fileRow.appendChild(deleteButtonCell);
        pdfList.appendChild(fileRow);
    } else {
        alert('Por favor, sube archivos PDF solamente.');
    }
}
}

function deleteFile(row) {
const pdfList = document.getElementById('pdfList');
pdfList.removeChild(row);
}

function viewPDF(file) {
    const fileReader = new FileReader();
  
    fileReader.onload = function(event) {
      const pdfData = event.target.result;
      const pdfWindow = window.open('');
      pdfWindow.document.write(`<embed width="100%" height="100%" src="${pdfData}" type="application/pdf">`);
    };
  
    fileReader.readAsDataURL(file);
  }

// JavaScript
function searchFiles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#pdfList tr');

    rows.forEach(row => {
        const fileName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (fileName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}


// JavaScript
NodeList.prototype.contains = function(text) {
    return Array.from(this).some(element => element.textContent.includes(text));
};

  