


/*
// let str:string = '123'

// let muban:string = 'web${str}'
// console.log(muban);


// let notANumber: number = NaN;//Nan
// let num: number = 123;//普通数字
// let infinityNumber: number = Infinity;//无穷大
// let decimal: number = 6;//十进制
// let hex: number = 0xf00d;//十六进制
// let binary: number = 0b1010;//二进制
// let octal: number = 0o744;//八进制s
*/



/*
// let a:boolean = false
// console.log(a);


// let b:boolean = Boolean(1)
//  console.log(b);


//  let createdBoolean: Boolean = new Boolean(1) //使用构造函数 Boolean 创造的对象不是布尔值；new Boolean() 返回的是一个 Boolean 对象 

 
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数



// function voidFn(): void {
//     console.log('test void')
// }

// void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数

// void也可以定义undefined 和 null类型

// let u: void = undefined

// let n: void = null;  ts默认开启严格模式，如果不关闭会执行 不能将类型“null”分配给类型“void”。 等一系列禁令

// let u: undefined = undefined;//定义undefined
// let n: null = null;//定义null

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量

//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
 
// num2 = test
*/


/*
// 安装 1.npm install @types/node -D 
//      2.npm install ts-node -g  即可不用转为js也能够直接运行ts文件（使用 ts-node app.ts命令）
// let str:string = "我的很大，你要忍一下"

// console.log(str);

// let anys:any = '爷发烧了'
//  1.没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型
// 2.声明变量的时候没有指定任意类型默认为any;3.弊端如果使用any 就失去了TS类型检测的作用
// 
// anys = 18
// anys = true
// anys = {}
// anys = []
// anys = Symbol('123')
*/



/*
// 4.TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给unknown unknow  unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow

// unknow 只能作为父类型，不能作为子类型（不能把unknow赋值给别的属性，unknow只能赋值给unknow）

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
// let obj:any = {b:1}
// obj.a
 
 
// 如果是unknow 是不能调用属性和方法 如果使用unknow 去调用方法则报错

// let obj:unknown = {b:1,ccc:():number=>213}
// obj.b
// obj.ccc()
*/



/*
    // interface 重名就会重合（合并到同一个约束中）
    // interface 任意key
    // interface  ？ readonly
    // interface  接口继承
    // interface    定义函数类型
    // 不能多属性也不能少属性
    // interface Axxsxs{
    //     name: string 
    //     age: number
    // }
    // interface Axxsxs{
    //     Ikun:string
    // }
    // let a: Axxsxs = {
    //     name:"我",
    //     age:88,
    //     Ikun:"Ikun"
    // }
    // interface Axxsxs{
    //     name: string 
    //     age: number
    //     [propName:string]:any //索引签名：有了这个标签，除了之前的name和age会强校验有没有，其他的可以在下方随意添加随意添加（类型不能随便写，建议写any）
    // }
    // let a: Axxsxs = {
    //     name:"我",
    //     age:88,
    //     a:1,
    //     b:2
    // }

    // interface Axxsxs{
    //     name: string 
    //     age?: number //可以加个?将其变为可选值 即下方有没有这个值都无所谓
    //     callback:()=>boolean
    // } 
   
    // let a: Axxsxs = {
    //     name:"我",
    //     callback:()=>{
    //         return false
    //     }
    // }

    // a.callback() //可以调用
    // a.callback = ()=>{return true} //若定义callback时前缀readonly则该属性不可修改 
    
//     interface Axxsxs extends B{ //继承B约束类型
//         name: string 
//         age: number
//         readonly id: number
//         readonly cb:() => boolean
//     }
//    interface B{
//     xxx:string
//    }
//     let a: Axxsxs = { //此时a中有两种约束
//         id:1,
//         name:"我",
//         age:88,
//         xxx:"xxx",
//         cb: ()=>{
//             return false
//         }
//     }
    // interface Fn {
    //     (name:string):number[]
    // }
    // const fn:Fn = function(name:string){ //定义函数类型，必须为 （name:string）:number[]
    //     return [1]
    // }
    

*/



