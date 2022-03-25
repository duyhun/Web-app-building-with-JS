class Information{
    constructor(name,description){
        this.name = name;
        this.description = description;
    }
    calculate(a,b=1) {
        return a * 3 * b;
    }
}

class Shape extends Information {
    constructor(length,description){
        this.length = length;
        this.description =  description;
    }
    calculate(a){
        return a;
    }
}