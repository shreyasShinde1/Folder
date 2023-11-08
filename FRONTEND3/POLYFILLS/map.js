delete Array.prototype.map;

Array.prototype.map = function(callback){
    let newArr = [];

    for(let i = 0; i < this.length;i++){
        newArr.push(callback(this[i],i));
    }

    return newArr;
}

let arr = [1,2,3]

function callback(elem,index){
    return elem+2;
}

let newArr = arr.map(callback);

console.log(newArr);