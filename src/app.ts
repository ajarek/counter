class Counter {
  myValue: HTMLSpanElement;
  decreaseBtn: HTMLButtonElement;
  increaseBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  number: number;

  constructor(number: number) {
    this.number = number;
    this.myValue = document.querySelector("#value") as HTMLSpanElement;
    this.decreaseBtn = document.querySelector(".decrease") as HTMLButtonElement;
    this.increaseBtn = document.querySelector(".increase") as HTMLButtonElement;
    this.resetBtn = document.querySelector(".reset") as HTMLButtonElement;
  }

  increase() {
    this.number++;
  }

  decrease() {
    this.number--;
  }

  reset() {
    this.number = 0;
  }

  startCount() {
    return this.number;
  }

  run() {
    this.decreaseBtn.addEventListener("click", () => {
      this.decrease();
      this.checkSign()
      this.myValue.innerHTML = this.startCount().toString();
    });
    this.increaseBtn.addEventListener("click", () => {
      this.increase();
      this.checkSign()
      this.myValue.innerHTML = this.startCount().toString();
    });
    this.resetBtn.addEventListener("click", () => {
      this.reset();
      this.checkSign()
      this.myValue.innerHTML = this.startCount().toString();
    });
  }
  
  checkSign(){  
    if(this.number>0){this.myValue.style.color='green'}
    if(this.number<0){this.myValue.style.color='red'}
    if(this.number===0){this.myValue.style.color='#102a42'}
  }

  init() {
    this.myValue.innerHTML = "0";
    this.run();
  }
}
let counter = new Counter(0);
counter.init();


