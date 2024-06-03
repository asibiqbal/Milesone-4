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


// 18_6 Different Ways To Use Loop
// for find even number - 
// i % 2 === 0;
// for find odd number - 
// i % 2 === 1;
//or..  i % 2 !== 0;
// 

// for (i = 1 ; i <= 30; i++){
//     if (i % 5 === 0){
//         console.log('give me the divisible numbers by 5' , i)
//     }
// }
// for (i = 1 ; i <= 30; i++){
//     if (i % 5 === 0){
//         console.log('give me the divisible numbers by 5' , i)
//     }
// }

// sum = 0;
// for (i = 1 ; i <= 20; i++){
//     if (i % 3 === 0){
//         console.log('give me the divisible numbers by 5' , i);
//         sum = sum + i;
//     }
   
// }
// console.log(sum);



// 18_7 When To Use A Break And Continue

// Break

// for (i = 0; i <= 150; i++){
//     console.log(i);
//     if(i >= 5){
//         break;
//     }
// }


// reverse Break with while loop

// let i = 64;

// while(i > 50){
//     if( i < 58){
//         break;
//     }
//     console.log(i);
//     i--;
// }

// Continue - skip (that means continue are skip the value you declared.)
// for(i = 1; i <= 10 ; i++){
//     if(i<2){
//         continue;
//     }
//     console.log(i);
// }

// for(i = 1; i <= 30 ; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i)
// }

// Break - Stop

// 18_8 (Optional) Introduction To Do While Loop
// skip

// 18_9 Difference Between Types Of Loops Module Summary

// When we use while loop
// we use while loop until a condition is done.
// When we use for loop
// we use for loop, when we know, certain number of condition. মানে নিদির্ষ্ট সংখ্যক লুপ চলার ক্ষেত্রে আমরা ফর লুপ ব্যাবহার করবো।


// pr-1
/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for(i = 1; i <= 200; i++ ){
//     if(i>100){
//         break;
//     }
//     console.log(i);
// }


// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100


// let i = 1;
// let sum = 0;

// while(i <= 200){
//     sum = sum + i;
//     if(sum > 100){
//         break;
//     }
//     console.log(sum);
//     i++;
// }


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// let square = 0;
// for(i=1; i <=100; i++){

//     if( i * i === 16){
//         break;
//     }

//     console.log(i);
// }


/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(i = 1 ; i <= 40; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

// display odd number from 55 to 85 and skip the numbers divisible by 5.


// for(i = 55; i <= 85; i++){
//     if( i % 2 === 1){
//         if(i % 5 === 0){
//             continue;
//         }
//         console.log(i);
       
//     }
//     // console.log(i);
// }