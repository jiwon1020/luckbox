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
    const seasonScores = document.getElementById('season-scores');
    const scoreList = document.getElementById('score-list');
    const seasonalDescriptions = document.getElementById('seasonal-descriptions');
    const resetButton = document.getElementById('reset-button');
    const loadingOverlay = document.getElementById('loading-overlay');
    const debugInfo = document.getElementById('debug-info');
    const debugContent = document.getElementById('debug-content');

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
            loadingOverlay.classList.remove('hidden'); // Show loading

            // face-api로 얼굴 감지
            try {
                const displaySize = { width: img.width, height: img.height };
                faceapi.matchDimensions(faceCanvas, displaySize);

                const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();

                if (detections.length === 0) {
                    alert('얼굴을 감지할 수 없습니다. 정면 얼굴 사진을 업로드해주세요.');
                    resetAll();
                    return;
                }

                if (detections.length > 1) {
                    alert('한 명의 얼굴만 있는 사진을 업로드해주세요.');
                    resetAll();
                    return;
                }

                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                const context = faceCanvas.getContext('2d');
                context.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
                faceapi.draw.drawDetections(faceCanvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(faceCanvas, resizedDetections);

                // 얼굴 영역에서 피부색 추출 (faceCanvas에 점 찍기 위해 context 전달)
                const detection = detections[0];
                const skinColor = extractSkinColor(img, detection, faceCanvas); // Pass faceCanvas for Visual Debugging

                // 피부색 기반 퍼스널컬러 분석
                const analysis = analyzePersonalColor(skinColor);
                loadingOverlay.classList.add('hidden');
                displayResult(analysis.season, personalColors[analysis.season], analysis.debug, analysis.scores);

            } catch (err) {
                console.error('Face detection failed:', err);
                alert('얼굴 분석에 실패했습니다. 다른 사진을 시도해주세요.');
                resetAll();
            }
        };
        img.src = imgUrl;
    }

    // 얼굴 랜드마크에서 피부색 추출
    function extractSkinColor(img, detection, visualCanvas) {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const landmarks = detection.landmarks;
        const positions = landmarks.positions;

        // 볼 영역 추출 (왼쪽 볼, 오른쪽 볼)
        // 랜드마크: 1-4 (왼쪽 턱 라인), 12-15 (오른쪽 턱 라인)
        // 이마 영역: 눈썹 위
        const leftCheek = positions[2];  // 왼쪽 볼
        const rightCheek = positions[14]; // 오른쪽 볼
        const nose = positions[30]; // 코 끝

        // 이마 영역 (눈썹 중간 위)
        const leftEyebrow = positions[19];
        const rightEyebrow = positions[24];
        const foreheadX = (leftEyebrow.x + rightEyebrow.x) / 2;
        const foreheadY = leftEyebrow.y - 30;

        // 샘플 포인트에서 색상 추출
        const samplePoints = [
            { x: leftCheek.x, y: leftCheek.y },
            { x: rightCheek.x, y: rightCheek.y },
            { x: foreheadX, y: foreheadY },
            { x: nose.x - 15, y: nose.y - 20 }, // 코 옆 왼쪽
            { x: nose.x + 15, y: nose.y - 20 }, // 코 옆 오른쪽
        ];

        let totalR = 0, totalG = 0, totalB = 0;
        let validSamples = 0;

        samplePoints.forEach(point => {
            const x = Math.round(point.x);
            const y = Math.round(point.y);

            if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
                // 5x5 영역의 평균 색상 추출
                const imageData = ctx.getImageData(Math.max(0, x - 2), Math.max(0, y - 2), 5, 5);
                const data = imageData.data;

                let r = 0, g = 0, b = 0, count = 0;
                for (let i = 0; i < data.length; i += 4) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }

                totalR += r / count;
                totalG += g / count;
                totalB += b / count;
                validSamples++;
            }
        });

        // Visual Debugging: Draw sample points on the face canvas
        if (visualCanvas) {
            const vCtx = visualCanvas.getContext('2d');
            // Scale factor if faceCanvas is displayed at different size than natual img?
            // faceCanvas size is matched to displaySize (which is natural img size in current logic or scaled CSS?)
            // We matched dimensions earlier: faceapi.matchDimensions(faceCanvas, displaySize);
            // displaySize was { width: img.width, height: img.height }

            samplePoints.forEach(point => {
                vCtx.beginPath();
                vCtx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
                vCtx.fillStyle = '#00FF00'; // Green dot
                vCtx.fill();
                vCtx.strokeStyle = 'white';
                vCtx.stroke();
            });
        }

        // Check if we have valid samples
        if (validSamples === 0) {
            console.warn('No valid skin samples found within canvas bounds.');
            // Fallback: return default or try center of image
            return { r: 128, g: 128, b: 128 }; // Default Grey
        }

        return {
            r: totalR / validSamples,
            g: totalG / validSamples,
            b: totalB / validSamples
        };
    }

    // RGB를 Lab 색 공간으로 변환 (더 정확한 색상 분석을 위해)
    function rgbToLab(r, g, b) {
        // RGB to XYZ
        r = r / 255;
        g = g / 255;
        b = b / 255;

        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

        let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
        let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
        let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

        x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + 16 / 116;
        y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + 16 / 116;
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + 16 / 116;

        return {
            L: (116 * y) - 16,  // 밝기 (0-100)
            a: 500 * (x - y),   // 녹색-빨간색 (-128 ~ 128)
            b: 200 * (y - z)    // 파란색-노란색 (-128 ~ 128)
        };
    }

    // 피부색 기반 퍼스널컬러 분석
    function analyzePersonalColor(skinColor) {
        // Validation for NaN
        if (isNaN(skinColor.r) || isNaN(skinColor.g) || isNaN(skinColor.b)) {
            console.error('Invalid Skin Color:', skinColor);
            skinColor = { r: 128, g: 128, b: 128 };
        }

        const lab = rgbToLab(skinColor.r, skinColor.g, skinColor.b);

        // 로직 개선
        // Warm vs Cool:
        // b (Yellow-Blue Axis): 높은 값일수록 웜(Yellow), 낮은 값일수록 쿨(Blue)
        // a (red-green axis): 홍조.
        // 단순히 b > 10은 너무 낮을 수 있음. b와 a의 비율도 고려하거나 b Threshold를 높임.

        // 1. 웜/쿨 판단
        // b가 20 이상이면 확실히 웜. 10 이하면 쿨. 그 사이는 a값과의 관계로 판단.
        // 또는 b > a * 1.2 등 (옐로우가 레드보다 훨씬 강함)

        let isWarm = false;
        let warmScore = 0; // 디버깅용 점수

        // Heuristic 1: Absolute b value
        if (lab.b > 18) {
            isWarm = true;
            warmScore += 2;
        } else if (lab.b < 12) {
            isWarm = false;
            warmScore -= 2;
        } else {
            // Heuristic 2: Relative to a
            // 웜톤은 옐로우 베이스(b)가 레드(a)보다 강한 경향
            if (lab.b > lab.a) {
                isWarm = true;
                warmScore += 1;
            } else {
                isWarm = false;
                warmScore -= 1;
            }
        }

        // 2. 계절 판단 (명도/채도)
        // L > 65: Light (봄/여름)
        // L <= 65: Deep/Dark (가을/겨울)
        const isBright = lab.L > 64;

        // 결과 결정
        let season = '';
        if (isWarm) {
            season = isBright ? '봄 웜톤' : '가을 웜톤';
        } else {
            season = isBright ? '여름 쿨톤' : '겨울 쿨톤';
        }

        // 3. 점수 계산 로직 추가
        // 각 계절별 대표 Centroid (이상적인 L, a, b 값) 정의 - 간략화된 모델
        // 봄:  L=70, a=20, b=25
        // 여름: L=70, a=10, b=-5
        // 가을: L=50, a=20, b=25
        // 겨울: L=40, a=10, b=-5
        // 실제로는 더 복잡하지만, 여기서는 상대적인 거리로 점수화

        const centroids = {
            '봄 웜톤': { L: 72, a: 18, b: 22 },
            '여름 쿨톤': { L: 72, a: 12, b: -2 },
            '가을 웜톤': { L: 55, a: 18, b: 22 },
            '겨울 쿨톤': { L: 45, a: 12, b: -2 }
        };

        let scores = {};
        let totalScore = 0;

        for (const [season, center] of Object.entries(centroids)) {
            // 유클리드 거리 계산
            const L = isNaN(lab.L) ? 50 : lab.L;
            const a = isNaN(lab.a) ? 0 : lab.a;
            const b = isNaN(lab.b) ? 0 : lab.b;

            const dist = Math.sqrt(
                Math.pow(L - center.L, 2) +
                Math.pow(a - center.a, 2) +
                Math.pow(b - center.b, 2)
            );
            // 거리가 가까울수록 높은 점수 (역수 이용)
            scores[season] = 1 / (dist + 1); // +1 to avoid division by zero
            totalScore += scores[season];
        }

        if (isNaN(totalScore) || totalScore === 0) totalScore = 1; // Prevent division by zero

        // 백분율 정규화 및 정렬
        const sortedScores = Object.entries(scores)
            .map(([season, score]) => {
                let percent = (score / totalScore) * 100;
                if (isNaN(percent)) percent = 0;
                return { season, percent: Math.round(percent) };
            })
            .sort((a, b) => b.percent - a.percent);

        // 가장 높은 점수의 계절을 최종 결과로 선택 (기존 로직과 병행하거나 대체 가능)
        // 여기서는 기존 로직으로 season을 먼저 구하고, 점수는 참고용으로 보여줌 
        // 혹은 점수 기반으로 덮어쓸 수도 있음. 점수가 더 세밀하므로 덮어쓰기 시도.
        season = sortedScores[0].season;

        return {
            season: season,
            debug: { isWarm, isBright, lab, rgb: skinColor, warmScore },
            scores: sortedScores
        };
    }

    function displayResult(season, data, debugData, scores) {
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

        // Show Scores
        if (scores) {
            seasonScores.classList.remove('hidden');
            scoreList.innerHTML = '';
            scores.forEach(s => {
                const item = document.createElement('div');
                item.className = 'score-item';
                // Highlight the winner
                const isWinner = s.season === season ? 'winner' : '';
                item.innerHTML = `
                    <div class="score-label">
                        <span class="${isWinner}">${s.season}</span>
                        <span class="score-percent">${s.percent}%</span>
                    </div>
                    <div class="score-bar-bg">
                        <div class="score-bar-fill ${isWinner}" style="width: ${s.percent}%"></div>
                    </div>
                `;
                scoreList.appendChild(item);
            });
        }

        // Show Debug Info
        debugInfo.style.display = 'block';
        if (debugData) {
            const { lab, rgb, isWarm, isBright, warmScore } = debugData;
            debugContent.innerHTML = `
                <p><strong>RGB:</strong> R=${Math.round(rgb.r)}, G=${Math.round(rgb.g)}, B=${Math.round(rgb.b)}</p>
                <p><strong>Lab:</strong> L=${lab.L.toFixed(2)}, a=${lab.a.toFixed(2)}, b=${lab.b.toFixed(2)}</p>
                <p><strong>판단 기준:</strong></p>
                <ul>
                    <li>Warm/Cool(b): ${lab.b.toFixed(2)} (${isWarm ? 'Warm' : 'Cool'}) [Score: ${warmScore}]</li>
                    <li>Bright/Dark(L): ${lab.L.toFixed(2)} (${isBright ? 'Bright' : 'Dark'})</li>
                </ul>
            `;
        }

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
        loadingOverlay.classList.add('hidden');
        seasonScores.classList.add('hidden');
        debugInfo.style.display = 'none';
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
