function convertTemperature() {
    var celsius = document.getElementById("celsius").value;
    
    var fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    
    document.getElementById("result").innerHTML = "<p>Fahrenheit: " + fahrenheit + "</p>";
 }