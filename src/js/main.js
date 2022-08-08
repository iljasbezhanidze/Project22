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

//menu punkts hover animate(wrapper overflow)
document.querySelectorAll('[data-roll-animate]').forEach(el => {
  el.parentNode.style.overflowY = "hidden"
});

//main button animate
document.querySelectorAll('.b-btn').forEach(el => {
  let innerText1 = document.createElement('div'),
      wrapperText = document.createElement('div');
const btnText = el.innerHTML
      el.innerHTML = ''
      wrapperText.className = 'b-btn__inner';
      innerText1.className = 'b-btn__text';
      innerText1.setAttribute('data-roll-animate', btnText)
      el.appendChild(wrapperText);
      wrapperText.appendChild(innerText1);
      innerText1.innerHTML = btnText;
});



