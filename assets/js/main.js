(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var tabs=[].slice.call(document.querySelectorAll('.bg-vt-l [role=tab]'));tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(o){var s=o===t;o.setAttribute('aria-selected',s);$(o.getAttribute('aria-controls')).hidden=!s;});});});
var lu=$('lm-u');if(lu){var lc=$('lm-c'),ll=$('lm-l');on([lu,lc,ll],function(){var u=lu.value,c=lc.value,l=ll.value,r,why;
 if(l==='shine'){r=u==='occ'?'Patent leather':'Glazed smooth calf';why=u==='occ'?'Glossy and dramatic; easy to wipe clean.':'A soft shine that copes better with daily use than patent.';}
 else if(c==='wet'||u==='daily'){r=l==='soft'?'Pebbled leather':'Cross-grain leather';why='Resists scratches and light rain, and hides everyday marks.';}
 else if(l==='soft'){r=u==='occ'?'Suede':'Soft pebbled calf';why=u==='occ'?'Velvety and rich; keep it for dry days.':'Relaxed drape with good durability.';}
 else{r='Smooth full-grain calf';why='Crisp and elegant; it develops a handsome patina over time.';}
 $('lm-o').innerHTML='<strong>'+r+'</strong><p>'+why+'</p>'+(c==='wet'&&r.indexOf('Suede')>-1?'<p>Use a protector spray.</p>':'');});}
var so=$('sf-o');if(so){var sc=$('sf-c');var M={work:{hand:'Structured top-handle',shoulder:'Structured tote',cross:'Satchel with a long strap'},weekend:{hand:'Soft bucket bag',shoulder:'Hobo',cross:'Small crossbody'},travel:{hand:'Large zip tote',shoulder:'Zip-top tote',cross:'Medium crossbody with zip'},evening:{hand:'Clutch',shoulder:'Small chain-strap bag',cross:'Mini crossbody'}};
 on([so,sc],function(){var r=M[so.value][sc.value];$('sf-out').innerHTML='<strong>'+r+'</strong><p>'+(so.value==='work'?'Look for a flat base and a laptop sleeve if you carry one.':so.value==='travel'?'Choose a zip closure and an inside pocket for passports and cards.':so.value==='evening'?'Keep it small: phone, card holder, keys and a lipstick.':'Soft leathers keep weekend bags light and relaxed.')+'</p>';});}
var bc=$('bs-c');if(bc){var bx=[].slice.call(bc.querySelectorAll('input'));on(bx,function(){var v=0,n=0;bx.forEach(function(b){if(b.checked){v+=parseFloat(b.value);n++;}});var r=v<=2.5?['Mini or small','A clutch, mini crossbody or small top-handle.']:v<=5?['Medium','A medium crossbody, satchel or small tote.']:v<=9?['Large','A medium-to-large tote or roomy shoulder bag.']:['Extra large','A large structured tote; consider a lighter leather.'];
 $('bs-o').innerHTML='<strong>'+r[0]+'</strong><p>'+n+' items, roughly '+Math.round(v)+' litres of space.</p><p>'+r[1]+'</p>';});}
})();
