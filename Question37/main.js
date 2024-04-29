"use strict";
/* Question 37; Large Shirts: Modify the make_shirt() function so that shirts are large by default with
 a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// function large_shirt (size:string ,label:string){
//     return  size +  label}
//     let myAssignment = large_shirt('large', 'I love TypeScript');
//     console.log(myAssignment);
// Making large as Default
function make_shirt(label, size = `Large`) {
    return size + label;
}
let myAssignment = make_shirt(` Free Palestine`);
console.log(myAssignment);
// making medium  default message
//    function make_shirt( label:string , size:string='Medium' ){
//         return  size +  label
//     }
//     let myAssignment2 = make_shirt( 'I love TypeScript');
//     console.log(myAssignment2);
