'use strict';

document.querySelector('.header__input').addEventListener('input', function() {
  let val = this.value.trim().toLowerCase();
  let elasticItems = document.querySelectorAll('.item__title');
  if (val != '') {
    elasticItems.forEach(function(elem) {
      if (elem.innerText.toLowerCase().search(val) == -1) {
        elem.closest('.item').classList.add('hide');
      }
      else {
        elem.closest('.item').classList.remove('hide');
      }
    });
  }
  else {
    elasticItems.forEach(function(elem) {
      elem.closest('.item').classList.remove('hide');
    })
  }
}); 