/*
            在typescript中 Objact是所有Object类的实例的类型。由以下两个接口来定义
            1.Object 接口定义了 Object.prototype 原型对象上的属性；
            2.ObjectConstructor 接口定义了 Object 类的属性  比如create之类的属性
            这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型。

            object代表所有非值类型的类型，例如数组函数对象，常用于泛型约束
            let o:object = {}//正确
            let o1:object = []//正确
            let o2:object = ()=>123 //正确
            let b:object = '123' //错误
            let c:object = 123 //错误

            {}
            看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型；字面量模式是不能修改值的
            let a1: {} = {name:1} //正确
            let a2: {} =  () => 123//正确
            let a3: {} = 123//正确

*/


/*
    // number[]
    // let arr1:number[] = [1,2,3,4,5]
    // let arr2:boolean[] = [true,false]
    // // 泛型方式 Array<boolean>
    // let arr3:Array<boolean> = [true,false]
    // // 数组普通类型
    // // 定义对象数组使用interface
    // interface X {
    //     name : string
    //     age?:number
    // }

    // let arr:X[] = [{name:"我"},{name:"是"}]

    // // 二维数组
    // let arr4:number[][] = [[1],[2],[3]]
    // let arr5:Array<Array<number>> = [[1],[2],[3]]

    // // 大杂烩数组
    // let arr6:any[] = [1,'sad',true,{}]
    // let arr7:[number,string,boolean,{}] = [1,'sad',true,{}]

    // function a(...args:any[]){
    //     console.log(args)
    // }
    // a(1,2,3)

    // // 如何定义类数组
    // function Arr(...args:any): void {
    //     console.log(arguments) 
    //     //ts内置对象IArguments 定义
    //     let arr:IArguments = arguments
    // }
    // Arr(111, 222, 333)
     
    // //其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
    // interface IArguments {
    // [index: number]: any;
    // length: number;
    // callee: Function;
    // }
*/

/*
    // 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
    // 2.函数默认的参数 | 函数可选参数  a:number = 10 代表a的默认值为10 
        // a?:number 代表可选参数 即a可以传也可以不传  默认值和可选参数不能一起使用
    // 3.参数是一个对象如何定义 使用interface定义
    // 4.函数this类型  ts可以定义this的类型，js不行
    // 5.函数重载
    // function add(a:number,b:number):number{
    //     return a+b
    // }
    // const add = (a:number,b:number):number => a+b
    // console.log(add(1,5));


    // function add(a:number = 10,b:number = 20):number{
    //          return a+b
    //      }
    //      console.log(add(1,2));


    // interface User {
    //     name:string
    //     age:number
    // }
    // function add(user: User):User{
    //     return user
    // }
    // console.log(add({name:"wo",age:24}));
    

    // interface Obj {
    //     user:number[]
    //     add:(this:Obj,num:number)=>void
    // }
    // //  ts可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型
    // let obj:Obj = {
    //     user:[1,2,3],
    //     add(this:Obj,num:number){
    //         this.user.push(num)
    //     },
    // }
    // obj.add(4)
    // console.log(obj);
    

    // let user:number[] = [1,2,3]
    // function findNum(add:number[]):number[] //如果传的是一个number类型的数组就做添加操作
    // function findNum(id:number[]):number[] //如果传入了id就是单个查询，查询该id的值
    // function findNum():number[] //如果没有传入东西就是查询全部
    // function findNum(ids?:number | number[]):number[]{
    //     if(typeof ids == 'number'){
    //         return user.filter(v=>v ==ids)  //v指的是value
    //     }
    //     else if(Array.isArray(ids)){
    //         user.push(...ids)
    //         return user
    //     }else{
    //         return user
    //     }
    // }
    // console.log(findNum([2]));
    */


