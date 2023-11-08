function createCustomer(nam,branch,accBal){
    const customer = {};
    customer.nam = nam;
    customer.branch = branch;
    customer.accBal = accBal;
    customer.addMoney = function(amount){
        customer.accBal += amount;
    }
    return customer;
}

let customer1 = createCustomer('jerico','SBI',10000);

console.log(customer1);

let customer2 = createCustomer('vijay','HDFC',30000);
console.log(customer2);
customer2.addMoney(40000);
console.log(customer2);

//again in this code we got a one problem the problem is the
//addmoney function is visible in object directly we can put this
//function in createCustomer.prototype so it's not show in
// object directly
