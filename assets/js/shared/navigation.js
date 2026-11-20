(() => {
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Otvoriť menu');nav.classList.remove('is-open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Zatvoriť menu':'Otvoriť menu');nav.classList.toggle('is-open',open)});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});


})();
