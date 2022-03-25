const team = [
    {
        member : 'John',
        km: 3
    },
    {
        member : 'Jane',
        km: 4
    },
    {
        member : 'David',
        km: 5
    },
    {
        member : 'Peter',
        km: 2
    },
];

let sum = 0;
for (const {km} of team) {
    sum += km;
}
console.log(`Tổng số km là :${sum}`);


let greeting = 'Lazy dog jumps over brown fox';
let chars = [...greeting];
console.log(chars.length);

const billing = { billingContact: '0987654321', billingAddress: 'street no 123, xyz city' };
const shipping = { shippingContact: '123456789', shippingAddress: 'street no 999, abc city' };
const custInfo = { ...billing, ...shipping };
console.log(custInfo);

let students = ['John', 'Sofia', 'Bob'];
let copy_students = students;
console.log(copy_students);
students.push('Sally'); // Change students
console.log(students);