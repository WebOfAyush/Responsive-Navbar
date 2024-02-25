let img = document.querySelector('#icons');
let nav2 = document.querySelector('.Nav-2')
img.addEventListener("click",function(){
    nav2.style.top = "0px"
    console.log("clicked")
})
img.addEventListener("dblclick",function(){
    nav2.style.top = "-300px"
    console.log("clicked")
} )