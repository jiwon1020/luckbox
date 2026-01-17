const personalColors = {
    '봄 웜톤': {
        colors: [
            { name: 'Peach', code: '#fed8b1' },
            { name: 'Light Coral', code: '#f08080' },
            { name: 'Cream', code: '#fffdd0' },
            { name: 'Lime Green', code: '#a7d129' },
            { name: 'Turquoise', code: '#40e0d0' },
        ],
        description: `생기와 활력이 넘치는 당신은 **봄 웜톤**입니다. 따뜻하고 화사한 색들이 당신의 피부를 더욱 맑고 건강하게 만들어줍니다. 마치 봄의 햇살처럼 밝고 사랑스러운 에너지를 발산하는 것이 특징입니다.`,
        keywords: ['생기발랄', '사랑스러움', '따뜻함', '과즙미', '에너제틱'],
        styling: '밝은 아이보리, 베이지, 코랄 핑크, 옐로우 그린 등 고채도의 선명한 컬러를 활용해보세요. 골드 주얼리가 당신의 매력을 한층 더 돋보이게 합니다. 프릴, 레이스 등 귀여운 디테일이 있는 의상이나 꽃무늬 패턴도 아주 잘 어울립니다.',
        makeup: '코랄, 피치 계열의 블러셔와 립스틱으로 생기를 더하고, 골드나 브라운 톤의 아이섀도우로 따뜻하고 깊이 있는 눈매를 연출해보세요. 펄이 들어간 제품을 사용하면 화사함이 배가 됩니다.'
    },
    '여름 쿨톤': {
        colors: [
            { name: 'Sky Blue', code: '#87ceeb' },
            { name: 'Lavender', code: '#e6e6fa' },
            { name: 'Pale Pink', code: '#fddde6' },
            { name: 'Mint', code: '#98ff98' },
            { name: 'Light Grey', code: '#d3d3d3' },
        ],
        description: `우아하고 부드러운 분위기를 자아내는 당신은 **여름 쿨톤**입니다. 시원하고 차분한 파스텔 톤의 색들이 당신의 인상을 더욱 맑고 깨끗하게 만들어 줍니다. 여름의 안개처럼 신비롭고 청순한 이미지가 당신의 매력입니다.`,
        keywords: ['청순함', '우아함', '시원함', '부드러움', '신비로움'],
        styling: '화이트, 스카이 블루, 라벤더, 민트 등 부드럽고 시원한 파스텔 컬러가 베스트입니다. 실버 주얼리가 당신의 투명한 피부를 더욱 돋보이게 합니다. 쉬폰이나 린넨과 같이 가볍고 하늘하늘한 소재의 옷을 선택하면 여성스러움이 극대화됩니다.',
        makeup: '핑크, 라벤더 계열의 블러셔와 립으로 청순함을 강조하고, 회색이나 은은한 펄이 가미된 핑크 브라운 톤의 아이섀도우로 부드러운 눈매를 연출하세요. 글로시한 립 표현이 잘 어울립니다.'
    },
    '가을 웜톤': {
        colors: [
            { name: 'Brick Red', code: '#8a3324' },
            { name: 'Mustard', code: '#ffdb58' },
            { name: 'Olive Green', code: '#808000' },
            { name: 'Deep Teal', code: '#003366' },
            { name: 'Beige', code: '#f5f5dc' },
        ],
        description: `성숙하고 깊이 있는 분위기를 가진 당신은 **가을 웜톤**입니다. 차분하고 따뜻한 색감들이 당신의 고급스럽고 지적인 이미지를 완성합니다. 풍요로운 가을 들판처럼 편안하고 그윽한 매력이 특징입니다.`,
        keywords: ['고급스러움', '성숙미', '지적임', '차분함', '그윽함'],
        styling: '브라운, 카키, 버건디, 머스타드 등 따뜻하고 깊이 있는 컬러를 선택하세요. 골드, 브론즈, 로즈골드 주얼리가 당신의 분위기를 더욱 풍성하게 만듭니다. 트렌치코트나 니트, 스웨이드와 같은 내추럴한 소재의 아이템과 완벽한 조화를 이룹니다.',
        makeup: '벽돌색이나 톤 다운된 오렌지, 브라운 계열의 립과 블러셔로 분위기 있는 메이크업을 연출하세요. 브라운, 카키, 골드 펄 아이섀도우로 깊고 그윽한 눈매를 만드는 것이 포인트입니다. 매트한 립 표현이 특히 잘 어울립니다.'
    },
    '겨울 쿨톤': {
        colors: [
            { name: 'True Red', code: '#ff0000' },
            { name: 'Royal Blue', code: '#4169e1' },
            { name: 'Hot Pink', code: '#ff69b4' },
            { name: 'Black', code: '#000000' },
            { name: 'White', code: '#ffffff' },
        ],
        description: `강렬하고 도시적인 이미지를 가진 당신은 **겨울 쿨톤**입니다. 선명하고 차가운 색들이 당신의 카리스마와 세련미를 극대화합니다. 눈 덮인 겨울 풍경처럼 깨끗하고 강렬한 대비가 당신의 시크한 매력을 돋보이게 합니다.`,
        keywords: ['카리스마', '도시적', '시크함', '모던함', '선명함'],
        styling: '블랙, 화이트, 네이비, 핫핑크, 로열 블루 등 채도가 높고 선명한 비비드 컬러나 무채색을 활용하세요. 실버나 플래티넘 주얼리가 당신의 차갑고 세련된 이미지를 완성합니다. 가죽이나 광택 있는 소재, 깔끔하게 떨어지는 실루엣의 옷이 잘 어울립니다.',
        makeup: '체리 레드, 버건디, 푸시아 핑크 등 채도 높은 립 컬러로 포인트를 주는 것이 좋습니다. 블랙 아이라이너로 선명한 라인을 그리고, 모노톤의 아이섀도우로 시크하고 깔끔한 눈매를 연출하세요. 화려한 글리터도 완벽하게 소화합니다.'
    },
};

