                          // Chapter # 21 - 25

                          
// Task#1 Chapter # 21 - 25

// var inPut1 = prompt("Enter Your First Name");
// var inPut2 = prompt("Enter Your Last Name");
// var fullName = inPut1 + " " + inPut2;
// alert("Hello Sir" + " " + fullName);

// Task#2 Chapter # 21 - 25

// var phone = "Samsung Galaxy Note 10+";
// document.write("String : " + phone + "<br>");
// var strLength = phone.length;
// document.write("Length of String : " + strLength);

// Task#3 Chapter # 21 - 25

// var text$ = "pakistani";
// document.write("String : " + text$ + "<br>");
// var indexNum = text$.indexOf("t");
// document.write("Index of t : " + indexNum);

// Task#4 Chapter # 21 - 25

//  var text$ = "Hello World";
// document.write("String : " + text$ + "<br>");
// var indexNum = text$.lastIndexOf("l");
// document.write("Last Index of l : " + indexNum);

// Task#5 Chapter # 21 - 25

// var str1 = "pakistani";
// document.write("String : " + str1 + "<br>");
// var char$ = str1.charAt(4);
// document.write("Character at index 4 : " + char$);

// Task#6 Chapter # 21 - 25

// var inPut1 = prompt("Enter Your First Name");
// var inPut2 = prompt("Enter Your Last Name");
// var fullName = inPut1.concat(" "+inPut2);
// alert("Hello Sir" + " " + fullName);

// Task#7 Chapter # 21 - 25

// var city_ = "Hyderabad";
// document.write("City Before Replacement is " + city_ + "<br>");
// var city_2 = city_.replace("Hyder", "Islam");
// document.write("City After Replacement is " + city_2);

// Task#8 Chapter # 21 - 25

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write(newMessage);


// Task#9 Chapter # 21 - 25

// var value = "472";
// document.write("Value" + value +"<br>"+"type : String"+"<br>");
// var newValue = parseInt(value);
// document.write("Number"+ newValue +"<br>" +  "type : number");


// Task#10 Chapter # 21 - 25

// var  inPut = prompt("Enter Text");
// document.write(inPut + "<br>");
// var outPut$ = inPut.toUpperCase()
// document.write(outPut$);


// Task#11 Chapter # 21 - 25

// var inPut = prompt("Enter Text");
// var chAr1 = inPut.slice(0,1);
// chAr1 = chAr1.toUpperCase();
// var chAr2 = inPut.slice(1);
// chAr2 = chAr2.toLowerCase();

// document.write(inPut + "<br>");   

// document.write(chAr1 + chAr2);


// Task#12 Chapter # 21 - 25

// var num = "35.34";
// var num2 = num.replace(".", "" );
// alert(num2);


// Task#13 Chapter # 21 - 25

// var num = prompt("Enter User Name");

// for(var i = 0; i <= num.length; i++){

// if(num.charCodeAt(i) == 33){
//     alert("No Special Character");
// }
// else if(num.charCodeAt(i) == 44){
//     alert("No Special Character");
// }

// else if(num.charCodeAt(i) == 46){
//     alert("No Special Character");
// }
// else if(num.charCodeAt(i) == 64){
//     alert("No Special Character");
// }



// else{
//     alert("User Name Accepted");
// }
// }

// Task#14 Chapter # 21 - 25


// var inPut = prompt("Enter Text");
// var chAr1 = inPut.slice(0,1);
// chAr1 = chAr1.toUpperCase();
// var chAr2 = inPut.slice(1);
// chAr2 = chAr2.toLowerCase();

// var inPut = chAr1+chAr2;

// var inputarr = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// for(var i = 0; i<inputarr.length; i++){
//     if(inputarr[i] === inPut){
//         alert(":)This Item is Found" + " " + "at index number" + " " + inputarr.indexOf(inPut));
        
//     }
//     else{
//         alert("This Item Not Found");
//     }
// }


// Task#15 Chapter # 21 - 25

// var inPut = prompt("Enter Username");

// var input1 = inPut.split("");


//    if(inPut.charCodeAt(0)>=65&& inPut.charCodeAt(0)<=90 || inPut.charCodeAt(0)>=97&&inPut.charCodeAt(0)<=122) {
//     alert("password should start with alphabet");     
//     }
// else{
//   alert("Username Accepted"); 
// }

 


// Task#16 Chapter # 21 - 25


// var teXt = "university of karachi";
// var text2 = teXt.split("");

// for(var i = 0; i<text2.length; i++){
//     document.write(text2[i]+"<br>");
        
// }


// Task#17 Chapter # 21 - 25


    // var str = prompt("Enter Text");
    // document.write("User Input : " + str + "<br>");
    // var res = str.charAt(str.length-1);
    // document.write("Last Character of Ipnut : " + res);
  

// Task#18 Chapter # 21 - 25

// var str = "the quick brown fox jumps over the lazy dog";
// var res = str.match(/the/g);
// var occuRence = res.length;
// document.write("There are " + occuRence + " Ouccrences of the word 'the'." + "<br>");
// var countThe = (str.split("the").length - 1);
// document.write("There are " + countThe + " Ouccrences of the word 'the'." );



                                     //Chapter # 26 - 30


