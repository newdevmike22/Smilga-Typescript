/*
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

/*
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

//console.log(greatGuitarPlayer, weight, isOverWeight);

// Union type
let tax: number | string = 10;
tax = 100;
tax = "$10";
console.log(tax);

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
console.log(requestStatus);

// Any type
let notSure: any = 4;
notSure = "I might use a number instead.";
notSure = false;
console.log(notSure);

// Type Annotation
const books = ["1984", "Brave New World", "The Richest Man In Babylon"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toLocaleUpperCase();
    break;
  }
}

console.log(foundBook?.length);

/*
## Challenge
- Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and
assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.

- Create a variable discount of type number | string and assign it the value 20.
Then, try to assign it the value '20%'.
*/

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";
console.log(orderStatus);

let discount: number | string = 20;
discount = "20%";
console.log(discount);

// Arrays
let prices: number[] = [100, 85, 63];
prices.push(16);
console.log(prices);

let fruit: string[] = ["apple", "orange", "banana", "grapes"];
fruit.push("watermelon");
console.log(fruit);

// TypeScript allowed a number with strings.
let names = ["Chuck D", "Flava Flav", 7];
console.log(names);

let array: (string | number | boolean)[] = ["Darth Vader", 1980, true, "Luke Skywalker", 1977, false];
console.log(array);

/* ## Challenge
- Create an array of temperatures and push 1 into the array.
- Create an array of colors and push 1 into the array.
- Create a mixed array with a number, string, and boolean values and push these same values into the array.
*/

let temperatures: number[] = [75, 60, 42];
temperatures.push(10);
console.log(`In the last 4 days it has been ${temperatures} degrees in St. Louis, MO.`);

let colors: string[] = ["red", "black", "blue", "gold"];
colors.push("silver");
console.log(colors);

let mixedArray: (number | string | boolean)[] = [57, "web developer", true];
mixedArray.push(22, "graphic designer", false);
console.log(mixedArray);
