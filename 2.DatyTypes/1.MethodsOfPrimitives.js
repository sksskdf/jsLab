/*
'null’과 'undefined’를 제외한 원시값에 다양한 메서드를 호출할 수 있습니다. 이에 대해선 별도의 챕터에서 곧 알아보도록 하겠습니다.
원시값에 메서드를 호출하려 하면 임시 객체가 만들어집니다. 그런데 자바스크립트 엔진은 내부 최적화가 잘 되어있어 메서드를 호출해도 많은 리소스를 쓰지 않습니다.
*/

/**
 * null 과 undefined를 제외한 원시값에 다양한 메서드를 호출할 수 있다.
 * 원시값에 메서드를 호출하려 하면 임시 객체(원시 래퍼 객체)가 만들어진다.
 * 그런데 자바스크립트 내부 엔진은 최적화가 잘 되어 있어 메서드를 호출해도 많은 리소스를 쓰지 않는다.
 */

/**
 * 과제 : 문자열에 프로퍼티를 추가할 수 있을까?
 * 아래 코드를 읽어보자.
 */

 let str = "Hello";

 str.test = 5;
 
 console.log(str.test);

 /**
  * 아래 코드를 실행하면, 의도한 대로 문자열(str)에 프로퍼티(test)를 추가할 수 있을까?
  * 만약 가능하다면 콘솔 창엔 무엇이 출력될까?
  */

 /**
  * 답 : 일단 엄격모드이냐 비엄격모드이냐에 따라 결과는 달라진다.
  * 엄격모드에선 래퍼 객체를 수정하려 할 때 에러가 발생할 것 이고,
  * 비엄격모드에선 래퍼 객체의 프로퍼티가 추가가 되긴 되지만, 래퍼 객체는 바로 삭제되기 때문에 프로퍼티를 찾을 수 없다.
  */