// Task#1 Chapter # 26 - 30

// var inputNum = +prompt("Enter Number");
// var numRound = Math.round(inputNum);
// var numCiel = Math.ceil(inputNum);
// var numFloor = Math.floor(inputNum);


// document.write("Number Input By User : "+inputNum + "<br>" +
//  "Round Value : " + numRound + "<br>" +
//  "Ciel Value : " + numCiel + "<br>" + "Floor Value : " + numFloor);


// Task#2 Chapter # 26 - 30

// var inputNum = -prompt("Enter Negative Number");
// var numRound = Math.round(inputNum);
// var numCiel = Math.ceil(inputNum);
// var numFloor = Math.floor(inputNum);


// document.write("Number Input By User : "+inputNum + "<br>" +
//  "Round Value : " + numRound + "<br>" +
//  "Ciel Value : " + numCiel + "<br>" + "Floor Value : " + numFloor);


// Task#3 Chapter # 26 - 30

// var num = -5;
// num = Math.abs(num);
// document.write(num);


// Task#4 Chapter # 26 - 30

// var num = Math.random() * 6;
// num = Math.round(num);
// document.write("the Random Dice Value is " + num + "<br>");
// var num = Math.random() * 6;
// num = Math.round(num);
// document.write("the Random Dice Value is " + num);


// Task#5 Chapter # 26 - 30

// var num = Math.random() ;
// num = Math.round(num);
// document.write(num);
// if(num === 0){
//     alert("Haeds");
// }
// else{
//     alert("Tails");
// }


// Task#6 Chapter # 26 - 30

// var num = Math.random() * 100;
// num = Math.round(num);
// document.write("The Random Number Between 1 to 100 is : " + num);


// Task#7 Chapter # 26 - 30

// var inPut = prompt("Enter Your Weight");
// var inPut1 = inPut.toString();
// document.write("The Weight of User is "+ inPut1);



// Task#8 Chapter # 26 - 30

// var a = 7;
// var b = +prompt("Guess The Number Between 1 to 10");
// if(a === b){
//     alert("Yahoo! Correct Number")
// }
// else{
//     alert("Try Again");
// }


                                           // Chapter # 31-34

//Task#1 Chapter # 31-34

// var d = new Date(); 
// document.write(d);       


//Task#2 Chapter # 31-34


// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var now = new Date();
// var monTh = now.getMonth();
// var nameOfmonth = monthNames[monTh];
// document.write("Current Month : " + nameOfmonth);


//Task#3 Chapter # 31-34

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var toDay = now.getDay();
// var nameOfday = dayNames[toDay];
// document.write("Today is : " + nameOfday);


//Task#4 Chapter # 31-34

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var toDay = now.getDay();

// var nameOfday = dayNames[toDay];

// switch(toDay) {
//      case 6 :
//      alert("Yahoo:) Its Funday ");
//      break;
//      case 0 :
//      alert("Yeah:) Its Sunday");
//      break;
//      case 5 :
//      alert("YAEH: Friday Night");
//      break;
//      default :
//      alert("Huhh:( Go to Work!");
//  }
    
// document.write("Today is : " + nameOfday);


//Task#5 Chapter # 31-34

// var numBer = +prompt("Enter Date");

// if(numBer <= 15){
//     alert("First 15 Days of Month");
// }
// else{
//     alert("last 15 Days of Month");
// }


//Task#6 Chapter # 31-34

// var date$ = new Date();

// document.write("Current Date : "+date$ + "<br>");

// var msDates = date$.getTime();
// var mdaTes = msDates/60000;
// document.write("Elapsed Miliseconds Since 1st January 1970 : "+ msDates + "<br>");
// document.write("Elapsed Minutes Since 1st January 1970 : " + mdaTes);


//Task#7 Chapter # 31-34

// var date$ = new Date();
// var currentHrs = date$.getHours();

// if(currentHrs <= 12){
//    document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }

//Task#8 Chapter # 31-34

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date : " + laterDate);


//Task#9 Chapter # 31-34

// var dateToday = new Date();
// dateToday.getTime();
// var ramazanDate = new Date("April 25, 2020");
// ramazanDate.getTime();

// var dayPassed = dateToday - ramazanDate;

// var days = dayPassed/8.64e+7;
// var floordays = Math.floor(days)
// document.write(floordays + " Day Have Passed Since 1st Ramazan 2020");


//Task#10 Chapter # 31-34

// var begginingOF2020 = new Date("January 1, 2020");
// var begin2020 = begginingOF2020.getTime();
// var dateToday = new Date();
// var miliToday = dateToday.getTime();

// var diff = miliToday - begin2020 ;

// var sec$ = diff/1000;
// sec$ = Math.floor(sec$);
// document.write("Reference Date : " + dateToday + "<br>"+ sec$  + " Seconds Had Passed Since the Beggining Of Year 2020");


//Task#11 Chapter # 31-34


// var today = new Date();
// document.write("Current Time : " +today + "<br>");

