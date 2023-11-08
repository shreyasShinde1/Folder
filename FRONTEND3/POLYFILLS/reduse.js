delete Array.prototype.reduse;

Array.prototype.reduse = function(callback,intialValue){
    let acc = intialValue;

    for(let i = 0; i < this.length; i++){
        if(acc === undefined){
            acc = this[i];
        }else{
            acc = callback(acc,this[i],i)
        }
    }
    return acc;
}
let arr = [1,2,3,4,5]

let sum = arr.reduse((acc,currentElem,index)=>{
    return acc+currentElem
},0)

console.log(sum);