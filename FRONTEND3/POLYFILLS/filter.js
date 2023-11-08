delete Array.prototype.filter;

Array.prototype.filter = function(callback){
    let newArr = [];

    for(let i = 0; i < this.length;i++){
        if(callback(this[i],i)){
            newArr.push(this[i])
        }
    }
    return newArr;
}

let arr = [1,2,3,4,5]

function callback(elem,index){
    return elem > 2;
}

let newArr = arr.filter(callback);

console.log(newArr);