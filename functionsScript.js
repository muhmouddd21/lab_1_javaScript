
    // console.log(localVar);   // not defined
    // console.log(testingVar);  // not defined
    
    
    function printVariables(value1,value2,value3 = 3){
        var localVar=3; 
        testingVar = 5;

        if(arguments.length > 3){
            let arr1=[];
            for(arg of arguments){
                arr1.push(arg);
            }
            return arr1;
        }
        return [value1,value2,value3];
    }
    printVariables(7,8,9);
    // console.log(localVar); // not defined because it is a function scope
    console.log(testingVar);   // testingVar became a global value
    


    // console.log(localVar2);   // not defined
    // console.log(testingVar2);  // not defined
    

    // console.log(funexp(10,11,12));  // error due to hoisting is not applied to functions expression
    var funexp = (value1,value2,value3 = 3) =>{
        var localVar2=3; 
        testingVar2 = 5;

        // if(arguments.length > 3){
        //     let arr1=[];
        //     for(arg of arguments){
        //         arr1.push(arg);
        //     }
        //     return arr1;
        // }
        return [value1,value2,value3];
    }
    console.log(funexp(10,11,12)); 
    // console.log(localVar2); // not defined
    console.log(testingVar2);  // testingVar became a global value



    //  ===================================================================


    function sum (x,y = 10){
        if(isNaN(x) || isNaN(y)){
            return "error";
        }
        return x+y;
    }
    console.log(sum(5,6));
    console.log(sum(5)); // undefined but i used default value
    console.log(sum("mahmoud")); // it will concatinating the mahmodud with 10
    console.log(sum("mahmoud")); // it will give an error due to checking if the input is number or not
    
    
