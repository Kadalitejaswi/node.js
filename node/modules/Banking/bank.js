var data1=require('./bankOp.js')
var data2=require('./accounts.js')
var data3=require('./transactionHistory')

var accountNumber=1444
var amount=200
var user=data1.FindAccount(accountNumber)
if(user.accountNo){
console.log(data2(accountNumber));
console.log('Balance :',data1.Balance(accountNumber));
console.log(`Balance after withdrawing ${amount}:`,data1.Withdraw(accountNumber,amount));
console.log(`Balance After Deposit ${amount}:`,data1.Withdraw(accountNumber,amount));
console.log(data3(accountNumber));



}else{
    console.log("Account Not found");
    
}




    
 