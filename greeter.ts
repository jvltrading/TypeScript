//Testing functionality

// function greeter(person) {
//     return ("Hello " + person);
// }

// var user = "Jayne";
// console.log(greeter(user));

/////////////////////////////////////////////////////////////////////////////

//Interfaces

// interface LabeledValue {
//     label: string;
// }

// function printLabel(labelObj: LabeledValue) {
//     console.log(labelObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

/////////////////////////////////////////////////////////////////////////////////////

//Optional Properties

// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "White", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "Black"});

//////////////////////////////////////////////////////////////////////////////////////

//Read Only Properties
 
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

//Constructing a point and asigning an object literal.

// let p1: Point = { x: 10, y: 20}; //Once these vars are declared, they cannot be changed.
// p1.x = 5; //This will present an error.

// Type Script ReadonlyArray<T>

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // Produces an Error!
// ro.push(5); // Produces an Error!
// ro.length = 100; // Produces an Error!
// a = ro; // Produces an Error!
// a = ro as number[]; // This will work as you can still override with type assertion.

///////////////////////////////////////////////////////////////////////////////////////

//Function Types

// interface SearchFunc {                              //giving the interface a call signature;
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result  = source.search(subString);
//     return result > -1;
// }

//The above code could have also been written like this.

// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }

///////////////////////////////////////////////////////////////////////////////////////

//Inexable Types ==>> These have index signatures to describe their types and can be used to index into the obect.

// interface StringArray {
//     [index: number]: string;     //This indicates that when a stringArray is indexed with a number and will return a string.
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

//Showing the different types of supported index signatures.
// class Animal {
//     name: string;
// }

// class Dog extends Animal {
//     breed: string;
// }

// //Error: Indexing with a numeric string might get you completely separate Animals.
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

///////////////////////////////////////////////////////////////////////////////////////

//Class Types

// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) { }
// }

// you can also describe methods in an interface that is implemented in the class.

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

//////////////////////////////////////////////////////////////////////////////////////////

//Classes

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

/////////////////////////////////////////////////////////////////////////////////////////

//Inheritance

// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animals moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Woof! Woof!");
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

//////////////////////////////////////////////////////////////////////////
//Another more complex example.

// class Animal {
//     name string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom = new Horse("Tommy the Palomino");

// sam.move;
// tom.move(34);

///////////////////////////////////////////////////////////////////////////
//Public, Private and Protected Modifiers

