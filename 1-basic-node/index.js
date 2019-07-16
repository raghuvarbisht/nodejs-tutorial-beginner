// execute basic javascript code 

console.log('hello world');

setTimeout(function(){
    console.log('execute in 2 seconds');
},2000);

let data = 0; 
setInterval(function(){
   
    data +=2;
    console.log(`execute in ${data} seconds till break`);
},2000);