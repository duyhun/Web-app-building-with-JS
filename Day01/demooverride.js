class Animal {
    say() {
        console.log('Hi I am an animal');
    }
    hello(name) {
        console.log('Hi,' + name);
    }
}

class Dog extends Animal {
    say() {
        console.log('Hi I am a Dog')
    }
    hello(name) {
        console.log('Hello, ' + name)
    }
}

let chihuahua = new Dog();
chihuahua.say();
chihuahua.hello('Khánh');