//Make first letter of constructor function in capital

function createCustomer(nam,branch,accBal){
    this.nam = nam;
    this.branch = branch;
    this.accBal = accBal;
    //  this.addmoney = function(amount){
    //     this.accBal += amount;
    //  }
    //but when we print this object then withdraw function 
    //is also printing in object therfor we are using new keyword to
    //handle new memory creation
}

createCustomer.prototype.withdraw = function(amount){
    this.accBal -= amount;
}

const customer1 = new createCustomer('ajay','HDFC',14000)
console.log(customer1);
customer1.withdraw(10000)
console.log(customer1);


//now this code is right to make a customer bank details