//// 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

const person1 = new Person("John", 19);
person1.describe();

//// 2

class Clock {
    constructor({ template }, timer) {
        this.timer = timer;
        this.template = template;

    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;


        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output)
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render()
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

//// 3

class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50
    }

    changeVolume(n) {
        this.volume =
            Math.floor(this.volume + n);
        if (this.volume > 100 || this.volume < 0) { this.volume = 50 };
        console.log(this);
    }

    changeChannel() {
        this.channel = Math.floor(Math.random() * 51);
        console.log(this);
    }

    resetTV() {
        this.volume = 50;
        this.channel = 1
        console.log(this);
    }
}

const Zenith = new TV("Zenith");
console.log(Zenith);
Zenith.changeChannel();
Zenith.resetTV()
Zenith.changeVolume(-50);
Zenith.changeVolume(100);


//// 4
class Cylinder {
    constructor(height, radius) {

        this.height = height;
        this.radius = radius;
        this.diameter = radius * 2;
        this.volume = (height * Math.PI * radius * radius).toFixed(4)
    }

    volume() { console.log((this.height * Math.PI * this.radius * this.radius).toFixed(4)); }

}

const cyl1 = new Cylinder(5, 5);
console.log(cyl1);
// cyl1.volume();