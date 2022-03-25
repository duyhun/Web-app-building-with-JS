class Animal {
    say() {
        console.log('Hi I am an animal');
    }
}

class Dog extends Animal {
}

let chihuahua = new Dog();
chihuahua.say();