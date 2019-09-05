function markseat(pass_seat)  
{  
   var v= document.getElementsByName(pass_seat).value
     document.getElementById('ans').value=v;
    

    /*var numberofseats= 0;  
    for(var i = 0; i < seat.length; i++)  
    {  
        if(seat[i].onclick)  
            numberofseats++;  
    }  
    if(numberseats > 2)  
    {  
        alert("You can't select more than two seats for a passenger !");  
        return false;  */
    }  

function showseat()  
{  
    var checkboxes = document.getElementsByName("pass_seat");  
    
        alert("You have clicked me !+checkboxes+");  
        return false;  
    }  


function AddFunction(num1,num2) {
   /*var c=a+b;*/
   var x=document.getElementById(num1).value;
    var y=document.getElementById(num2).value;
    var sum=parseInt(x)+parseInt(y);
   document.getElementById('txtresult').value=sum;
   
}
function myname()
{
     document.write ("joel gichuhi!");
    alert("my name is my name");
}
function displayDate(demo) {
  document.getElementById("demo").value= Date();
}
function getcost(){
    var carmod=document.getElementById('carmodel').value;

    if (carmod==="Volvo"){
        document.getElementById("textcost").value="Kshs 200000";
    }
    else if(carmod==="Saab"){
        document.getElementById("textcost").value="Kshs 250000";
    }
    else if(carmod=="Fiat"){
        document.getElementById('textcost').value="Kshs 2200000";
    }
    else if(carmod=="Audi"){
        document.getElementById('textcost').value="Kshs 150000";
    }
    else{
        document.getElementById('textcost').value="No valid";
    }

}