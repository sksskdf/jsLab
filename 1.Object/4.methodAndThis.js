/*
객체 프로퍼티에 저장된 함수를 '메서드’라고 부릅니다.
object.doSomthing()은 객체를 '행동’할 수 있게 해줍니다.
메서드는 this로 객체를 참조합니다.
this 값은 런타임에 결정됩니다.

함수를 선언할 때 this를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 this엔 값이 할당되지 않습니다.
함수를 복사해 객체 간 전달할 수 있습니다.
함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조합니다.
화살표 함수는 자신만의 this를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 this를 사용하면, 외부에서 this 값을 가져옵니다.
*/

/**
 * 객체 프로퍼티에는 함수도 할당할 수 있다.
 */

const user = {
  name: "harry",
  sayHi: function () {
    console.log("Hi!");
  },
};

/**
 * 단축구문
 */
const user2 = {
  name: "harry",
  sayHi() {
    console.log("Hi!");
  },
};

let userInstance = user;
let userInstance2 = user2;
userInstance.sayHi();
userInstance2.sayHi();

/**
 * this는 현재 객체를 나타낸다.
 */
const user3 = {
  name: "harry",
  sayHi() {
    console.log("this is " + this.name);
  },
};

let userInstance3 = user3;
userInstance3.sayHi();

/**
 * this는 다른 프로그래밍 언어와는 달리 값이 런타임에 결정된다.
 * 동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값은 달라진다.
 */

let user4 = { name: "harry" };
let user5 = { name: "peter" };

function sayHi() {
  console.log(this.name);
}

user4.sayHi = sayHi;
user5.sayHi = sayHi;

user4.sayHi();
user5.sayHi();

user4["sayHi"](); //점과 동일하게 동작함.

/**
 * 1. 객체 리터럴에서 'this' 사용하기
 * 함수 makeUser는 객체를 반환한다.
 * 이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까?
 */

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user5 = makeUser();

console.log(user5.ref);

/**
 * this는 메서드(객체의 프로퍼티함수)로써 호출되어야 객체를 참조한다.
 * @returns
 */
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user6 = makeUser();

alert(user6.ref().name); // John

/**
 * 2. 계산기 만들기
 * calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.
    read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
    sum()은 저장된 두 값의 합을 반환합니다.
    mul()은 저장된 두 값의 곱을 반환합니다.
 */

let calculator = {
  // ... 여기에 답안 작성 ...
  read() {
    this.value1 = prompt();
    this.value2 = prompt();
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
