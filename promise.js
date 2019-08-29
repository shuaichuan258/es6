// 1.promise,简单说就是一个容器,里面保存着某个未来才会结束的时间(通常是一个异步操作)的结果
// Promise对象代表一个异步操作,有三种状态,pending(进行中),fulfilled(已成功,也称resolved)和rejected(已失败)

let p = new Promise((reslove, reject) => {
  try {
    console.log('开始执行:Promise代码')
    throw new Error('我们自定义的异常信息!');
    setTimeout(() => {
      // 写一些处理逻辑的代码
      reslove(123); //处理事件,任务完成后,如果成功,直接调用reolve方法
    }, 1000);
  } catch (e) {
    reject(e); //把当前的promise状态改成fail
  }
});
p.then(data => {
  console.log('data:', data);
}).catch(error => console.log('error):', error));

console.log('结束!');

// 2.构建一个Prmise
// Prmise对象是一个构造函数,用来生成Promise实例.接受一个函数作为参数,该函数的两个参数分别是resolve和reject.他们是两个函数

// 3.Promise实例生成以后,可以用then方法分别指定resolved状态和rejected状态的回调函数
// then方法可以接受两个回调函数作为参数，第一个回调函数是Promise对象的状态 变为resolved时调用，第二个回调函数是Promise对象状态变为reject
const fs = require('fs');
const path = require('path');
let p2 = new Promise((reslove,reject)=>{
  console.log('执行Promise的初始化');
  // 读取文件内容
  let fileData = fs.readFileSync(path.join(__dirname,'class.js'),'utf8');
  reslove(fileData);
});
p2.then(data=> {
  console.log('data:',data);
  return{data,time:Date.now()}
}).then(data=>console.log(data));

// 4.果调用resolve函数和reject函数时带有参数，那么他们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误

// 5.resolve函数的参数出了正常的值以外，还可能是另一个Promise实例，那么resolve会等等Promise返回结果后再执行resolve状态改变
let p1 = new Promise((resolve,reject) =>{
  console.log('p1初始化');
  setTimeout(()=>{
    resolve(123);
  },2000);
});

p1.then(data=> {
  console.log('p1:then');
  console.log('data:',data);
  
})

let p2 =new Promise((reslove,reject)=>{
  console.log('p2,初始化');
  reslove(p1);
})
p2.then(data=>{
  console.log('p2:then');
  console.log('data:',data);
  
})

// 6.then方法返回另一个新的Promise，所以可以进行链式编程
let p1 = new Promise((resolve,reject)=> {
  setTimeout(()=>{
    resolve(100);
  },2000);
});

p1.then(data=>{
  console.log('data:',data);
  return 10;  
}).then(data=>{
  console.log('data:',data);
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(3);
    },1000)
  });
}).then(data=>{
  console.log('data:',data);
}).catch(er=>console.log(er))
.finally(()=>{
  console.log('sss');//无论如何都会执行
})

// 7.then前一个回调函数，有可能返回的还是一个Promise对象(即有异步操作)，这是后一个回调函数，就会等待该promise对象的状态发生变化，才会被调用

// 8。Promise.prototype.catch方法是them(null,rejection)的别名，用于指定发生错误时的回调函数

// 9.finally finally方法用于指定不管Promise对象最后状态如何，都会执行的操作ES2018

// 10.Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例
// 所有的子Promise全部为Resolved状态，则他就是Resolved，其中一个Rejected那么就直接Rejected
// then的参数是所有子Promise的结果组成的数组

Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(),Promise.reject(new Error('我们的错误！'))])
.then(data => console.log(data))
.catch(error=>console.log(error));

// 11.Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例
Promise.race([new Promise(reslove=>{//谁先跑到终点就听谁的
  setTimeout(()=>{
    reslove(1);
  },1000)
}),Promise.resolve(2),
Promise.reject(3)])
.then(data=>console.log(data));