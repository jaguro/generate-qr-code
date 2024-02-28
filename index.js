/* Decalracion de constantes */ 
const btnGenerate = document.getElementById('btn-generate');
const inputText = document.getElementById('input-text');
const qrCodeDiv = document.getElementById('qrcode');
const btnClear = document.getElementById('btn-clear');
const btnDownload = document.getElementById('btn-download');

/*funcion al hacer click en generar qr*/ 
btnGenerate.addEventListener('click', () => {
    const inputValue = inputText.value.trim();  //Obtenemos valor del input
    if (inputValue) {
        qrCodeDiv.innerHTML = ''; //limpiamos div del código QR
        const qrcode = new QRCode(qrCodeDiv, {
            text: inputValue,
            width: 200,
            height: 200
        })
        //muestro el boton de descargar qr
        btnDownload.style.display = 'block';
    } else {
        // Si no se ha introducido un valor, mostrar mensaje de error
        alert('¡ATENCIÓN! Debes introducir una URL o PDF antes de generar el código QR.');
    }
})

/* Funcion en hacer click en limpiar*/ 
btnClear.addEventListener('click', ()=> {
    inputText.value = '';  //limpiamos input
    qrCodeDiv.innerHTML = ''; //limpiamos div del codigo QR
    // Ocultamos el botón de descarga
    btnDownload.style.display = 'none';

})

/* Función al hacer clic en descargar QR */
btnDownload.addEventListener('click', () => {
    const qrCodeImg = qrCodeDiv.querySelector('img');
    if (qrCodeImg) {
        const inputValue = inputText.value.trim();
        const downloadLink = document.createElement('a');
        downloadLink.href = qrCodeImg.src;
        downloadLink.download = inputValue !== '' ? `${inputValue}.png`: 'codigo_qr.png' // Nombre del archivo a descargar
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } else {
        alert('Primero genera un código QR antes de descargarlo.');
    }
});