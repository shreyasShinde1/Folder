const customer1 = {
    nam : 'pc',
    branch : 'HDFC',
    accountBalance : 10000,
    addMoney : function(amount){
        this.accountBalance += amount;
    }
}

console.log(customer1);

customer1.addMoney(200);

console.log(customer1);


const customer2 = {
    nam : 'ajay',
    branch : 'icici',
    accountBalance : 20000,
    addMoney : function(amount){
        this.accountBalance += amount;
    }
}
console.log(customer2);

customer2.addMoney(10000);

console.log(customer2);

//BUT IN THIS CODE THE PROBLEM IS WHEN NEW CUSTOMER COME 
//THEM AGAIN WE CREATE A NEW OBJECT IT'S VERY TIME CUNSUMING PROCEES
//SO WE CREATE A OBJECT CREATION USING FUNCTION
