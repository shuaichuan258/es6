// 1.属性的简洁表示
let name = 'sanqianchaot';
let phone = '1233';
let person = {
  age:11,
  name,
  phone
}
console.log('person:',person);//当属性和变量名相同时可以简写

// 2.方法简写
let person = {
  age:11,
  show:function() {
    console.log(this.age);
  }
}
person.show();

let person = {
  age:11,
  show(a,b) {//简写
    console.log(this.age);
    console.log('a:',a);
    console.log('b:',b);
  }
}
person.show(2,1);

// 3.属性名表达式
let a = 'aicoder.com';
let b = 'aicoder';
let person = {
  [a+1]:'123',
  [b]:'bbb',
  show() {
    console.log(this[a+1]);
    console.log('this[b]:',this[b]);
    console.log('this.aicoder:',this.aicoder);
  }
}
person.show();
console.log('person:',person);

// 4.表达式还可以用于定义方法名
let a = 'add';
let person = {
  [a+1]:function() {
    console.log('222 aicoder.com');
  }
}
person[a+1]();
console.log('person:',person);

//  5.对象的方法的name属性,返回函数名
console.log(person[a+1].name);

// 6.有两种特殊情况:bind方法创造的函数,name属性返回bound加上原函数的名字:Function构造函数创造的函数,name属性返回anonymous
let f = function() {};
let k = f.bind({});

console.log('k.name:',k.name);

let f = new Function('console.log("你好")');
f();
console.log('f.name:',f.name);

// 7.Object.is() 它用来比较两个值是否严格相等,与严格比较运算符(===)的行为基本一致.
//===严格相等运算符:不能处理NaN不等于自身,以及+0等于-0
console.log('0===-0:',0===-0);
console.log('NaN===NaN:',NaN===NaN);

console.log(Object.is(NaN,NaN));
console.log('Object.is(0,-0):',Object.is(0,-0));

// 8.Object.assign方法用于对象的合并,将源对象(source)的所有可枚举属性,复制到目标对象(target)这个是浅拷贝
let m = {ai:'aicoder'};
let k = Object.assign(m,{a:1},{b:2},{c:3});
console.log('k:',k);
console.log('m:',m);

// 注意:undefined和null无法转成对象,所以如果他们作为第一个参数,就会报错,作为第二个或者后面的参数就会省略

// Object.assign拷贝数字和布尔类型没有效果,字符串会转成字符数组
let n = Object.assign({},33,true,{a:2});
console.log('n:',n);

let n = Object.assign({},'aicoder');
console.log('n:',n);

// 数组的assign
let n = Object.assign({},['a',2,3,'aaa']);
console.log('n:',n);

// 同名属性的替换
let m = {};
let n = Object.assign(m,{age:18,name:''},{age:10});
console.log('n:',n);//后者替换前者

// 9.属性的定义与描述
// 属性定义 Object.defineProperties(obj,props)
// obj:在其上定义或修改属性的对象
// props
//  要定义其可枚举属性或修改属性描述符合的对象,对象中存在的属性描述符主要有两种:数据描述符和访问器描述符
// configurble:当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除.默认为false
// enumerable:当且仅当在枚举相应对象上的属性时该属性显现,默认为false
// value:与属性关联的值,可以是任何有i小的JavaScript(数字,对象,函数).默认为undefined,不能与get和set共用
// writable:当且仅当与该属性先关联的值可以用assignment operator改变时.默认为false 不能与get和set共用
// get:
      // 作为该属性的getter函数,如果没有getter 则为undefined,函数返回值将被用作属性的值
      // 默认为undefined
// set:
      // 作为属性的setter函数,如果没有setter,则为undefined,函数将仅接受参数复制给该属性的新值
      // 默认为undefined

      // Object.getOwnPropertyDescriptors方法返回一个对象,所有原对象的属性名都是该对象的属性名,对应的属性值就是该属性的描述对象

let person = {}
person.age = 10;

Object.defineProperties(person,{
  name:{
    configurable:true,
    enumerable:true,
    value:'aicoder',
    writable:true
  },
  phone:{
    configurable:true,
    enumerable:true,
    writable:true,
    value:'12222222'
  },
  address:{
    get:function() {
      return this._address;
    },
    set:function(val) {
      console.log(val);
      this._address = val;
    }
  }
})
console.log('Object.getOwnPropertyDescriptors(person):',Object.getOwnPropertyDescriptors(person));//获得所有属性的信息
console.log('Object.getOwnPropertyDescriptor(person,"age"):',Object.getOwnPropertyDescriptor(person,"age"));//获得单个属性的信息


console.log(person.phone);
console.log('person:',person);
person.address = 1231;
console.log(person.address);



// 属性的可枚举性
// 对象的每个属性都有一个描述对象(Descriptor),用来控制该属性的行为.Object.getOwnPropertyDescripyor方法可以获取该属性的描述对象
// 可枚举的应用
// for...in循环：只遍历对象自身的和继承的可枚举的属性
let p = {age:19,name:'aicoder'};
Object.prototype.prop = 'fater prop';
for(let k in person) {//遍历属性
  console.log(k);
}

// Object.keys():返回对象自身的所有可枚举的属性的键名。for...of循环配合
let p = {age:19,name:'aicoder'};
Object.prototype.prop = 'fater prop';
for(let k of Object.keys(p)) {//遍历属性
  console.log('k:',k);
}

//JSON.stringify():只串行化自身的可枚举的属性。
// Object.assign():忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性

// 10.遍历的可枚举属性
// for...in循环:只遍历对象自身的和继承的可枚举的属性。
// Object.keys返回一个数组，包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)的键名
// Object.getOwnPropertyNames(obj)返回一个数组。包含对象自身的所有属性(不含Symbol属性，但是包括不可枚举属性)的键名
let m = {age:19};
Object.defineProperties(m,{
  demo:{
    enumerable:false,
    value:'1222'
  }
})

console.log('m.demo:',m.demo);
console.log('Object.keys(m):',Object.keys(m));
console.log(':',Object.getOwnPropertyNames(m));//获得一个对象熟悉的办法

// 11.Object.setPrototypeOf()设置原型对象的方法 Object.create()
let p ={};
let p = Object.create({age:19});
console.log('p.age:',p.age);

Object.setPrototypeOf(p,{name:'sss'});

console.log('p.age:',p.age);
console.log('p.name:',p.name);

// 12.Object.getPrototypeOf()用于读取一个对象的原型对象
// 13.Object.keys(),Object.values(),Object.defineProperties()
// ES2017引入了根Object.keys配套的Object。value和Object.entries 作为扁你一个对象的补充手段，供for...of循环使用
let k = {age:19,name:'aicoder'};
console.log('Object.entries(k):',Object.entries(k));
 
// 14.ES2018将...运算符带入了对象
let {a,...b} = {a:123,b:222,c:'asdas'};
console.log('a:',a);
console.log('b:',b);

// 15.扩展运算符进行对象的浅拷贝复制
// 对象的扩展运算符(...)用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
let k = {age:19};
let k2 = {name:'aicoder'};

let k3 = {...k,...k2};
console.log('k3:',k3);



