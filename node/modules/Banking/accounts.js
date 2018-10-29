var data=require('./accountdata.js')

var login=(accountNum)=>{

        for(key of data){
     var c=0;
         if( key.accountNo === accountNum){
           c++;
          
            return `Account found..Login Successful...!
            
            Hello....${key.name}
            Accountnumber :${accountNum}
             
            `
         
          }
}
if(c == 0){
    console.log('account not found');
    
}
}


 module.exports=login;
 
 
 
 
 
 
 

 