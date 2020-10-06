import Vue from 'vue'
function animateCSS (elem, handleClass, command) {
  if(command === 'show') {
    elem.classList.add(...handleClass)
    elem.style.visibility = 'visible';
  } else {
    elem.classList.remove(...handleClass)
    elem.style.visibility = 'hidden';
  }
}
Vue.directive('aos', {
  inserted: (elem, bindValues, vnode) => {
    const {value} = bindValues;
    const defaultOpts = {
      isToggle: false,
      threshold: [0.2, 0.8],
      root: null,
      rootMargin: '0px 0px 0px 0px',
      animationClass: 'fade-up',
      callbackName: '',
    }
    const {
      isToggle, threshold, root, rootMargin, animationClass, callbackName
    } = Object.assign({}, defaultOpts, value);
    const handleClass = animationClass.split(' ');
    elem.classList.add('transition-item');
    elem.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCSS(entry.target, handleClass, 'show');
          if(!!callbackName) {
            vnode.context[callbackName].apply();
          }
          if(!isToggle) {
            observer.unobserve(entry.target)
          }
        } else {
          if(isToggle) {
            animateCSS(entry.target, handleClass, 'hide');
          }
        }
      })
    }, {
      threshold,
      root,
      rootMargin
    })
    elem.observer.observe(elem)
  },
  unbind: (elem) => {
    if(elem.observer) {
      elem.observer.disconnect();
    }
  }
})
