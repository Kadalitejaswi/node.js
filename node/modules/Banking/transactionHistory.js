var data1=require('./accountdata.js')
var data2=require('./bankOp.js')

 var transHisLog=[  
{
    accountNo       : 1444,
    transactionMode : "atm",
    withdrawlAmmont : 800,
    coupons         : "no",
    availableBal    : 5000,
    date            : "18/4/2018",
    time            : "20:51:33",
},{
    accountNo       : 1445,
    transactionMode : "atm",
    withdrawlAmmont : 800,
    coupons         : "no",
    availableBal    : 5000,
    date            : "18/4/2018",
    time            : "20:51:33",
},{
    accountNo       : 1446,
    transactionMode : "atm",
    withdrawlAmmont : 800,
    coupons         : "no",
    availableBal    : 5000,
    date            : "18/4/2018",
    time            : "20:51:33",
}
 ]


 function transHistory(accountNo){
    var user=data2.FindAccount(accountNo)     
    for(key in transHisLog){
        var c=0;
            if( transHisLog[key].accountNo === accountNo){
              c++;
              console.log(`AccountName :${user.name} ,
             Transaction History :`);
               return transHisLog[key]
             }
   }
   if(c == 0){
       console.log('account not found');   
   }
   }

module.exports=transHistory


   

   
   
   

   
 