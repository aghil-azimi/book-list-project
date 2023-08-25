// let person={name:"aghil"};

// let aPerson;

// aPerson = Object.assign({},person);

// person.name="ali";

// console.log(person);
// console.log(aPerson);

// let numbers = [1,2,3,4,5];

// let aNumbers;

// // aNumbers = numbers;
// aNumbers=Object.assign([],numbers)
// aNumbers[2] =15;

// console.log(numbers);

// console.log(aNumbers)

// for(let counter=0; 10>counter; counter++ ){
//     if(counter===6){
//         break;
//     }
//     console.log(counter)
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let temp = [1, 2, 3, 13, 11, 12];

// let result = number.concat(temp);

// console.log(result);

// //  number.splice(2,6,34);

// console.log(number);
// let number = 5;

// switch (number) {
//   case 1:
//     console.log("aghil");
//     break;

//   case 2:
//     console.log("ali");
//     break;

//   case 3:
//     console.log("marjan");
//     break;
//     default:
//         console.log("ridi")
// }
// const numbers =[-1,-2,3,4,5,6,7,9,87,];
// let result;
// let sum = 0;
// for(let number of numbers){
//     sum+=number;
// }
// result = sum;
// console.log(sum)
// console.log(numbers)
// let result = numbers.reduce((sum , cValue)=> sum += cValue,0);
// console.log(result)
// function sum (...result){
//   return result.reduce((sum,cValue)=> sum+cValue ,0)
// }

// console.log(sum(1,2,3,4,5))
// function Person(){
//     this.firstName = "aghil";
//     this.lastName = "aayimi";

// this.draw= function(){
//     console.log("draw")
// }
// }
// let person = new Person();
// console.log(person.draw());
// class Person {
//   constructor(fName, lName, age) {
//     this.ferstName = fName;
//     this.lastName = lName;
//     this.age = age;
//   }
//   allPerson() {
//     return `my name is ${this.ferstName} and my lastname is ${this.lastName} and my age is ${this.age}`;
//   }
// }

// class Marjan extends Person {
//   constructor(ferstName, lastName, age){
//     super(ferstName, lastName, age);
//   }
// }
// let marjan = new Marjan("eghbal", "sarhadi", 32);

// console.log(marjan.allPerson());
// function formatDate(dateObject){
//       const parts = {
//         years:dateObject.getFullYear(),
//         month:dateObject.getMonth(),
//         date:dateObject.getDate(),
//         hour:(dateObject.getHours() % 12) || 12,
//         minute:dateObject.getMinutes().toString().padStart(2,"0"),
//         amOrPm:dateObject.getHours() <12 ?"Am" :"pm"

//       }
//       return `${parts.years}.${parts.month}.${parts.date}  ${parts.hour}:${parts.minute} ${parts.amOrPm}`
// }

// let myDate = new Date();

// const myDateFormat = formatDate(myDate);

// console.log(myDateFormat)
// let num = 1;

// if(num == true){
//   console.log("aghil")
// }else{
//   console.log("ali")
// }

// let numbers = [-1, -2, 3, 4, 5, 6, 7, 9, 87];
// let number = numbers;

// numbers = [];

// console.log(number);
// console.log(numbers);

// for(let childer of childerns){
//   console.log(childer)
// }

// let qSelec = document.querySelector("li");

// let result = document.createElement("h2");
// result.id = "aghil";

// result.className = "ali ayoub";

// result.setAttribute("marjan", "sarhadi");

// result.textContent = "aghil khobi";
// console.log(result);
// let uls = document.querySelector("ul");
// let lis = document.querySelector("li");

// let result = lis.parentElement;

// console.log(result);

// let uls = document.createElement("ul");
// let lis = document.createElement("li");

// lis.appendChild(document.createTextNode("mehdi"));

// uls.appendChild(lis);

// console.log(lis);

// let khi = document.querySelector("#add-book input");

// console.log(khi.value);

// let d = new Date().getDay();
// let a = d[5];

// console.log(d);

const inputText = document.querySelector("#add-book input");
const link = document.querySelector(".button");
const ul = document.querySelector("ul");
const li = document.createElement("li");
const checkBox = document.querySelector('#hide input');
const inputSearch = document.querySelector('#search-books input');

const spanDelete = `<span class="delete">Delete</span>`;

link.addEventListener("click", (e) => {
  e.preventDefault;

  if (inputText.value !== "") {
    ul.innerHTML += `
  <li>
  <span class="name">${inputText.value}</span>
  <span class="delete">Delete</span>
  </li>
`;
  }
  storeToLocalStorage(inputText.value)

  inputText.value = "";

  
});
inputSearch.addEventListener('keyup',() => {
  const searchTo = inputSearch.value.toLowerCase()
  for(let book of ul.children){
    book.firstElementChild.textContent.toLowerCase()
   if(book.firstElementChild.textContent.indexOf(searchTo) !== -1){
     book.style.display ='initial';
   }else{
     book.style.display = 'none'
   }
  }
 })
 

document.addEventListener('DOMContentLoaded',function(e){

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = localStorage.getItem('tasks').split(',');

  }

  for(let ithem of tasks){
    ul.innerHTML += `
    <li>
    <span class="name">${ithem}</span>
    <span class="delete">Delete</span>
    </li>
  `;
  } 
})



checkBox.addEventListener('change',()=> {
  if(checkBox.checked === true){
    ul.style.display ='none'
  }else{
    ul.style.display = 'initial'
  }
})




function storeToLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = localStorage.getItem('tasks').split(',');

  }
  
  tasks.push(task);

  localStorage.setItem('tasks',tasks);


}
