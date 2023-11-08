delete Function.prototype.call;

Function.prototype.call = function(obj,...args){//rest operator
    obj.tempfunc = this;

    let ans = obj.tempfunc(...args)//spread operator

    delete obj.tempfunc;
    return ans;
}

let obj = {
    a: 10, 
    b : 20,
}

function sum(arg1,arg2){
    console.log(this);
    return arg1+arg2;
}
console.log(sum(1,2));
console.log(sum.call(obj,1,2));