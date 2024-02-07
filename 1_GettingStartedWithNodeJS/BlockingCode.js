// /*
console.log('start');

setTimeout(() =>{
    console.log("log inside timeout");
}, 0);
let i =  0 ;
while(i<10){
    console.log("Log inside whilte loop");
    i++;
}

console.log('End');
// */
/*
const compute  = () =>{
    let sum = 0;
    for(let i = 1 ;i<= 1000000000; i++){
        sum+=i;
    }
    console.log(sum);
}

setTimeout(compute, 0);
console.log("dne");
*/

/*
let i = 0; 
setInterval(() =>{
    i++;
    console.log(i);
}, 1000);

console.log("Fa");
*/
/*
const idle= (ms) =>{
    let start = new Date().getTime();
    while(new Date().getTime() < start+ ms);
};
console.log("start");
idle(5000);
console.log("end");
*/