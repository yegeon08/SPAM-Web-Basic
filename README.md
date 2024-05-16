# SPAM-Web-Basic

첫 번째 커밋이다~!

1. html css javascript  
   -글, 그림 html

   -디자인 css

   -기능 javascript

2. javascript library

   -library는 타인이 작성한 코드를 뜻함

3. npm -패키지 매니저,
   js 라이브러리 쉽게 설치 수정 삭제 가능

4. nodejs -브라우저 없이 아무데서나 자바스크립트 실행하게 함

5. bundling tool
   -js 파일들을 모두 하나로 합쳐줌, .js로 파일 변환시킴

6. build -번들링툴을 이용해서 js파일 하나로 합침 (빌드작업)

7. SPA -싱글 페이지 어플리케이션
   , 새로고침 없이 부드럽게 동작하는 사이트 만들 수 있음.
   단점은 수많은 변수 관리 어려움

8. state management
   -SPA에서 사용 중인 변수들을 관리함. 단점은 구글검색결과 노출 어렵고 첫페이지 로딩시간이 김

9. server side rendering
   -html을 서버에서 만들고 보내줌

10. meta-framework
    -js 하나로 간단한 서버 만들기 가능 + server side rendering도 가능

11. TypeScrit -자바는 타입 틀려서 버그 발생할 수 있지만 이를 방지하고 싶을 때 사용 문법은 자바와 동일

12. serverless -서버 역할을 대신 해주는 서비스

13. 결론 - 프론트 붐이 옴, 나중엔 프론트 백엔드 구분 없어질 수도 있음

# Markdown 기본 문법

## h2

### h3

#### h4

##### h5

###### h6

p태그

- 1번
- 2번
- 3번

```javascript
console.log("Hello World");
```

# JavaScript 공부

## 실행하는 방법

- app,js에서 comsole.log를 입력한다. 그 다음 ""사이에 원하는 말을 적고 html 파일에서 <bady> 바깥쪽에 <script></script>를 입력하고 app.js에서 입력한 것을 똑같이 쓴다. 저장 후에 라이브 서버를 열고 F12를 누르고 console에 들어가면 된다.

- node js를 설치한 뒤 vsc에서 새 터미널을 만들고 밑에 나온 터미널에서 cd js를 입력하고 엔터치고 node.app js를 치면 된다.

if문
if(조건){

}
else if(위 조건 아닌 다른 조건){

}
else{

}

let 변수 = a>19
if(변수){
console.log("");
}
else{
console.log("");
}

switch문
변수 선언
switch(변수){
case 1
console.log("");
break;
case 2
console.log("");
break;
case 3
console.log("");
break;
default
console.log("");
break;
}

compile
const PI = 3.14
console.log(PI == 3.14);
console.log(PI != 3.14);
console.log(PI >= 3.14);
console.log(PI <= 3.14);

console.log(3.14 == "3.14")
3.14 == "3.14" -> 똑같다

while
let i = 0;
while (i < 10) {
console.log(i);
i++;
if (i > 10) {
break;
}
}
변수가 어떤 값이 될 때까지 반복한다.

do_while
let i = 0;
do {
console.log(i);
i++;
} while (i > 10);
console.log(i);
조건문 전에 실행
한번은 실행한다

for
for (let i = 0; i < 10; i++) {
console.log(i);
}

for (let i = 2; i <= 9; i++) {
for (let j = 1; j <= 9; j++) {
console.log(`${i}*${j}=${i * j}`);
}
}

for (let i = 1; i <= 5; i++) {
for (let j = 1; j <= i; j++) {
console.log("\*");
}
}
괄호 안에 변수 선언, 언제까지 반복할지, 증감식을 쓴다.
for 안에 for를 쓰면 바깥쪽 for를 실행 한번 하고 안쪽 for를 모두 실행
바깥쪽 for 다할 때까지 반복
