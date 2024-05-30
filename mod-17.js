// 17_1 Compare Variables And Comparison Operator
// Comparision numbers
// there are 8 or more comparision signs-
// 1. bigger than : >
// 2. less than: <
// 3. equal : ==
// 4. Greater than or equal : >=
// 5. less than or equal : <=
// 6. Not equal : !=
// 7. and : &&
// 8. or : ||



// 17_2 Introduction To Conditionals

// < > comparision

// console.log(5>6);
// console.log(5<6);


// some comparision using var

// var chickenEgg = 10;  

// uses of == and ===
// == its detect the value not data type.
// console.log(10 == '10');
// to detect data type, use ===
// console.log(10 === "10");


// 17_3 Introduction To If Else Condition
// if condition example=

// if(1<2){
//     console.log('1 is less then 2')
// }
// if(3<2){
//     console.log('this is true');
// }


// if condition example using var

// var biriyaniPrice = 300;
// if(biriyaniPrice>200){
//     console.log("biriyani kheye,70taka riksha vara ar 30taka bachbe")
// }


// var duckEgg = 26;
// if(duckEgg > 25){
//     console.log('Hasher Dim Khabo Re')
// }



// if and else condition example
// var weight =40;
// var myWeightCapacity = 200;

// if (weight < myWeightCapacity ){
//     console.log('i will carry');
// }
// else {
//     console.log('na mama parmu nare');
// }

// var duckEgg = 21;
// if(duckEgg >= 25){
//     console.log('mama hasher dim khabo');
// }
// else{
//     console.log('Taka Short mama murgir dim daw');
// }


// 17_4 Multiple Condition Logical Operators

// when u declare const, u can not change the value of const.
// Single equal sets the value.
// Double equal used for comparing.

// const salary = 25000;
// const isGraduate = true;
// const isCar = true;
// const place = 'brahmanbaria';

// const luxury = 1620;
// const jamboo = 1900;
// const brand535 = 970;
// const isCoilIsgood = true;

// if (luxury >= 1600 || jamboo >= 1880 && isCoilIsgood == true)
//     {
//     console.log('amake luxury or jamboo daw 1000cutton')
// }
// else {
//     console.log('amake 535Brand daw');
// }

// if (salary > 20000 && isGraduate == true){
//     console.log('hurray biar boyos hoise')
// }
// else{
//     console.log('hardwork korte hobe.')
// }

// if((salary > 25001 || isGraduate== true && isCar == true) && place == 'noakhali'){
//     console.log('ei bia hobe na')
// }
// else{
//     console.log('kobul bia hobe')
// }



//  17_5 Multi Level If-Else If-Else Condition


// const price = 5000;

// if(price >=  10000){
//     // 10% discount
//     const discount = price * 10/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else if (price >= 7500){
//     // 7.5% discount
//     const discount = price * 7.5/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else if (price >= 5000){
//     // 5% discount
//     const discount = price * 5/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else{
//     console.log(price);
// }

// const luxuryPrice = 1500000;

// // 10% discount
// if(luxuryPrice >= 1500000){
//     const discount = luxuryPrice * 10/100;
//     const totalPay = luxuryPrice - discount;
//     console.log(totalPay);
// }
// // 7.5% discount
// else if(luxuryPrice >= 1000000){
//     const discount = luxuryPrice * 7.5/100;
//     const totalPay = luxuryPrice - discount;
//     console.log(totalPay);
// }
// // 5% discount
// else if(luxuryPrice >= 500000){
//     const discount = luxuryPrice * 5/100;
//     const totalPay = luxuryPrice - discount;
//     console.log(totalPay);
// }
// // No discount
// else{
//     console.log('Sorry if you pay upto 5lakh, you can get offers')
// }


// home work
// bmi calculator, grade

// 
// if (age <= 7){
//     console.log('free for childs');
// }
// else if(age >= 40){
//     // 5% discount
//     const discount = price * 5/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else if(age <= 50){
//     // 10% discount
//     const discount = price * 10/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else if(age >= 60){
//     // 50% discount
//     const discount = price * 50/100;
//     const pay = price - discount;
//     console.log(pay);
// }
// else{
//     console.log('no free for age 8-39');
// }

// 17-6 Nested If else conditions
// const money = 9;
   

// if(money >= 300){
//     console.log('ei takay sumaiyar kacchi khete parbo');
// }
// else{
//     if(money >= 200){
//         console.log('Ma hoteler gril ar coke hoye jabe');
//     }
//     else{
//         if(money >=10){
//             console.log('kopale beshi kichu nei, cha ruti chara');
//         }
//         else{
//             console.log('pocket faka basay chole jai.')
//         }
//     }
// }

// 17_7 (Advanced )If-Else Shorthand Ternary Operator
// simple ternary
// there is three part to write ternary
// condtion    ?   do something when true : do something when false. 
// const age = 17;

// age >= 18 ? console.log('you can vote') : console.log('sleep plz'); 
// const age = 19;
// age >= 18 ? console.log('vote dite parbe') : console.log('opekkha koro');



// const isLeader = true;
// let price = 500;

