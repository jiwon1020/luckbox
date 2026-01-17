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

analyzeButton.addEventListener('click', () => {
    analyzeImage();
    analyzeButton.classList.add('hidden');
    resetButton.classList.remove('hidden');
});

resetButton.addEventListener('click', () => {
    imagePreview.innerHTML = '';
    resultSection.classList.add('hidden');
    resetButton.classList.add('hidden');
    analyzeButton.classList.add('hidden');
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
        analyzeButton.classList.remove('hidden');
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
        const colorItem = document.createElement('div');
        colorItem.classList.add('color-item');

        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color.code;

        const colorName = document.createElement('span');
        colorName.classList.add('color-name');
        colorName.textContent = color.name;

        colorItem.appendChild(colorBox);
        colorItem.appendChild(colorName);
        resultPalette.appendChild(colorItem);
    });
    resultSection.classList.remove('hidden');
}
