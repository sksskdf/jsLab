/*
문자 클래스에는 다음 클래스들이 있습니다.

\d – 숫자
\D – 숫자가 아닌 문자
\s – 스페이스, 탭, 줄 바꿈 문자
\S – \s를 제외한 모든 문자
\w – 라틴 문자, 숫자, 밑줄 '_'
\W – \w를 제외한 모든 문자
. – 정규 표현식 's' 플래그가 있으면 모든 문자, 없으면 줄 바꿈 \n을 제외한 모든 문자
하지만 이게 전부가 아닙니다!

자바스크립트에서 문자열에 사용하는 유니코드 인코딩은 문자에 여러 프로퍼티를 제공합니다. 어떤 언어에 속하는 글자인지 또는 글자가 아닌 구두점인지 알려주는 프로퍼티처럼요.

이런 프로퍼티를 기준으로 문자를 찾을 수도 있습니다. u 플래그를 사용하면 되는데요. 다음 글에서 알아보도록 하죠.
*/

let str = "+7(903)-123-45-67";
let reg = /\d/g;

console.log(str.match(reg).join(""));

let str2 = "a skdn qwk nqwldnqwlk nqwkd wkww    wdkw k  d";
let reg2 = /\s/g;
let res = str2.replace(reg2, "");
console.log(res);