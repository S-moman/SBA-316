let serviceContainer = document.getElementById("serviceBlock")
const menu = document.getElementById('menu');
menu.style.backgroundColor = 'blue'
menu.style.color ='orange'
menu.style.height = '100%';
menu.classList.add("flex-around");
menu.classList.add("flex-ctr");


const menuLinks = [
    {text: 'Home', href: '#'},
    {text: 'Register', href: '#'},
    {text: 'Contact', href: '#'},
    {text: 'Services', href: '#'},
    {text: 'Log In', href: '#' },
]

// let menuLink = menuLinks.length

// for(i = 0; i < menuLink; i++ ) {
//     let anchor = document.createElement('a');
//     anchor.setAttribute('href', menuLink.href);
//     anchor.innerHTML = menuLink.text;
//     menu.appendChild(anchor);
// }

menuLinks.forEach((menuLink) => {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', menuLink.href);
    anchor.innerHTML = menuLink.text;
    menu.appendChild(anchor);
})



function createContainer() {
    for(let i = 0; i < 3; i++) {
        let box = document.createElement("div");
        
            serviceContainer.appendChild(box);
    }
} 
createContainer()




