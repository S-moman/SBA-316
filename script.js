let serviceContainer = document.querySelector("#serviceBlock");
const menu = document.getElementById("menu");
const toDoInput = document.getElementById('To Do List');
const addButton = document.getElementById('addButton')
menu.style.backgroundColor = "blue";
menu.style.color = "orange";
menu.style.height = "100%";
menu.classList.add("flex-around");
menu.classList.add("flex-ctr");
const removeButton = document.getElementById('removeButton')




const menuLinks = [
  { text: "Home", href: "#" },
  { text: "Register", href: "#" },
  { text: "Contact", href: "#" },
  { text: "Services", href: "#" },
  { text: "Log In", href: "#" },
];

// let menuLink = menuLinks.length

// for(i = 0; i < menuLink; i++ ) {
//     let anchor = document.createElement('a');
//     anchor.setAttribute('href', menuLink.href);
//     anchor.innerHTML = menuLink.text;
//     menu.appendChild(anchor);
// }

menuLinks.forEach((menuLink) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", menuLink.href);
  anchor.innerHTML = menuLink.text;
  menu.appendChild(anchor);
});

function createContainer() {
  for (let i = 0; i < 1; i++) {
    let box = document.createElement("div");
    box.id = 'toDoZone';
    serviceContainer.appendChild(box);
    let list = document.createElement("ol")
    box.appendChild(list)
  //   for(j = 0; j < 40; j++) {
  //       let listItems = document.createElement("li")
  //       list.appendChild(listItems)
  //   }
  }
}
createContainer();

function addToDo(e) {
  // console.log(e.target);
  let newToDo = document.createElement('li')
  newToDo.textContent = toDoInput.value;
  // console.log(newToDo);
  const toDoZone = document.getElementById('toDoZone');
  toDoZone.firstChild.appendChild(newToDo);
  toDoInput.value = '';
  newToDo.focus();
}

// function removeToDo(e) {
//   console.log(e.target);
//   let rItem = ''
//   ;
//   console.log(rItem);
//   toDoZonea.firstChild.appendChild(rItem)
// }



addButton.addEventListener('click', addToDo);
// removeButton.addEventListener('click', removeToDo);

// class Customer {
//   #name = {
//     first: '',
//     last: '',
//   };
//   #address = {
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   };
//   #ssn = {
//     ssn: '',
//   };
  
//   constructor(firstName, lastName, street, city, state, zipCode, ssn) {
//    this.#name.first = firstName
//    this.#name.last = lastName
//    this.#address.street = street
//    this.#address.city = city
//    this.#address.state = state
//    this.#address.zipCode = zipCode
//    this.#ssn = ssn
   
//   };
// get name() {
//   return this.#name.first
// }
// get address() {
//   return this.#address.city + ', ' + this.#address.state + ', ' + this.#address.zipCode
// }
// get ssn () {
//   return 'Private information'
// }
// }

// const john = new Customer('John', 'Doe', '1234 Main St', 'Pittsburgh', 'PA', '15221', '123456789');
// const jim = new Customer('Jim', 'Bo', '1234 Main St', 'Pittsburgh', 'PA', '15221', '123456788');

// console.log(john.address);
// console.log(jim.ssn);


