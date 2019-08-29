// 1.正则表达式，构造函数升级
const exp1 = /\d+/gim;

// 用构造函数创建 正则表达式
const exp2 = new RegExp('\d+','g');
const exp3 = new RegExp(/\d+/gi);//es5支持的方式，es5中不许换入第二个参数

// es6中增强了
const exp4 = new RegExp('/\d+gi','im');//第二个参数式设置flag，修饰符 可以替换前面的
console.log('exp4.flags:',exp4.flags);

//  2.增加的修饰符:u u修饰符，含义为"Unicode 模式"，用来正确处理大于\uFFFF的Unicode
let s = "𠮷";
console.log(/^.$/gi.test(s));
console.log(/^.$/u.test(s));

//  3.y修饰符，粘连 (sticky)修饰符 后一次匹配都从上一次匹配成功的下一个位置开始

//全局匹配
const str = '2344bb55bdd22';
const exp1 = /\d{2}/g;
let t;
while(t = exp1.exec(str)) {
  console.log('t:',t);
}

//粘连匹配
const str = '1244bb55dd22';
const exp2 = /\d{2}/y;
let t;
while(t = exp2.exec(str)) {
  console.log('t:',t);
}

const str = 'a1244bb55dd22';//不满足条件，返回空字符串
const exp2 = /\d{2}/y;
let t;
while(t = exp2.exec(str)) {
  console.log('t:',t);
}

//  4.s 修饰符:dotAll模式 正则表达式中。点(.)是一个特殊字符，代表任意的单个字符。例外：一个是四个字节的UTF-16
// 字符，这个可以用u修饰符解决：另一个是行终止符(line terminator character)
console.log(/./.test('\n'))
console.log(/./s.test('\n'))

// 5.具名组匹配，ES2018引入了具名组匹配，(Named Capture Groups)，允许为每一个组匹配指定一个名字
const exp2 = /(?<num1>\d+)(?<num2>-\d+-)/
console.log(exp2.exec('3333-222-aaaa'));

//  还支持解构赋值
let{groups:{num1,num2}} = exp2.exec('333-22-aa');
console.log('num1:',num1);
console.log('num2:',num2);

//  6.增加的属性
// RegExp.prototype.flags
// RegExp.prototype.sticky //y 黏连
// RegExp.prototype.unicode //u Unicode