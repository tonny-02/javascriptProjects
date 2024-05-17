let hum = document.getElementById("hum")
let nav = document.getElementById("nav")
hum.addEventListener("click",()=>{
    hum.classList.toggle("active")
    nav.classList.toggle("active")
})