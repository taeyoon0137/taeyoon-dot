window.onload = function(){
  document.addEventListener('scroll', () => {
    var isScrolled = !(window.scrollY == 0);

    if (isScrolled) {
      document.getElementById('wds-gb-header').classList.add('hd-bg-scroll')
    } else {
      document.getElementById('wds-gb-header').classList.remove('hd-bg-scroll')
    }
  });

  document.getElementsByClassName('hd-right-mobile').addEventListener('click', () => {
    document.getElementById('wds-gb-header').classList.toggle('hd-menu-closed'),
    document.getElementById('wds-gb-header').classList.toggle('hd-menu-opened'),
    document.getElementsByTagName('body')[0].classList.toggle('no-scroll')
  });
}