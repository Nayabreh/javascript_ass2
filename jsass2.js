// Chap 21-25
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
// document.write("in string"+num+"<br>")
// number = parseInt(num)
// document.write("in number"+number)

// Ans#10
// var input = "peanut"
// document.write(input+"<br>")
// var in_put = input.toUpperCase(input)
// document.write(in_put)

// Ans#11 (wrong)
// var input = prompt("enter a input")
// var inp = input.slice(0,1)
// var sl = input.slice(1,input.length)
// var inpu = inp.toUpperCase(inp) 
// ------------------------------------------------------
// var var_split = input.split(' ', var_split.length)
// var_split = charAt(0).toUpperCase()+ var_split[i].slice(1, var_split.length).toLowerCase()
// document.write(inpu+sl+var_split)
// --------------------------------------------------
// var slice1 = var_split.slice(0,1)
// var slice1_uppercase = slice1.toUppercase(slice1)
// var slice2 = var_split.slice(1, var_split.length)
// document.write(inpu+sl+slice1_uppercase+slice2)

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
// var str = num.toString()
// document.write(num+"<br>")
// document.write(str)

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

// Ans# 14

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

// CHAPTER # 26-30 MATH METHODS

// Q#1 (a)
// var number = prompt("please enter a  number roundoff:  ")
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

// Q#2(a)

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
// document.write(fix_Num)

// Q#4
// var random_number = Math.random()*9;
// random_number = random_number.toFixed();
// document.write(random_number)


// Q#5 (wrong )
// var toss = Math.random()*1;
// var toss = toss.toFixed();
// if(toss === 0){
//     document.write(toss+"Heads Win the toss")
// }
// else{
//     document.write(toss+"Tails Win the toss")
// }


// Q#6
// var ran_Num = Math.random()*100
// ran_Num = ran_Num.toFixed()
// document.write("Random Number betwenn 1 to 100 is:  "+ran_Num)



// Q#7 

// var user_input = prompt("Enter your weight: ")
// user_input.toLowerCase()
// var x = "kg";


// if(user_input.includes("kg")|| user_input.includes("kgs")|| user_input.includes("kilo grams")|| user_input.includes(" ") || user_input.includes("k")){
//    document.write(user_input.replace(x,"kilograms"))    
// }


// var usr_input = prompt("Enter your weight")
// usr_input.toLowerCase()
// var x= "kg"|kgs|
//  if(user_input.includes("kg")|| user_input.includes("kgs")|| user_input.includes(" ") || user_input.includes("k")){
   
//     document.write(usr_input.replace(/kg|kgs|" "|k, "kilograms"))
// }
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