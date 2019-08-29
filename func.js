// 1.函数增加了函数参数的默认值

function add(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
}

function add(a, b = 1) {
  return a + b;
}
console.log('add(1):', add(1));
console.log('add(1,undefind):', add(1, undefined));

// 2.参数默认值是惰性求值的，默认值是用到的时候，才会去求出具体的值
let x = 1;

function add(a, b = x) {
  return a + b;
}
console.log('add(1):', add(1)); //2
x += 1;
console.log('add(1):', add(1)); //3

//  3.参数默认值可以与解构赋值的默认值，结合起来用
function add({
  a,
  b = 1
} = {}) {
  return a + b;
}

console.log(add({
  a: 3
})); //4

console.log('add():', add()); //NaN

//  4.尾参数定义了默认值是可以省略的，否则不能省略调用传参
function add(a, b = 9, c) {
  return a + b + c;
}
console.log(add(1, undefined, 2)); //12
// console.log(add(1,,2));//会报错
function add(a, b = 9, c = 9) {
  return a + b + c;
}
console.log(add(2, 3));

// 5.函数的length属性。在定义了默认值后会失真
function add(a, b = 9) {
  return a + b;
}
console.log('add.length:', add.length);

// 6.设置了参数的默认值，函数进行声明初始化时。参数会形成一个单独的作用域(context)。等到初始化结束，这个作用域就会消失
let x = 1;

function add(a, b = x) {
  let x = 2;
  console.log('b:', b); //b=1
}
add(1);

// 7.ES6引入了rest参数(形式为。。。变量名),用于获取函数的多余参数
function add(...nums) {
  return nums.reduce((pre, cur, index) => {
    console.log('pre:', pre);
    console.log('cur:', cur);
    console.log('index:', index);
    return pre + cur;
  }, 2);
}
add(4, 5, 2); //11
console.log('add(4,5,2):', add(4, 5, 2));

// 8.函数的严格模式的改变：
// 从ES5开始，函数内部可以设定为严格模式，ES2016做了一点改变,规定只要函数参数使用了默认值,解构赋值,或者扩展运算符
// 那么函数内部就不能显式设定为严格模式,否则会报错

// 9.函数的name属性,返回该函数的函数名
function add(a, b) {
  return a + b;
}
console.log('add.name:', add.name);

const t = function (a, b) {
  return a + b;
}
console.log('t.name:', t.name);

// 10.箭头函数复习
const fun = function (a, b) {
  return a + b;
}

const fun = (a, b) => a + b;

const f1 = () => {
  console.log(1);
  return 2;
}

const f2 = () => ({
  a: 1,
  b: 2
}); //强制执行返回对象

// 如果没有返回值的时候可以用void标志
const func = a => void console.log(a);

let arr = [1, 22, 555, 112, 2, 1];
arr.sort((a, b) => a - b);
console.log('arr:', arr);

// 箭头函数有几个特点
// [1]函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象
// [2]不可以当作构造函数,也就是说,不可以使用new命令,否则会跳出一个错误
// [3]不可以使用argument对象,该对象在函数体内不存在,如果要用,可以用rest参数代替
// [4]不可以使用yied命令,因此箭头函数不能用作Generator函数

// 11.尾调用,尾函数
function b() {}

function add() {
  return b(); //尾函数调用 调用别人的函数 就是尾函数
}

function add() {
  return b() + 3; //不是函数调用 有计算
}

function add() {
  return b() + b(); //也不是尾调用
}

// 12.尾递归
function sum(num) {
  if (num >= 1) {
    return (num - 1) + num;
  } else {
    return 1;
  }
}
console.log('sum(100):', sum(100));

let sum = 0,
  num = 1000;
for (let i = 0; i <= num; i++) {
  sum += i;
}
console.log('sum:', sum);

// 13.尾递归的优化➡尾递归的优化➡循环
function sum(num,total=0) {
  if(num>0) {
    return sum(num-1,total+num);
  }else{
    return total;
  }
}
console.log('sum(1000):',sum(1000));


