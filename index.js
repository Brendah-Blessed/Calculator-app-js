const firstNumber = document.getElementById("num1");
const secondNumber = document.getElementById("num2");
const operator =document.getElementById("operator");
const output = document.getElementById("result")
//console.log(firstNumber)
function Calculate(){
    //code to be executed
    let num1 = firstNumber.value; //gettin the actual user value
    num1 = Number(num1) //convert from string to number
    let num2 = secondNumber.value;
    num2 = Number(num2) //converrt from string to number
    let myOperator = operator.value;
    //console log the values to ensure you are getting the all
    console.log(num1)
    console.log(num2)
    console.log(myOperator)
    //
    //perform the calculations
    if(myOperator === "add"){
        let result = num1 + num2; //addition formula
        output.textContent = "Result is: " + result;
    }else if(myOperator === "subtract"){
        let result = num1 - num2;
        output.textContent = "Result is: " + result;
    }else if(myOperator === "multiply"){
        let result = num1 * num2;
        output.textContent = "Result is: "+ result;
    }else if(myOperator ===  "divide"){
        let result = num1 / num2;
        output.textContent = "Result is: " + result;
    }else{
        
        output.textContent = "invalid operator"
    }
}
