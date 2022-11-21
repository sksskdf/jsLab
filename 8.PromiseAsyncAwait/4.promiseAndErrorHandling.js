/**
 * .catch 는 프라미스에서 발생한 모든 에러를 다룹니다. reject()가 호출되거나 에러가 던져지면 .catch에서 이를 처리합니다.
.catch는 에러를 처리하고 싶은 지점에 정확히 위치시켜야 합니다. 물론 어떻게 에러를 처리할지 알고 있어야 하죠. 핸들러에선 에러를 분석하고(커스텀 에러 클래스가 이때 도움이 됩니다) 
알 수 없는 에러(프로그래밍 실수로 발생한 에러일 확률이 높습니다)는 다시 던질 수 있습니다.
에러 발생 시, 회복할 방법이 없다면 .catch를 사용하지 않아도 괜찮습니다.
unhandledrejection 이벤트 핸들러를 사용해 처리되지 않은 에러를 추적하고, 이를 사용자(혹은 서버에)에게 알려서 애플리케이션이 아무런 설명도 없이 ‘그냥 죽는걸’ 방지합시다. 
브라우저 환경에선 예방에 unhandledrejection을, 다른 환경에선 유사한 핸들러를 사용할 수 있습니다.
 */

/**
 * setTimeout에서의 에러
아래 예시에서 .catch가 트리거 될까요? 이유와 함께 .catch가 트리거 될지 안 될지를 맞춰보세요.
 */

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  }, 1000);
}).catch(alert);
