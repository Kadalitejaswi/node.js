var data=require('./accounts.js')
var data1=require('./accountdata')
console.log(data(123));


var c;
var balance=(accountNum)=>{
    let user=data(accountnum)
              return console.log(`
              Your account balance is :${data1[key].balance}`)
}

// var withdraw=(amount)=>{
//     for(let accounts of data)
//     if( accounts.accountNo === accountNo){
    
//       var amt= data1[account].balance-amount;
//      return console.log(amt);
       
//     }else{
//         return console.log("Invalid Account no.");
//        }   
//  }      
 
 

//  var deposite=(amount)=>{
//     if(data[account].accountNo===accountnum){
    
//         var amt1=data[account].balance+amount; 
//         return console.log(amt1);
        
//       }else{
//           return console.log("Invalid Account no.");
//          }   
//    }         
  
// console.log(deposite(200));
// console.log(withdraw(200));

// console.log(balance(123));


module.exports=balance()  


  




              