/*
객체 지향 프로그래밍에선 내부 인터페이스와 외부 인터페이스를 구분하는 것을 [캡슐화(encapsulation)]라는 용어를 사용해 설명합니다.

캡슐화는 이점은 다음과 같습니다.

사용자가 자신의 발등을 찍지 않도록 보호
커피 머신를 함께 사용하는 개발팀이 있다고 상상해봅시다. "Best CoffeeMachine"이라는 회사에서 만든 이 커피 머신은 현재 잘 작동하고 있지만, 보호 커버가 없어서 내부 인터페이스가 노출되어있는 상황입니다.

교양있는 팀원들은 모두 설계 의도에 맞게 커피 머신을 사용합니다. 그런데 어느 날 John이라는 개발자가 자신의 능력을 과신하며 커피 머신 내부를 살짝 만지게 됩니다. 이틀 후, 커피 머신은 고장이 나버렸죠.

커피 머신이 고장 난 건 John의 잘못이라기보다는, 보호 커버를 없애고 John이 마음대로 조작하도록 내버려 둔 사람의 잘못입니다.

프로그래밍에서도 마찬가지입니다. 외부에서 의도치 않게 클래스를 조작하게 되면 그 결과는 예측할 수 없게 됩니다.

지원 가능
실제 개발 과정에서 일어나는 상황은 커피 머신 사례보다 훨씬 복잡합니다. 커피 머신은 한번 구매하면 끝이지만 실제 코드는 유지보수가 끊임없이 일어나기 때문입니다.

내부 인터페이스를 엄격하게 구분하면, 클래스 개발자들은 사용자에게 알리지 않고도 자유롭게 내부 프로퍼티와 메서드들을 수정할 수 있습니다.

내부 인터페이스가 엄격히 구분된 클래스를 만지고 있다면, 그 어떤 외부 코드도 내부 private 메서드에 의존하고 있지 않기 때문에 private 메서드의 이름을 안전하게 바꿀 수 있고, 매개변수를 변경하거나 없앨 수도 있다는 것을 알아 두면 됩니다.

사용자 입장에선 새로운 버전이 출시되면서 내부 정비가 전면적으로 이뤄졌더라도 외부 인터페이스만 똑같다면 업그레이드가 용이하다는 장점이 있습니다.

복잡성 은닉
사람들은 간단한 것을 좋아합니다. 내부는 간단치 않더라도 최소한 외형은 간단해야 하죠.

프로그래머들도 예외는 아닙니다.

구현 세부 사항이 숨겨져 있으면 간단하고 편리해집니다. 외부 인터페이스에 대한 설명도 문서화하기 쉬워지죠.

내부 인터페이스를 숨기려면 protected나 private 프로퍼티를 사용하면 됩니다.

protected 필드는 _로 시작합니다. _은 자바스크립트에서 지원하는 문법은 아니지만, protected 필드를 나타낼 때 관습처럼 사용됩니다. 개발자는 protected 프로퍼티가 정의된 클래스와 해당 클래스를 상속받는 클래스에서만 _가 붙은 필드에 접근해야 합니다.
private 필드는 #로 시작하며, 자바스크립트에서 지원하는 문법입니다. #로 시작하는 필드는 해당 필드가 정의된 클래스 내부에서만 접근 가능합니다.
모든 브라우저에서 private 필드를 지원하진 않지만 폴리필을 구현하여 사용할 수 있습니다.
*/

class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }

  getPower() {
    return this._power;
  }
}

class NewCoffeeMachine extends CoffeeMachine {
  constructor(power, waterAmount) {
    super(power);
    this.waterAmount = waterAmount;
  }

  setPower(power) {
    this._power = power;
  }
}

let coffeMachine = new CoffeeMachine(10);
console.log(coffeMachine.getPower());
console.log(coffeMachine._power);

let newCoffeeMachine = new NewCoffeeMachine(10, 100);
console.log(newCoffeeMachine.getPower());
newCoffeeMachine.setPower(20);
