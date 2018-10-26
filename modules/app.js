console.log("I am data of App.js file")
 var msg="This is msg for transfering data between js files"
 var names=['john','rohn','sam']
var john={
  name:'john',
  age:'23',
}

var obj={
    names:names,
    john:john
}
//  module.exports=msg;
//  module.exports=names;
//  module.exports=john;

//  module.exports=obj;


 var showmsg=(names,age,msg)=>{
     console.log(`welcome ${names}
     your age${age}
     msg${msg}`);
     
 }

// module.exports=showmsg;
module.exports={
    showmsg:showmsg,
    obj:obj,
};