/*
    //例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串 例如 a:number | string 就代表a可以给他数字类型和字符串类型
// let myPhone: number | string  = '010-820'
 
 
//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
// let myPhone1:number | string = true
// 函数也可以使用联合类型
// let fn = function (type:number | boolean):boolean {
//     return !!type
// }
// let result = fn(1)
// console.log(result);
 
// interface People{
//     name:string,
//     age:number
// }
// interface Man {
//     sex:number
// }

// const xiaoman = (man:People & Man):void => { //交叉类型类似extend，可以将两个interface引入
//     console.log(man);
// }

// xiaoman({
//     name:"xiaoman",
//     age:123,
//     sex:1
// })

// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
// let fn = function(num:number | string):void{
//     console.log((num as string).length);
// }
// fn('12345')
// interface A{
//     run:string
// }
// interface B{
//     build:string
// }
// let fn = (type:A|B):void =>{
//     console.log((<A>type).run); //这样可以欺骗编译器，但是会造成错误
//     // console.log((type as A).run);
// }
// fn({
//     build:"123"
// })
// 使用any临时断言
// window.abc = 123
//这样写会报错因为window没有abc这个东西
// (window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。

// as const
// 是对字面值的断言，与const直接定义常量是有区别的
// 如果是普通类型跟直接const 声明是一样的
       {const names = "abc"
        names = 'aa' //无法修改

        let names2 = 'xiaoman' as any
        names2 = 'aa' //无法修改
        }
       //数组
    //    let a1 = [10,20] as const;
    //    const a2 = [10,20];
    // //    a1.unshift(30); //错误，此时已经断言字面量为[10,20],数据无法做任何修改
    //    a2.unshift(30); //错误，没有修改指针
    //    console.log(a2);
       
// 类型断言只能欺骗编译器进行编译，不能改变结果
// const fn = (type:any):boolean=>{
//     return type as boolean
// }
// let bbb = fn(1)
// console.log(bbb);
*/

