let rightIcon=document.querySelector(".right-icon")
let leftIcon=document.querySelector(".left-icon")
let images=document.querySelectorAll(".images img")
rightIcon.addEventListener("click",function(){
    images.forEach(element => {
        element.classList.add("slider")
    });
})
leftIcon.addEventListener("click",function(){
    images.forEach(element => {
        element.classList.add("tersslider")
    });
})