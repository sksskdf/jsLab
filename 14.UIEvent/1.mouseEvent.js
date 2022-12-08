/*
마우스 이벤트는 다음과 같은 프로퍼티를 지원합니다.

버튼 관련: button

보조키 관련: altKey, ctrlKey, shiftKey와 MacOS 전용 metaKey. 해당 키를 누른 경우에 프로퍼티 값이 true가 됩니다.

Ctrl를 고려한 코드를 작성하고 있다면 MacOS 사용자는 주로 Cmd 키를 사용한다는 점을 고려해서 if (e.metaKey || e.ctrlKey)같이 모든 사용자를 지원할 수 있도록 코드를 작성해야 합니다.
클라이언트 좌표 관련: clientX, clientY

페이지 좌표 관련: pageX, pageY

mousedown 이벤트가 발생하면 브라우저 기본 동작 때문에 글자가 선택됩니다. 이런 기본 동작이 사용자 경험을 해친다면 기본동작을 막아서 문제를 해결할 수 있습니다.

다음 챕터에선 포인터(커서)가 움직일 때 발생하는 이벤트와 포인터가 움직일 때 포인터 아래에 있는 요소들을 어떻게 추적할 수 있는지에 대해 자세히 다루겠습니다.
*/