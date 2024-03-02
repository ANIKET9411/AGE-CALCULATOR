let input=document.querySelector('input');
let button=document.querySelector('button');
let month=document.querySelector('.month');
let year=document.querySelector('.year');
let day=document.querySelector('.day');
let container=document.querySelector('.container');
button.addEventListener('click',function(){
    let birthdate=new Date(input.value);
   let currentDate=new Date();
    console.log(currentDate);
    console.log(birthdate);
var ageInMilliseconds = currentDate - birthdate;
console.log(ageInMilliseconds);
var ageInSeconds = ageInMilliseconds / 1000;
var ageInMinutes = ageInSeconds / 60;
var ageInHours = ageInMinutes / 60;
var ageInDays = ageInHours / 24;

var years = Math.floor(ageInDays / 365);
var months = Math.floor((ageInDays % 365) / 30);
var days = Math.floor((ageInDays % 365) % 30);
if(years<0 || months<0 || day<0)
{
    alert('Not Born Yet');
}
else{
    month.innerText=months;
    day.innerText=days;
    year.innerText=years;
}
console.log(years,months,days);

});