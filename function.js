let buttonPresses = 0;


function helloWorld() {
    buttonPresses++;
    outputPresses();
}   

function askForANumber() 
{
    let value =prompt("Enter a number");
    if (value !== null)
    {
    console.log("factorial value" + factorial(value));
    }
} 

function factorial(n) 
{ 
    if (n == 0)
    {
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}

factorial(5); 