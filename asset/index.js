function slideleft(){
    document.getElementById('slide1').style.display="none"
    
    document.getElementById('slide2').style.display="flex"
    document.getElementById('slide2').classList.add('slideanimation')

}
function slideright(){
    document.getElementById('slide2').style.display="none"
    
    document.getElementById('slide1').style.display="flex"
    document.getElementById('slide1').classList.add('slideanimation')

}
function baner2imganimation(){
    document.getElementById('baner2-txt').classList.add('baner-img-animation')
    
}
function baner2imganimationremove(){
    document.getElementById('baner2-txt').classList.remove('baner-img-animation')
    
}
document.getElementById('app').addEventListener('mouseover',function(){
    document.getElementById('app-img').classList.add('appanimation')
})
document.getElementById('app').addEventListener('mouseout',function(){
    document.getElementById('app-img').classList.remove('appanimation')
})