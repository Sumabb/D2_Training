 function greatest(num1,num2,num3) 
{ 

if((num1 > num2) && (num1 > num3)) 

{ 

    console.log('Num1 '+num1+' is greater'); 

} 

else if((num2 > num1 ) &&(num2 > num3)) 

{ 

    console.log('num2 '+num2+' is greater'); 

} 

else 

{ 

    console.log('num3 '+num3+' is greater'); 

} 

} 

greatest(12,34,45); 

greatest(120,34,45); 

greatest(12,340,45); 

function checkvowels(ch) 

{ 

    ch=ch.toLowerCase(); 

    switch(ch){ 

        case 'a': 

        case 'e': 

        case 'i': 

        case 'o': 

        case 'u': 

                console.log("The given "+ch+" is vowel"); 

                break; 

        default: 

            console.log("there is no vowel"); 

            break;         

    } 

} 

checkvowels('a'); 

checkvowels('i'); 

checkvowels('b'); 

function arithmetic(num1,num2,ch){ 

     

    switch(ch){ 

        case '+': 

            console.log(parseInt(num1)+parseInt(num2)); 

            break; 

        case '-': 

            console.log(parseInt(num1)-parseInt(num2)); 

            break; 

        case '*': 

            console.log(parseInt(num1)*parseInt(num2)); 

            break; 

    } 

} 

arithmetic(12,34,'+'); 

arithmetic(12,3,'-'); 

arithmetic(12,2,'*'); 

function increment(num1) 

{ 

    console.log(num1++); 

    console.log("Post Increment "+num1); 

    console.log("Pre Increment " +(++num1)); 

} 

increment(12); 

function decrement(num1) 

{ 

    console.log(num1--); 

    console.log("Post decrement "+num1); 

    console.log("Pre decrement " +(--num1)); 

} 

decrement(12); 

function assignment(num1,num2) 

{ 

 num1+=num2; 

    console.log(num1); 

    num1-=num2; 

    console.log(num1); 

    num1*=num2; 

    console.log(num1); 

    num1/=num2; 

    console.log(num1); 

    num1%=num2; 

    console.log(num1); 

} 

assignment(12,10); 
