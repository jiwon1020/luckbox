const personalColors = {
    '봄 웜톤': [
        { name: 'Spring Coral', code: '#f8b195' },
        { name: 'Warm Pink', code: '#f67280' },
        { name: 'Light Lilac', code: '#c06c84' },
        { name: 'Dusty Plum', code: '#6c5b7b' },
        { name: 'Deep Teal', code: '#355c7d' },
    ],
    '여름 쿨톤': [
        { name: 'Mint Green', code: '#a8e6cf' },
        { name: 'Pastel Yellow', code: '#dcedc1' },
        { name: 'Light Peach', code: '#ffd3b6' },
        { name: 'Soft Coral', code: '#ffaaa5' },
        { name: 'Cherry Blossom', code: '#ff8b94' },
    ],
    '가을 웜톤': [
        { name: 'Burnt Orange', code: '#b87333' },
        { name: 'Terracotta', code: '#d08c5c' },
        { name: 'Muted Peach', code: '#e8a589' },
        { name: 'Light Salmon', code: '#f5c0b4' },
        { name: 'Pale Pink', code: '#f9e0da' },
    ],
    '겨울 쿨톤': [
        { name: 'Navy Blue', code: '#000080' },
        { name: 'Royal Blue', code: '#0000cd' },
        { name: 'Cornflower Blue', code: '#4169e1' },
        { name: 'Sky Blue', code: '#87ceeb' },
        { name: 'White', code: '#ffffff' },
    ],
};

const imageUploader = document.getElementById('image-uploader');
const fileInput = document.getElementById('file-input');
const imagePreview = document.querySelector('.image-preview');
const resultSection = document.getElementById('result-section');
const resultSeason = document.getElementById('result-season');
const resultPalette = document.getElementById('result-palette');
const analyzeButton = document.getElementById('analyze-button');
const resetButton = document.getElementById('reset-button');
const uploadArea = document.querySelector('.upload-area');
let imageDataUrl = null;

imageUploader.addEventListener('click', () => fileInput.click());

imageUploader.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadArea.classList.add('dragover');
});

imageUploader.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

imageUploader.addEventListener('drop', (event) => {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

analyzeButton.addEventListener('click', () => {
    if (imageDataUrl) {
        analyzeImage(imageDataUrl);
    }
});

resetButton.addEventListener('click', () => {
    imagePreview.innerHTML = '';
    imagePreview.classList.remove('active');
    resultSection.classList.add('hidden');
    resetButton.classList.add('hidden');
    analyzeButton.classList.add('hidden');
    uploadArea.style.display = 'flex'; 
    fileInput.value = '';
    imageDataUrl = null;
});

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        imageDataUrl = e.target.result;
        imagePreview.innerHTML = `<img src="${imageDataUrl}" alt="Uploaded Image">`;
        imagePreview.classList.add('active');
        uploadArea.style.display = 'none';
        analyzeButton.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

function analyzeImage(dataUrl) {
    const seasons = Object.keys(personalColors);
    let hash = 0;
    for (let i = 0; i < dataUrl.length; i++) {
        const char = dataUrl.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; 
    }

    const index = Math.abs(hash) % seasons.length;
    const season = seasons[index];
    const palette = personalColors[season];
    displayResult(season, palette);
}

function displayResult(season, palette) {
    resultSeason.textContent = season;
    resultPalette.innerHTML = '';
    palette.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color.code;
        resultPalette.appendChild(colorBox);
    });
    resultSection.classList.remove('hidden');
    analyzeButton.classList.add('hidden');
}
