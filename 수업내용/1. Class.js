// // 배열 구조 분해 할당 (순서 중요)
// let lists = ['apple', 'grape'];
// [item1, item2, item3 = 'peach'] = lists;

// console.log(item1); // apple
// console.log(item2); // grape
// console.log(item3); // peach


// // 객체 구조 분해 할당 (순서 상관 없음)
// let obj = {
//     key1: 'one',
//     key2: 'two'
// };
// let { key1, newKey1, key2, key3 = 'three' } = obj;
// console.log(key1);
// console.log(newKey1);
// console.log(key2);
// console.log(key3);

// let { a, b } = { a: 10, b: 20 };

// let { c, d, ...rest } = { c: 30, d: 40, e: 50, f: 60 };
// console.log(c);
// console.log(d);
// console.log(rest); // {e: 50, f: 60}
// console.log(rest.e);


// 클래스 첫글자는 대문자로 사용 ( 국룰 )
// constructor : 생성자
// mew() eat() : 메서드
class Cat {
    constructor(name, age) {
        // 속성
        this.name = name;
        this.age = age;
    }

    // 메서드
    mew(cnt) {
        for (var i = 0; i < cnt; i++) {
            console.log(`${this.name} : 야옹`);
        }
    }
    eat() {
        console.log(`${this.name} : 먹이를 먹습니다.`);
    }
}

let cat1 = new Cat('나비', 1);
let cat2 = new Cat('냥이', 1);

cat1.mew(5);
cat1.eat();

// cat2.mew();

// console.log(cat1);


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // super class 생성자를 호출하여 name 매개변수 전달
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');
d.speak();