// 1.class的基本语法
function Person(name = 'aicoder', age = 19) {
  this.age = age;
  this.name = name;
}

Person.prototype.show = function () {
  console.log(this.name, this.age);
}

let p = new Person('malun');
p.show();

// ES6使用class定义类型
class Person {
  show() {
    console.log(this.PName);
  }
  get PName() { //定义属性
    return this._pName;
  }
  set PName(val) {
    this._pName = val;
  }
}
let p = new Person();
p.PName = 'aicoder.com';
p.show();

console.log('typeof Person:', typeof Person); //person类型，其实本质根原来的构造函数是一样的
console.log('Person.prototype.show:', Person.prototype.show);

// 2.类上面的方法都是定义在类的原型上的
// 3.构造函数的constructor方法
class Person {
  constructor(name = 'aicoder.com', age = 19) {
    this.age = age;
    this.name = name;
  }
  show() {
    console.log('this.age:', this.age);
    console.log('this.name:', this.name);
  }
}
let p = new Person(); //es6中用class定义的类型，必须用new构建，
p.show();
let p2 = new Person('malun', 20);
p2.show();

// 使用new的时候自动调用constructor方法。如果没有显式定义，一个空的constructor方法会被默认添加
// 构造函数中，返回其他对象
class Person {
  constructor(name, age) {
    return {
      name,
      age
    }
  }
}
let p = new Person('ss', 123);
console.log('p:', p);

// 4.严格模式
// 类和模块的内部，默认就是严格模式，所有不需要使用use strict指定运行模式，只要你的代码卸载类或模块之中，就只有严格模式可以用

// 5.Class表达式(函数表达式)
let Person = class {
  show() {
    console.log('123');
  }
};
let p = new Person();
p.show();

// 6.类不存在变量提升
let p = new Person();
p.show();
let Person = class {
  show() {
    console.log('123'); //在方法内部 this指向===>构建对象的实例
  }
};
// 不能先调用再声明

// 7.this的指向，类的方法内部如果含有this，它默认指向类的实例
// 使用解构赋值的时候，要注意，this可能不是指向当前对象
class Person {
  constructor() {
    this.show = this.show.bind(this); //解决方法：延迟执行 将show方法里的this指向构造函数里的this
  }
  show() {
    console.log('this:', this);
  }
}
let p = new Person();
p.show();

let {
  show
} = p; //函数调用模式
show();

// 解决方法 1:bind 2:箭头函数

// 8.Class 的静态方法
// 类型方法加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为静态方法
class Person {
  static Add(a, b) {
    return a + b;
  }
}
Person.PI = 3.1415926;
console.log(Person.Add(10, 11));

//  9.Class 的继承 extends
// (1)把父的构造函数里面的初始化对象的代码指向。
// (2)把父类的构造函数的原型上定义的反复进行拷贝
// extends关键字,继承了父类的所有属性和方法
// 子类必须在construstor方法中调用super方法.super来调用父类的构造函数.在子类的构造函数中,只有调用super之后,才可以使用this关键字,否则会报错
class Person {
  constructor(name = '', age = 18) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log('this.name:', this.name);
    console.log('this.age:', this.age);
  }
}
class Student extends Person {
  constructor(name = '', age = 15, phone = '') {
    super(name,age);//继承:必须调用super(),而且正在子类的构造函数内部,this之前必须用super
    this.phone = phone;//在构建子类对象时,继承先把父类的对象构造,然后在子类上进行扩展
  }
}
let s = new Student('aicoder',29,'12122222');
s.show();

// 10.继承原生的构造函数
function Person(age,name) {
  this.age = age;
  this.name= name;
}

Person.prototype.show = function() {
  console.log('this.age:',this.age);
  console.log('this.name:',this.name);
}
class Student extends Person {
  constructor(age,name) {
    super(age,name);
  }
}
let s = new Student(41,'12141414adas');
s.show();

// 11.继承内置的类型的构造函数
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}
let m = new MyArray(3,5,7);
console.log('m:',m);
