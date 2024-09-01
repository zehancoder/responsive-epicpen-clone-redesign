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

});



let playIcon = document.querySelector(".jh");

let noneImg = document.querySelector(".singleLeft");

let video = document.querySelector(".singleLeft2")



playIcon.addEventListener("click", () => {
    playIcon.classList.toggle("ri-play-circle-line");
    playIcon.classList.add("ri-pause-circle-line");

    noneImg.classList.toggle("singleLeft3");
    video.style.display = "block";
    

    
});


let cancel = document.querySelector(".cancel>i");

cancel.addEventListener("click", () => {
    video.style.display = "none";
    noneImg.classList.remove("singleLeft3");
    playIcon.classList.add("ri-play-circle-line");
    
})