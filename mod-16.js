// 16-2 module
/*    
Math needed for js
*/

// 1. Number - positive or nagetive
// 2. integer - 2,40,80
    //  in integer there is two type of number- even and odd
// 3. float - 1.5, 2.6
// 4. Operation - (=,+,-,*,/)
// 5. more operation - % ,[reminder]
// 6. Percentage 
// 7. Avarage
// 8. Sum
// 9 maximum or minimum
// 10.series
// 11. area


// 16-3 Variable

// Variable = vary + able
// There is 5things to declare a variable

// Example
// var egg = 4;
// console.log(egg);

// The 5things to write a variable
// 1. var 
// 2. var name
// 3. equal sign (=)
// 4. value
// 5. ;

// var is type of storage.

// You can change var value
// var age = 17;
// age = 27;
// console.log(age);


// 16-4 Variable Data Types, Numeric, String, Boolean

// there is various types of variable , such as - Numeric, sting , boolen

// String
// var name = "Inara Afroze";
// console.log(name);

// // Boolean
// var youAreRich = false;
// console.log(youAreRich);

// Numeric
// var age = 28;

// // To know which types of var it is
// var passed = false;
// // in the console.log use type of before the var name
// console.log(typeof passed);



// 16-5 JavaScript Keyword, Variable Name Naming Convention
// there is 5 types of data
// The data types are
// String, numeric , boolean , undefined , null

// // u can use snake case 
// var my_school_name = "Joy Govinda High School";
// // also use camelCase
// var mySchoolName = "Joy Govinda High School";
// // if u type the first letter capital, it will called pascal case.
// var MySchoolName = "Joy Govinda High School";


// u cant us js keywords in the var name
// such as var, number, boolean, true, false etc.


// 16-6 Know The Fundamentals Of JS Numbers

//select content +  alt+ up - to content up

// To convert string to number - use parseInt
// Int = Integer(পুর্ণসংখ্যা)
// var number =parseInt ("16");
// console.log(typeof number);

// For decimal numbers use parseFloat
// var decimal =parseFloat ('22.5');
// console.log(decimal);

// When console shows NaN(Not A Nmbr)
// var number = parseInt ('abhijabikhabi');
// console.log(number);

// // decimal add
// var first = 0.1;
// var second = 0.2;
// var total = first + second;
// console.log(total);
// // some time u have to faces some problem. there is a big decimal number, to fixed this problem, and how many decimal numbers u want -
// console.log(total.toFixed(2));
// but there is a problem - when u use tofixed, the number the will convert into string , u will see in future , how u contvert string to number.
// var nm = parseFloat(total.toFixed(2));
// console.log(nm);


// 16-7 Introduction To Arithmetic Operators
// U can add, substract, multiplication, divide vars. 
// reminder ( ভাগশেষ)
// var egg = 10;
// var quantity = 7;
// var baki = egg % quantity;
// console.log(baki);

// to change value
// var number = 500;
// number = 400;

// to add more
// number = number + 100;
// u can also add with create a new var
// var addMore = number + 100;
// console.log(addMore)

// 16-8 (Advanced) Mathematical Operation Shorthand

// js arthimetic(পাটিগণিত) operators
// + = Addition
// - = Substraction
// * = Multiplication
// ** = Exponention (ES2016)
// / = Division
//  % = Modulus (Reminder)


// Shorthand mathematics

// var number = 10;
// number = number + 10;
// // shorthand
// number += 10;
// console.log(number)
// number -= 10;
// console.log(number)
// number *= 2;
// console.log(number);
// number /= 2;
// console.log(number);


// // string addition
// var firstName = "Asib";
// var lastName = "Iqbal";
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);


//  16-9 summury
// Variable used to store data;\\

// Practise one 
// var totalMoney = 1000;
// var orangePrice = 300;
// var applePrice = 400;
// var totalFoodCost = orangePrice + applePrice;
// var returnMoney = totalMoney - totalFoodCost;
// console.log(returnMoney);

// practise two 
// var mathematics = 75.25;
// var biology = 65;
// var chemistry = 80;
// var physics = 35.45;
// var bangla = 99.50;

// var totalMarks = mathematics + biology + chemistry + physics + bangla;
// var totalSubjects = 5;
// var average = totalMarks / totalSubjects;
// console.log(average.toFixed(2));

// Practise three
// var number = 119;
// var number2 = 5;
// var reminderNumber = number % number2 ;
// console.log(reminderNumber);

// Practise 4
// const a = isNaN('11');
// // console.log(a);
// const a = isNaN(2-10); 
// console.log(a);