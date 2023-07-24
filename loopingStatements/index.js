function forinloop(){ 

            const employee={name:"anu",location:"chennai",experience:10}; 

            let val=" "; 

            for(let x in employee){ 

                val+=employee[x]+" " 

            } 

            console.log(val); 

            document.getElementById("demo").innerHTML=val; 

        } 

        function forofloop(){ 

            const companyname=["HCL","TCS","CTS"]; 

            let data=" "; 

            for(let c of companyname) 

            { 

                data+=c+"<br/>"; 

            } 

            document.getElementById("demo").innerHTML=data; 

        } 

function datadisplay(){ 

        const company=["HCL","TCS","CTS","Wipro","Tech Mahindra","Ramco Systems"]; 
    
        console.log("Length of array data : "+company.length); 
    
        document.getElementById("demo").innerHTML=""; 
    
        for(let i=0;i< company.length;i++) 
    
        { 
    
            console.log(company[i]); 
    
            //document.getElementById("demo").innerHTML+="<br/>"; 
    
            document.getElementById("demo").innerHTML+=company[i]+"<br/>"; 
    
        } 
    
         
    
    } 
    
    function factorial() 
    
            { 
    
            let fact=1; 
    
            let num1=document.getElementById("num1").value; 
    
            for(let i=1;i<=num1;i++) 
    
            { 
    
                fact*=i; 
    
            } 
    
            console.log('Factorial of '+num1+' is '+fact); 
    
            document.getElementById("demo").innerHTML=fact; 
    
            } 
    
            function perfect(){ 
    
                // Perfect number : 6 => 1,2,3,6 => 1+2+3 = 6  
    
                let num1=document.getElementById("num2").value; 
    
                let i=1; 
    
                let sum=0; 
    
                while(i < num1) 
    
                { 
    
                    if(num1%i==0) 
    
                    { 
    
                        sum+=i; 
    
                    } 
    
                    i++; 
    
                } 
    
                if(sum==num1) 
    
                { 
    
                    //console.log('Num is Perfect'); 
    
                    document.getElementById("demo").innerHTML="Num "+num1+" is Perfect"; 
    
                } 
    
                else 
    
                { 
    
                    document.getElementById("demo").innerHTML="Num "+num1+" is not Perfect"; 
    
                } 
    
            } 
