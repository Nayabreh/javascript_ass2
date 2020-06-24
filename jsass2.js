// =================================================================
//                              Chap 21-25
// =================================================================
// Ans#1
// var firstname = prompt("Enter your first name")
// var lastname = prompt("Enter your last name")
// var full_name = firstname+lastname;
// document.write("welcome: "+full_name)

// Ans#2
// var favPhone = prompt("enter your fav phone:  ")
// document.write("favourite phone is: "+favPhone+"<br>")
// var phone = favPhone.length
// document.write("Length of string:   "+phone)

// Ans#3

// var a ="pakistani"
// var b = a.indexOf("n")
// document.write(a+"<br>")
// document.write(b)

// Ans #4
// var a ="hello world"
// var b = a.lastIndexOf("l")
// document.write(a+"<br>")
// document.write("last index of 'l' is: "+b)

// Ans#5
// var str = "pakistani"
// var charat = str.charAt(3)
// document.write(str+"<br>")
// document.write("character at index 3 is: "+charat)

// Ans#6
// var firstname = prompt("Enter your first name")
// var lastname = prompt("Enter your last name")
// var full_name = firstname.concat(lastname)
// document.write("welcome: "+full_name)

// Ans#7
// var city = "hyderabad";
// var rep_City = city.indexOf("hyder")
// text = city.slice(0,rep_City)+"islam"+city.slice(rep_City+5)
// document.write(city+"<br>")
// document.write("after replacement :  "+text)

// Ans#8
//  var message = "Ali and Sami are best friends. They play cricket and football together."
// var  updated_message = message.replace(/and/g,"&")
// document.write(message+"<br>")
// document.write(updated_message)

// }

// Ans#9
// var num = "472"
// var con = parseInt(str);
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof(num) + "<br>");
// document.write("Value: " + con + "<br>");
// document.write("Type: " + typeof(con));

// Ans#10
// var input = "peanut"
// document.write(input+"<br>")
// var in_put = input.toUpperCase(input)
// document.write(in_put)

// Ans#11

// var input = prompt("enter some text ")
// input[i].charCodeAt(0).toUpperCase()
// input[i].slice(1)
// var input = input.toLowerCase();
// input = input.split(' ')
// for(var i =0; i < input.length; i++){
//     input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
//     input = input.join(' ')
//     document.write(input)
// }

// Ans#12 
// var num = 35.36
// num= num.toString()
// var str1 = num.slice(0,2)
// var str2 = num.slice(3,5)
// document.write("Number: "+num+"<br>")
// document.write("Result: "+str1+str2)

// Ans#13(wrong)
// var input = prompt("enter Username")
// var splt = input.split('');
// for(var i = 0; i <= splt.length-1 ; i++){
//    var  new_var = splt[i].charCodeAt()
// if(new_var === 33 || new_var === 44 || new_var === 46 || new_var === 64){
//     document.write("please enter a valid username")
// }
// else{
//     document.write(input)
// }
// }
// 
// Ans#14

// var items = ["cake", "cookies", "apple pie", "chips", "patties"]
// var User_input = prompt("Enter an item:  ")
// User_input = User_input.toLowerCase();
// if(items.indexOf(User_input) !== -1){

// document.write(User_input+" available at   "+ items.indexOf(User_input)+" index")
// }
// else{
//     document.write("Sorry  "+User_input+"  not available in our bakery")
// }

// Ans #15 (wrong)
// var passWord = prompt("Please Enter Your Password: ")
// var string ;
// for( var i = 0; i <= passWord.length-1; i++){
//     var convert = parseInt(passWord)
//     if(passWord.length >= 6 || passWord.indexOf(0) >= 65 || passWord.indexOf(0) <= 90 || passWord.indexOf(0) >= 97 || passWord.indexOf(0) <= 122){
    
//         document.write("Valid Password")
//     }
//     if(passWord.indexOf(0) >=33 || passWord.indexOf(0) <= 64 || passWord.indexOf(0) >= 91 || passWord.indexOf(0) <= 95 || passWord.indexOf(0) >= 123 || passWord.indexOf(0) <= 126) {
//         document.write("invalid Password, try again")
//     }
// }


