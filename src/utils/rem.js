export default {
  rem: function pl() {
    const w = document.documentElement.offsetWidth;
    let f = null;
    if (320 < w && w < 562) {
      f = (w / 375) * 100;
    } else if (w >= 562) {
      f = 150;
    } else if (w <= 320) {
      f = 86;
    }
    document.documentElement.style.fontSize = f + 'px';
    // eslint-disable-next-line no-console
    console.log('屏宽', w, ';', '1rem=', f + 'px');
  }
}
