"use strict";
/* Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["Fahad", "Kashif", "Daniyal", "Asharib"];
console.log(guestlist);
console.log('Now we have three more friends to invite');
//the unshift() method is used to add one or more elements to the biggining of an array
guestlist.unshift('Ahmed');
console.log(guestlist);
// the splice() method is used to manupulate arrays by adding or removing elements at a specific position
guestlist.splice(2, 0, "Alyan");
console.log(guestlist);
guestlist.push('Isfhan');
console.log(guestlist);
for (let i = 0; i < guestlist.length; i++) {
    console.log(`${i + 1}. Mr.${guestlist[i]}! I would like to invite you at dinner on Monday `);
}
