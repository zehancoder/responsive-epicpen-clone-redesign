let navber = document.querySelector(".liItem");

let menu = document.querySelector(".icon");

menu.addEventListener("click", () => {
    navber.classList.toggle("block");
    navber.classList.add("ri-close-large-fill");

    let ndnav = document.querySelector(".ri-close-large-fill");

    ndnav.style.fontSize = "1.6rem";
    ndnav.style.cursor = "pointer";
    ndnav.style.margin = "1vw 15vw";
    

    ndnav.addEventListener("click", () => {
        navber.classList.add("block");
    })

})