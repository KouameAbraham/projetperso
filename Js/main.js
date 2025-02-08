let typed = new Typed((".Anim"),{   
    strings : [" ABRAHAM KOUAME", "Developpeur Web"],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 200,
    loop: true,
})


let MenuLink = document.querySelector("#MenuLink");
let PowerLink = document.querySelector("#PowerLink");

MenuLink.style.maxHeight = "0px";

PowerLink.addEventListener("click", ()=>{
    if (MenuLink.style.maxHeight === "0px") {
        MenuLink.style.maxHeight = "350px"
    } else {
        MenuLink.style.maxHeight = "0px"  
    }
})