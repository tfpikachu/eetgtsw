const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const body=document.body;
const themeBtn=$('#themeToggle');
const savedTheme=localStorage.getItem('eetg-theme'); if(savedTheme==='dark') body.classList.add('dark');
function syncTheme(){if(themeBtn)themeBtn.textContent=body.classList.contains('dark')?'☀':'◐'} syncTheme();
themeBtn?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('eetg-theme',body.classList.contains('dark')?'dark':'light');syncTheme()});
$('#menuToggle')?.addEventListener('click',()=>$('.nav-links')?.classList.toggle('open'));
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('.nav-links')?.classList.remove('open')));
const current=(location.pathname.split('/').pop()||'index.html');$$('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(e=>io.observe(e));
const topBtn=$('#toTop');addEventListener('scroll',()=>topBtn?.classList.toggle('show',scrollY>500));topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const cookie=$('#cookie');if(localStorage.getItem('eetg-cookie'))cookie?.classList.add('hidden');$('#cookieAccept')?.addEventListener('click',()=>{localStorage.setItem('eetg-cookie','accepted');cookie.classList.add('hidden')});
$$('[data-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}const data=Object.fromEntries(new FormData(form).entries());const requests=JSON.parse(localStorage.getItem('eetg-requests')||'[]');requests.push({...data,form:form.dataset.form,date:new Date().toISOString()});localStorage.setItem('eetg-requests',JSON.stringify(requests));form.reset();const notice=$('.notice',form.parentElement)||$('.notice');if(notice){notice.classList.add('show');notice.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>notice.classList.remove('show'),6000)}}));
$$('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('.form-card');$$('.tab-btn',group).forEach(b=>b.classList.remove('active'));$$('.tab-panel',group).forEach(p=>p.classList.remove('active'));btn.classList.add('active');$('#'+btn.dataset.tab,group).classList.add('active')}));
const escapeHtml=value=>String(value??'').replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
const vehicles=Array.isArray(window.EETG_VEHICLES)?window.EETG_VEHICLES:[];

function renderVehicles(){
  const grid=$('#vehicleGrid');
  if(!grid)return;
  const empty=$('#noVehicles');
  vehicles.forEach(vehicle=>{
    const card=document.createElement('article');
    card.className='card vehicle reveal';
    card.dataset.type=vehicle.kategorie||'electric';
    const image=vehicle.bild?` style="background-image:url('${escapeHtml(vehicle.bild)}')" data-has-image="true"`:'';
    card.innerHTML=`<div class="vehicle-art"${image}></div><div class="vehicle-body"><div class="vehicle-meta"><span class="tag">${escapeHtml(vehicle.typ)}</span><span>${escapeHtml(vehicle.status||'EETG Flotte')}</span></div><h3>${escapeHtml(vehicle.name)}</h3><div class="specs"><div class="spec"><strong>${escapeHtml(vehicle.geschwindigkeit)}</strong>Höchstgeschwindigkeit</div><div class="spec"><strong>${escapeHtml(vehicle.leistung)}</strong>Leistung</div></div><div class="vehicle-actions"><button class="cta" data-vehicle-request data-vehicle="${escapeHtml(vehicle.name)}">Anfragen</button><a class="cta secondary" href="leistungen.html">Einsatz</a></div></div>`;
    grid.insertBefore(card,empty);
    io.observe(card);
  });
}

function populateVehicleSelect(){
  const select=$('#vehicleSelect');
  if(!select)return;
  vehicles.forEach(vehicle=>{
    const option=document.createElement('option');
    option.value=vehicle.name;
    option.textContent=vehicle.name;
    select.append(option);
  });
}

renderVehicles();
populateVehicleSelect();

const vehicleGrid=$('#vehicleGrid');if(vehicleGrid){const cards=$$('.vehicle',vehicleGrid),search=$('#vehicleSearch'),filters=$$('.filter-btn');let type='all';function apply(){const q=(search.value||'').toLowerCase();let count=0;cards.forEach(c=>{const okType=type==='all'||c.dataset.type===type;const okQ=c.textContent.toLowerCase().includes(q);c.hidden=!(okType&&okQ);if(!c.hidden)count++});$('#noVehicles').hidden=count!==0}search.addEventListener('input',apply);filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');type=f.dataset.filter;apply()}));apply()}

document.addEventListener('click',event=>{const button=event.target.closest('[data-vehicle-request]');if(!button)return;localStorage.setItem('eetg-selected-vehicle',button.dataset.vehicle);location.href='miete.html'});
const selected=localStorage.getItem('eetg-selected-vehicle');if(selected&&$('#vehicleSelect')){$('#vehicleSelect').value=selected;localStorage.removeItem('eetg-selected-vehicle')}
