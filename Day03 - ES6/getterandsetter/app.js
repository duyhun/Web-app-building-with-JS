class Person {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    set(name){
        return this.name = name;
    }
    walk(){
        console.log(this.name + 'is walking');
    }
}

class Programmer extends Person {
    constructor(name, language){
        super(name);
        this.language = language;
    }
    getLanguage() {
        return this.language;
    }
    setLanguage(language){
        return this.language = language;
    }
    writeCode() {
        console.log(this.name + 'is writing code with' + this.language)
    }
}