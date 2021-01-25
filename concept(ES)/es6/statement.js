'use strict';
// es6 기능 : block scope function 선언
const sentences = [
    { subject: 'JavaSrcipt', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];

// es6 기능 : 객체 분해
function say({ subject, verb, object}) {

    // es6 기능 : 템플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱(`), 즉
    // 키보드의 Tab 키 바로 위에 있는 문자입니다.
    console.log(`${subject} ${verb} ${object}`);
}

// es6 기능 : for..of
for(let s of sentences) {

    say(s);
}