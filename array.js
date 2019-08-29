// 1.数组的扩展运算符的应用
console.log('11', 111, 2, 1, 2);

let k = [1, 'asdas', 1, 2, 1, 1];
console.log(...k);

// eg:用Math.max方法后去数组中的最大值
// 替代函数的apply方法

let m = [1, 2, 3, 21, 55, 12, 2];
// console.log(Math.max(1,2,11,4));
let max = Math.max.apply(null, m);
console.log('max:', max);

let maxES6 = Math.max(...m);
console.log('maxES6:', maxES6);

// 2.rest参数的逆应用
function sum(...arr) {
  return arr.reduce((pre, next) => pre + next);
}

console.log('sum(1,2,2,2,22,1):', sum(1, 2, 2, 2, 22, 1));

let m = [1, 2, 22, 22, 22];

console.log('sum(...m):', sum(...m));

// 3.复制数组
// ES5方法
let m = [1, 22, '1asdda', '2asd'];
let newArr = m.slice();
console.log('newArr==m:', newArr == m);
console.log('newArr:', newArr);

let newArr2 = m.concat();
console.log('newArr2:', newArr2);

// ES6方法
let newArr3 = [...m];
console.log('newArr3:', newArr3);

let [...newArr4] = m;
console.log('newArr4:', newArr4);

// 4.合并数组
let m = [1, 22, '1asdda', '2asd'];
let m1 = [1, 22, '1asdda', '2asd'];
let m2 = [1, 22, '1asdda', '2asd'];

// ES5写法
// let n = m.concat(m1,m2);
// console.log('n:',n);
// ES6写法
let n = [...m, ...m1, ...m2, '---']
console.log('n:', n);

// 5.字符串展开
let k = 'aicoder.com';
console.log('[...k]:', [...k]);

// 6.querySelectorAll返回值的展开
let arr = [...document.querySelectorAll('li')]

// 7.Array.from()转换成数组:1:类数组对象2:可遍历的对象
let obj = {
  '0': 'a',
  '1': 2,
  'length': 2
};
let k = Array.from(obj);
console.log('k:', k);

// 8.数组实例的find()和findIndex()用于找出第一个符合条件的数组成员或者索引
let k = [1, 22, 55, 231, 14];
let m = k.find((val, index) => {
  console.log('index:', index);
  return val >= 22;
})
console.log('m:',m);
console.log('k.findIndex(val=>val>=22):',k.findIndex(val=>val>=22));

// 9.数组实例的fill方法使用给定值,填充一个数组
let k = new Array(10);
// k.fill(3);
// console.log('k:',k);

k.fill('a',3,5);
console.log('k:',k);

// fill方法还可以接受第二个和第三个参数,用于指定填充的起始位置和结束位置

// 10.数组实例的entries(),keys() 和value();
let k = [2,9,12,222];
for(let key of k.keys()) {
  console.log('key:',key);
}

for(var [key,val] of k.entries()) {
  console.log('key:',key);
  console.log('val:',val);
}

// 11.数组实例的includes()
let k = [2,3,3,56,76,222,NaN];
k.includes(2);//true
console.log('k.includes(2):',k.includes(2));
console.log('k.includes(20):',k.includes(20));
console.log('k.includes(NaN):',k.includes(NaN));

