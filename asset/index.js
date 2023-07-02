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
document.getElementById('menu').addEventListener('mouseover',function(){
    document.getElementById('menugrp').classList.add('menuanimation')
})
document.getElementById('review').addEventListener('mouseover',function(){
    document.getElementById('person').classList.add('reviewperson')
})
document.getElementById('review').addEventListener('mouseout',function(){
    document.getElementById('person').classList.remove('reviewperson')
})
document.getElementById('review').addEventListener('mouseover',function(){
    document.getElementById('ri').classList.add('reviewimg')
})
document.getElementById('review').addEventListener('mouseout',function(){
    document.getElementById('ri').classList.remove('reviewimg')
})
document.getElementById('review').addEventListener('mouseover',function(){
    document.getElementById('offer').classList.add('reviewbtn')
})
document.getElementById('review').addEventListener('mouseout',function(){
    document.getElementById('offer').classList.remove('reviewbtn')
})
document.getElementById('review').addEventListener('mouseover',function(){
    document.getElementById('rtxt').classList.add('reviewtxt')
})
document.getElementById('review').addEventListener('mouseout',function(){
    document.getElementById('rtxt').classList.remove('reviewtxt')
})
