// 类装饰器 ClassDecorator target构造函数
// const Base:ClassDecorator = (target) =>{
//     console.log(target);
//     target.prototype.xiaoman = 'a' 
//     target.prototype.fn = () =>{
//         console.log('abc');

//     }
// }
// @Base
// class Http {
//     // 可以不去破坏它自身的结构（无视里面的代码），直接添加
// }
// const http = new Http() as any
// console.log(http.xiaoman);

// 装饰器工厂，其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
// function fun2(options:any){
//    return function(target:any){
//     target.prototype.userName = options.name;
//     target.prototype.userAge = options.age;
//    }
// }
// @fun2({
//     name:'a',
//     age:18
// })
// class Person2{
//     // 123
// }
// let p2=new Person2();
// //@ts-ignore
// console.log(p2.userName,p2.userAge);



// 装饰器组合  结合起来使用的时候会先从上至下执行所有的装饰器工厂，拿到所有真正的装饰器，然后再从下至上的执行所有的装饰器
// function demo1(target:any){
//     console.log('demo1');

// }
// function demo2(){
//     console.log('demo2');
//     return function(target:any){
//         console.log('demo2 内部');

//     }
// }
// function demo3(){
//     console.log('demo3');
//     return function(target:any){
//         console.log('demo3 内部');
//     }
// }
// function demo4(target:any){
//     console.log('demo4');
// }
// @demo1
// @demo2()
// @demo3()
// @demo4
// class Person3{

// } 

// 属性装饰器
// function fun4(options: any) { 
//     return function (target: any, attr: any) {
//         // target 代表类的本身，attr代表属性名
//         target[attr] = options;
//     }
// }
// class Person4 {
//     // @ts-ignore
//     @fun4('a')
//     // @ts-ignore
//     userName: string;
// }
// let p4 = new Person4();
// console.log(p4.userName);


// 方法装饰器
