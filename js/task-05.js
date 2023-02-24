class Car { 
     /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
    static getSpecs(car) {
    
        console.log(`maxSpeed: ${car.maxSpeed}. speed: ${car.speed}. isOn: ${car.isOn}. distance: ${car.distance}, price: ${car.price}`);


    }

    constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;

    }

    get price() {
        // console.log(this._price);
        return this._price;
    }

    set price(value) {
        // console.log(`New price is ${value}`);
        return this._price = value;
    }
    
    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        let currentSpeed = this.speed + value;
        currentSpeed > this.maxSpeed ? this.speed = this.maxSpeed : this.speed = currentSpeed;

    }

     decelerate(value) {
        let currentSpeed = this.speed - value;
        currentSpeed < 0 ? this.speed = 0 : this.speed = currentSpeed;

    }

    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
        }
    }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000