var mainimg=document.querySelector("#mainimg")
var smallimg=document.querySelectorAll("#small-img")

smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src
}


// media query
const bar=document.getElementById('hamburgermenu')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')


function myFunction() {
   bar.classList.add('hamburger')
  }