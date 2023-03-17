 
// interface A {
//     name:string
//     age:number
// }
 
// interface B {
//     name:string
//     age:number
//     sex:string
// }
 
// let a:A = {
//     name:"老墨我想吃鱼了",
//     age:33,
// }
 
// let b:B = {
//     name:"老墨我不想吃鱼",
//     age:33,
//     sex:"女"
// }
 
// a = b




// interface A {
//     name:string
//     age:number
// }
 
// interface B {
//     name:string
//     age:number
//     sex:string
// }
 
// let a:A = {
//     name:"老墨我想吃鱼了",
//     age:33,
// }
 
// let b:B = {
//     name:"老墨我不想吃鱼",
//     age:33,
//     sex:"女"
// }
 
// a = b
 
// let fna = (params:A) => {
 
// }
// let fnb = (params:B) => {
    
// }
 
// // fna = fnb //错误  
 
// fnb = fna //正确






// type Person = {
//     name:string,
//     age:number
// }
 
// type p = Partial<Person> // 将Person里的 name,age全部转换为可选类型







// type Person = {
//     name:string,
//     age:number,
//     sex:string
// }

// type p = Pick<Person,'name'>  //选择一些类型展示

// type key = "name" | "age" | "text"
// type Readonle<T> = {
//     readonly [P in keyof T]: T[P];  //将这些属性设置为只读
// }


// type Person = {
//     name:string,
//     age:number,
//     text:string
// }



// type Rec<K extends keyof any,T> = {
//     [P in K]:T;
// };

// type key = string|number|symbol

// type Person = {
//     name:string,
//     age:number,
//     text:string
// }
// type K = 1|2|"C"
// type B = Rec<K,Person>
// let obj:B ={
//     1:{name:"xiao",age:22,text:"qwe"},
//     2:{name:"xiao",age:22,text:"qwe"},
//     C:{name:"xiao",age:22,text:"qwe"}
// }




// 定义一个类型 如果是数组类型 就返回 数组元素的类型 否则 就传入什么类型 就返回什么类型
// type TYPE<T> = T extends Array<any> ? T[number] : T

// type A = TYPE<(string | number)[]>

// type B = TYPE<boolean>

// type TYPE<T> = T extends Array<infer U> ? U : T  //使用infer
// type A = TYPE<(string | number)[]>
// type B = TYPE<boolean>

 
// type TYPE<T> = T extends Array<infer U> ? U : never //限制只能传元组类型，其他一概返回never ，看到never就去处理问题
// type T = [string,number]
// type un = TYPE<T>
// type uni = TYPE<boolean>



// type Arr = ['a','b','c']
// type First<T extends any[]> = T extends [infer one,infer two,infer three] ? two:[] // 取数组中的第二个

// // type First<T extends any[]> = T extends [infer one,...any[]] ? one:[]
// type a = First<Arr>

// type Arr = ['a','b','c']
// type Last<T extends any[]> = T extends [...any[],infer Last] ? Last:[]   //取最后一个
// type a = Last<Arr>


// type Arr = ['a','b','c']
// type pop<T extends any[]> = T extends [...infer Rest,infer Last] ? Rest:[]   //不取最后一个
// type a = pop<Arr>


// type Arr = ['a','b','c']
// type shift<T extends any[]> = T extends [unknown,...infer Rest] ? Rest:[]   //不取第一个
// type a = shift<Arr>



type Arr = [1,2,3,4]
type ReverArr<T extends any[]> = T extends [infer First,...infer rest] ?[...ReverArr<rest>,First] : T
type Arrb = [4,3,2,1]

