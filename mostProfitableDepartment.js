module.exports = function(dept){
 var objSale ={};
  var max =0;
  var name = ' ';
 for(var i=0;i<dept.length;i++){
  // var d = dept[i];
   var check = dept[i]//.department;
   //console.log(check)

   if(objSale[check.department]== undefined){
     objSale[check.department] =  0;
      }

        objSale[check.department] +=  check.sales;
 }

 //console.log(objSale);

  for( var q in objSale){
  if(objSale[q] > max ){
  max = objSale[q];
    name = q;
    console.log(name);
  }
  }
  return name;
 }
