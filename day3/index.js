var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器 ClassDecorator target构造函数
var Base = function (target) {
    console.log(target);
    target.prototype.xiaoman = 'a';
    target.prototype.fn = function () {
        console.log('abc');
    };
};
var Http = /** @class */ (function () {
    function Http() {
    }
    Http = __decorate([
        Base
    ], Http);
    return Http;
}());
var http = new Http();
console.log(http.xiaoman);
// 装饰器工厂，其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
// const Base = (name: string) => {
//     const fn: ClassDecorator = (target) => {
//         console.log(target)
//         target.prototype.xiaoman = name
//         target.prototype.fn = () => {
//             console.log('abc');
//         }
//     }
//     return fn
// }
// @Base('xiao yu')
// class Http {
//     // 可以不去破坏它自身的结构（无视里面的代码），直接添加
// }
// const http = new Http() as any
// console.log(http.xiaoman)
// 装饰器组合
// const watcher = (name: string): ClassDecorator => {
//     return (target: Function) => {
//         target.prototype.getParams = <T>(params: T): T => {
//             return params
//         }
//         target.prototype.getOptions = (): string => {
//             return name
//         }
//     }
// }
// const watcher2 = (name: string): ClassDecorator => {
//     return (target: Function) => {
//         target.prototype.getNames = ():string => {
//             return name
//         }
//     }
// }
// @watcher2('name2')
// @watcher('name')
// class A {
//     constructor() {
//     }
// }
// const a = new A();
// console.log((a as any).getOptions());
// console.log((a as any).getNames());
