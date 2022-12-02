/*
코드를 사용해 이벤트를 직접 생성하려면 먼저 이벤트 객체를 만들어야 합니다.

범용적으로 쓰이는 Event(name, options) 클래스의 생성자는 임의의 이벤트 이름과 두 개의 프로퍼티가 있는 options라는 객체를 받습니다.

bubbles: true 이면 이벤트는 버블링됩니다.
cancelable: true 이면 event.preventDefault()가 동작합니다.
이 외에 MouseEvent, KeyboardEvent 같은 네이티브 이벤트 클래스의 생성자들은 이벤트 특유의 프로퍼티를 받습니다. 마우스 이벤트의 clientX가 대표적인 예입니다.

이벤트를 직접 만드는 경우라면 CustomEvent 생성자를 써야 합니다. CustomEvent 생성자엔 detail이라는 추가 프로퍼티를 명시할 수 있는데, 여기에 이벤트 관련 정보를 저장해야 합니다. 이렇게 하면 모든 핸들러에서 event.detail을 통해 커스텀 이벤트의 정보를 알 수 있습니다.

커스텀 이벤트의 이름을 click나 keydown 같이 브라우저 내장 이벤트처럼 지을 수 있긴 한데, 이런 경우엔 아주 조심해야 합니다.

되도록이면 내장 이벤트와 같은 이름을 가진 브라우저 이벤트를 만들지 말도록 합시다. 대부분의 경우 설계 관점에서 아주 좋지 않은 영항을 끼치기 때문입니다.

그렇지만 이런 경우에는 브라우저 이벤트를 만드는게 불가피 하니, 사용해도 괜찮습니다.

서드파티 라이브러리가 제대로 동작하게 하려면 꼭 필요한 경우. 네이티브 이벤트를 만드는 것 이외에는 서드파티 라이브러리와 상호작용할 수 있는 수단이 없는 경우엔 괜찮습니다.
테스팅을 자동화 하려는 경우. '버튼 클릭’등의 이벤트를 사용자 동작 없이 코드만으로 유발시키고 제대로 동작하는지 그 결과를 확인하고자 할 때는 괜찮습니다.
네이티브 이벤트 이름과 겹치지 않게 커스텀 이벤트를 만드는 것은 설계 측면에서 자주 쓰이는 전략입니다. 커스텀 이벤트를 응용하면 메뉴나 사이드바, 캐러셀 등의 안에서 발생하는 일을 알려줄 수 있습니다.
*/