// Ans #16 
// var University = "University of Karachi"
// var result = University.split("");
// for(i = 0; i <= result.length-1; i++){
// document.write(result[i]+"<br>")
// }

// Ans #17
// var input = "pakistan"
// var str = input.charAt(input.length -1)
// document.write(str)


// Ans#18
// var string = ["the quick brown fox jumps over the lazy dog"];
// var result = "";
// var count = 0;
// for(var i =0 ; i <= string.length; i++){
// if(string[i] != string[i +1]){
// result = result +string[i]+count;
// count =0;
// i++;
// }
// else{
//     count++;
//     i++;
// }
// }
// document.write(result)
// if(result.length< string.length){
//     document.write(i)
// }
// ==============================END CHAP 21-25===================================

// ======================================================================
//                             CHAPTER # 26-30 MATH METHODS
// =========================================================================
// Q#1 (a)
// var number = prompt("please enter a  number to roundoff:  ")
// var round = Math.round(number)
// document.write(round)


// Q#1 (b)
// var number = prompt("please enter a  number to ceil:  ")
// var round = Math.ceil(number)
// document.write(round)

// Q#1 (c)
// var number = prompt("please enter a  number  to floor: ")
// var round = Math.floor(number)
// document.write(round)


// Q#2(a)

//  var number = prompt("please enter a negative number to roundoff")
// if(number < 0){
//     number = Math.sign(number)*Math.round(Math.sign(number)*number);
   
//     document.write(number)
// }

// Q#2(b)

//  var number = prompt("please enter a negative number to ceil")
// if(number < 0){
//     number = Math.sign(number)*Math.floor(Math.sign(number)*number);
   
//     document.write(number)
// }

// Q#2(c)

//  var number = prompt("please enter a number")
// if(number < 0){
//     number = Math.sign(number)*Math.ceil(Math.sign(number)*number);
   
//     document.write(number)
// }


// Q#3
// var fix_Num = prompt("enter a number ")
// if (fix_Num < 0) {
//     fix_Num = Math.abs(fix_Num);
// }
// document.write("The absolute value of-"+fix_Num+ " is " +fix_Num)

// Q#4
// var random_number = Math.random()*9;
// random_number = random_number.toFixed();
// document.write("Random dice value: "+random_number+"<br>");

// Q#5 
// var toss = Math.floor(Math.random()*2);
// if(toss === 1){
//     document.write(toss+" Heads Win the toss")
// }
// else{
//     document.write(toss+" Tails Win the toss")
// }


// Q#6
// var ran_Num = Math.floor(Math.random()*100)
// document.write("Random Number betwenn 1 to 100 is:  "+ran_Num)



// Q#7 

// var user_input = prompt("Enter your weight in kilograms");
// var x = ["kgs","kilogram","kg","kilograms"];
// var z;
// for (var i = 0; i < x.length; i++) {
//     if (user_input.includes(x[i])) {
//         finalWeight = user_input.replace(x[i]," kilograms");
//         break;
//     }
//     else {
//         z = user_input + " kilograms";
//         continue;
//     }
// }
// document.write("The weight of user is " + z);



//  Q#8
// var input = prompt("Enter a number between 1 to 10")
// var ran = Math.random()*10
// ran = ran.toFixed()
// if(input === ran){
//     document.write("Congratulations!  "+input+"  =  "+ran)
// }
// else{
//     document.write("Sorry Try again!   " +input+"  !=  "+ran)
// }
// ==============================END CHAP 26-30===================================


// =================================================================
//                             CHAPTER # 31-34 Date Methods
// =================================================================
// Q#1
// var date = Date();
// document.write(date)

// Q#2
// var date = Date();
// date = date.slice(4,7)
// document.write(date)

// Q#3
// var day  = Date();
// day = day.slice(0,3)
// document.write("Today is "+day)

// Q#4
// var n= Date();
// n = n.slice(0,3)
// n = n.toLowerCase()
// if(n === "sat"|| n === "sun"){
//     document.write("Its Funday!")
// }
// else{
//     document.write(n)
// }

