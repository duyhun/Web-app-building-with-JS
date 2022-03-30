class Information{
    constructor(name,description){
        this.name = name;
        this.description = description;
    }
    static calculate(number = 1) {
        return number * 3;
    }
}

class Shape extends Information {
    constructor(width,name,description){
        this.name = name,
        this.width = width;
        this.description =  description;
    }
    static calculate(number){
        return number;
    }
}

console.log(Information.calculate(2));
console.log(Shape.calculate(2));
