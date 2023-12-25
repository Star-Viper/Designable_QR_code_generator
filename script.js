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

  function shareOnFacebook() {
    var qrCodeImage = document.getElementById('qrcode').getElementsByTagName('img')[0].src;
    var facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(qrCodeImage);
    openSocialMediaPopup(facebookShareUrl);
  }
  
  function shareOnTwitter() {
    var qrCodeImage = document.getElementById('qrcode').getElementsByTagName('img')[0].src;
    var twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(qrCodeImage) + '&text=Check%20out%20this%20QR%20Code';
    openSocialMediaPopup(twitterShareUrl);
  }
  
  function openSocialMediaPopup(url) {
    window.open(url, '_blank', 'width=600,height=400');
  }
  
  function downloadQRCode() {
    var qrcodeImage = document.getElementById('qrcode').getElementsByTagName('img')[0].src;
 
    var downloadLink = document.createElement('a');
    downloadLink.href = qrcodeImage;
    downloadLink.download = 'qrcode.png';
  //Append link to body
    document.body.appendChild(downloadLink);
    downloadLink.click();
    //Remove link from DOM
    document.body.removeChild(downloadLink);
  }
  
  //change the appearance of the QR code
  function changeQRCodeAppearance() {
    var qrcodeContainer = document.getElementById('qrcode');
    var qrcodeImage = qrcodeContainer.getElementsByTagName('img')[0];
  
    //Change the border of the QR code {now red}
    qrcodeImage.style.border = '2px solid #ff0000'; 
  }
  