function generateQRCode() {
    var inputText = document.getElementById('inputText').value;
    var qrcodeContainer = document.getElementById('qrcode');
  
    if (inputText.trim() !== '') {
      // Clear previous QR code
      qrcodeContainer.innerHTML = '';
  
      // Generate QR code
      var qrcode = new QRCode(qrcodeContainer, {
        text: inputText,
        width: 128,
        height: 128,
      });
    } else {
      alert('Please enter text before generating the QR code.');
    }
  }
  