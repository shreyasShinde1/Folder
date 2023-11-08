//if our broweser does not support the call method
delete Function.prototype.apply;

//then we write this function to achive the required output
Function.prototype.apply = function (obj,argsArray){
    //this keyword has function defination
    //it will store the sum function

    obj.tempFun = this;
    let ans = obj.tempFun(...argsArray)//spread operator

    delete obj.tempFun;
    return ans;
}

let obj = {
    a: 10,
    b: 20,
}

function sum(arg1,arg2){
    console.log(this);
    return arg1+arg2;
}

console.log(sum(1,2));//this keyword pointing to the window object
console.log(sum.apply(obj,[1,2]));//this keyword pointing to the obj object because of call method