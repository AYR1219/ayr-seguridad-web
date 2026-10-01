const menu=document.querySelector('.menu');
const nav=document.querySelector('.site-header nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
document.querySelectorAll('.project img').forEach(img=>img.addEventListener('error',()=>img.style.display='none'));