function startApp() {
    const fileInput = document.getElementById('file-input');
    const uploadArea = document.querySelector('.upload-area');
    const imageDisplayArea = document.querySelector('.image-display-area');
    const imagePreview = document.querySelector('.image-preview');
    const faceCanvas = document.getElementById('face-canvas');
    const paletteOverlay = document.getElementById('palette-overlay');
    const resultSection = document.getElementById('result-section');
    const resultSeason = document.getElementById('result-season');
    const resultPalette = document.getElementById('result-palette');
    const seasonalDescriptions = document.getElementById('seasonal-descriptions');
    const resetButton = document.getElementById('reset-button');

    function highlight(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('dragover');
    }

    function unhighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) handleFile(e.target.files[0]);
    });

    resetButton.addEventListener('click', resetAll);

    async function handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('이미지 파일(JPG, PNG)만 업로드할 수 있습니다.');
            return;
        }

        const imgUrl = URL.createObjectURL(file);
        const img = document.createElement('img');

        img.onload = async () => {
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);

            uploadArea.style.display = 'none';
            imageDisplayArea.style.display = 'block';
            resetButton.classList.remove('hidden');

            const displaySize = { width: img.width, height: img.height };
            faceapi.matchDimensions(faceCanvas, displaySize);

            const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);

            const context = faceCanvas.getContext('2d');
            context.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
            faceapi.draw.drawDetections(faceCanvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(faceCanvas, resizedDetections);
            faceapi.draw.drawFaceExpressions(faceCanvas, resizedDetections);

            analyzeImage(imgUrl);
        };
        img.src = imgUrl;
    }

    function analyzeImage(dataUrl) {
        const seasons = Object.keys(personalColors);
        let hash = 0;
        for (let i = 0; i < dataUrl.length; i++) {
            hash = (hash << 5) - hash + dataUrl.charCodeAt(i);
            hash |= 0;
        }

        const index = Math.abs(hash) % seasons.length;
        const season = seasons[index];
        const seasonData = personalColors[season];
        displayResult(season, seasonData);
    }

    function displayResult(season, data) {
        resultSeason.innerHTML = `<i class="fas fa-sun"></i> ${season}`;

        resultPalette.innerHTML = '<h5>대표 컬러</h5>';
        const paletteContainer = document.createElement('div');
        paletteContainer.className = 'palette-grid';
        data.colors.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            colorItem.innerHTML = `<div class="color-box" style="background-color: ${color.code};" title="${color.name}"></div>`;
            paletteContainer.appendChild(colorItem);
        });
        resultPalette.appendChild(paletteContainer);

        paletteOverlay.innerHTML = '';
        data.colors.forEach(color => {
            const chip = document.createElement('div');
            chip.className = 'palette-color-chip';
            chip.style.backgroundColor = color.code;
            chip.title = color.name;
            paletteOverlay.appendChild(chip);
        });

        seasonalDescriptions.innerHTML = `
            <div class="info-card">
                <div class="info-header"><i class="fas fa-feather-alt"></i><h3>총평</h3></div>
                <p>${data.description}</p>
            </div>
            <div class="info-card">
                <div class="info-header"><i class="fas fa-key"></i><h3>이미지 키워드</h3></div>
                <div class="keywords">${data.keywords.map(k => `<span>#${k}</span>`).join('')}</div>
            </div>
            <div class="info-card">
                <div class="info-header"><i class="fas fa-tshirt"></i><h3>스타일링 팁</h3></div>
                <p>${data.styling}</p>
            </div>
            <div class="info-card">
                <div class="info-header"><i class="fas fa-magic"></i><h3>메이크업 팁</h3></div>
                <p>${data.makeup}</p>
            </div>
        `;

        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }

    function resetAll() {
        uploadArea.style.display = 'flex';
        imageDisplayArea.style.display = 'none';
        imagePreview.innerHTML = '';
        paletteOverlay.innerHTML = '';
        resultSection.classList.add('hidden');
        seasonalDescriptions.innerHTML = '';
        resetButton.classList.add('hidden');
        fileInput.value = '';
        const context = faceCanvas.getContext('2d');
        context.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 먼저 UI 이벤트 리스너 등록
    startApp();

    // 그 다음 face-api 모델 로딩 (실패해도 기본 기능은 작동)
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).catch(err => console.error('Models failed to load', err));
});