// if(isLeader === true ){
//     console.log('0');
// }
// else{
//     price = price + price;
//     console.log(price);
// }

// price = isLeader === true ? console.log(0) : console.log(price + 500);

// let govMoney = 500;
// const isLeader = false;

// if (isLeader === false){
//     console.log('0')
// }
// else {
//     govMoney = govMoney + 500;
//     console.log(govMoney)
// }

// Ternary 
// isLeader === false ? console.log('0') : console.log(govMoney + 500);

// 17_8 (Advanced) Logical Not Operator

// you can write binary data type without any conditions

// const ifHscInScience = false;

// // for true data types
// if(ifHscInScience) {
//     console.log('you can apply for cse')
// }
// else{
//     console.log('complete diploma in computer science, then you can apply');
// }

// for false data types
// const isCar = false;

// if(!isCar){
//     console.log('this is my dream');
// }
// else{
//     console.log('lets drive');
// }

// !!iscar = first ! for false  and second ! for true , that means !!isCar data type is true.

// 17_9 Home Work And Making Decisions In Your Code
// Go to proggramming hero github page and search - conditional task
// Read making decisions in your code - conditionals from mdn.


/***
task one
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const burgerPrice = 600;

// if(burgerPrice >= 500){
//     console.log('You can get coke, free');
// }
// else(
//     console.log(' you pay 30 taka more for a coke.')
// )


/*** 
Task Two
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight = 90;
// const height = 5.5;
// // const bmiValue = weight / height ^ 2;
// const bmiValue = 8;
// // console.log(bmiValue);

// if(bmiValue < 18.5){
//     console.log('you are underweight');
// }
// else if(bmiValue >= 18.5 && bmiValue <=24.9){
//     console.log('You are normal')
// }
// else if(bmiValue >= 25 && bmiValue <=29.9){
//     console.log('you are overweighted')
// }
// else{
//     console.log('Tumi dine dine mota hoye jaccho,,, Ojon komaw.')
// }


// task three
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// const mark = 59;

// if (mark >= 90 && mark <= 100){
//     console.log('you get A')
// }
// else if (mark >= 80 && mark <= 89){
//     console.log('you get B')
// }
// else if (mark >= 70 && mark <= 79){
//     console.log('you get C')
// }
// else if (mark >= 60 && mark <= 69){
//     console.log('you get D')
// }
// else{
//     console.log('Fail')
// }


// Task Four
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// const friendMark = 39;

// if(friendMark >= 80){
//     console.log('Go for a lunch with friends');
// }
// else{
//     if(friendMark >= 60 && friendMark <= 79){
//         console.log('Good Luck Next Time');
//     }
//     else{
//         if(friendMark >= 40 && friendMark <= 59){
//             console.log('Not seen my friends msg');
//         }
//         else{
//             console.log('block my friend');
//         }
//     }
// }


// Task Five
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// const num1 = 90;
// const num2 = 60;
// const result = num1 + num2;

// if(num1>num2){
//     result = num1 *2;
//     console.log(result);
// }
// else{
//     console.log(result)
// }


// 17.5-1
// how u declare array
// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// 17-5-2
// To know how many data are in the array.
// console.log(numbers.length);

// to find specifice data
// console.log(numbers[1]);
// to change specifice value of a data
// numbers[2] = 20;
// console.log(numbers);
// const secondValue = numbers[1];
// console.log(secondValue);


// 17-5-3
// const numbers = [1, 2, 3, 4];
// To add value in the last
// numbers.push(5);
// console.log(numbers); 

// To add value in the first
// const numbers = [1, 2, 3, 4];
// numbers.unshift(0);
// console.log(numbers);

// To remove value from the last
// numbers.pop();
// console.log(numbers);

// To remove value from the first
// const numbers = [1, 2, 3, 4];
// numbers.shift(0);
// console.log(numbers);

// using variable
// const removeNumber = numbers.pop();
// console.log(removeNumber);


// 17-5-4 includes, join , concat

// To check a value is in or out
// const allName = ['Asib', 'Zidan', 'Rabby', 'Mahabub'];
// const checkName = allName.includes('Mahabub');
// console.log(checkName);

// if(allName.includes('Mahabub')){
//     console.log('Mahabub Jilapi Khay');
// }
// else{
//     console.log('biri kha');
// }

// find index of an array
// const allName = ['Asib', 'Zidan', 'Rabby', 'Mahabub'];
// const space = allName.indexOf('Mahabub');
// console.log(allName , space);


// const coils = ['Luxury', 'Deluxe', 'Jamboo', '535Brand' ];
// const brand535 = coils.indexOf('535Brand');
// // if the value in array dosen't exist, it will show -1
// console.log(brand535);


// to use symbol after array value
// const coils = ['Luxury', 'Deluxe', 'Jamboo', '535Brand' ];
// const symbol = coils.join(',');
// console.log(symbol);

// add to arrow data in one line
// const coils1 = ['Luxury', 'Deluxe', 'Jamboo', '535Brand' ];
// const coils2 = ['T-20gold', 'king', 'china', 'luxury' ];
// const join = coils1.concat(coils2);
// console.log(join);




