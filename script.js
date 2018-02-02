//1
const a = 'HEllo';
const b = 'World';

console.log(`${a} ${b}`);

//2
const multiply = (a,b=1) => a*b

console.log(multiply(2, 5));
console.log(multiply(6,6));
console.log(multiply(5));


//3
const average = (...args) => {
    let sum = 0 ;
    args.forEach(arg => sum += arg);
    return sum/args.length;
};


console.log('zad3');
console.log(average(1));
console.log(average(2,3));
console.log(average(1,3,6,6));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(average(...grades))

//5
const strange = [1, 4, 'Iwona', false, 'Nowak'];

const [a,b,c,d,e] = strange;

console.log(`${c} ${e}`);