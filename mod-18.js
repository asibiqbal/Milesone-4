// Module 18-1 
// What is Loop


// For Loop

// let numbers = [1,2,3,4,5];

// for(const num of numbers){
//     console.log(num);
// }


// 18-2 While Loop
// use let variable in while loop



// let num = 1;

// while(num <= 5){
//     console.log(num);
//     num++;
// }

// u should stop this while loop by adding some value(example - num++ or add more value), otherwise it will running infinitely.


// 18-3 
// Sum...



// let num = 1;  loop variable
// let sum = 0;

// while (num <= 10){ Loop Condition
//     console.log('No...' , num); Loop Statement
//     sum = sum + num;
//     console.log('sum..' , sum);
//     num++; increment/decrement
// }


// 18-4 Introduction to for loop

// There is a three part of for loop

// for ( Decalare loop variable; Loop Condition; increment/decrement ){
//  loop statement
// }



// for(let num = 1; num <= 10; num++){
//     // console.log(num);
// }


// for(num = 1 ; num <=10; num++){
//     console.log(num);
// }

// Even
// for( i = 0; i <= 10 ; i += 2){
//     console.log(i);
// }


// odd
// for(i = 1 ; i <= 10 ; i += 2){
//     console.log(i)
// }

// 18_5 Problem Solving With For Loop
// alwase declare variable in outside of the loop. if u daclare var in the loop, when the loop returns in the condition, it restart from the first.

// let sum = 0;

// for(i = 11; i <= 20; i++){
//     console.log("Serial" , i);
//     sum = sum + i;
//     console.log("Sum" , sum);
// }

// Decremental

// for (i = 10; i >= 0; i--){
//     console.log(i);
// }
// ctrl + c to stop loop in terminal


// for(i= 20; i >= 11; i--){
//     console.log(i);
// } 


// pr-1
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// for(i = 1; i <= 60; i++){
//     // console.log("I will invest at least 6 hrs every single day for next 60 days!" , i)
// }

// pr-2
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// for (i = 61; i <= 100; i += 2){
//     console.log("Odd Numbers" , i);
// }


/***

Subtask-2:

Find all the even numbers from 78 to 98.



 */
// for(i = 78; i <= 98; i++){
//     // console.log('All Numbers' ,i);
//     if(i % 2 === 0){
//         console.log('Even Numbers' , i);
//     }
// }


// pr-3 
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
// sum = 0;
// for(i = 91; i <= 129; i += 2){
//     // console.log("Even Numbers" , i);
//     sum = sum + i;
// }

// console.log(sum);
/***


Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
// sum = 0;
// for(i = 51; i <= 85; i++){
//     if(i % 2 === 0){
//         // console.log(i);
//     }
//     sum = sum + i;
// }
// console.log(sum);

/*programming hero*/

// pr-4 
/***

Generate a multiplication table for number 9

 */


/*programming hero*/
// for(i = 9; i <= 90 ; i += 9){
//     console.log(i);
// }
