import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

import Swiper, { Pagination } from "swiper";


Swiper.use([Pagination]);

let swiperConts = document.querySelector('.swiper');
let swiperWrappers = document.querySelector('.swiper-wrapper');
// let swiperSlide = document.querySelector('.swiper-slide');
let swiperPags = document.querySelector('.swiper-pagination');
let menu = document.querySelector('.section');

const swiper = new Swiper(".swiper", {
    
    loop: false,

    enabled: false,
    width: 240,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
   
      320: {
        enabled: true,
        slidesPerView: 1,
      },
    },
  });

  if (window.innerWidth >= 768) {
    swiper[0].destroy();
    swiper[1].destroy();
    swiper[2].destroy();
    swiper.enabled = "false";
  
    let elements = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.remove("swiper-slide");
    }
    for (let j = 0; j < swiperConts.length; j++) {
      let swiperCont = swiperConts[j];
      swiperCont.classList.remove("swiper");
    }
    for (let w = 0; w < swiperWrappers.length; w++) {
      let swiperWrapper = swiperWrappers[w];
      swiperWrapper.classList.remove("swiper-wrapper");
    }
    for (let p = 0; p < swiperPags.length; p++) {
      let swiperPag = swiperPags[p];
      swiperPag.classList.add("hidden");
    }
  
  }

const burger = document.querySelectorAll('.btn__burger');

burger.forEach((el) => {
    el.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
});

const close = document.querySelectorAll('.btn-close');

close.forEach((el) => {
    el.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
});

const wrap = document.querySelector('.section-wrapper');
console.log(wrap);

menu.addEventListener('click', (e) => {
  let inner = e.composedPath().includes(wrap);
  if (!inner) {
    menu.classList.remove('show');
  }
});

showAll.onclick = function() {
    
  let wrapper  = document.querySelector('.wrapper');
  let cards = document.querySelector('.cards');

  if (showAll.classList.contains('show')) {
      if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
          cards.classList.add('section-middle');
      wrapper.classList.add('wrapper-middle');
      showAll.classList.remove('show');
      showAll.classList.add('hide');
      } else {
          cards.classList.add('section-desk');
      wrapper.classList.add('wrapper-desk');
      showAll.classList.remove('show');
      showAll.classList.add('hide');
      };
  } else {
      if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
          cards.classList.remove('section-middle');
          wrapper.classList.remove('wrapper-middle');
          showAll.classList.remove('hide');
          showAll.classList.add('show');
      } else {
          cards.classList.remove('section-desk');
          wrapper.classList.remove('wrapper-desk');
          showAll.classList.remove('hide');
          showAll.classList.add('show');
      };
  };  
};

window.addEventListener("resize", function(){
  window.location.reload();
});

showAll2.onclick = function() {
    
  let wrapper2  = document.querySelector('.wrapper2');
  let repairs = document.querySelector('.repairs');

  if (showAll2.classList.contains('show')) {
      if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
        repairs.classList.add('section-middle');
      wrapper2.classList.add('wrapper-middle');
      showAll2.classList.remove('show');
      showAll2.classList.add('hide');
      } else {
        repairs.classList.add('section-desk');
      wrapper2.classList.add('wrapper-desk');
      showAll2.classList.remove('show');
      showAll2.classList.add('hide');
      };
  } else {
      if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
          repairs.classList.remove('section-middle');
          wrapper2.classList.remove('wrapper-middle');
          showAll2.classList.remove('hide');
          showAll2.classList.add('show');
      } else {
          repairs.classList.remove('section-desk');
          wrapper2.classList.remove('wrapper-desk');
          showAll2.classList.remove('hide');
          showAll2.classList.add('show');
      };
  };  
};

window.addEventListener("resize", function(){
  window.location.reload();
});

showAll3.onclick = function() {
    
  let services  = document.querySelector('.services');

  if (showAll3.classList.contains('show-services')) {
      
        services.classList.add('service-show');
      showAll3.classList.remove('show-services');
      showAll3.classList.add('hide');
      } else {
          
          services.classList.remove('service-show');
          showAll3.classList.remove('hide');
          showAll3.classList.add('show-services');
      };
  }; 

window.addEventListener("resize", function(){
  window.location.reload();
});

const modalBtns = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');

const body = document.body;

function openModal(elem) {
	elem.classList.add('_active');
	body.classList.add('_locked')
}

function closeModal(e) {
	if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
		e.target.closest('._modal').classList.remove('_active');
		body.classList.remove('_locked')
	}
}

modalBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
				openModal(modal)
			}
		})
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
	modals.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('_active')) {
			modal.classList.remove('_active');
			body.classList.remove('_locked');
		}
	})
})