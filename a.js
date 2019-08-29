// 1.javaScript允许采用\uxxxx形式表示一个字在\u0000~\uFFFF之间的字符
let x = '\u0061';
let y = '\u0062';
let z = '\u0063';
console.log('x:',x);
console.log('y:',y);
console.log('z:',z);

// 2.超出\u0000~\uFFFF范围的字符，必须用两个双字节的形式来表是
let c ="\ud840\udc45";
console.log('c:',c);

// 3.还可有用花括号把码点包裹住
let d = '\u{20BB7}';
console.log('d:',d);

let f = '\u{61}';
console.log('f:',f);

// 4.js中的字符表示方法汇总
let a = '\z';
let b = '\172';//八进制表示方法
let c = '\x7A';//十六进制表示方法
let d = '\u007A';//unicode表示方法
let e = '\u{7A}';

console.log('a,b,c,d,e:',a,b,c,d,e);

// 5.字符串方法：codePointAt(index),获得字符的码点
var s = "𠮷";
console.log('s.charAt(0):',s.charAt(0));//常见字方法
console.log('s.charAt(1):',s.charAt(1));
console.log('s.charCodeAt(1):',s.charCodeAt(1));//生僻字方法
console.log('s.charCodeAt(0):',s.charCodeAt(0));
console.log('s.length:',s.length);


// 6.String.frontCodePoint(num) 通过码点返回字符
console.log('String.fromCodePoint(0x7a):',String.fromCodePoint(0x7a));

// 7.字符串的遍历器接口，优点是能正确识别大于0xFFFF码点的字符
let s = '𠮷';
for(var i = 0 ; i < s.length ; i++) {
  console.log('s[i]:',s[i]);
}

for(let k of '你好啊𠮷') {//处理大于0xffff码点的字符
  console.log('k:',k);
}

// 8.includes(),startsWith(),endsWith();
let n = "123456";
console.log('n.includes("23"):',n.includes("23"));
console.log('n.includes("32"):',n.includes("32"));

console.log('n.startsWith("12"):',n.startsWith("12"));
console.log('n.startsWith("21"):',n.startsWith("21"));

console.log('n.endsWith("56"):',n.endsWith("56"));
console.log('n.endsWith("567"):',n.endsWith("567"));

//这三个方法都支持传入两个参数，意思是表示开始搜索的位置
console.log('n.includes("2",3):',n.includes("2",3));

// 9.repeat() repeat方法返回一个新字符串，表示将原字符串重复n次
let m = "aicoder.com";
console.log('m.repeat(2):',m.repeat(2));//返回值重复两次
console.log('m.repeat(2.7):',m.repeat(2.7));//返回值重复两次舍弃小数点后面
console.log('m.repeat(0):',m.repeat(0));//返回空字符串
console.log('m.repeat(-1):',m.repeat(-1));//报错

// 10.padStart(),padEnd();
let k = '12';
console.log('k.padStart(5,"ab"):',k.padStart(5,"ab"));
console.log('k.padEnd(7,"ab"):',k.padEnd(7,"ab"));

//11.定义多行模板字符串
let s1 = `<div>
  <h3>你好</h3>
  <p>这里是</p>
</div>`;
console.log('s1:',s1);

// 在之前拼接字符串
let [a1,a2] = [9,10]
let tempStr = '';
tempStr +='<p>' + a1 + '</p>';
tempStr +='<p>' + a2 + '</p>';
console.log('tempStr:',tempStr);

// 在这之后拼接字符串
let s2 = `<p>${a1}</p>
<p>${a2}</p2>`
console.log('s2:',s2);

// 并且可以支持在模板字符串中进行运算
let [a1,a2] = [9,10]
let s3 = `<p>${a1*2}</p>
<p>${a2}</p2>`
console.log('s3:',s3);

// 并且可以支持函数调用
function add (a,b) {
  return a + b;
}
let[a1,a2] = [9,10];
let s4 = `===>${2*add(a1,a2)}`;
console.log('s4:',s4);

// 12.模板字符串的嵌套

let t = `<ul>
  ${[1,2,3,4,5].map((item) =>{
    return `<li>${item}</li>`
  }).join('')}
</ul>`
console.log('t:',t);

// 13.标签模板
let [a1,a2] = ['*','%'];
function add() {
  console.log('arguments:',arguments);
}
add`a${a1}-${a2}==`;
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