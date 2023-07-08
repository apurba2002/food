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