/*
        
// ts内置对象
// const date:number = new Date().getTime()
// let b:Boolean = new Boolean(1)
// console.log(b);
// let n:Number = new Number(false)
// console.log(n);
// let s: String = new String('哔哩哔哩关注小满zs')
// console.log(s)
// let d: Date = new Date()
// console.log(d)
// let r: RegExp = /^1/
// console.log(r)
// let e: Error = new Error("error!")
// console.log(e)
// let body: HTMLElement = document.body;
// let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
// let div:HTMLElement = document.querySelector('div') as HTMLDivElement
// document.addEventListener('click', function (e: MouseEvent) {
    
// });
//dom元素的映射表
// interface HTMLElementTagNameMap {
//     "a": HTMLAnchorElement;
//     "abbr": HTMLElement;
//     "address": HTMLElement;
//     "applet": HTMLAppletElement;
//     "area": HTMLAreaElement;
//     "article": HTMLElement;
//     "aside": HTMLElement;
//     "audio": HTMLAudioElement;
//     "b": HTMLElement;
//     "base": HTMLBaseElement;
//     "bdi": HTMLElement;
//     "bdo": HTMLElement;
//     "blockquote": HTMLQuoteElement;
//     "body": HTMLBodyElement;
//     "br": HTMLBRElement;
//     "button": HTMLButtonElement;
//     "canvas": HTMLCanvasElement;
//     "caption": HTMLTableCaptionElement;
//     "cite": HTMLElement;
//     "code": HTMLElement;
//     "col": HTMLTableColElement;
//     "colgroup": HTMLTableColElement;
//     "data": HTMLDataElement;
//     "datalist": HTMLDataListElement;
//     "dd": HTMLElement;
//     "del": HTMLModElement;
//     "details": HTMLDetailsElement;
//     "dfn": HTMLElement;
//     "dialog": HTMLDialogElement;
//     "dir": HTMLDirectoryElement;
//     "div": HTMLDivElement;
//     "dl": HTMLDListElement;
//     "dt": HTMLElement;
//     "em": HTMLElement;
//     "embed": HTMLEmbedElement;
//     "fieldset": HTMLFieldSetElement;
//     "figcaption": HTMLElement;
//     "figure": HTMLElement;
//     "font": HTMLFontElement;
//     "footer": HTMLElement;
//     "form": HTMLFormElement;
//     "frame": HTMLFrameElement;
//     "frameset": HTMLFrameSetElement;
//     "h1": HTMLHeadingElement;
//     "h2": HTMLHeadingElement;
//     "h3": HTMLHeadingElement;
//     "h4": HTMLHeadingElement;
//     "h5": HTMLHeadingElement;
//     "h6": HTMLHeadingElement;
//     "head": HTMLHeadElement;
//     "header": HTMLElement;
//     "hgroup": HTMLElement;
//     "hr": HTMLHRElement;
//     "html": HTMLHtmlElement;
//     "i": HTMLElement;
//     "iframe": HTMLIFrameElement;
//     "img": HTMLImageElement;
//     "input": HTMLInputElement;
//     "ins": HTMLModElement;
//     "kbd": HTMLElement;
//     "label": HTMLLabelElement;
//     "legend": HTMLLegendElement;
//     "li": HTMLLIElement;
//     "link": HTMLLinkElement;
//     "main": HTMLElement;
//     "map": HTMLMapElement;
//     "mark": HTMLElement;
//     "marquee": HTMLMarqueeElement;
//     "menu": HTMLMenuElement;
//     "meta": HTMLMetaElement;
//     "meter": HTMLMeterElement;
//     "nav": HTMLElement;
//     "noscript": HTMLElement;
//     "object": HTMLObjectElement;
//     "ol": HTMLOListElement;
//     "optgroup": HTMLOptGroupElement;
//     "option": HTMLOptionElement;
//     "output": HTMLOutputElement;
//     "p": HTMLParagraphElement;
//     "param": HTMLParamElement;
//     "picture": HTMLPictureElement;
//     "pre": HTMLPreElement;
//     "progress": HTMLProgressElement;
//     "q": HTMLQuoteElement;
//     "rp": HTMLElement;
//     "rt": HTMLElement;
//     "ruby": HTMLElement;
//     "s": HTMLElement;
//     "samp": HTMLElement;
//     "script": HTMLScriptElement;
//     "section": HTMLElement;
//     "select": HTMLSelectElement;
//     "slot": HTMLSlotElement;
//     "small": HTMLElement;
//     "source": HTMLSourceElement;
//     "span": HTMLSpanElement;
//     "strong": HTMLElement;
//     "style": HTMLStyleElement;
//     "sub": HTMLElement;
//     "summary": HTMLElement;
//     "sup": HTMLElement;
//     "table": HTMLTableElement;
//     "tbody": HTMLTableSectionElement;
//     "td": HTMLTableDataCellElement;
//     "template": HTMLTemplateElement;
//     "textarea": HTMLTextAreaElement;
//     "tfoot": HTMLTableSectionElement;
//     "th": HTMLTableHeaderCellElement;
//     "thead": HTMLTableSectionElement;
//     "time": HTMLTimeElement;
//     "title": HTMLTitleElement;
//     "tr": HTMLTableRowElement;
//     "track": HTMLTrackElement;
//     "u": HTMLElement;
//     "ul": HTMLUListElement;
//     "var": HTMLElement;
//     "video": HTMLVideoElement;
//     "wbr": HTMLElement;
// }

// 当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了而他们的定义文件，则在 TypeScript 核心库的定义文件中
// 内置promise
// function promise():Promise<number>{  // 函数定义返回promise 语法规则:       Promise<T> 类型
//     return new Promise<number>((resolve,reject)=>{ //promise需要提前声明返回的是什么类型 直接在Promise后加<所返回的类型>即可
//         resolve(1)
//     })
// }
// promise().then(res=>{
//     console.log(res);
    
// })
*/
/*
    // ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写，就是下面这样。

//定义类
// class Person {
//     constructor () {
 
//     }
//     run () {
        
//     }
// }
// class Person{
//     name:string
//     age:number = 0
//     // 这样引发了第二个问题你如果了定义了变量不用 也会报错 通常是给个默认值 或者 进行赋值
//     sub:boolean
//     // 在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
//     constructor(name:string,age:number,sub:boolean){
//         this.name = name
//         this.age = age
//         this.sub = sub
//     }
// }

// console.log(new Person("小满",22,false));

// 类的修饰符 总共三个 public private protected
// 1.public
// class Person{
//     public name:string //设定为public 公开，内部外部都能查看，并且默认值为公开
//     private age:number = 0 //只能在内部访问
//     protected sub:boolean //设定为内部和子类访问
//     constructor(name:string,age:number,sub:boolean){
//         this.name = name
//         this.age = age
//         this.sub = sub
//     }
// }

// let p = new Person("小满",22,false)
// p.name


// static 静态类型和静态方法
// class Person{
//     protected name:string
//     private age:number = 0
//     public sub:boolean 
//     static aaa:string = '123456'
//     constructor(name:string,age:number,sub:boolean){
//         this.name = name
//         this.age = age
//         this.sub = sub
//         // this.run()
//         // constructor也点用不了run（静态类）
//     }
//     static run(){
//         return '789' // 不能通过this去访问变量，只能访问static修饰的变量
//     }
//     static dev(){
//         return 'dev' //两个静态函数可以互相用this调用
//         // this.aaa
//     }
// }
// console.log(Person.run());

// Person.aaa  //可以直接通过类名去访问，不用new,不能通过this访问，只能访问static修饰的变量
// let p = new Person("a",22,false)

// 可以通过interface 去约束这个类
// interface Person {
//     run(type:boolean): boolean
// }
// interface H{
//     set():void
// }
// class A{
//     params:string
//     constructor(params){
//         this.params = params
//     }
// }
// class Man extends A implements Person,H{  //implements 关联作用
//     run(type:boolean):boolean{
//         return type
//     }
//     set(): void {
        
//     }
// }
*/


