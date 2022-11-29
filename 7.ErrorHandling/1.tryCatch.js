/*
try..catch를 이용하면 런타임 에러를 처리할 수 있습니다. try에선 코드를 실행하고, 에러가 발생하면 catch에서 잡아냅니다.

문법은 다음과 같습니다.

try {
  // 이곳의 코드를 실행
} catch(err) {
  // 에러가 발생하면, 여기부터 실행됨
  // err는 에러 객체
} finally {
  // 에러 발생 여부와 상관없이 try/catch 이후에 실행됨
}
try..catch, try..catch..finally이외에도 try..finally를 사용할 수 있습니다.

에러 객체엔 다음과 같은 프로퍼티가 있습니다.

message – 사람이 읽을 수 있는 형태의 에러 메시지
name – 에러 이름을 담은 문자열 (에러 생성자 이름)
stack – 표준이 아니지만 대부분의 호스트 환경이 지원하는 프로퍼티로 에러가 발생한 순간의 스택을 나타냄
에러 객체가 필요 없으면 catch(err) { 대신 catch {를 쓸 수 있습니다.

throw 연산자를 사용하면 에러를 직접 만들 수 있습니다. 이론상으론, throw 인수에 모든 것을 넘길 수 있지만, 대개 내장 Error 클래스를 상속받은 에러 객체를 인수에 넘깁니다. 에러 상속에 대해선 다음 챕터에서 다룰 예정입니다.

다시 던지기는 에러 처리 시 사용되는 중요한 패턴입니다. catch 블록에선 대개 예상하였거나 어떻게 다룰지 알고 있는 에러를 다루고, 예상치 못한 에러는 다시 던지기 합니다.

try..catch가 없어도 대부분의 호스트 환경이 ‘전역’ 에러 핸들러를 지원하기 때문에 ‘떨어져 나온’ 에러를 잡을 수 있습니다. window.onerror는 브라우저 환경의 전역 에러 핸들러입니다.
*/

/*
finally 아니면 코드만?
중요도: 5
두 코드 조각을 비교해보세요.

첫 번째 코드 조각은 try..catch 이후에 코드를 실행하기 위해 finally를 사용하였습니다.

try {
  작업
} catch (e) {
  에러 핸들링
} finally {
  작업 내역 삭제
}
두 번째 코드 조각에선 try..catch 바로 아래에 작업 내역을 삭제하는 코드를 놓았습니다.

try {
  작업
} catch (e) {
  에러 핸들링
}

작업 내역 삭제
현재 상황은 에러의 유무와 상관없이, 작업 후 초기화를 해야합니다.

finally를 사용하면 이점이 있을까요? 아니면 두 코드 조각은 동일하게 동작할까요? 만약 이점이 있다면, 이점이 드러나는 예시를 제시해 주세요.
*/

/*
차이점은 함수 내부의 코드를 보면 분명해집니다.

try..catch에 ‘빠져나오게 하는’ 코드가 있다면 함수의 행동이 달라집니다.

아래 예시와 같이 try..catch 내부에 return이 있을 때가 대표적인 예입니다. finally 절은 return문을 통해 try..catch를 빠져나가는 경우를 포함하여 try..catch가 종료되는 모든 상황에서 실행됩니다. try..catch가 종료되었지만, 함수 호출 코드가 제어권을 갖기 직전에 실행되죠.

function f() {
  try {
    alert('시작');
    return "결과";
  } catch (e) {
    /// ...
  } finally {
    alert('초기화!');
  }
}

f(); // cleanup!
또는, 아래와 같이 throw가 있어도 함수의 행동이 달라집니다.

function f() {
  try {
    alert('시작');
    throw new Error("에러 발생!");
  } catch (e) {
    // ...
    if("에러를 핸들링 할 수 없다면") {
      throw e;
    }

  } finally {
    alert('초기화!')
  }
}

f(); // cleanup!
이렇게 finally 절을 붙여줘야 초기화가 보장됩니다. 작업 내역을 초기화해주는 코드를 단순히 f의 끝에 붙였다면, 위와 같은 상황일 때 초기화 코드가 실행되지 않습니다.
*/