// var d = new Date();
// d.setHours(22)

// document.write("4 hours Ago : "+ d );


//Task#12 Chapter # 31-34


// var today = new Date();
// document.write("Current Time : " +today + "<br>");

// var d = new Date();
// d.setFullYear(1920);
// document.write("100 Years Ago : "+ d );

//Task#13 Chapter # 31-34

// var inputDob = new Date( prompt("Enter Your Date Birth", "Jan 1, 1970"));
// var inputDobmili = inputDob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var differRence = todaymili - inputDobmili;
// var accu = Math.floor(differRence/(1000*60*60*24*30*12));
// document.write("You are " + accu + " Years Old.");


//Task#14 Chapter # 31-34


// var customerName = "Muhammad Ovais";
// var billMonth = "June";
// var unIts = 442;
// var chargePerunit = 17;
// var amountPayable = unIts * chargePerunit;
// var lateSurcharge = 500;
// var amountPayableafter = amountPayable + lateSurcharge;
// document.write("Customer Name : " + customerName +"<br>" + "Billing Month : " + billMonth + "<br>" + "Units : " + unIts + "<br>" + "Charges Per Units : " + chargePerunit + "<br>");
// document.write("<br>" + "Amount Payable (With in Due Date) : " + amountPayable + "<br>" + "Amount Payable (After Date) : " + amountPayableafter);



                                            // Chapter# 35-38



// Task#1 Chapter# 35-38

// function myDate(){
//     var date = new Date();
//     document.write(date);
// }

// Task#2 Chapter# 35-38

// function greeting(){
//     var inPut1 = prompt("Enter Your First Name");
//     var inPut2 = prompt("Enter Your Last Name");
//     var output = inPut1 + " " +inPut2;
//     alert("Hello Mr : "+output);
// }

// Task#3 Chapter# 35-38

// function mySum(){
//     var inPut1 = +prompt("Enter Your First Number");
//     var inPut2 = +prompt("Enter Your Second Number");
//     var output = inPut1 + inPut2;
//     alert("Sum is  : "+output);
// }

// Task#4 Chapter# 35-38

// function mycalculator(){

//    var  vaLue1 = prompt("Enter Your First Value");
//    var  sign$ = prompt("Enter Operator Sign");
//    var vaLue2 = prompt("Enter Your Last Value");

//     if(sign$ === "+"){
//         document.write((+vaLue1) + (+vaLue2));
//     }
//     else if(sign$ === "-"){
//         document.write(vaLue1-vaLue2);
//     }
//     else if(sign$ === "*"){
//         document.write(vaLue1*vaLue2);
//     }
//     else if(sign$ === "/"){
//         document.write(vaLue1/vaLue2);
//     }
//     else{
//         alert("Enter Correctly");
//     }

// }
// mycalculator();


// Task#5 Chapter# 35-38

// function mysquaremachine(){
// var number$ = prompt("Enter Number");
// var squareNumber = number$*number$;
// alert(squareNumber);
// }
// mysquaremachine();


// Task#6 Chapter# 35-38


// function factorial(n){
    
//     if(n == 0 || n == 1){
//         return 1;
    
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = 6;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);





// Task#7 Chapter# 35-38


// function mycounting(){
//     var inPut = prompt("Enter Start Number");
//     var inPut2 = prompt("Enter End Number");
//     for(var i = inPut; i <= inPut2; i++){
//     document.write(i + " ");
//     }
// }
// mycounting();


// Task#8 Chapter# 35-38


// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//   document.write(pythagorean(4, 3));


// Task#9 Chapter# 35-38

// function Rectanglearea(Length,Hieght){
//     var lenGth = Length; 
//     var heiGht = Hieght;
//     var arEa = lenGth * heiGht;
//     document.write("Area Of Rectangle is : " + arEa);
// }
// Rectanglearea(10,6);


// Task#10 Chapter# 35-38

// function pallindromechecker(text){
//  var teXt = text;
//  var chEck = "";
//  for(var i = teXt.length - 1; i >= 0; i--){
//  chEck += teXt[i]
//  }
//  if(teXt === chEck){
//      document.write(teXt + " is a pallindrome word.");
//  }
//  else{
//     document.write("This is not a pallindrome word.");
//  }
 

// }
// pallindromechecker("aziza");


// Task#11 Chapter# 35-38

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));


// Task#12 Chapter# 35-38


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// Task#13 Chapter# 35-38

// function Ouccrencesfinder(string,alphabet){
// var str = string;
// var countThe = (str.split("the").length - 1);
// document.write("There are " + countThe + " Ouccrences of the word 'the'." ); 
// }

// Ouccrencesfinder(the,e);


// this is not correct



// Task#14 Chapter# 35-38


// function Geometrizer(str){
// var circleRadius = str;
// var circumferRence = 2*3.14*circleRadius;
// var circlearea = 3.14*circleRadius*circleRadius;
// document.write("The Radius of Circle is " + circleRadius + "<br>" + "The circumference of circle is " + circumferRence +  "<br>" + "The Area of circle is " + circlearea); 
// }
// Geometrizer(14);

