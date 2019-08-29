// 1.二进制与八进制
let b = 0o77; //八进制：0o 0O开头
let d = 0O34;
let c = 0b11; //二进制：0b 0B开头
let f = 0B1011;
console.log('b:',b);
console.log('c:',c);
console.log('d:',d);
console.log('f:',f);

// 将二进制或者八进制数据转成十进制
console.log('Number(0b1011):',Number(0b1011));
console.log('Number(0O1011):',Number(0O1011));

// 2.Number.isFinite(),Number.isNaN()数字判断增强，全局方法添加到Number的静态方法
// 判断是否为有限的
console.log(isFinite(1,2));//true
console.log(isFinite(Infinity));//false
console.log(isFinite(NaN));//false
console.log(isFinite("1"));//true 字符串隐式转换为数字类型
console.log(isFinite(true));//true

// 判断是否为NaN
console.log(isNaN(NaN));//true
console.log(isNaN(Infinity));//true
console.log(isNaN(22));//true
console.log('isNaN("aa"):',isNaN("aa"));//true "aa"隐式转换为数字类型 结果为NaN；

// 3.Number.parseInt(), Number.parseFloat()

// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// 4.Number.isInteger() 判断是否为正整数
Number.isInteger(25);//true
Number.isInteger(25.1);//false
Number.isInteger(25.0);//true 整数和浮点数采用的式同样的储存方法，所以和25视为同一个值

Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

// 5.Number.EPSILON,ES6在Number对象上面，新增一个极小的常量Number.EPSILON.根据规格，它表示1与大于1的最小浮点数之间的差
console.log('Number.EPSILON:',Number.EPSILON);
console.log('0.1+0.2-0.3<Number.EPSILON:',0.1+0.2-0.3<Number.EPSILON);

// 6.安全整数和Number.isSafeInteger()
// javaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
console.log('Number.isSafeInteger(2):',Number.isSafeInteger(2));

// 7.Math对象扩展

//  7.1指数运算符**
// ES5写法
console.log('Math.pow(2,3):',Math.pow(2,3));//2的3次方
// ES6写法
console.log('2**3:',2**3);//2的3次方

// 7.2Math.trunc方法用于去除一个数的小数部分，返回整数部分
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值
console.log('Math.trunc(1.2):',Math.trunc(1.2));
console.log('Math.trunc("1.2"):',Math.trunc("1.2"));
// 对于空值或者无法截取整数的值，返回NaN
console.log('Math.trunc(NaN):',Math.trunc(NaN));
console.log('Math.trunc("aa"):',Math.trunc("aa"));

//  7.3判断数字的符号 Math.sign()
  // Math.sign方法用来判断一个数到底是正数，负数，还是零，对于非数值，会将其先转换为数值
  // 他会返回五种值
  //  参数为正数，返回+1;
  //  参数为负数，返回-1;
  //  参数为0，返回0;
  //  参数为-0，返回-0;
  //  其他值，返回NaN;
console.log('Math.sign(22):',Math.sign(22));
console.log('Math.sign(-11):',Math.sign(-11));
console.log('Math.sign(-0):',Math.sign(-0));
console.log('Math.sign(NaN):',Math.sign(NaN));

  // 7.4 Math.cbrt方法用于计算一个数的立方根
    // 对于非数值，Math.cbrt方法内部也是先使用Number方法将其转换为数值
    console.log('Math.cbrt(8):',Math.cbrt(8));
    
  // 7.5 Math.hypot()方法返回所有参数的平方和的平方根。根下 a^2 + b^2,勾股定理
    console.log('Math.hypot(3,4):',Math.hypot(3,4));
    