/*

// 抽象类不能直接定义，只能在抽象类中定义，然后在派生类中写方法
abstract class A {
    name: string
    constructor(name: string) {
        this.name = name
    }
    setName(name:string){
        this.name = name
    }
    abstract getName(): string
}
// 抽象类

class B extends A {
    constructor() {
        super('abc')
    }
    getName(): string {
        return this.name
    }
}

let b = new B()
b.setName('d')
console.log(b.getName());
// 派生类


*/

/*
    // 元组 定长定量的数组
// let arr:[number,string] = [1,'string']
 
 
// let arr2: readonly [number,boolean,string,undefined] = [1,true,'sring',undefined]


// let arr:[number,string] = [1,'string']
// arr[0].length //error 类型“number”上不存在属性“length”。
// arr[1].length //success

// 元组类型还可以支持自定义名称和变为可选的
// let a:[x:number,y?:boolean] = [1]


// 越界元素
// let arr:[number,string] = [1,'string']
// arr.push(true)//error，对于越界的元素他的类型被限制为 联合类型（就是你在元组中定义的类型）

// 应用场景 例如定义excel返回的数据

// let excel: [string, string, number, string][] = [
//     ['title', 'name', 1, '123'],
//     ['title', 'name', 1, '123'],
//     ['title', 'name', 1, '123'],
//     ['title', 'name', 1, '123'],
//     ['title', 'name', 1, '123'],
// ]
*/

