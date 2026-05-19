(function(){
var CDN='https://cdn.jsdelivr.net/gh/johny-tbm/tbm-cdn@943f0b8/';
var MAP={
'../assets/logos/caterpillar.svg':CDN+'caterpillar.svg',
'../assets/logos/arcbest.svg':CDN+'arcbest.svg',
'../assets/logos/gq.svg':CDN+'gq.svg',
'../assets/logos/scottish-rite.svg':CDN+'scottish-rite.svg',
'../assets/logos/rice.svg':CDN+'rice.svg',
'../assets/logos/belfor.svg':CDN+'belfor.svg',
'../assets/logos/vmg-health.svg':CDN+'vmg-health.svg',
'../assets/logos/wellfit.svg':CDN+'wellfit.svg',
'../assets/images/hero-poster.jpg':CDN+'hero-poster.jpg'
};
function swap(){
var els=document.querySelectorAll('imgraw[data-raw-src],img[data-raw-src]');
els.forEach(function(el){
var src=el.getAttribute('data-raw-src');
var mapped=MAP[src];
if(!mapped)return;
var img=document.createElement('img');
img.src=mapped;
img.alt=el.getAttribute('alt')||'';
img.className=el.className||'';
if(el.hasAttribute('aria-hidden'))img.setAttribute('aria-hidden',el.getAttribute('aria-hidden'));
if(el.hasAttribute('loading'))img.setAttribute('loading',el.getAttribute('loading'));
el.replaceWith(img);
});
console.log('TBM image swap completed:',els.length,'elements');
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',swap);}else{swap();}
})();