// //Marking a member public explicitly.
// class Animal {
//     public name: string;
//     public constructor(theName: string) {this.name = theName;}
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`)
//     }
// }

// //Understanding Private
// class myAnimal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// new myAnimal("Cat").name; // This will produce an error as the 'name' is private;

//Better Example
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// animal = employee; //This gives an Error: "Animal" and "Employee" are not compatible.

////////////////////////////////////////////////////////////////////////////////////
//ReadOnly

// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man With the 3-piece suit"; //Throws error! Readonly value.

/////////////////////////////////////////////////////////////////////////////////////
//Accessors

// class Employee {
//     fullname: string;
// }

// let employee = new Employee();
// employee.fullname = "Bob Smith";
// if (employee.fullname) {
//     console.log(employee.fullname);
// }

//Using Secret Passwords

// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

//////////////////////////////////////////////////////////////////////////////////////////
//Static Properties

// class Grid {
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0); // 1x Scale
// let grid2 = new Grid(5.0); // 5x Scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//////////////////////////////////////////////////////////////////////////////////////////
//Abstract Classes

// abstract class Animal {
//     abstract makeSound (): void;
//     move(): void {
//         console.log("Roaming the earth...");
//     }
// }

// abstract class Department {
//     constructor(public name: string) {
//     }
//     printName(): void {
//         console.log("Department name: " + this.name);
//     }
//     abstract printMeeting(): void; //must be implemented in derived class
// }

// class AccountingDepartment extends Department {
//     constructor() {
//         super("Accounting and Auditing"); // Constructors in derived class must call  super().
//     }
//     printMeeting(): void {
//         console.log("Accounting Department meets each Monday at 10am.");
//     }
//     generateReports (): void {
//         console.log("Generating Accounting Reports...");
//     }
// }

// let department: Department; //ok to create a reference to an abstract type
// department = new Department(); //Will receive an error: cannot create an instance of an abstract class.
// department = new AccountingDepartment(); // ok to create and assign a non-absrtact subclass.
// department.printName();
// department.printMeeting();
// department.generateReports(); // Error: method doesnt exist on declared abstract type.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Advanced Techniques
//Constructor Functions

// class Greeter {
//     static standardGreeting = "Goodday My Lord";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello " + this.greeting;
//         } else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Well Hello There Old Sport!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TypeScript Functions

// function add(x: number, y: number): number {
//     return x + y;
// }

// let myAdd = function(x: number, y: number) : number { return x + y; };

// let myAdd2 = (BaseValue: number, increment: number) => number = function(x: number, y: number): number {return x + y;};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inferring

// //myAdd has the full function type
// let myAdd = function(x: number, y: number): number {retrun x + y;};

// //the parameters 'x' and 'y' have the type number
// let myAdd: (baseValue: number, increment: number) => number = function(x,y) {return x + y;};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Optional and Default Parameters

// function buildName(firstName: string, lastName: "Smith") { //adding the question mark to the parameter makes that parameter optional.
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob"); // Works correctly.
// let resultU = buildName("Bob", undefined); // This still workds, also returns "Bob Smith".
// let result2 = buildName("Bob", "Sally", "mcWilliams"); //Error, too many parameters.
// let result3 = buildName("Bob", "Adams"); //Just right :D .

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Parameters

// function buildName (fistName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(' ');
// }

// //employeeName will be "Joseph Samuel Lucas MacKenzie"
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This and Arrow Functions

// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This parameters

// function f(this: void) {
//     // make sure `this` is unusable in this standalone function
// }


// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //This parameters in callbacks

// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// //this: void means that addClickListener expects onclick to be a function that does not require a this type.

// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used `this` here. using this callback would crash at runtime
//         this.info = e.message;
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!

// // to use a better option, change the this. type:

// class Handler {
//     info: string;
//     onClickGood(this: void, e: Event) {
//         // can't use `this` here because it's of type void!
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Overloads

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// //creating list of overloads to see what our pickCards accepts and what it returns

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Hello World Of Generics

// function identity(arg: number): number {
//     return arg;
// }

// Or using any for the type attribute

// function identity(arg: any): any {
//     return arg;
// }

// //Or using Type variable <T> to capture the type

// function identity<T>(arg: T): T {
//     return arg;
// }

// //calling the generic identity function

// let output = identity<string>("myString"); // Output Type will be string.

// //Or letting the compiler set the type for us automatically based on what is passed in.

// let output = identity("myString");

// //Passing Arrays 

// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }

// //Generic Types --------------------------------------------------

// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;

// }

// let myIdentity: GenericIdentityFn<number> = identity;

// //Generic Classes

// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x = y; };

// //We could have instead used strings or even more complex objects.

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function(x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// //Generic Constraints --------------------------------------------------------->

// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Enums

// //Numeric Enums

// enum Direction {
//     Up = 1,
//     Down, //would be auto initialized to 2
//     Left, //woudl be auto initialized to 3
//     Right, //and so forth . . . for n times
// }

// //Usage -------------------------->

// enum Responses {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Responses): void {
//     //...
// }

// respond("Princess Caroline", Responses.Yes);

// //Error response example ------------->

// enum E {
//     A = getSomeValue(),
//     B, //Error! "A" is not constant-initialized, so "B" needs an initializer.
// }

// //String Enums -------------------->

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// //Heterogeneous enums ----------------> //advised that you don't use this too much/ if ever.

// enum BooleanLikeHeteroEnum {
//     No = 0,
//     Yes = "YES",
// }

// //Constant & Computed Enums --------------------->

// enum FileAccess {
//     //constant members
//     None,
//     Read = 1 << 1,
//     Write = 1 << 2,
//     ReadWrite = Read | Write,
//     //computed member
//     G = "123".length,
// }

// Union Enums & enum member types ----------------->

// enum ShapeKind {
//     Circle,
//     Square,
// }

// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }

// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }

// let c: Circle = {
//     kind: ShapeKind.Square,
//     //    ~~~~~~~~~~~~~~~~ Error!
//     radius: 100,
// }

// //Const Enums --------------------------------->

// const enum Enum {
//     A = 1,
//     B = A * 2
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Modules 