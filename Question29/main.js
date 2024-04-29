"use strict";
/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits
in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block
should print a statement, such as You really like bananas!
*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = [`Apple`, `Banana`, `Orange`];
if (favorite_fruits.includes('Apple')) {
    console.log('You really like Apple');
}
else {
    console.log('Apple is not in your list');
}
if (favorite_fruits.includes('Banana')) {
    console.log('You really like Banana');
}
else {
    console.log('Banana is not in your list');
}
if (favorite_fruits.includes('Orange')) {
    console.log('You really like Orange');
}
else {
    console.log('Orange is not in your list');
}
let fruit = `Mango`;
if (favorite_fruits.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}
else {
    console.log(`${fruit} is not in your list`);
}
let fruit2 = 'Pineapple';
if (favorite_fruits.includes(fruit2)) {
    console.log(`You really like ${fruit2}`);
}
else {
    console.log(`${fruit2} is not in your list`);
}
let fruit3 = 'Grapes';
if (favorite_fruits.includes(fruit3)) {
    console.log(`You really like ${fruit3}`);
}
else {
    console.log(`${fruit3} is not in your list`);
}
