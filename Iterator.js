// 1.遍历器(Iterator)就是这样一种机制,如果一个对象部署了遍历器接口要求的遍历器对象,那就可用于for...of循环遍历
// 可遍历对象要求,属性名必须是:Symbol.Iterator这个是内置的Symbol值
// 遍历器要求拥有nexr方法,要求每次执行都会返回数据接口{value:<any>,done:<Boolean>}
// value是值,done是否结束的标志.for...of循环会自定调用对象的next方法

// let s = {
//   age: 19,
//   name: 'aicoder'
// };

// for(let key of Object.values(s)) {
//   console.log('key:',key);
// }
let s = {
  data: [1, 2, 3, 9, 'sasd'],
  [Symbol.iterator]() {
    let self = this;
    return {
      next() {
        // {value:any,done:boolean}
        // 每次遍历,都要返回一个上面的对象
        if (self._index === undefined) {
          self._index = 0;
        }
        let t = {
          value: self.data[self._index],
          done: self._index === self.data.length - 1
        }
        self._index = 1;
        return t;
      }
    }
  }
}
for (let v of s) {
  console.log('v:', v);
}

// 2.具备原生Iterator
// Array
// Map
// Set
// String
// TypedArray
// 函数的argument
// NodeList对象
console.log(Array.prototype[Symbol.iterator]);

let arr = [1,2,3]
for(let val of arr) {
  console.log('val:',val);
}

// 3.伪数组部署遍历器
let s = {
  0:1,
  1:'aicoder',
  2:{},
  length:3,
  [Symbol.iterator]:Array.prototype[Symbol.iterator]
};

for(let val of s) {
  console.log('val:',val);
}