// Q#5
// var n = Date();
// n = n.slice(8,10)
// if(n<= 15){
//     document.write("first fifteen days of the month")
// }
// else{
//     document.write("Last fifteen days of the month")
// }

// Q#6

//    var date = new Date();
//     var dateMilli = date.getTime();
//     var date_before = new Date("Jan 01, 1970");
//     var beforeMilli = date_before .getTime();
//     var diff = dateMilli - beforeMilli;
//     var diff_In_Min = diff / (1000 * 60 * 60);
//     document.write("Current Date: " + date + "<br>");
//     document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
//     document.write("Elapsed minutes since January 1, 1970:  " + diff_In_Min + "<br>");

// Q#7

// var date = new Date()
// var time = date.getHours()
// if(time < 12){
//     document.write("Its AM")
// }else{
//     document.write("Its PM")
// }


// Q#8
// var later_Date = new Date("31 Dec, 2020")
// document.write("Later Date"+later_Date)


// Q#9
// var Ramzan_date = new Date("24 Apr, 2020")
// var newDate = new Date()
// var total_Date = newDate - Ramzan_date
// var total = Math.floor(total_Date /(1000*60*60*24))
// document.write(total+"  have passed since 1st Ramzan 2020")

// Q#10
// var previous_Date = new Date("jan 01 2020")
// var current_Date = new Date(prompt("enter any date"))
// var previous_DateInMilli = previous_Date.getTime()
// var current_DateInMilli = current_Date.getTime()
// var diff = current_Date - previous_Date
// var milliseconds = Math.abs(diff/1000)
// document.write(milliseconds+ " seconds had past since begining of 2020") 

//  Q#11
//  var date = new Date();
//     document.write("Current date: " + date + "<br>");    
//     var set = date.setHours(15);
//     document.write("1 hour ago, it was: " + date);

// Q#12
// var date = new Date();
//     var getCurrentYear = date.getFullYear();
//     document.write("Current date: " + date + "<br>");    
//     var setHours = date.setFullYear(getCurrentYear-100);
//     document.write("100 years back, it was: " + date);

// Q#13
    // var yourAge = +prompt("Enter your age");
    // var current_Date = new Date();
    // var getCurrentYear = current_Date.getFullYear();
    // var birth_Year = getCurrentYear - yourAge;
    // document.write("Your age is " + yourAge + "<br>");
    // document.write("Your birth year is " + birth_Year + "<br>");

    // Q#14

    // var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var customer_Name = "Nayab Rehmat";
    // var current_month = new Date().getMonth();
    // currentMonnth = months[current_month];
    // var noOfUnits = 350;
    // var charges_Per_Unit = 16;
    // var late_Amount = 350;

    // document.write("<h2>K-Eletric Bill</h2>" + "<br>");
    // document.write("Customer Name: " + customer_Name + "<br>");
    // document.write("Month: " + current_month + "<br>");
    // document.write("Number of Units: " + noOfUnits + "<br>");
    // document.write("Charges Per Unit: " + charges_Per_Unit + "<br>");
    // document.write("<br>");
    // document.write("Net Amout Payable (within Due Date): " + noOfUnits*charges_Per_Unit + "<br>");
    // document.write("Late Payment Surcharge: " + late_Amount + "<br>");
    // document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*charges_Per_Unit)+late_Amount) + "<br>");
    // ==============================END CHAP 31-34===================================
    
    // ===========================================================================
    //                              Chap#35-38 Methods
    // ===========================================================================
     
    // Q#1

    // function first (){
    //      var date = new Date()
    //      document.write(date)
    //  }
    //  first();

// Q#2
//  function userdata (first_name, lastname){
//      ful_name = first_name+" "+lastname
// document.write("Hello! "+ful_name)
//  }
//  var fname = prompt("enter first name")
//  var lname = prompt("enter last name")
// userdata(fname, lname);

// Q#3
// function add(x,y){
// var total = x+y
// document.write(total)
// }
// var fisrtnum = +prompt("please enter first number")
// var secondnum = +prompt("please enter second num")
// add(fisrtnum, secondnum)

// Q#4

