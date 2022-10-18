
//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

//Вариант №1
let userAge = 36;
let userInfo = "Программист ${userAge}";
console.log(userInfo)
//Это строка ; Программист 36


//Вариант №2
let userHeight = 145 / 0;
//Вернется значение NaN
console.log(userHeight);
// Нет примет значение бескрнечности (Infinity)так как было деление на 0 и это не строка


//Вариант №3
let userName;
//Вернется тип данных Null
console.log(typeof userName);
//выйдет значение Undefined, так как значение не было присвоено


//Вариант №4
let userSize = "45" / "8";
//Вернется тип данных Number
console.log(typeof userSize);
//Здесь будет строка