/*
    
// 枚举
// 1.数字枚举 例如红绿蓝 Red = 0 Green = 1 Blue= 2 分别代表红色0 绿色为1 蓝色为2
// enum Types{
//     Red,
//     Green,
//     BLue
//  }
//  这样写就可以实现应为ts定义的枚举中的每一个组员默认都是从0开始的所以也就是
// enum Types{
//     Red = 0,
//     Green = 1,
//     BLue = 2
//  }
//默认就是从0开始的 可以不写值

//  增长枚举，我们定义了一个数字枚举， Red使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Type.Red的值为 1， Green为 2， Blue为 3。
// enum Types{
//     Red = 1,
//     Green,
//     BLue
//  }

// 2.字符串枚举。字符串枚举的概念很简单。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
// enum Types{
//     Red = 'red',
//     Green = 'green',
//     BLue = 'blue'
// } 
// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息，字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。

// 异构枚举，枚举可以混合字符串和数字成员

// enum Types{
//     No = "No",
//     Yes = 1,
//  }

// 4.接口枚举，定义一个枚举Types 定义一个接口A 他有一个属性red 值为Types.yyds声明对象的时候要遵循这个规则

// enum Types {
//     yyds,
//     dddd
// }
// interface A {
//     red:Types.yyds
// }

// let obj:A = {
//     red:Types.yyds
// }

// 5.const枚举
// let  和 var 都是不允许的声明只能使用const

// 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义

// const 声明的枚举会被编译成常量
// 普通声明的枚举编译完后是个对象

// const enum Types{
//     No = "No",
//     Yes = 1,
//  }

// 6.反向映射，它包含了正向映射（ name -> value）和反向映射（ value -> name）要注意的是 不会为字符串枚举成员生成反向映射


// enum Enum {
//     fall
// }
// let a = Enum.fall;
// console.log(a); //0
// let nameOfA = Enum[a];
// console.log(nameOfA); //fall
*/



/*
    // 类型推论
// let str = 'abc' //未定义类型时 TS会推断一个类型并定义它，并且不能再赋值给别的类型
// str = 'asd'
// 如果没有给变量赋值页眉有给这个变量定义类型，就会给这个变量推断为any类型
// let str
// str = 123
// str = null

// 类型别名：type 关键字（可以给一个类型定义一个名字）多用于复合类型

// 定义类型别名
// type str = string
// let s:str = "我是小满"
// console.log(s);

// 定义函数别名
// type str = () => string
// let s: str = () => "我是小满"
// console.log(s);

// 定义联合类型别名
// type str = string | number
// let s: str = 123
// let s2: str = '123'
// console.log(s,s2);

// 定义值的别名
// type value = boolean | 0 | '213'
// let s:value = true  // 变量s的值  只能是上面value定义的值

// type 和 interface 还是一些区别的 虽然都可以定义类型

// 1.interface可以继承  type 只能通过 & 交叉类型合并
// 2.type 可以定义 联合类型 和 可以使用一些操作符 interface不行
// 3.interface 遇到重名的会合并 type 不行

// type 高级用法 ：extends 拥有包含的意思，左边的值会作为右边值的子类型遵循图中上下的包含关系
// type a = 1 extends number ? 1 : 0 //1
// type a = 1 extends Number ? 1 : 0 //1
// type a = 1 extends Object ? 1 : 0 //1
// type a = 1 extends any ? 1 : 0 //1
// type a = 1 extends unknow ? 1 : 0 //1

// type a = 1 extends never ? 1 : 0 //0  因为never是最底层的类型，所以包含不了其他的类型，所以是0

// 顶级类型 any unknow
// t2 Object
// t3 Number String Boolean
// t4 number string boolean
// t5 1 'text' true
// t6 never   

*/


/*
 // never类型 TS将使用never类型来表示不应该存在的状态
// type A = string & number  不可能既是字符串又是数字，所以是never类型
// function xm(): never {
//     // throw new Error('xm') //有错误才可以是never类型
//     while(true){
//         //  死循环也可以是never类型
//     }
// }

// type A = void | number |never // 在使用联合类型时如果类型中包括never，则never类型不显示，never类型会被直接忽略掉

//void类型只是没有返回值 但本身不会出错
// function Void():void {
//     console.log();
// }

// 只会抛出异常没有返回值
// function Never():never {
// throw new Error('aaa')
// }

// never 类型的一个应用场景
// 举一个我们可能会见到的例子

// type A = '小满' | '大满' | '超大满' 

// function isXiaoMan(value:A) {
//    switch (value) {
//        case "小满":
//            break 
//        case "大满":
//           break 
//        case "超大满":
//           break 
//        default:
//           //是用于场景兜底逻辑
//           const error:never = value;
//           return error
//    }
// }
// 比如新来了一个同事他新增了一个篮球，我们必须手动找到所有 switch 代码并处理，否则将有可能引入 BUG 。而且这将是一个“隐蔽型”的BUG，如果回归面不够广，很难发现此类BUG。

// type A = '小满' | '大满' | '超大满' | "小小满"

// function isXiaoMan(value: A) {
//     switch (value) {
//         case "小满":
//             break
//         case "大满":
//             break
//         case "超大满":
//             break
//         case "小小满":
//             break
//         default:
//             //是用于场景兜底逻辑
//             const error: never = value; //如果有错误则需要去修改之前的代码，由于任何类型都不能赋值给 never 类型的变量，所以当存在进入 default 分支的可能性时，TS的类型检查会及时帮我们发现这个问题
//             return error
//     }
// }
 */

