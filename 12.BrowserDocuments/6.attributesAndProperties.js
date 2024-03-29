/*
속성 – HTML 안에 쓰임
프로퍼티 – DOM 객체 안에 쓰임

거의 모든 상황에서 속성보다는 프로퍼티를 사용하는 게 더 낫습니다. 다만 아래 사례같이 정확한 HTML 속성 값이 필요한 경우에는 프로퍼티가 적절치 않으므로 속성을 사용해야 합니다.

비표준 속성이 필요한 경우. 다만 속성이 data-로 시작하는 경우엔 dataset을 사용해야 합니다.
HTML에 적힌 값 '그대로’를 읽고 싶은 경우. href 프로퍼티에 항상 전체 URL이 저장되는 것 같이 DOM 프로퍼티의 값과 속성 값이 다른데, '원본’값을 얻고 싶은 경우엔 속성을 사용해야 합니다.
*/