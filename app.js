function number(num){
    var result=document.getElementById("result");
    result.value +=num;
    
}

function clir(){
    var result=document.getElementById("result");
    result.value = "";


}
 function getresult(){
    var result=document.getElementById("result");
    result.value= eval(result.value);
 }