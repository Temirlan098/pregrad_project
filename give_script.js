let selectedType = ''; // Переменная для отслеживания выбранного типа

function selectType(type) {
    // Сбрасываем цвет предыдущего выбранного типа
    if (selectedType) {
        document.querySelector(`.box[data-type="${selectedType}"]`).style.backgroundColor = '#ffffff';
    }

    // Устанавливаем цвет выбранного типа
    document.querySelector(`.box[data-type="${type}"]`).style.backgroundColor = '#e0e0e0';
    
    selectedType = type; // Обновляем выбранный тип
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
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function openImageUploader() {
    document.getElementById('imageInput').click();
}


function deleteImage() {
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = "./img/add.png"; // Замените на путь к изображению "по умолчанию"
}

function sendData() {
    // Добавьте код для отправки данных (включая изображение) на сервер
    // Этот код может включать использование AJAX или других методов передачи данных
    // На этом уровне, код будет зависеть от бэкенд-решения
}

