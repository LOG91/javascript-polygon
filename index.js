// 클로저를 이용하여 값을 카운트하던 전역변수와 실행된 함수의 이름을
// 담아주던 전역배열변수를 없앴다.
// 그리고 getPolygon이라는 함수의 클로저 스코프에 카운트 변수와 누적 배열 변수를 담아서 체크한다.

// 원의 넓이 구하기
function calculateCircle(radius, radius2) {
    if (isUndefined(radius2)) {
        let result = 0;
        if (!isNumber(radius)) return '숫자타입만 계산이 가능합니다';
        if (!isPositiveNumber(radius)) return '반지름은 0보다 커야 합니다';
        result = Math.round(radius * radius * Math.PI);
        return '원의 넓이 : ' + result;
    } else {
        let resultArr = [];
        if (!isNumber(radius, radius2)) return '숫자타입만 계산이 가능합니다';
        if (radius > radius2) return '시작 값이 종료 값보다 큽니다';
        for (var i = radius; i <= radius2; i++) {}
        return '원의 넓이 : ' + resultArr;
    }
}

// 사각형의 넓이 구하기
function calculateRect(width, height) {
    if (isUndefined(width, height)) return '밑변과 길이 둘 다 입력해야 합니다'
    if (!isNumber(width, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(width, height)) return '밑변과 길이는 0보다 커야 합니다';
    let result = width * height;
    return '사각형의 넓이 : ' + result;
}

// 사다리꼴 넓이 구하기
function calculateTrapezoid(top, bottom, height) {
    if (isUndefined(top, bottom, height)) return '3개의 인자가 필요합니다'
    if (!isNumber(top, bottom, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(top, bottom, height)) return '윗변, 아랫변, 높이는 0보다 커야 합니다';
    let result = (top + bottom) * height / 2
    return '사다리꼴의 넓이 : ' + result;
}

// 타입이 숫자인지 체크
function isNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (typeof arguments[i] !== 'number') return false;
    }
    return true;
}

// 숫자가 양수인지 체크
function isPositiveNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (arguments[i] <= 0) return false;
    }
    return true;
}

// 인자가 undefined인지 체크
function isUndefined() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'undefined') return true;
    }
    return false;
}

// 다각형 넓이 구하기
function getPolygon() {
    var fnCount = 0;
    let logCallFunc = []; // 함수 호출 로그 배열
    function cal(polygon, ...args) {
        if (polygon !== 'circle' && polygon !== 'rect' && polygon !== 'trapezoid') return '다각형값을 다시 입력하세요.'
        if (args.length < 1) return '최소 한 가지 값이 필요합니다'
        fnCount++;
        console.log('계산이 ' + fnCount + '번 일어났습니다.');
        logCallFunc.push(polygon);
        console.log(logCallFunc);
        switch (polygon) {
            case 'circle':
                return calculateCircle(args[0], args[1]);
                break;
            case 'rect':
                return calculateRect(args[0], args[1]);
                break;
            case 'trapezoid':
                return calculateTrapezoid(args[0], args[1], args[2])
                break;
        }

    }
    return cal;
}


var getArea = getPolygon();

console.log(getArea('circle', 1, 20));
console.log(getArea('circle', 3));
console.log(getArea('circle', 2));
console.log(getArea('rect', 2, 4));
console.log(getArea('trapezoid', 1, 4, 2));