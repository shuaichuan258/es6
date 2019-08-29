// 1.对象也可以进行解构赋值，变量必须与属性同名，才能取到正确的值
let{a,b}= {a:123,b:234};
console.log('a:',a);
console.log('b:',b);

// 2.对象的解构赋值跟顺序没关系
let{b,a}= {a:123,b:234};
console.log('a:',a);
console.log('b:',b);

// 3.对象解构赋值的默认值也是undefined
let{a,b,c} = {a:123,b:234};
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);

// 4.变量名与属性名不一致
let{a:ax,b:bx} = {a:123,b:234};
console.log('a:',a);//a is not defined
console.log('b:',b);
console.log('ax:',ax);//ax:123
console.log('bx:',bx);//bx:234

// 5.嵌套结构的对象解构
let{a:{x:ax,y:ay},user:{name,td:std}} = {a:{x:10,y:20},user:{name:'laoma',age:18,td:[1,2,3]}};
console.log('ax:',ax);
console.log('ay:',ay);
console.log('std:',std);
console.log('name:',name);

//6.指定默认值
let {x = 0,y = 0} = { x: 10};
console.log('x:',x);
console.log('y:',y);

let {x = 0, y = 0} = {x : null,y :10};
console.log('x:',x);
console.log('y:',y);

// 7.解构现存对象的方法
let {max,min} = Math;
console.log('max(1,2,3,9,0):',max(1,2,3,9,0));
console.log('min(1,2,3,9,0):',min(1,2,3,9,0));

//8.对数组进行对象属性的解构，数组也是特殊的对象

let arr = [1,2,3];

let{0:a,1:b,2:c,3:d} = arr;
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);
console.log('d:',d);


