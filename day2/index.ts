/*
    // TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
// namespace A{  //相当于在外面包了一个方法
//     export const a= 1
// }
// console.log(A.a);

// namespace A {
//     export namespace C{
//         export const D = 5
//     }
// }
// console.log(A.C.D); //命名空间嵌套 


// export namespace V {
//     export const a = 1
// }

// namespace A  {
//     export namespace B {
//         export const C = 1
//     }
// }
 
// import X = A.B.C  //简化命名空间的时候要注意，ts-node X.js不认识这个，要转化为js再操作
 
// console.log(X);


// 重名的命名空间会合并
// namespace A{
//     export const b = 2
// }
// namespace A {
//     export const d = 3
// }

// 相当于
// namespace A {
//     export const b = 2
//     export const d = 2
// }
// A.b
// A.d
*/

/*
三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。

三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。 如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

/// <reference path="..." />指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。

三斜线引用告诉编译器在编译过程中要引入的额外的文件。

你也可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件
*/



/*
    // import axios from 'axios'
// import express from 'express'  //直接引入会报错，因为当TS使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。axios自带声明文件，所以不需要额外下载，而node需要额外输入npm i --save-dev @types/express命令

// 如果有冷门的库没有提供声明文件，则需要手写声明文件

// const app = express()

// const router = express.Router()

// app.use('/api',router)

// router.get('/api',(req:any,res:any)=>{
//     res.json({
//         code:200
//     })
// })

// app.listen(9001,()=>{
//     console.log(9001);
    
// })

*/