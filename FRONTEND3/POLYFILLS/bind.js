delete Function.prototype.bind;

//bind method polyfills
Function.prototype.bind = function(obj,...fixedargs){
    //we are saving intro function defination through this keyword
    const oldfn = this;

    const newFn = function(...nonFixedargs){
        // return oldfn.call(obj,...fixedargs,...nonFixedargs);

        //call method polyfills
        obj.tempfn = oldfn;
        let ans = obj.tempfn(...fixedargs,...nonFixedargs)
        delete obj.tempfn;
        return ans;
    }
    return newFn;
}

let obj ={
    nam:'pc',
    age: 23,
}
function Intro(city1, city2){
    console.log(this);
    return `Hi I am ${this.nam} and my city1 is ${city1} and my city2 is ${city2}`;
}

console.log(Intro('delhi','blr'));

let newintro = Intro.bind(obj,'delhi');

console.log(newintro('blr'));
console.log(newintro('kop','dfh'));