
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate and display the QR code
function GenerateQR() {
    if (qrText.value.length > 0) {
        // Construct the QR code URL using the entered text or URL
        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            qrText.value;

        // Show the QR code image container
        imgBox.classList.add("show-img");
    } else {
        // If no input is provided, highlight the input field with an error class
        qrText.classList.add("error");

        // Remove the error class after 1 second
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
