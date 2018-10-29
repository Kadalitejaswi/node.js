var data1=require('./accountdata.js')

var findAccount=(accountNum)=>{
    for(key of data1){
        if( key.accountNo === accountNum){
          
            return key;
    }
}
}

var balance=(accountNumber)=>{
    var bal=findAccount(accountNumber)
        return bal.balance
}

var withdraw=(accountNumber,amount)=>{
    var bal=findAccount(accountNumber)
    if(amount>bal.balance)
        return "insufficient balance";
    else if((bal.balance-amount)<500)
        return "minimum balance required"
    else{
        bal.balance-=amount
        return bal.balance
       }   
 }      
 
 

 var deposite=(accountNumber,amount)=>{
    var bal=findAccount(accountNumber)
    if(amount>50000)
        return 'deposit must be less than 50000'
    else{
        bal.balance+=amount
    }
}


module.exports={
   FindAccount:findAccount,
   Balance: balance,
   Deposite:deposite,
   Withdraw:withdraw
}

  
  



              