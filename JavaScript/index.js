// // 1. way to print & pop window in javascript
//     //     // console.log("hello world");
//     //     // alert("hi");
//     //     // document.write("Hi it's document.write");

//     //     // 2. JavaScript console API
//     //     // console.log("Hello Aakash", 45+62*54/20-98);
//     //     // console.warn("It's Anuj Warning because it senior .");
//     //     // console.error("It's a Error.");

//     //     // 3. JavaScript Variables
//     //     // what are variables? - containers to store data values
//     //     var num=54;
//     //     var num1=20;
//     //     console.log(num+num1);

//     //     // 4. Data Type in JavaScript
//     //     // Numbers
//     //     var int= 455;
//     //     var flo= 56.35;
        
//     //     // String
//         // var dob = "Hi I am Aakash Kumar.";
//         // var sing= 'Hi This is a single string';
//         // let name = "Aakash";
//         // console.log("my string is " + name);
//         // console.log("Data type is " +typeof(name));
//     //     // Objects
//         // var marks = {
//         //     Anuj: 50,
//         //     Aakash: 80,
//         //     Asif: 75
//         // }
//         // console.table({Anuj: 50,
//         //     Aakash: 80,
//         //     Asif: 75});

//     //     // Booleans
//     //     var tru = true;
//     //     var fal = false;

//     //     var und;
//     //     var n = null; 
//     //     console.log(und);
//     //     console.log(n);
//     //     console.log(int, flo);
//     //     console.log(dob, sing);
//     //     console.log(marks);


//     // // At a very high level, there are two types of data types in javascript
//     // // 1. Primitive Data Type: undefined, null, number, String, Boolean, Symbol.
//     // // 2. Reference Data Type: Arrays and Object
//     //     var arr = [1, 2, "AAKASH", 3, "True", "False", 5.0]
//     //     console.log(arr)

//     //  Operators in JavaScript
//         // Arithmetic Operator
//         // var a = 50;
//         // var b =90;

//         // console.log("ADD", a+b);
//         // console.log("Sub", a-b);
//         // console.log("Div", a/b);
//         // console.log("Mul", a*b);
//         // console.log("Per", a%b);

//         // Assignment Operator
//         // var c=b;
//             // c += 2; //c = c +2;
//             // c -= 2;
//             // c *= 2;
//             // c /= 2;
//         // console.log(c)
        
//         // Comparison Operators
//         // var x = 50;
//         // var y = 35;

//         // console.log(x == y);
//         // console.log(x > y);
//         // console.log(x >= y);
//         // console.log(x <= y);

//         // Logical operators
//         // // Logical and 
//         // console.log(true && true);
//         // console.log(true && false);
//         // console.log(false && false);

//         // // Logical or
//         // console.log(true || true);
//         // console.log(true || false);
//         // console.log(false || false);

//         // // Logical Not
//         // console.log(!true); 
//         // console.log(!false);

//         // function in JavaScript
//         function avg(a,b){
//             c= (a+b)/2;
//             return c;
//         }
//         // Dry - Do not repeat yourself
//         c1 = avg(2,6);
//         c2 = avg(14,52);
//         // console.log(c1, c2);

//         // Conditional in JavaScript
//         var kid =6;

//         if (kid>15) {
//             console.log("You are not a Kid");
//         } else {
//             console.log("You are a kid");
//         }

//         function clr(){
//             document.getElementById("result").value = "";
//         }
//         function display(val){
//             document.getElementById("result").value+=val; //val=val+val
//         }
//         function equate(){
//             let x = document.getElementById("result").value;
//             let y = eval(x);
//             document.getElementById("result").value = y;

//         }

//         // TODO LIST
//         // function add_item(){
//         //     let item = document.getElementById("box");
//         //     let list_item = document.getElementById("list_item");
            
//         //     if(item.value !=""){
//         //         let make_li = document.createElement("li");
//         //         make_li.appendChild(document.createTextNode(item.value));
//         //         list_item.appendChild(make_li);
//         //         item.value=""

//         //         make_li.onclick = function(){
//         //             this.parentNode.removeChild(this);

//         //         }
//         //     }
//         //     else{
//         //         alert("Please add a item")
//         //     }
//         // }


    // // Type Conversion and type coercion
    // console.log("Welcome to Web Projects");
    // number to String Conversion
    // let myVar;
    // myVar = 32
    // myVar = String(32);
    // console.log(myVar, (typeof myVar));

    // let booleanVar = String(true);
    // console.log(booleanVar, (typeof booleanVar));

    // let date = String(new Date());
    // console.log(date , (typeof date));

    // let arr = String([1,4,7,8,9]);
    // console.log(arr.length, (typeof arr));

    // let i = 9;
    // console.log(i.toString());

     // String to Number Conversion

    //  let a = Number("2003");
    //  a = Number(false);
    //  a = Number([1,3,5,7]);     
    //  console.log(a, (typeof a));

    // Templates Methonds
    // let name = "Aakash Kumar";
    // let operators = "Arthmatic \n Assign\n Logical \n Comparision\n Bitwise"
    // myLife = `<h1>Hello my frinds ${name}</h1>
    //         <p>I am learning Javascript and i enjoy this . I learn in this 
    //         <ul>
    //         <li>What are the vraiables and How we assign them. Some Basic concept.</li>
    //         <li>What are Data types: Permetive & Reference Data types.</li>
    //         <li>What are the operators ${operators}</li>
    //         <li>Some converstion</li>
    //         </ul>
    //         templates and Functions in Js</p>`;
    // document.body.innerHTML=myLife;

    let first = "AAKASH ";
    let last = 2003;
    console.log(first + last);
    console.log(typeof first);

    const hi = {
            money: "lake",
            }
    //hi = 500;//error show because const never change

    hi['name']="Aakash"//adding key in object
    console.log(hi);
    