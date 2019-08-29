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
