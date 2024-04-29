/* Question 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
 function city_name(city:string,country:string){
    return `${city}, ${country}`}


console.log(city_name('Lahore','Pakistan'));
console.log(city_name('Karachi','Pakistan'));
console.log(city_name("Bucharest " , "Romania"));
console.log(city_name("Moscow" , "Russia"));
console.log(city_name("Berlin" , "Germany"));