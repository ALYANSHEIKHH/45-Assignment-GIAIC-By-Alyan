"use strict";
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personname = "Alyan";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.charAt(0).toUpperCase() + personname.slice(1).toLowerCase());
