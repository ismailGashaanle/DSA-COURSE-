
let firstName="ali";
 let lastName="mohamed";
  
 console.log(firstName);
 console.log("fullName :" + firstName + " " +  lastName)



 const a=10;
 const b=2

 const sum = a+b;
 console.log(sum)


 const arr=[9,3,6,5,6,9];
 console.log(arr[0]+arr[3]);

 
 const students={
    ID:1,
    name:"ali",
    Deparment:"School of computing",
    semester:8,
    bach:2026,
    course:["Python","CCNA","DSA"]
 }

 console.log(students.course[0])



function printHelloWorld(){
    console.log("hello world")
}
printHelloWorld();


function add(a,b){
    console.log(a+b)
}

add(5,3)


function square(x){

    let results=x*x;
    return results;

}

let value=square(5);
console.log(value)



// calculate Elg age that can vote or not 

 
 
function checkEligbleVote(age){

    if(age<0){
        console.log("invalid input")
    }
    else if(age<18){
        console.log("Not Eligble Vote")
    }

    else{
        console.log("Eligble Vote")
    }


}


checkEligbleVote(18)


// check and calculate Even or Odds
function CheckEven_Or_Odds(num){
    if(num < 0){
        console.log("invalid number")
    }
    else if(num%2===0){
        console.log("even Number :" + num)
    }
    else{
        console.log("odd Number :" +num)
    }
}


CheckEven_Or_Odds(17)
CheckEven_Or_Odds(8)
CheckEven_Or_Odds(7)
CheckEven_Or_Odds(5998580494)
CheckEven_Or_Odds(24)
 