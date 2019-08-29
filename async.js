// 1.async 类似*的用法 await类似于yield
// 在函数的最开始，设置async标志当前函数为异步函数，而且函数返回值是Promise实例，如果没有返回值或者非Promise都会被改造成Promise
// async函数执行完成后，由于返回是的Promise实例所以可以运行连续的then和catch
async function Add() {
  return 1;//Promise.resolve(1)
}

Add().then(data =>{
  console.log('data:',data);
})

// 2.await只能出现在async函数中
// await后面可以跟一个Promise实例,如果不是Promise会被立即改造成resolved状态的Promise,而且会暂停函数的执行,知道Promise的状态发生变化才会向下执行

async function readFile() {
  console.log('awaite开始执行');
  let data = await new Promise((resolve,reject)=>{
    console.log('awaite开始执行');
    setTimeout(()=>{
      resolve(333);
    },1000)
  });
  console.log('data:',data);
  return data
}
readFile().then(data=>console.log('last:data:',data));

// 3.异常处理

// 4.async的状态改变
// 只要一个await语句后面的Promise要为reject,那么整个async函数都会终端执行
// async函数返回的Promise对象,必须等到内部所有的await命令后面的Promise对象执行完,才会发生状态改变,除非遇到return语句或者抛出错误

// 5.async的多种形式
// 函数声明
async function add(params) {
  await 1;
}

// 函数表达式
let f = async function() {};

// 对象的方法
let f = {
  async getName() {

  }
}

// class的方法
class User{
  async getName() {

  }
}

// 箭头函数
let f = async()=>{};

// 6.依次读取两个文件内容,并把文件内容写入到第三方文件
const fs = require('fs');
const path = require('path');

const f1 = path.join(__dirname,'des.js');
const f2 = path.join(__dirname,'exp.js');
const f3 = path.join(__dirname,'a.js');

function readFilePromise(fileName) {
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,'utf8',(error,data)=>{
      if(error) {
        reject(error);
      }else{
        resolve(data);
      }
    })
  })
}
async function joinFile(f1,f2,f3) {
  let p1 = readFilePromise(f1);
  let p2 = readFilePromise(f2);
  let data1 = await p1; 
  let data2 = await p2;
  fs.writeFile(f3,data1 + data2,'utf8',error=>{
    console.log('写入完成!')
  })
}
joinFile(f1,f2,f3).then(data=>{
  console.log('最后的输出!')
})

 