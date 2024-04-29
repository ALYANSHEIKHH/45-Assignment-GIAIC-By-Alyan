"use strict";
/* Question 42:  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Great_magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(greet) {
    for (let Names of Great_magicians) {
        console.log(greet, Names);
    }
}
;
show_magicians('The Greatt');
show_magicians('Hello, How are you Mr.');
