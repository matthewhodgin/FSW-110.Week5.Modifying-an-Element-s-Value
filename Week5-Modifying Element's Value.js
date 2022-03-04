var x1=document.getElementById('text1').value;
var x2=document.getElementById('text2').value;
var x3=document.getElementById('text3').value;
 
document.getElementById('button').addEventListener("click",Submit);
function Submit(){

    alert("First Name  "+document.getElementById('text1').value+
    "\nLast Name "+document.getElementById('text2').value+
    "\nEmail "+document.getElementById('text3').value);
}


document.getElementById('text1').style.marginLeft= "20px";
document.getElementById('text2').style.marginLeft= "20px";
document.getElementById('text3').style.marginLeft= "20px";