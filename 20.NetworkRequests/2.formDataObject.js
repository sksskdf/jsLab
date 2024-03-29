/*
FormData 객체는 fetch 등의 네트워크 메서드를 통해 HTML 폼을 보내는데 사용됩니다.

FormData 객체는 HTML 폼(form)을 직접 넘겨 new FormData(form)으로 만들 수도 있고, HTML 폼 없이 다음과 같은 메서드로 필드를 추가해 만들 수도 있습니다.

formData.append(name, value)
formData.append(name, blob, fileName)
formData.set(name, value)
formData.set(name, blob, fileName)
메서드를 사용할 때 주의할 점 2가지가 있습니다.

set 메서드는 name이 같은 필드 모두를 지우고 append는 그렇지 않습니다. 다른 차이는 없습니다.
파일을 보낼 땐 세 번째 인수가 필요한데 이 인수는 사용자 파일 시스템에서 지정한 파일명과 동일하게 지정됩니다.
이외에도 다음과 같은 메서드가 있습니다

formData.delete(name)
formData.get(name)
formData.has(name)
다룰 내용은 여기까지입니다!
*/
