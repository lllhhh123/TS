// 类装饰器
const Base:ClassDecorator = (target) =>{
    console.log(target);
    target.prototype.xiaoman = 'a'
    target.prototype.fn = () =>{
        console.log('abc');
        
    }
}
@Base
class Http {
    // 可以无视里面的代码，直接添加
}
const http = new Http() as any
console.log(http.xiaoman);
