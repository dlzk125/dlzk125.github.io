import Vue from 'vue'

const namespace = 'lazyImage';
Vue.directive('lazyImage', {
  bind: (elem, bindValues, vnode) => {
    const dataSrc = elem.dataset.src;
    if(!dataSrc) {
      return;
    }
    if(!elem[namespace]) {
      elem[namespace] = new LazyImage(elem, bindValues, vnode);
    }
  },
  inserted: (elem, bindValues, vnode) => {
    const dataSrc = elem.dataset.src;
    if(!dataSrc) {
      return;
    }
    if(!elem[namespace]) {
      elem[namespace] = new LazyImage(elem, bindValues, vnode);
    }
  },
  unbind(elem, bindValues) {
    if (elem[namespace]) {
      elem[namespace].disconnect();
      elem[namespace].disconnectMutation();
      elem[namespace] = undefined;
    }
  },
 })
class LazyImage {
  constructor(elem, bindValues = {}, vnode) {
    this.elem = elem;
    this.vnode = vnode;
    const defaultOpts = {
      threshold: this.buildThresholdList(100),
      root: null,
      rootMargin: '300px 0px 300px',
      callbackName: '',
    };
    const {options = {}} = bindValues;
    this.options = Object.assign({}, defaultOpts, options);
    this.imgObserve = null;
    this.lazyImage = this.elem.src;
    this.init();
  }

  init() {
    this.bindMutation();
    this.bindLazyImage();
  }

  bindMutation() {
    const attrs = ['data-src'];
    this.elem.attrObserve = new MutationObserver((mutations) => {
      for(const mutation of mutations) {
        if(attrs.includes(mutation.attributeName)) {
          this.elem.src = this.elem.dataset.src;
        }
      }
    })
    this.elem.attrObserve.observe(this.elem, {attributes: true});
  }

  disconnectMutation() {
    this.elem.attrObserve.disconnect();
  }

  bindLazyImage() {
    // const sizeInfos = this.value.split('x');
    // const sizeRatio = sizeInfos[1] / sizeInfos[0];
    // const elemWidth = this.elem.getBoundingClientRect().width;
    // this.elem.style.height = `${elemWidth * sizeRatio}px`;
    const dataSrc = this.elem.dataset.src;
    if(!!dataSrc) {
      this.observe();
    }
  }

  buildThresholdList(step) {
    const thresholds = [0];
  
    for (let i=1; i<=step; i++) {
      const ratio = i/step;
      thresholds.push(ratio);
    }
  
    return thresholds;
  }

  observe() {
    const {
      threshold, root, rootMargin
    } = this.options;
    this.elem.classList.add('lazy');
    this.imgObserve = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
          this.onIntersecting();
        }
      }
    }, {
      threshold,
      root,
      rootMargin
    });
    this.imgObserve.observe(this.elem);
  }

  onIntersecting() {
    this.onError();
    this.onLoad();
    this.elem.src = this.elem.dataset.src;
    this.disconnect();
  }

  disconnect() {
    if(!!this.imgObserve) {
      this.imgObserve.disconnect();
    }
  }

  onError() {
    this.elem.addEventListener('error', () => {
      this.elem.classList.add('lazy');
      this.elem.src = this.lazyImage;
    });
  }

  onLoad() {
    this.elem.onload = () => {
      const {callbackName} = this.options;
      this.elem.classList.remove('lazy');
      // this.elem.style.removeProperty('height');
      if(!!callbackName) {
        this.vnode.context[callbackName].apply();
      }
    };
  }
}
