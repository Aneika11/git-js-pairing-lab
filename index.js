//Code your solutions in this file
function fiveToOneHundred () {
    for(let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
console.log("Q1--")
fiveToOneHundred()

//Q2
function multiplesOfThree(){
    for(let i = 0; i <= 100; i++){ 
        if(i % 3 === 0){
            console.log(i)
        }
}
}
console.log("Q2")
multiplesOfThree()

//Q3

function multiplesOfThreeOrFive() {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
console.log("Q3");
multiplesOfThreeOrFive();



//Q4
function untilNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
}
}
console.log("Q4")
untilNum(15);

//Q5 

function multiply(n,num) {
    return n * num;
}
console.log("Q5")
console.log(multiply(2, 4));

//Q6
function add(n,num) {
    if(n == num) {
       return 3 * (n + num);
   } else {
       return n + num
   }
}

console.log("Q6");
console.log(add(9,9));

//Q7
function isNegative(num){
    if(num < 1 ){
        return true;
    } else {
        return false;
    }
}
console.log("Q7");
console.log(isNegative(3))

//Q8
function triangleArea(a,b){
    return (a*b)/2;
}
console.log("Q8");
console.log(triangleArea(2,7));

//Q9
function betweenTwentyAndFourty(num){
    if(num < 20 || num > 40){
        return true;
        
    } else {
        return false;
    }
}
console.log('Q9');
console.log(betweenTwentyAndFourty(4));

//Q10
function largest(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    }else if (num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}
console.log("Q10");
console.log(largest(10, 20, 30));