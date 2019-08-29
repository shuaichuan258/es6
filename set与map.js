// 1.Set类型,它类似于数组去重,成员数值都是唯一的,没有重复的
let s = new Set();
s.add(1);
s.add('1');
s.add(123151);
s.add(1);//无效 set集合中已经存在了1
console.log('s.size:',s.size);//相当于length
console.log('s:',s);

// 2.Set函数可以接受一个数组(或者具有 iterable接口的其他数据解构)作为参数,用来初始化
// 接受一个可遍历对象,比如:字符串,NodeList接口
let s = new Set([0,1,3,3,4,5]);
console.log('s:',s);
// Set 内部判断两个值是否不同,使用的算法叫做"Save-value-zero equality",它类似于精确相等运算符(===),主要的区别式NaN等于自身
s.add(NaN);
s.add(NaN);
s.add(-0);//不区分0 -0
console.log('s:',s);

// 3.Set.prototype.size:返回Set实例的成员总数

// 4.Set实例四个操作方法:
let s = new Set([1,2,4,0]);
// add(value):添加某个值,返回Set结构本身
// delete(value):删除某个值,返回一个布尔值,表示删除是否成功
s.delete(0);
console.log('s:',s);
// has(value)返回一个布尔值,表示该值是否为Set的成员
console.log('s.has(1):',s.has(1));
console.log('s.has(2):',s.has(2));
console.log('s.has(5):',s.has(5));
// clear():清除所有成员,没有返回值
s.clear();
console.log('s:',s);

// 5.Set结构转为数组
// 数组去重,展开运算符
let s = new Set();
s.add(1);
s.add(4);
s.add(33);
let arr = [...s];
console.log('arr:',arr);
// Array.from
let arr2 = Array.from(s);
console.log('arr2:',arr2);

// 6.Set结构的实例有四个遍历方法
// keys()返回键名的遍历器
// values():返回键值的遍历器.也可以直接遍历Set结构,跟用values效果一样
// entries():返回键值对的遍历器
let s = new Set([1,2,22]);
console.log('s.keys():',s.keys());
console.log('s.values():',s.values());  
console.log('s.entries():',s.entries());

// forEach():使用回调函数遍历每个成员
s.forEach((item,index,map)=>{
  console.log('item:',item);
  console.log('index:',index);
})

// 7.WeakSet,WeakSet 对象允许你将弱保持对象存储在一个集合中
// WeakSet对象中只能存放对象引用,不能存放值,而Set对象都可以
// WeakSet对象中存储的对象值都是被弱引用的,如果没有其他的变量或属性引用这个对象值,则这个对象值会被当成垃圾回收掉,正因为这样,WeakSet,弱引用类型
let ws = new WeakSet();
let a = {a:'222'};
let b = {b:12341};
ws.add(a);
ws.add(b);

ws.delete(a);
console.log(ws.has(b));

// 8.Map数据解构,它类似于对象,也是键值对的集合,但是"键"的范围不限于字符串,各种类型的值(包括对象)都可以当作键
let map = new Map();
let a = {a:123};
let b = new Number(20000);

map.set(a,{age:19});
map.set(b,198);
map.set('1234',b)
console.log('map:',map);

// 构建Map对象,使用new关键字,可以传入可遍历的对象即可
let map = new Map([[{a:19},2222],[2,'asdba']]);
console.log('map:',map);

// 9.Map的属性和操作方法
let map = new Map([[{a:19},2222],[2,'asdba']]);
// size属性返回Map结构的成员总数
console.log('map.size:',map.size);

// set (key,value)设置值.set方法设置键名key对应的键值为value,然后返回整个Map结构,如果key已经有值,则键值会被更新,否则就新生成该键
// set方法返回的是当前的Map对象,因此可以采用链式写法
map.set(1,'aicoder').set({demo:'cagdaiu'},'asbfayi ufg');
console.log('map:',map);
// get(key),get方法读取key对应的键值,如果找不到key值,返回undefined
console.log('map.get(5):',map.get(5));
// has(key),has方法返回一个布尔值,表示某个键是否在当前Map对象之中
// delete(key),delete方法删除某个键,返回true,如果删除失败,返回false
// clear()方法清除所有成员,没有返回值

// 10.Map的遍历方法
// keys():返回键名的遍历器
// values():返回键值的遍历器
// entries():返回所有成员的遍历器
// forEach():遍历Map的所有成员
let map = new Map([[1,1],[2,'asdafav'],[{a:124},'sdad']]);
console.log('map.keys():',map.keys());

// for(let key of map.keys()) {
//   console.log('map.get(key):',map.get(key));
// }

console.log('map.values():',map.values());
console.log('map.entries():',map.entries());

map.forEach((item,key) => {
  console.log('item:',item);
  console.log('key:',key);
})

// 11.WeakMap 结构于Map结构类似，也是用于生成键值对的集合

// WeakMap只接受对象作为键名（null）除外，不接受其他类型的值作为键名
// weakMap的键名所指向的对象，不计入垃圾回收机制

// WeakMap只有四个方法可用:get(),set(),has(),delete()
// size 遍历方法 clear等都不可以用
let wm = new Map();
wm.set(dom,{age:19});