/**
 
// let a1:symbol = Symbol(1) //唯一的
// let a2:symbol = Symbol(1) //唯一的
// console.log(a1 === a2); //Symbol是唯一的意思，单独分配内存
// // for Symbol for全局symbol有无注册过这个key,如果有直接拿来用，如果没有就去创建一个
// console.log( Symbol.for('a') === Symbol.for('a'));

// let obj = {
//     name:1,
//     [a1]:111,
//     [a2]:222 //防止命名重复引发的覆盖（解决属性的key重复的问题）

// }
// // console.log(obj);
// // for in 不能读到symbol
// // for (let key in obj){
// //     console.log(key); //只能读到name读不到里面的值
    
// // }
// // keys 也读不到symbol 
// // console.log(Object.keys(obj));

// // // getOwnPropertNames也读不到
// // console.log(Object.getOwnPropertyNames(obj));

// // Object.getOwnPropertySymbols可以取到symbol的值，但是name没了
// // console.log(Object.getOwnPropertySymbols(obj));

// // ES6新增语法 Reflect.ownkeys可以取到name和symbol的值
// // console.log(Reflect.ownKeys(obj));

 */


/*
    // 1.生成器 用法一样
// function* gen() {
//     yield Promise.resolve('a') //同步异步
//     yield 'b'
//     yield 'c'
//     yield 'd'
// }
// const man = gen()
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());
// console.log(man.next()); //可以自动迭代 如果done为true,则没有后续next


// 2.迭代器
// 3. set map

// let set:Set<number> = new Set([1,1,2,2,3,3]) //和数组有区别  Set天然去重 即1，2，3
// console.log(set);
// let map:Map<any,any> = new Map()
// let Arr = [1,2,3]
// map.set(Arr,'e')
// console.log(map.get(Arr));

// function args () {
//     console.log(arguments);//伪数组
// }

// let list = document.querySelectorAll('div') //伪数组

// 4.迭代器的语法糖 for of
// for (let value of map) {
//     console.log(value);

// }
// for of 对象不可以使用，因为对象没有iterato


// 5.解构 底层原理也是去调用iterator

// let a = [4,5,6]
// let copy = [...a] //也是去调用iterator
// console.log(a);

// 6.对象支持for of
let obj = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    }
                } else {
                    return {
                        value:this.current++,
                        done:false
                    }        
                }
            }
        }
    }
}
let x = [...obj]
console.log(x);

*/



/*
    // 泛型 即动态类型
// 泛型优化语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

// function Add<T>(a: T, b: T): Array<T>  {
//     return [a,b]
// }
 
// Add<number>(1,2)
// Add<string>('1','2') //会自动推断是什么类型
// // 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

// function Sub<T,U>(a:T,b:U):Array<T|U> {
//     const params:Array<T|U> = [a,b]
//     return params
// }
// Sub<Boolean,number>(false,1)


// 定义泛型接口
// 生命接口的时候在名字后面加一个<参数>，使用的时候传递类型
// interface Data<T> {
//     msg:T
// }
// let data:Data<number> = {
//     msg:1
// }
// function add<T,K>(a:T,b:K):Array<T | K>{ //泛型可以设置默认值 T = number就代表默认值是number类型
//     return [a,b]
// }
// add(1,false)
// 泛型可以封装axios请求，并且可以起约束作用
// function find<T>(items: T[], callback: (item: T, index: number) => boolean): T | undefined {
//     for (let i = 0, len = items.length; i < len; i++) {
//         if (callback(items[i], i)) {
//             return items[i];
//         }
//     }
// }

// const items = [{ a: 1 }, { a: 2 }, { a: 4 }];
// // const items = [{ a: 1 }, { a: 2 }, { a: 4 }, null];  写这个会报错，不知道为什么
// const result = find(items, (item, index) => item.a === 2);

// 首先是给函数声明了一个类型变量T，后面要求items是一个T类型的数组，然后后面的callback函数的参数item是一个T类型的变量，index为数字，然后callback返回boolean类型结果，整个find函数返回T类型结果或undefined如上，我们就能准确定义函数的每一个参数了，参数与参数，参数与返回结果之间就形成了约束关系
*/


