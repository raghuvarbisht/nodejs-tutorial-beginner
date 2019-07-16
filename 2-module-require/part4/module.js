const sum = (a,b) => {
    console.log(`sum of ${a} and ${b} is ${a+b}`);
}
const subtarction = (c,d) => {
    console.log(`subtarction of  ${c} and ${d} is ${c - d}`);
}

/**
 * If you want to hide the actual name or want to use different
 * name when calling from other file you can use this way 
 */
module.exports = {
  add : sum , // using add as reference for sum function
  minus : subtarction // using minus as reference for subtarction function
};

