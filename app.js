const burgerBtn = document.querySelector('.nav-burger img');
const menu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.nav-menu img');

// 
const greetings = document.querySelector('.main-content .greetings');

window.addEventListener('load', () => {
    greetings.classList.add('active'); 
});

// for typewriter animation
const pText = document.querySelector('.main-content p');
const text = `I’m Melanie, a front-end web developer.`;
let index = 0;

function typeWriter(){
    pText.innerText = text.slice(0, index);

    index++;
    if(index > text.length){
        index = 0;
    }
}
//try asynchronous functions/promises ==============================
setTimeout(()=>{
    setInterval(typeWriter, 100);
},1000);

burgerBtn.addEventListener('click', () => {
    menu.classList.add('clicked');
    if(menu.classList.contains('clicked')){
        document.body.style.overflow = 'hidden';
    }
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('clicked');
    if(!menu.classList.contains('clicked')){
        document.body.style.overflow = 'visible';
    }
});

document.addEventListener('click', e =>{
    if(e.target != menu && e.target != burgerBtn){
        menu.classList.remove('clicked');
    }
    if(!menu.classList.contains('clicked')){
        document.body.style.overflow = 'visible';
    }
})

// function validateEmail(inputText)
// {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(inputText.value.match(mailformat))
//     {
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//     }
//     else
//     {
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//     }
// }