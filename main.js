const personalColors = {
    '봄 웜톤': {
        colors: [
            { name: 'Spring Coral', code: '#f8b195' },
            { name: 'Warm Pink', code: '#f67280' },
            { name: 'Light Lilac', code: '#c06c84' },
            { name: 'Dusty Plum', code: '#6c5b7b' },
            { name: 'Deep Teal', code: '#355c7d' },
        ],
        description: '생기 있고 따뜻한 색상이 잘 어울리는 타입입니다. 주로 밝고 선명한 컬러들이 많으며, 골드 액세서리가 잘 어울립니다.'
    },
    '여름 쿨톤': {
        colors: [
            { name: 'Mint Green', code: '#a8e6cf' },
            { name: 'Pastel Yellow', code: '#dcedc1' },
            { name: 'Light Peach', code: '#ffd3b6' },
            { name: 'Soft Coral', code: '#ffaaa5' },
            { name: 'Cherry Blossom', code: '#ff8b94' },
        ],
        description: '부드럽고 시원한 파스텔 톤이 잘 어울리는 타입입니다. 은은하고 여성스러운 분위기를 연출할 수 있으며, 실버 액세서리가 잘 어울립니다.'
    },
    '가을 웜톤': {
        colors: [
            { name: 'Burnt Orange', code: '#b87333' },
            { name: 'Terracotta', code: '#d08c5c' },
            { name: 'Muted Peach', code: '#e8a589' },
            { name: 'Light Salmon', code: '#f5c0b4' },
            { name: 'Pale Pink', code: '#f9e0da' },
        ],
        description: '차분하고 깊이 있는 컬러가 잘 어울리는 타입입니다. 브라운, 카키 등 자연의 색과 가까운 컬러들이 많으며, 골드 액세서리가 잘 어울립니다.'
    },
    '겨울 쿨톤': {
        colors: [
            { name: 'Navy Blue', code: '#000080' },
            { name: 'Royal Blue', code: '#0000cd' },
            { name: 'Cornflower Blue', code: '#4169e1' },
            { name: 'Sky Blue', code: '#87ceeb' },
            { name: 'White', code: '#ffffff' },
        ],
        description: '선명하고 강렬한 비비드 컬러나 무채색이 잘 어울리는 타입입니다. 시크하고 도시적인 이미지를 연출할 수 있으며, 실버 액세서리가 잘 어울립니다.'
    },
};

const imageUploader = document.getElementById('image-uploader');
const fileInput = document.getElementById('file-input');
const imagePreview = document.querySelector('.image-preview');
const resultSection = document.getElementById('result-section');
const resultSeason = document.getElementById('result-season');
const resultPalette = document.getElementById('result-palette');
const seasonalDescriptions = document.getElementById('seasonal-descriptions');
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
    seasonalDescriptions.innerHTML = ''; 
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
    const seasonData = personalColors[season];
    displayResult(season, seasonData);
}

function displayResult(season, seasonData) {
    resultSeason.textContent = season;
    resultPalette.innerHTML = '';
    seasonData.colors.forEach(color => {
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

    seasonalDescriptions.innerHTML = '';
    for (const s in personalColors) {
        const seasonDiv = document.createElement('div');
        seasonDiv.classList.add('season-description');

        const title = document.createElement('h3');
        title.textContent = s;
        seasonDiv.appendChild(title);

        const paletteDiv = document.createElement('div');
        paletteDiv.classList.add('palette');
        personalColors[s].colors.forEach(c => {
            const colorChip = document.createElement('div');
            colorChip.classList.add('color-chip');
            colorChip.style.backgroundColor = c.code;
            paletteDiv.appendChild(colorChip);
        });
        seasonDiv.appendChild(paletteDiv);

        const descriptionP = document.createElement('p');
        descriptionP.textContent = personalColors[s].description;
        seasonDiv.appendChild(descriptionP);

        seasonalDescriptions.appendChild(seasonDiv);
    }

    resultSection.classList.remove('hidden');
    analyzeButton.classList.add('hidden');
}
