/* Question 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting
to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let users_name: string[] = [`admin(Daniyal)` , `Alyan` , `Umer` , `Isfhan` , `Ali`];


for (let i = 0; i <= users_name.length; i++) {
    if (users_name[i] === "admin(Daniyal)") {
        console.log(`\n Hello ${users_name[i]}, would you like to see a status report?\n`);
    } else {
        console.log(`Hello ${users_name[i]}, thank you for logging in again.`);
    }
}   