// 1.字符串作为数组进行解构赋值。字符串可以当对象来用，可以当数组来用
let[a,b,c] = "123456";
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);

// 2.字符串当对象进行解构赋值
let{ toString:s,0:a,1:b,2:c} = 'aicoder.com';//根据属性值进行选择
console.log(s);
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);

// 3.number类型和boolean类型的解构赋值
let{toString:s} = true;
let{toString:m} = 123;
console.log('s:',s);
console.log('m:',m);

// 4.函数参数解构赋值
function add([a,b]){
  return a + b;
}
console.log('add([1,2]):',add([1,2]));

// 5.函数参数解构赋值带默认值
function add([a=1,b=20]){
  return a + b;
}
console.log('add([1]):',add([1]));

// 6.函数参数对象解构赋值
function add({a=1,b=2}){
  return a + b;
}
console.log('add({a:2,b:3}):',add({a:2,b:3}));
console.log('add({a:2}):',add({a:2}));
console.log('add():',add());//Cannot destructure property `a` of 'undefined' or 'null'

// 7.给对象的解析一个默认值
function add({a=1,b=2}={}){
  return a + b;
}
console.log('add():',add());
