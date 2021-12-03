//Given to convert fahernheit to temperature and vice versa
    var prompt = require('prompt-sync')();

    function toFahrenHeit(celcius)
    {
        degF=(celcius*(9/5))+32;
        console.log(degF);
    }
    function toCelcius(fahrenheit)
    {
        degC=(fahrenheit-32)*(5/9);
        console.log(degC);
    }

    let celTemp=parseInt(prompt("Enter Celcius Value"));
    let fahrTemp=parseInt(prompt("Enter Fahrenheit Value"));
    if(celTemp>0 && celTemp<100 && fahrTemp>32 && fahrTemp<212)
        {
            toFahrenHeit(celTemp);
            toCelcius(fahrTemp);
        }
    else
        {
            console.log("Temperature Is Not In The Given Range");
        }

