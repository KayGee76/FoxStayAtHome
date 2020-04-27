console.log('Variables, Types and Expressions in JavaScript');
console.log()
console.log('Creating an array called name.')
let name=['Angela',' Pamela',' Sandra',' Rita',' Monika',' Erica',' Tina', ' Mary',' Jessica'];
console.log('names contains the following names: ' + name + ', hi ladys');
console.log('Is third name of the list longer than 5 ?  (' + ( name[2].length > 5) + ') The name is:' + name[2]);
console.log('Inserting a new name Andrea' + (name.push(' Andrea')) + ' The new list of the names: ');
console.log(name + ' are these.');
console.log('Changeing the first name of the list to mine...')
name[0] = 'Gábor';
console.log('The list look like this now: ' + name);
console.log('Checking the array has more items than 4? The result is: (' + (name.length>4) + ')');
let arrayOne = {
    colors: ['Red', 'Blue', 'Green', 'Yellow']
};
console.log('Created an object with an array called color: ');
console.log(arrayOne);
console.log(arrayOne.colors);
console.log('adding a field to object named hasManyColors, what cheks if the color array has more than 3 item');
arrayOne.hasManyColors = function() {
    return arrayOne.colors.length > 3;
}
console.log('The result is: (' + (arrayOne.hasManyColors() + '), because the color array contains the following items:'));//
console.log(arrayOne.colors);
console.log('Takeing one item from the array called color, then run the test again');
arrayOne.colors.pop(1);
console.log('The result is: (' + arrayOne.hasManyColors() + '), because the color array contains the following items now:');
console.log(arrayOne.colors);
console.log('-------------------------------------------------------------------------------------------');
console.log('Adding JavaScript to a webpage');
console.log();
console.log('Log your name to the console in the script file: Gábor');
console.log('-------------------------------------------------------------------------------------------');
console.log('Basic building blocks in JavaScript');
console.log();
console.log('Printing number 0 to 9 with a loop:')
for 
(let i = 0; i < 10; i++) {
    console.log(i);//    const element = 10  
}
console.log();
console.log('Printing number 1 to 10 with a loop:')
for 
(let i = 1; i <= 10; i++) {
    console.log(i)   
};
console.log('Printing evens 0 to 20: ');
for
(let i = 0; i <= 20; i++) {
    if (i%2===0 && i!==0) {
        console.log(i)
    };      
};
console.log('Building a function called printNumbers(n), please type it and definie "n"');
let printNumbers = (n) => {
    for (let i = 0; i <= n; i++) {
      console.log(i)
    };
};
console.log('Creating function (getGreetingTo), where you can add a name , and geting back a greetings to that Person.');
let getGreetingTo = (names) =>{    
    return `Hello, ${names}`
};
console.log("Creating function (printValues), where you can add items to an array ['',''...] , and geting back the items in print, with for loop.");
let printValues = (arrayTwo) => {
    for (let i = 0; i < arrayTwo.length; i++) {
      console.log(arrayTwo[i]);
    }
  };
  console.log("Creating function (myItems), where you can add items to an array ['',''...] , and geting back the items in print, with foreach loop.");
  let myItems = (arrayThree) =>{
    arrayThree.forEach((items)=>{
        console.log(items)
        })  
    };