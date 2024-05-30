let age = 32;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + "";
console.log(typeof test, test);

console.log("98" + 2);
console.log("98" * 2);
console.log("98" - 2);

console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1");

console.log(!"x");
console.log(!!"x");
console.log(!!"");
console.log(!!0);
console.log(!!"0");
/**
 * 1. 아무 글자도 없는 경우 String
 * 2. 값이 없는 경우
 * 3. 0
 *
 * 모두 false
 */
