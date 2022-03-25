class Shape {
    constructor() {
        this.color = 'green';
        this.isFilled = true;
    }
    // constructor(color,isFilled) {
    //     this.color = color;
    //     this.isFilled = isFilled;
    // }
    print() {
        console.log(this.toString());
    }
    toString(){
        return 'A shape with color of ' + this.color + ' and ' + (this.isFilled?'Filled':'notFilled')
    }
}
let Shape1 = new Shape();
Shape1.print();


class Circle extends Shape {

}

class Rectangle extends Shape {

}

class Square extends Rectangle {

}