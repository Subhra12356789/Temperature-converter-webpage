  function xxx(){
            var temp,result;
var select=document.getElementById("select");
var value=select.value;
var number=document.getElementById("number");
var result_text=document.getElementById("result_text");
var div=document.getElementById("div");
div.style.visibility="visible";
 temp=number.value;



if(value==0){
    result=(temp-32)*5/9;
    result_text.innerHTML=result +'°C' ;

}
else if(value==1){
    result=(9/5*temp)+32;
    result_text.innerHTML=result +'°F' ;


}


        }
