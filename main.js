/* 
미술관 티켓 가격을 계산해 주는 함수
*/

/* 카멜 케이스(Camel Case) 단어 중간중간을 대문자로 구분하는 방법을 사용 */
function ticketPrice(standard, student) {  /* , 대신 중괄호{}를 사용한다 */
  let standardPrice = 15000;               /* 변수를 지정해 줄 때는 let 을 사용한다 */
  let studentPrice = 8000;

  let totalPrice = standard * standardPrice + student * studentPrice;

  return totalPrice;
}

console.log(ticketPrice(3, 0));
console.log(ticketPrice(2, 1));

/* 자바스크립트에서는 버림 나눗셈이 존재하지 않는다 */

let korean = [
  '가',
  '나',
  '다',
  '라',
  '마'
]

korean.push('바');
korean.splice(0, 0, '감');

console.log(korean);

// date //

let myDate = new Date();

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
fruits.splice(1, 1, '사과','청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요
fruits.splice(0, 1);


// ages 배열에 마지막 요소를 삭제해 주세요
ages.splice(ages.length - 1, 1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2, 2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for (let i=0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }
  
}

console.log(numbers);
//배열의 첫 요소를 삭제
numbers.shift();
console.log(numbers);
//배열의 마지막 요소를 삭제
numbers.pop();
console.log(numbers);
//배열의 첫 요소의 값을 추가
numbers.unshift(5);
console.log(numbers);
//배열의 마지막 요소의 값을 추가
numbers.push(26);
console.log(numbers);

//지수 표기법
let mynumber = 1e9;
let millionare = 1000000000;

console.log(mynumber === millionare);
console.log(1.e-5 === 0.00001);

console.log(77000 % 50000);


// id로 태그 선택하기 //

const myTag = document.getElementById('mynumber'); // 존재하지 않는 id 태그를 선택했을 경우 null 값이 출력된다
console.log(myTag);

// class로 태그 선택하기 //

const myTags = document.getElementsByClassName('myclass'); // 존재하지 않는 class 태그를 선택했을 경우 undefined 값이 출력된다
console.log(myTags);
console.log(myTags[1]);
console.log(myTags.length);

for (key of myTags) {
  console.log(key);
}

// for of 문이나 프로퍼티를 사용할 수 있다는 점에서 //
// 유사배열이라고 불림, 메소드는 사용할 수 없다 //

// css 선택자로 태그 선택하기 //

const myTags2 = document.querySelectorAll('.myclass'); //querySelector를 사용할 경우, 첫 번째 태그만 불러오게 됨 //
console.log(myTags2);

// 이벤트와 버튼 클릭 //

const btn = document.querySelector('.my-btn');

// 이벤트 핸들링(event handling) //
btn.onclick = function () { // 이벤트 핸들러(event handler) //
  console.log('내가 click!버튼을 누른 횟수');
}

const alarm = document.querySelector('.alarm-btn');

alarm.onclick = function () {
  alert('알림 버튼을 눌렀을 때');
}

// DOM(Document Object Model) //

console.log(document);
console.log('--------------------');
// 객체 속성을 확인할 경우 메소드를 log 대신 dir 을 사용 //
console.dir(document);
console.log('--------------------');
// Dom 트리 //

const myContent = document.querySelector('#list-1');

console.log(myContent);
console.log('--------------------');

// 자식 요소 노드에 접근하는 법 //
console.log(myContent.children);

console.log(myContent.children[1]);

console.log(myContent.firstElementChild);
console.log(myContent.lastElementChild);
console.log('--------------------');
// 부모 요소 노드에 접근하는 법 //

console.log(myContent.parentElement);

// 형제 요소 노드에 접근하는 법 //
console.log('--------------------');
console.log(myContent.previousElementSibling);
console.log(myContent.nextElementSibling);
console.log('--------------------');

// 다양한 방식으로 접근할 수도 있다 //

console.log(myContent.parentElement.nextElementSibling);

// 요소 노드 프로퍼티 //

// 요소를 태그 포함해서 전체 출력 //
console.log('innerHTML');
console.log(myContent.innerHTML);
// myContent.innerHTML += '<li>tiger</li>'; // 새로운 요소를 추가하는 데 사용 할 수 있다 //

// 부모 태그가 시작되는 부분 부터 끝나는 부분 까지 출력 //
// outerHTML을 사용해 내용을 변경해 주었을 경우, 전에 있던 내용이 모두 삭제된다 //
console.log('outerHTML');
console.log(myContent.outerHTML);

// 요소를 태그 없이 내용만 출력 //
// 문자열 그대로 화면에 입력되게 추가할 수 있다 //
console.log('textContent');
console.log(myContent.textContent);
// myContent.textContent = '<li>giraff</li>'; 웹 페이지에 <li>giraff</li>이 그대로 출력된다 //


// 요소 노드를 추가하기 //
const mySports = document.querySelector('#list-2');

// 1. 요소 노드 만들기 : documnet.createElement('태그이름') //
const first = document.createElement('li');

// 2. 요소 노드 꾸미기 : textContent, innerHTML, .. //
first.textContent = 'golf';

// 3. 요소 노드 추가하기 : NODE.prepend, append, after, before .. //
mySports.prepend(first);

const last = document.createElement('li');

last.textContent = 'swimming';
mySports.append(last);

const prev = document.createElement('p');
prev.textContent = '앞';
mySports.before(prev);

const end = document.createElement('p');
end.textContent = '뒤';
mySports.after(end);

// 노드 삭제와 이동하기 //
// 노드 삭제 : remove 를 이용하기 //


// 노드 이동 : prepend, append, before, after 이용하기 //
// 인덱스 중간으로 이동하고 싶은 경우에는 before 나 after 로 위치를 지정해준다 //

// HTML 속성에 접근하는 방법 //

// const myContent = document.querySelector('#list-1'); //
const item = myContent.firstElementChild;
const link = item.firstElementChild;
console.log(item);
console.log(link);

// element.getAttribute('속성'): 속성에 접근하기 //
console.log(link.getAttribute('href'));
console.log(myContent.getAttribute('id'));

// element.setAttribute('속성', '값'): 속성과 값을 추가하거나 수정하기 //
link.setAttribute('class','animal'); // 추가
link.setAttribute('href', 'https://arca.live/') // 수정

// element.removeAttribute('속성'): 속성을 제거하기 //
link.removeAttribute('class');
link.removeAttribute('href');


// 스타일 다루기 //

// const myContent = document.querySelector('#list-1'); //
const myContent2 = document.querySelector('#list-2');

// element.classList : add, remove, toggle
// add는 클래스를 추가하는 역할, remove는 클래스를 삭제하는 역할 //
// toggle은 클래스가 존재할 경우 삭제, 존재하지 않을 경우 추가하는 역할 //
console.log(myContent.classList);
console.log(myContent.children[1].classList);
myContent.children[1].classList.add('done','other');
myContent.children[1].classList.remove('other');
myContent.children[1].classList.toggle('done');
// element.className //

myContent.children[3].className = 'done';

// 스타일 프로퍼티 //

myContent.children[0].style.textDecoration = 'line-through';
myContent.children[0].style.backgroundColor = 'skyblue';

// 이벤트 핸들러 등록하기 //

// const btn = document.querySelector('.my-btn'); //
// onclick을 사용하는 것 보다 권장 되는 방법인 //
// element.addEventListener(event, handler) 를 사용한다 //

function event1() {
  console.log('click! 버튼을 눌렀을 때');
}

function event2() {
  console.log('click! 버튼을 눌러 보았을 때');
}

btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// element.removeEventListener(event, handler) 이벤트 핸들러 삭제하기 //
// 이벤트 핸들러는 외부에 함수를 만든 후에 사용하는 것이 삭제할 때에도 용이하다 //

btn.removeEventListener('click', event1);
btn.removeEventListener('click', event2);


// 이벤트 객체 //

const myInput = document.querySelector('#my-input');
// const btn = document.querySelector('.my-btn'); //

function printEvent (event) {
  console.log(event);
}

btn.addEventListener('click', printEvent);
myInput.addEventListener('keydown', printEvent);

// 이벤트 버블링 //
// 어떠한 이벤트 핸들러가 동작했을 경우, 동작 후에 부모 요소에 //
// 이벤트 핸들러가 동작하는 것을 반복하여 window 객체를 만날 때 까지 반복됨 //
// element.currentTarget 으로 이벤트가 발생한 요소에 접근할 수 있다.
// 버블링을 멈추고 싶은 경우 element.stopPropagation(); 을 추가해 주면 된다 //

// 반대로 위에서 부터 안쪽으로 반복 되는 경우는 캡처링이라고 한다 //

// 이벤트 위임 (Event Delegation) //
// 자식 요소의 이벤트 핸들러를 부모에 지정해 주어 동작하게 한다 //

const list3 = document.querySelector('#list-3');

// for (let tem of list3.children) {
//   tem.addEventListener('click', function(e) {
//     e.target.classList.toggle('done');
//   })
// }

// 위와 같이 이벤트 핸들러를 추가했을 경우, 새로운 요소가 추가로 //
// 등록되면 새로운 요소에는 이벤트 핸들러가 작동하지 않는다. //

const li =  document.createElement('li');
li.classList.add('item');
li.textContent = 'foxtrot';
list3.append(li);

list3.addEventListener('click', function(e) {

  // if (e.target.tagName === 'LI') 우리가 원하는 요소에만 동작을 실행하기 위해 if 문울 사용 //
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('done');
  }
});


