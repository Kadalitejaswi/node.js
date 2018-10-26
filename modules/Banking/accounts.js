var data=require('./accountdata.js')
var c;
var login=(accountNum)=>{

        for(key in data){
      c=0;
         if( data[key].accountNo === accountNum){
           c++;
            return console.log(`Account found..Login Successful...!
            Accountnumber :${accountNum}
            Hello....${data[key].name}`)
         
          }
}
if(c == 0){
    console.log('account not found');
    
}
}


 module.exports=login
 
 
 
 

 