"use strict";
/* Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let userName = ['Alyan', 'Andrew', 'Adolf', 'Daniyal', 'Trump'];
//Empty List
userName = [];
if (userName.length > 0) {
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] == "Admin") {
            console.log(`\nHello ${userName[i]}, Would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${userName[i]}, thank you for logging in again!`);
        }
    }
}
else {
    console.log(`We need to find some users!`);
}
