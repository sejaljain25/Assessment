function getValue(elem) {
    document.getElementById('result').value+=elem; 
}
function solve() 
 { 
     var x = document.getElementById("result").value 
     var y = eval(x);
     document.getElementById("result").value = y ;
 } 
 function empty() {
     document.getElementById("result").value = "";
 }
 