function slideleft() {
    document.getElementById('slide1').style.display = "none"

    document.getElementById('slide2').style.display = "flex"
    document.getElementById('slide2').classList.add('slideanimation')

}
function slideright() {
    document.getElementById('slide2').style.display = "none"

    document.getElementById('slide1').style.display = "flex"
    document.getElementById('slide1').classList.add('slideanimation')

}
const burgericon = document.getElementById("burgericon");
const navres=document.getElementById("navbarres")
const b= document.getElementById("b")
const c= document.getElementById("c")

b.addEventListener('click',()=>{
    
    navres.style.display="block"
    c.style.display="block"
    b.style.display="none"
    
})
c.addEventListener('click',()=>{
    navres.style.display="none"
    c.style.display="none"
    b.style.display="block"
    
})