// function calc(firstnum,secno,opr) {
//         if (opr === "+") {
//             result= firstnum + secno; 
//         } 
//         else if(opr === "-") {
//             result= firstnum- secno;
//         }
//         else if(opr === "/") {
//             result= firstnum / secno;
//         }
//         else if(opr === "*") {
//             result=firstnum * secno;
//         }
//         else if(opr === "%") {
//             result= firstnum % secno;
//         }
//         else {
//             result= "Wrong Command";
//         }
//     }
//     var firstnum = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var opr = prompt("Enter Operator");
//    document.write(result);


// Q#5
//  function square(a) {
//         document.write("Input is "+a + "<br> Square is " + a*a);
//     }
//     square(+prompt("Enter any number"));

// Q#6
    // function factorial(a) {
    //     var initial = a;
    //     for (var i = a-1; i > 0; i--) {
    //         a *= i;
    //     }
    //     alert("Input is "+initial + "\nFactorial is " + a);
    // }
    // factorial(+prompt("Enter any number"));

    // Q#7

    // function count_no_Between(x,y) {
    //         for (var i = x; i <= y; i++) {
    //             document.write(i + "<br>");
    //         }
    //     }
    //     count_no_Between(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));

    // Q#8

    //   function Calculate_Hypotenuse(base,perpendicular) {
    //     var final_hypotenuse;
    //     var hypSquare = Math.pow(base,2) + Math.pow(perpendicular,2);
    //     function calculateSquare(hyp) {
    //         final_hypotenus = Math.sqrt(hyp).toFixed(2);
    //         return final_hypotenus;
    //     }
    //     calculateSquare(hypSquare);
    //     return final_hypotenus;
    // }
    // document.write(Calculate_Hypotenuse(9,9));

    // Q#9

    //  function calarea(w,h) {
    //     var A = w * h;
    //     return A;
    // }
    // //Arguments As Values
    // alert("Area of Rectengle: " + calarea(20,10));
    // //Arguments As Variables
    // var width = 20;
    // var height = 10;
    // alert("Area of Rectengle: " + calarea(width,height));

// Q#10

    //  function palindrome(a) {
    //     var reversed = "";
    //     for (var i = a.length-1; i >= 0; i--) {
    //         reversed += a[i];
    //     }
    //     if (a === reversed) {
    //         alert("It's a Palindrome");
    //     } else {
    //         alert("It's not a Palindrome");
    //     }
    // }
    // palindrome(prompt("Enter a string to check it's Palindrome or not"));

    // Q#11
    // function change_Case(str) {
    //     var splitt = str.split(" ");
    //     for (var i = 0; i < splitt.length; i++) {
    //         document.write(splitt[i].charAt(0).toUpperCase()+splitt[i].substring(1,)+" ");
    //     }
    // }
    // change_Case(prompt("Enter any word here","This is a sample text").toLowerCase());

    // Q#12
    
    // function findLong(str) {
    //         var strToArr = str.split(" ")
    //         var long = strToArr[0];
    //         for (var i = 1; i < strToArr.length; i++) {
    //             if (strToArr[i].length > long.length ) {
    //               long = strToArr[i];
    //             }
    //         }
    //         document.write("String: " + str + "<br>Longest Word: " + long);
    //     }
    //     findLong("'Web Development Tutoria");

    // Q#13

    // function countt(strng,latter) {
    //         var spilitted =strng.toLowerCase().split("");
    //         var occurances = 0;
    //         for (var i = 0; i < spilitted.length; i++) {
    //             if(spilitted[i] == latter) {
    //                 occurances++;
    //             }
    //         }
    //         document.write("Text: " + strng + "<br>");
    //         document.write("There are '" + occurances + "' occurance(s) of letter '" + latter + "'");
    //     }
    //     var strng = "The quick brown fox jumps over lazy the dog";
    //     var latter = "o";
    //     countt(strng,latter);
    
    // Q#14

    // function circumference(r = 8) {
    //     var circum = (2 * 3.142 * r).toFixed(2);
    //     alert("The circumference is " + circum);
    // }
    // function calArea(r = 8) {
    //     var area = (3.142 * (r*r)).toFixed(2);
    //     alert("The area is " + area);
    // }
    // circumference();
    // calArea(); 
    // =========================== END========================