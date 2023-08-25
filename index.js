
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

