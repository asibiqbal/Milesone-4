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
// var duckEgg = 15;

// var egg = duckEgg >= chickenEgg;
// console.log(egg);

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


// if condition example using var

// var biriyaniPrice = 300;
// if(biriyaniPrice>200){
//     console.log("biriyani kheye,70taka riksha vara ar 30taka bachbe")
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


// 17_4 Multiple Condition Logical Operators

// when u declare const, u can not change the value of const.
// Single equal sets the value.
// Double equal used for comparing.

// const salary = 25000;
// const isGraduate = true;
// const isCar = true;
// const place = 'brahmanbaria';

  
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


// const price = 2000;

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


// 17_7 (Advanced )If-Else Shorthand Ternary Operator
// simple ternary
// there is three part to write ternary
// condtion    ?   do something when true : do something when false. 
// const age = 17;

// age >= 18 ? console.log('you can vote') : console.log('sleep plz'); 


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