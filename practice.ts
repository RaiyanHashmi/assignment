// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// function add (num1:number, num2:number) {
//     return num1 + num2;
// }

// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
//  });

// number 5,5.5,-5
// string
// boolean true/false (only true false ! values)

// variable = let/const only not var ! 

// const person = "raiyan";
// let person = "raiyan";
// raiyan = 2;  error ! 
// let prs: string;

// prs = "raiyan"; 

// Array !
//  const names = ["raiyan","bilal","sana"];
// let names:string[] = [];
// names.push("hello");
// names.push(5); error ! 

// Object 


// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     //email?: string; // optional  is not recommended 
//     email: string;
// } = {
// name: "raiyan",
// age: 19,
// hobbies: ["coding"],
// email: ""
// }

// person.email = "raiyan@gmail.con";

// multiple person

// type customer = {
//     name: string;
//     age: number;
//     hobbies: string[];
//     //email?: string; // optional  is not recommended 
//     email: string;
// };

// let customers: customer[] = []; 

// const person1: customer = {
// name: "raiyan",
// age: 19,
// hobbies: ["coding"],
// email: ""
// }

// person1.email = "raiyan@gmail.con";

// customers.push(person1);
// customers.push({
//     name: "noman",
//     age: 24,
//     hobbies: ["sports"],
//     email: ""
// });


//  tuples // fixed length array  exampple below ! 
//  const person1 = {
//     name: "raiyan",
//     age: 18,
//     hobbies: ["sports"],
        
//  }
// const roles: [number,string] = [0, "admin"]; // length is fixed is 2 !!  
// // roles [2] = "raiyan"; //error 
// roles.push("raiyan");

// let data: string | number;

// data = "raiyan";
// data = 5;
// data = true

// literal types ! 
 
// function myFunc (num1:number,num2:number, cond: "add" | "subtract") {
// if (cond === "add"){
//     return num1 + num2;
// } else if (cond === "subtract") {
//     return num1 - num2;
// }

// }

// console.log(myFunc(5,8,"add"));

// Function Types

// let myFunc: (x: number, y: number) => number;

// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// myFunc = add;

// const button = document.querySelector("button")!;

// function log () {
//     console.log("clicked");
// }

// button.addEventListener("click", log);

// Classes !!!! // blueprint !!!

// class Student {
//     name: string;
//     rollNo: number;
//     private skills: string[] = []

//     constructor (n:string, r:number) {
//         this.name = n;
//         this.rollNo = r;
//     }

//     addSkill (skill: string) {
//         this.skills.push(skill);

//     }
// }

// const student1 = new Student("raiyan", 1006);
// student1.addSkill("Coding");
// console.log(student1);


// Short Hand Method !!

// class Student {
//     private skills: string[] = []

//     constructor ( public name:string, readonly rollNo:number) {
//     }

//     addSkill (skill: string) {
//         this.skills.push(skill);

//     }
// }

// class VStudents extends Student {
//     private canVolunteerIn: string[] = [];
//     constructor (name:string, rollNo:number) {
//         super(name, rollNo);
//     }

//     addVSkill (skill: string) {
//         this.canVolunteerIn.push(skill);

// }
// get willVolunteerIn (){
//     return this.canVolunteerIn;
// }

// }

// const student1 = new VStudents("raiyan", 1006);
// student1.addSkill("Coding");
// student1.addVSkill("Attend");
// console.log(student1);
// console.log(student1.willVolunteerIn);

// Abstract !!!

// abstract class Student {
//     private skills: string[] = [];

//     constructor (public name: string, public readonly rollNo: number) {
//     }

//     abstract addSkill (skill: string): void;

//     getSkills () {
//         return this.skills;
//     }
// }

// class VStudent extends Student {
//     private canVolunteerIn: string[] = [];
//     static id: string = "abc-785"
//     constructor (name: string, rollNo: number) {
//         super(name, rollNo);
//     }

//     addSkill () {}

//     addVSkill (skill: string) {
//         this.canVolunteerIn.push(skill);
//     }

//     get willVollunteerIn () {
//         return this.canVolunteerIn;
//     }

//     set willVollunteerIn (skills: string[]) {
//         for (const skill of skills) {
//             if(!skill) {
//                 return;
//             }
//         }
//         this.canVolunteerIn = skills;
//     }

// }

// const student1 = new VStudent("Nadir", 1007);
// student1.addSkill("JavaScript");

// student1.addVSkill("Attendance");
// console.log(student1.getSkills());
// student1.willVollunteerIn = ["Apple", ""];
// console.log(VStudent.id);

// // Single tons !!!!!!


// class Human {
//     static object: Human;

//     private constructor (private name: string) {

//     }

//     static getObject (name: string) {
//         if(this.object) {
//             return this.object;
//         }
//         this.object = new Human(name);
//         return this.object;
//     }
// }

// const raiyan = Human.getObject("Raiyan");

// const rehan = Human.getObject("Rehan");

// console.log(raiyan, rehan); 

// type person = {
//     name: string
// };

//  interface !!!!

//  interface person {
//     name: string;
//  };

//  let raiyan: person;

//  raiyan = {
//     name : "raiyan",
//  }

// raiyan = {
//     name: "Raiyan",
//     speak(sentence: string) {}
// }



// class Human implements Person {
//     constructor(public name: string, private id: string) {}

//    speak(sentence: string): void {
       
//    }
// }

// ADVANCED TYPES

// Union types
// type Combined = string | number | boolean;

// let abc: Combined;

// Intersection types
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// type Creature = Bird & Animal;

// let abc: Creature;

// abc = {
//     name: "Hen",
//     flyingSpeed: 45,
//     runningSpeed: 20
// }

// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }
// interface Animal {
//     name: string;
//     runningSpeed: number;
// }

// interface Creature extends Bird, Animal {};


// TYPE GUARDS

// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// class Bird {
//     constructor(public name: string, public flyingSpeed: number) {}
// }
// class Animal {
//     constructor(public name: string, public runningSpeed: number) {}
// }

// type Creature = Bird | Animal;

// function log (creature: Creature) {
//     console.log(creature.name);
//     if (creature instanceof Animal) {
//         console.log("Running Speed: " + creature.runningSpeed);
//     }
//     if (creature instanceof Bird) {
//         console.log("Flying Speed: " + creature.flyingSpeed);
//     }
// }

// log(new Animal("Dog", 80));


// const elem = <HTMLInputElement>document.getElementById("input")!;

// elem.value

// GENERICS

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done");
//     }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// });

// const arr: Array<string | number> = ["abc", "xyz"]

// function merge<T extends object, U extends object> (objA: T, objB: U) {
//     return {...objA, ...objB}
// }
// const merged = merge({name: "raiyan"}, {age: 30});
// console.log(merged.name);

// Decorators

// function Logger (data: string) {
//     return function (_: Function) {
//         console.log("Logging.... " + data);
//     }
// }

// function FillHTML (template: string, id: string) {
//     return function (_: Function) {
//         const ele = document.getElementById(id);
//         if(ele) {
//             ele.innerHTML = template;
//         }
//     }
// }

// @Logger("data")
// @FillHTML("<b>This is my Data</b>", "app")
// class Person {
//     name = "raiyan";

//     constructor () {
//         console.log("Called");
//     }
// }

// const nadir = new Person();


// FUNCTION OVERLOADS
// type Combined = string | number;

// function add (a: string, b: string): string;
// function add (a: number, b: number): number;
// function add (a: Combined, b: Combined) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     } else {
//         throw Error("Types check kar");
//     }
// }
// add(1, 2).toFixed();
// add("abc", "def").split(" ");





