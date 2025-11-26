let awesomeName = "shakeAndBake";
awesomeName = "Marvelous Mighty Mike";
awesomeName = awesomeName.toLocaleUpperCase();
console.log(awesomeName);

let amount = 57;
amount = 25 + 10;
console.log(amount);

let isStudent = true;
isStudent = false;
console.log(isStudent);

/* Challenge
- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathmatical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Assign the wrong type to each variable to see what happens.
*/

let greatGuitarPlayer: string = "Jimi Hendix";
greatGuitarPlayer = greatGuitarPlayer.toUpperCase();
console.log(greatGuitarPlayer);

let weight: number = 250;
weight = weight + 175;
console.log(`Tim and his brother weigh a combined ${weight} pounds.`);

let isOverWeight: boolean = weight >= 300;
console.log(isOverWeight);

/*
greatGuitarPlayer = 50;
weight = "seventy";
isOverWeight = "no";
*/

console.log(greatGuitarPlayer, weight, isOverWeight);
