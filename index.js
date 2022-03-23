//Code your solutions in this file
//Q1
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++){
        console.log(i)
    }
}
console.log("Q1")
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
console.log(untilNum(15))