// element.preventDefault 를 사용하여 브라우저가 기본으로 작동하는 
// 이벤트 핸들러를 막을 수 있다

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('마우스 우클릭을 사용할 수 없습니다.');
}); // 문서 전체에 마우스 우클릭으로 메뉴 호출하는 기능을 막는다 //

// 마우스 버튼 이벤트 //
//  > MouseEvent.button
/**
 * 0: 마우스 왼쪽 버튼
 * 1: 마우스 휠
 * 2: 마우스 오른쪽 버튼
 * 
 *  > Mouse.Event.type
 * click: 마우스 왼쪽 버튼을 눌렀을 때
 * contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
 * dbclick: 동일한 위치에서 빠르게 두 번 클릭할 때
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때
 * 
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창 기준 마우스 포인터 위치
 * 
 * > MouseEvent.pageX, pageY
 * : 웝 문서 전체 페이지 기준 마우스 포인터 위치
 * 
 * > MouseEvent.offsetX, offsetY
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 */

const box1 = document.querySelector('#box1');

function onMouseMove (e) {
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('--------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);

/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 움직일 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 움직일 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 움직일 때 
 * 
 * > MouseEvent.target
 * : 이벤트가 발생한 요소
 * 
 * > MouseEvent.relatedTarget
 * : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 */

const box2 = document.querySelector('#box2');

function printEventData(e) {
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('------------------------------------');
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on');
  }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);

/**
 *  키보드 이벤트
 * 
 *  > KeyboardEvent.type
 *  keydown: 키보드 버튼을 누른 순간
 *  keypress: 키보드 버튼을 누른 순간 (keypress는 권장되지 않는다)
 *  keyup: 키보드 버튼을 눌렀다 뗀 순간
 * 
 *  > KeyboardEvent.key
 *  : 이벤트가 발생한 버튼의 값
 * 
 *  > KeyboardEvent.code
 *  : 이벤트가 발생한 버튼의 키보드에서의 물리적인 위치
 */

/**
 *  input 태그 다루기
 * 
 * >  포커스 이벤트
 * focusin : 요소에 포커스가 된 순간
 * focusout : 요소에서 포커스가 빠져나간 순간
 * focus : focusin 과 같으나 버블링 x
 * blur : focusout 과 같으나 버블링 x
 * 
 * > 입력 이벤트
 * input : 사용자가 입력하는 순간
 * change : 요소의 값이 변했을 때 
 * (사용자가 input에 입력을 마치고 다른 요소로 넘어간 순간,
 * 컴퓨터는 입력을 완료했다고 계산하여 focusout 이전에 change를 출력한다)
 */