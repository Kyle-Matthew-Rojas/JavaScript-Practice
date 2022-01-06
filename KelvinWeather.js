/*
This is a sample project called "Kelvin Weather" from codecademy
*/
var kelvin = 293;
var celsius = kelvin - 273;
var fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/* Extra practice (Newtown)*/
var newton = Math.floor(celsius * (33/100));
console.log(`This temperature is ${newton} degrees Newton.`);
