// Dlaždice Bazény a Sauny v úvodných paneloch sú klikateľné celé, nielen odkaz v nich.
// Klávesnica sa nemení: Enter na dlaždici ju rozbalí, odkaz „Viac o…“ je ďalej samostatne dostupný.
(() => {
document.querySelectorAll('.choice.is-linked').forEach(tile=>{
 const link=tile.querySelector('.detail-link');
 if(!link)return;
 tile.addEventListener('click',event=>{
  if(event.target.closest('a'))return;
  if(event.detail===0)return;
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.button===1){window.open(link.href,'_blank');return}
  location.href=link.href;
 });
});
})();
