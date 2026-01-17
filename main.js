const personalColors = {
    '봄 웜톤': ['#f8b195', '#f67280', '#c06c84', '#6c5b7b', '#355c7d'],
    '여름 쿨톤': ['#a8e6cf', '#dcedc1', '#ffd3b6', '#ffaaa5', '#ff8b94'],
    '가을 웜톤': ['#b87333', '#d08c5c', '#e8a589', '#f5c0b4', '#f9e0da'],
    '겨울 쿨톤': ['#000080', '#0000cd', '#4169e1', '#87ceeb', '#ffffff'],
};

const imageUploader = document.getElementById('image-uploader');
const fileInput = document.getElementById('file-input');
const imagePreview = document.querySelector('.image-preview');
const resultSection = document.getElementById('result-section');
const resultSeason = document.getElementById('result-season');
const resultPalette = document.getElementById('result-palette');
const resetButton = document.getElementById('reset-button');
const uploadArea = document.querySelector('.upload-area');

imageUploader.addEventListener('click', () => {
    if (!imagePreview.querySelector('img')) {
        fileInput.click();
    }
});

imageUploader.addEventListener('dragover', (event) => {
    event.preventDefault();
    if (!imagePreview.querySelector('img')) {
        imageUploader.style.backgroundColor = '#f7f7f7';
    }
});

imageUploader.addEventListener('dragleave', () => {
    imageUploader.style.backgroundColor = 'var(--card-background)';
});

imageUploader.addEventListener('drop', (event) => {
    event.preventDefault();
    if (!imagePreview.querySelector('img')) {
        imageUploader.style.backgroundColor = 'var(--card-background)';
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

resetButton.addEventListener('click', () => {
    imagePreview.innerHTML = '';
    resultSection.classList.add('hidden');
    resetButton.classList.add('hidden');
    uploadArea.style.display = 'block';
    fileInput.value = ''; 
    imageUploader.style.cursor = 'pointer';
});

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        uploadArea.style.display = 'none';
        imageUploader.style.cursor = 'default';
        resetButton.classList.remove('hidden');
        analyzeImage();
    };
    reader.readAsDataURL(file);
}

function analyzeImage() {
    const seasons = Object.keys(personalColors);
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
    const palette = personalColors[randomSeason];
    displayResult(randomSeason, palette);
}

function displayResult(season, palette) {
    resultSeason.textContent = season;
    resultPalette.innerHTML = '';
    palette.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        resultPalette.appendChild(colorBox);
    });
    resultSection.classList.remove('hidden');
}
