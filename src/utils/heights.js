/**
 * heights
 * create by lqy 2018/3/9
 */

const heights = (dom) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let h = 0;
      dom.forEach((value) => {
        try{
          const $el = document.querySelector(value);
          if ($el !== null) {
            h += $el.offsetHeight;
          }
        } catch(e) {
          h += 0;
        }
      });
      resolve(window.innerHeight - h - 20 - 10);
    })
  });
};

export default heights;
