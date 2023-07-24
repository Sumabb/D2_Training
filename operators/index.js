function add(){ 

   let num1=document.getElementById("num1").value; 

   console.log(num1); 

   let num2=document.getElementById("num2").value; 

   let result=parseInt(num1)+parseInt(num2); 

   console.log(result); 

   document.getElementById("demo").innerHTML=result; 

} 

function sub(){ 

    let num1=document.getElementById("num1").value; 

      let num2=document.getElementById("num2").value; 

      let result; 

      num1=parseInt(num1); 

      num2=parseInt(num2); 

      if(num1 > num2) 

      { 

        result=num1-num2; 

      } 

      else{ 

        result=num2-num1; 

      } 

      console.log(result); 

      document.getElementById("demo").innerHTML=result; 

    

} 

function mul(){ 

    let num1=document.getElementById("num1").value; 

    let num2=document.getElementById("num2").value; 

    let result=num1*num2; 

    document.getElementById("demo").innerHTML=result; 

} 

function div(){ 

    let num1=document.getElementById("num1").value; 

    let num2=document.getElementById("num2").value; 

    let result; 

    num1=parseInt(num1); 

      num2=parseInt(num2); 

    if((num1 > 0) &&(num2 > 0)) 

    { 

        if(num1 > num2) 

        { 

            result=num1/num2; 

        } 

        else{ 

            result=num2/num1; 

        } 

    } 

    else{ 

        console.log('Division is not possible'); 

    } 

    document.getElementById("demo").innerHTML=result; 

} 

function mod(){ 

let num1=document.getElementById("num1").value; 

    let num2=document.getElementById("num2").value; 

    let result; 

    num1=parseInt(num1); 

      num2=parseInt(num2); 

    if((num1 > 0) &&(num2 > 0)) 

    { 

        if(num1 > num2) 

        { 

            result=num1%num2; 

        } 

        else{ 

            result=num2%num1; 

        } 

    } 

    else{ 

        console.log('Modulo is not possible'); 

    } 

    document.getElementById("demo").innerHTML=result; 

 
