const  toggleMenu = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
})
// toggleMenu.onclick = function () {
//     toggleMenu.classList.toggle('active')
//     navigation.classList.toggle('active')
// }



let stars = document.getElementById('stars')
let stars2 = document.getElementById('stars2')
let moon = document.getElementById('moon')
let masjid = document.getElementById('masjid')
let rock = document.getElementById('rock')
let text = document.getElementById('text')
let header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    stars.style.bottom = value * 0.05+ '%'
    stars2.style.bottom = value * 0.025+ '%'
    moon.style.bottom = value * -0.5+ 'px'
    rock.style.bottom = value * -0.75+ 'px'

    text.style.right = -100 + value * 0.5+ '%'
    text.style.top = 50 + value * 0.1+ '%'

    header.style.top = value * 0.5+ 'px'
})
