const burger=document.querySelector(".lines");
const navMenu=document.querySelector(".sub-menu");


burger.addEventListener("click", () => {

    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});



