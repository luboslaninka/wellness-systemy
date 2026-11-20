(() => {

const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('.panel').forEach(panel=>{
 const choices=[...panel.querySelectorAll('.choice')];
 let active=null;
 function activate(choice){
  active=choice;
  choices.forEach(item=>{
   const open=item===choice;
   item.classList.toggle('is-open',open);
   item.querySelector('button').setAttribute('aria-expanded',String(open));
   item.querySelector('.choice-content').inert=!open;
  });
 }
 choices.forEach(choice=>{
  choice.addEventListener('pointerenter',event=>{if(finePointer.matches&&event.pointerType!=='touch')activate(choice)});
  choice.querySelector('button').addEventListener('click',event=>{
   if(event.detail===0||!finePointer.matches)activate(active===choice?null:choice);
   else activate(choice);
  });
  choice.addEventListener('focusin',event=>{if(!event.target.matches('button')||finePointer.matches)activate(choice)});
 });
 panel.addEventListener('pointerleave',()=>{if(finePointer.matches&&!panel.contains(document.activeElement))activate(null)});
 panel.addEventListener('focusout',()=>{queueMicrotask(()=>{if(!panel.contains(document.activeElement)&&!panel.matches(':hover'))activate(null)})});
 panel.addEventListener('keydown',event=>{if(event.key==='Escape'){const focused=active?.querySelector('button');focused?.focus();activate(null)}});
});
// Spatial effects: only photographs tilt; typography stays flat.
const depthScene=document.querySelector('.split-hero');
const depthPanels=[...document.querySelectorAll('.panel')];
const reducedDepth=matchMedia('(prefers-reduced-motion: reduce)');
let sceneFrame=0;
function clearDepth(){
 depthScene.style.removeProperty('--scene-x');depthScene.style.removeProperty('--scene-y');
 depthPanels.forEach(panel=>['--tilt-x','--tilt-y','--shine-x','--shine-y'].forEach(key=>panel.style.removeProperty(key)));
}
depthScene.addEventListener('pointermove',event=>{
 if(!finePointer.matches||reducedDepth.matches||event.pointerType==='touch')return;
 if(sceneFrame)cancelAnimationFrame(sceneFrame);
 const x=event.clientX,y=event.clientY;
 const panel=event.target.closest('.panel');
 sceneFrame=requestAnimationFrame(()=>{
  sceneFrame=0;
  if(!finePointer.matches||reducedDepth.matches)return;
  const sceneBox=depthScene.getBoundingClientRect();
  const nx=Math.max(-1,Math.min(1,(x-sceneBox.left)/sceneBox.width*2-1));
  const ny=Math.max(-1,Math.min(1,(y-sceneBox.top)/sceneBox.height*2-1));
  depthScene.style.setProperty('--scene-x',(-nx*11).toFixed(2)+'px');
  depthScene.style.setProperty('--scene-y',(-ny*8).toFixed(2)+'px');
  if(panel){
   const box=panel.getBoundingClientRect();
   const px=Math.max(0,Math.min(1,(x-box.left)/box.width));
   const py=Math.max(0,Math.min(1,(y-box.top)/box.height));
   panel.style.setProperty('--tilt-x',((.5-py)*4).toFixed(2)+'deg');
   panel.style.setProperty('--tilt-y',((px-.5)*5).toFixed(2)+'deg');
   panel.style.setProperty('--shine-x',(px*100).toFixed(1)+'%');
   panel.style.setProperty('--shine-y',(py*100).toFixed(1)+'%');
  }
 });
},{passive:true});
depthPanels.forEach(panel=>panel.addEventListener('pointerleave',()=>{
 panel.style.removeProperty('--tilt-x');panel.style.removeProperty('--tilt-y');
 panel.style.removeProperty('--shine-x');panel.style.removeProperty('--shine-y');
}));
function stopDepth(){if(sceneFrame)cancelAnimationFrame(sceneFrame);sceneFrame=0;clearDepth()}
depthScene.addEventListener('pointerleave',stopDepth);
depthScene.addEventListener('pointercancel',stopDepth);
window.addEventListener('blur',stopDepth);
reducedDepth.addEventListener('change',stopDepth);
finePointer.addEventListener('change',stopDepth);



})();
