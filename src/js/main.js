// const swiper = require('./components/swiper')
// swiper()


// let artcile = document.querySelector('.b-article__description'),
//     tables = artcile.getElementsByTagName('table'),
//     length = tables.length,
//     i, wrapper;

// for (i = 0; i < length; i++) {
//     wrapper = document.createElement('div');
//     wrapper.setAttribute('class', 'table-wrapper');
//     tables[i].parentNode.insertBefore(wrapper, tables[i]);
//     wrapper.appendChild(tables[i]);
// }

//burger menu
const burgerBtn = document.querySelector('.b-burger'),
      burgerMenu = document.querySelector('header nav')
        
      burgerBtn.onclick = function() {
        this.classList.toggle('active')
        burgerMenu.classList.toggle('active')
      }
      