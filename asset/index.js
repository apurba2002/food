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
document.getElementById("baner1btn").addEventListener("click",()=>{
    window.location.href="#bergar"
})
document.getElementById("baner3btn").addEventListener("click",()=>{
    window.location.href="#menu"
})
document.getElementById("baner2btn").addEventListener("click",()=>{
    window.location.href='#plater'
})
document.getElementById("appbtn").addEventListener("click",()=>{
    window.location.href='https://play.google.com/store/games?pli=1'
})
