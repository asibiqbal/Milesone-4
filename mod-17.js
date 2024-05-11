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

// if (luxury >= 1600 || jamboo >= 1800 && isCoilIsgood == true)
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

// if you use !!isCar, that means its gonn