/*
    // 泛型约束
// 在类型后面跟一个extends 再跟一个约束的类型
// function add<T extends number>(a:T,b:T){
//     return a+b
// }
// add(1,2)

// interface Len {
//     length:number
// }
// function fn<T extends Len>(a:T){
//     a.length
// }
// fn('123')
// fn([1,2,3])

// let obj = {
//     name:'a',
//     sex:'男'
// }
// type Key = keyof typeof obj
// // age keyof
// function ob<T extends object,K extends keyof T>(obj:T,key:K){
//     return obj[key]
// }
// ob(obj,'name')
// interface Data{
//     name:string
//     age:number
//     sex:string
// }

// type Options<T extends object> = {
//     [key in keyof T]?:T[key] //相当于做了一次循环 把name、age、sex后面加上了？，同样也可以添加只读属性（readonly）之类的
// }
*/


// "compilerOptions": {
//     "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
//     "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
//     "diagnostics": true, // 打印诊断信息 
//     "target": "ES5", // 目标语言的版本
//     "module": "CommonJS", // 生成代码的模板标准
//     "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
//     "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
//     "allowJS": true, // 允许编译器编译JS，JSX文件
//     "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
//     "outDir": "./dist", // 指定输出目录
//     "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
//     "declaration": true, // 生成声明文件，开启后会自动生成声明文件
//     "declarationDir": "./file", // 指定生成声明文件存放目录
//     "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
//     "sourceMap": true, // 生成目标文件的sourceMap文件
//     "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
//     "declarationMap": true, // 为声明文件生成sourceMap
//     "typeRoots": [], // 声明文件目录，默认时node_modules/@types
//     "types": [], // 加载的声明文件包
//     "removeComments":true, // 删除注释 
//     "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
//     "noEmitOnError": true, // 发送错误时不输出任何文件
//     "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
//     "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
//     "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
//     "strict": true, // 开启所有严格的类型检查
//     "alwaysStrict": true, // 在代码中注入'use strict'
//     "noImplicitAny": true, // 不允许隐式的any类型
//     "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
//     "strictFunctionTypes": true, // 不允许函数参数双向协变
//     "strictPropertyInitialization": true, // 类的实例属性必须初始化
//     "strictBindCallApply": true, // 严格的bind/call/apply检查
//     "noImplicitThis": true, // 不允许this有隐式的any类型
//     "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
//     "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
//     "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
//     "noImplicitReturns": true, //每个分支都会有返回值
//     "esModuleInterop": true, // 允许export=导出，由import from 导入
//     "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
//     "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
//     "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
//     "paths": { // 路径映射，相对于baseUrl
//       // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
//       "jquery": ["node_modules/jquery/dist/jquery.min.js"]
//     },
//     "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
//     "listEmittedFiles": true, // 打印输出文件
//     "listFiles": true// 打印编译的文件(包括引用的声明文件)
//   }
   
//   // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
//   "include": [
//      "src/**/*"
//   ],
//   // 指定一个排除列表（include的反向操作）
//    "exclude": [
//      "demo.ts"
//   ],
//   // 指定哪些文件使用该配置（属于手动一个个指定文件）
//    "files": [
//      "demo.ts"
//   ]