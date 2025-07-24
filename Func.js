/ Task 1
let a=10;
function Say(){
    console.log("hai");
    console.log("Within "+a);
}
Say()
console.log("Within "+a);

let globalvar="i am Global"
function Say(){
    console.log("hai Global Scope");
    console.log("Within "+globalvar);
}
Say()
console.log("outside"+globalvar);
 
// Task 2

function Voting(age) {
    if (age >= 18) {
        const iscloudy = true;
        var israining = true;
        console.log("eligible");
        console.log(iscloudy);
    }

    console.log(israining);
     
 }
 Voting(18);

 // Task3 (callback function )

function text(){
    console.log("message");
 }

function send(callback){
    console.log("message sended");
    setInterval(callback,3);
 }
 send(text);

 //Task 4 

let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
Interval()
