class Animal {
    say() {
        console.log('Hi not static');
    }
    static hello() {
        console.log('Hello, static')
    }
}



let chihuahua = new Animal();
chihuahua.say();
Animal.hello();
