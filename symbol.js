// 1.ES6引入了一种新的原始数据类型Symbol,表示独一无二的值
// String,Number,Boolean,Object,Function nullundefined Symbol

let s1 = Symbol();//创建一个Symbol
let s2 = Symbol();
console.log('s1===s2:',s1===s2);

console.log('s1:',s1);
s1.toString();

console.log(String(s1));//转为字符串

// 构建一个symbol值,直接用他的构造函数执行即可,不能用new.每次构建都会是一个独一无二的值
// symbol函数可以接受一个字符串作为参数,表示对symbol实例的描述
let s3 = Symbol('tqq');

console.log('s3:',s3);

// 2.Symbol不能参与运算,但是可以Symbol值可以显示转为字符串
let s4 = Symbol('sss');
console.log('s4.toString()+"===":',s4.toString()+"===");

// 3.作为属性名的Symbol
let t = {
  name:'tqq',
  age:23,
  [Symbol('tt')]:23,
  [Symbol('fun')]() {
    console.log('sss');
  }
};

for(let key of Object.keys(t)) {
  console.log('key:',key);
}

// 4.属性名的遍历
// 不能遍历Symbol属性: for...in,for...of,Object.keys(),Object.getOwnPropertyNames()

// 可以遍历:Object.getOwnPropertySymbols
let t = {
  name:'tqq',
  age:23,
  [Symbol('tt')]:23,
  [Symbol('fun')]() {
    console.log('sss');
  }
};
for(let s of Object.getOwnPropertySymbols(t)) {
  console.log('t[s]:',t[s]);
}
console.log('Object.getOwnPropertySymbols(t):',Object.getOwnPropertySymbols(t));

// 5.Symbol.for() Symbol.keyFor();
let s1 = Symbol.for('aicoder');
let s2 = Symbol.for('aicoder');

console.log('s1===s2:',s1===s2);

Symbol.keyFor(s1);//aicoder
console.log('Symbol.keyFor(s1):',Symbol.keyFor(s1));

