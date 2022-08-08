//preloader
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.b-preloader').classList.add('active')
  }, 3000);
})
// //burger menu
const burgerBtn = document.querySelector('.b-burger'),
  burgerMenu = document.querySelector('header nav')

burgerBtn.onclick = function () {
  this.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}