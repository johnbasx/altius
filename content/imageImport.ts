export const IMAGES_DATA = (function () {
  let arr = [];
  for (let i = 1; i <= 50; i++) {
    let tmpImg = require(`../public/images/gallery/altius-${i}.png`).default;
    arr.push(tmpImg);
  }
  console.log('arr', arr);
  return arr;
})();

// console.log(IMAGES_DATA);
