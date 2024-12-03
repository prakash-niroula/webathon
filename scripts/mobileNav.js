
(function(){

let mobileNavOpen = document.querySelector('#mobileNavOpen')
let mobileNavClose = document.querySelectorAll('.mobileNavClose')
let mobileNav = document.querySelector('#mobileNav');

console.log(mobileNavOpen)
mobileNavOpen.addEventListener('click', x => {
  x.preventDefault();
  mobileNav.classList.remove('close')
})

mobileNavClose.forEach(function(btn) {
  btn.addEventListener('click', function(x) {
    x.preventDefault();
    if ( !x.target.classList.contains('closeBtn') ) return;
    mobileNav.classList.add('close')
  })
})

})()