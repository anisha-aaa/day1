//let a=10;
//function scope
//this scope means that the variables are only accessible
//in the function in which they ary are declared
function Say(){
    let name="javascript"
    console.log("hai global scope");
    console.log("within the func"+name);
}
Say()
//block scope
//the block scope of the variable means that the variable is accessible
//within the block that is between the curly braces
function Voting(age){
    if(age>=18){
        let iscloudy=true;
        var israining=true;
        console.log("eligible");
        console.log(iscloudy);
    }
    console.log(israining);
}
Voting(18)
//callback function
function text(){
    console.log("message");
}
text();
function send(callback){
    console.log("message sended");
    setTimeout(callback,1000);
}
send(text);
