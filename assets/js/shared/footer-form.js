// Kontaktný formulár v pätičke: zatiaľ iba frontend (kontrola polí a potvrdenie), nič sa neodosiela.
(() => {
const form=document.getElementById('kontaktny-formular');
if(!form)return;
const status=document.getElementById('f-status');
const rules=[
 {id:'f-meno',test:el=>el.value.trim()!=='',msg:'Vyplňte, prosím, meno.'},
 {id:'f-email',test:el=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()),msg:'Zadajte platný e-mail.'},
 {id:'f-suhlas',test:el=>el.checked,msg:'Bez súhlasu nemôžeme otázku vybaviť.'}
];
function check(rule){
 const el=document.getElementById(rule.id),err=document.getElementById(rule.id+'-err'),ok=rule.test(el);
 el.setAttribute('aria-invalid',String(!ok));
 el.closest('.form-field').classList.toggle('has-error',!ok);
 err.textContent=ok?'':rule.msg;
 return ok;
}
rules.forEach(rule=>{
 const el=document.getElementById(rule.id);
 el.addEventListener(el.type==='checkbox'?'change':'blur',()=>{if(el.getAttribute('aria-invalid')!==null||el.value)check(rule)});
 el.addEventListener('input',()=>{if(el.getAttribute('aria-invalid')==='true')check(rule)});
});
form.addEventListener('submit',event=>{
 event.preventDefault();
 status.textContent='';status.className='form-status';
 const results=rules.map(check);
 if(results.includes(false)){
  document.getElementById(rules[results.indexOf(false)].id).focus();
  return;
 }
 if(form.elements.web.value)return;
 status.textContent='Ďakujeme, vaša správa je pripravená. Odosielanie formulára zatiaľ nie je zapojené – ide o náhľad.';
 status.classList.add('is-success');
 form.reset();
 rules.forEach(rule=>document.getElementById(rule.id).removeAttribute('aria-invalid'));
});
})();
