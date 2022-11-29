/*
"..."은 나머지 매개변수나 스프레드 문법으로 사용할 수 있습니다.

나머지 매개변수와 스프레드 문법은 아래의 방법으로 구분할 수 있습니다.

...이 함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 '나머지 매개변수’입니다.
...이 함수 호출 시 사용되거나 기타 경우엔 배열을 목록으로 확장해주는 '스프레드 문법’입니다.
사용 패턴:

인수 개수에 제한이 없는 함수를 만들 때 나머지 매개변수를 사용합니다.
다수의 인수를 받는 함수에 배열을 전달할 때 스프레드 문법을 사용합니다.
둘을 함께 사용하면 매개변수 목록과 배열 간 전환을 쉽게 할 수 있습니다.

조금 오래된 방법이긴 하지만 arguments라는 반복 가능한(이터러블) 유사 배열 객체를 사용해도 인수 모두를 사용할 수 있습니다.
*/

let h = `Hello`;
console.log(h[0]);