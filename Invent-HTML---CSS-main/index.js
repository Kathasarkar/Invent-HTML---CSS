const modal = document.getElementById("modal");
const openBtn = document.querySelector(".btn-1");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", function (){
    modal.classList.remove("active");
})

window.addEventListener("click", (e)=>{
    if(e.target === modal){
        modal.classList.remove("active");
    }
})


const faqbox = document.querySelectorAll(".faq-box");
faqbox[0].classList.add("active");
faqbox.forEach(items =>{
    const questions = items.querySelector(".faq-question");

    items.addEventListener("click", ()=>{
        const isActive = items.classList.contains("active");

        faqbox.forEach(b=>{
            b.classList.remove("active");
        });
        if(!isActive){
            items.classList.toggle("active");
        }
    })
})

const menuToggle = document.getElementById("menu-toggle");

const navBar = document.getElementById("navbar");

menuToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    navBar.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

navBar.addEventListener("click", (e)=>{
    e.stopPropagation();
})

window.addEventListener("click", ()=>{
    navBar.classList.remove("active");
    menuToggle.classList.remove("active");
})
    













const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const dropdowntoggle = dropdown.querySelector (".dropdown-toggle");
    dropdowntoggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isActive = dropdown.classList.contains("active");
        dropdowns.forEach(d => {
        d.classList.remove("active");
    })
    dropdown.classList.toggle("active", !isActive)
})
})
document.addEventListener("click", (e) => {
    dropdowns.forEach(d => {
        d.classList.remove("active")
    })
} )



