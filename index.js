 function input(value){
   document.getElementById("screen").value +=value;
  
}
function cal(){
    let result =  eval(document.getElementById("screen").value);
     document.getElementById("screen").value = result;


}
function cleardisplay(){
     document.getElementById("screen").value = "";
}
