let selectedType = ''; // Variable to store the selected type
let selectedImage = ''; // Variable to store the selected image

function selectType(type) {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.classList.remove('box-selected');
    });
    event.currentTarget.classList.toggle('box-selected');
    selectedType = type; // Store the selected type
}

function openImageUploader() {
    document.getElementById('imageInput').click();
}

document.getElementById('imageInput').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const selectedImg = document.querySelector('.selectedImg');
            selectedImg.style.backgroundImage = `url('${e.target.result}')`;
            selectedImg.style.display = 'block'; // Show the selectedImg div
            selectedImage = e.target.result; // Store the selected image
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function deleteImage() {
    // Reset the uploaded image
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = "./img/add.png";
    
    // Hide the selectedImg div
    const selectedImg = document.querySelector('.selectedImg');
    selectedImg.style.backgroundImage = ''; // Reset background image
    selectedImg.style.display = 'none'; // Hide the selectedImg div
}

function sendData() {
    // Check if a type and an image have been selected
    if (selectedType && selectedImage) {
        // Now you can send the selectedType and selectedImage to the server
        console.log("Selected data:", {
            type: selectedType,
            selectedImg: selectedImage,
        });

        // Add your code here to send the data to the server
    } else {
        console.log("Please select a type and an image before sending.");
    }
}
