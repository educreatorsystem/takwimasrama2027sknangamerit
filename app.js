const CONFIG = Object.freeze({
  YEAR: 2027,
  SITE_TITLE: "TAKWIM ASRAMA SK NANGA MERIT LIMBANG",
  SCHOOL_NAME: "SEKOLAH KEBANGSAAN NANGA MERIT LIMBANG",
  SCHOOL_LOGO_URL: "https://iili.io/oKIHlr7.md.png",
  HOLIDAY_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuv-Ys_PI197p9u5cU-R0zBb1clbwzhlTzmjJZP34UeVf6YakWIXu2j5GD6c_XxDfcYm3EYkZMACbP/pub?gid=457971484&single=true&output=csv",
  PROGRAM_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuv-Ys_PI197p9u5cU-R0zBb1clbwzhlTzmjJZP34UeVf6YakWIXu2j5GD6c_XxDfcYm3EYkZMACbP/pub?gid=679655066&single=true&output=csv",
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxscWNaRsdun5l1xOW7ZiBVxzCX1vxskx41D-Q9p7Q6qsVusamVpKvDW0wnMUcOkwCIzw/exec"
});

const MONTHS=['Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember'];
const DAYS=['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'];
const CATEGORIES=["PENTADBIRAN PENGURUSAN", "PENTADBIRAN ASRAMA", "PENGURUSAN SAHSIAH", "PENGURUSAN KEROHANIAN", "PENGURUSAN KESELAMATAN", "PENGURUSAN KESIHATAN"];
const CATEGORY_CLASS=Object.fromEntries(CATEGORIES.map(x=>[x,x.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')]));
const CATEGORY_COLORS={
  'PENTADBIRAN PENGURUSAN':'#d79d1b','PENTADBIRAN ASRAMA':'#3e88d2','PENGURUSAN SAHSIAH':'#a955ab','PENGURUSAN KEROHANIAN':'#42a875','PENGURUSAN KESELAMATAN':'#e56f52','PENGURUSAN KESIHATAN':'#e14f73'
};

const HOLIDAYS=Object.freeze([
  {start:'2027-01-01',end:'2027-01-01',title:'Tahun Baharu',type:'Cuti Umum',scope:'Sarawak',icon:'🎆'},
  {start:'2027-01-06',end:'2027-01-06',title:'Israk & Mikraj',type:'Perayaan',scope:'Islam',icon:'🕌'},
  {start:'2027-02-05',end:'2027-02-05',title:'Cuti Tambahan KPM – Tahun Baharu Cina',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-02-06',end:'2027-02-06',title:'Tahun Baharu Cina',type:'Cuti Umum',scope:'Sarawak',icon:'🧧'},
  {start:'2027-02-07',end:'2027-02-07',title:'Tahun Baharu Cina (Hari Kedua)',type:'Cuti Umum',scope:'Sarawak',icon:'🧧'},
  {start:'2027-02-08',end:'2027-02-08',title:'Cuti Ganti Tahun Baharu Cina (Hari Kedua)',type:'Cuti Umum',scope:'Sarawak',icon:'🧧'},
  {start:'2027-02-09',end:'2027-02-12',title:'Cuti Tambahan KPM – Tahun Baharu Cina',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-02-20',end:'2027-02-20',title:'Chap Goh Mei / Pesta Tanglung',type:'Perayaan',scope:'Perayaan Cina',icon:'🏮'},
  {start:'2027-02-24',end:'2027-02-24',title:'Nuzul Al-Quran',type:'Perayaan',scope:'Islam',icon:'📖'},
  {start:'2027-03-06',end:'2027-03-14',title:'Cuti Penggal 1',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🏫'},
  {start:'2027-03-10',end:'2027-03-10',title:'Hari Raya Aidilfitri',type:'Cuti Umum',scope:'Sarawak',icon:'🌙'},
  {start:'2027-03-11',end:'2027-03-11',title:'Hari Raya Aidilfitri (Hari Kedua)',type:'Cuti Umum',scope:'Sarawak',icon:'🌙'},
  {start:'2027-03-26',end:'2027-03-26',title:'Good Friday',type:'Cuti Negeri',scope:'Sarawak',icon:'✝️'},
  {start:'2027-04-05',end:'2027-04-05',title:'Qing Ming Festival',type:'Perayaan',scope:'Perayaan Cina',icon:'🌿'},
  {start:'2027-05-01',end:'2027-05-01',title:'Hari Pekerja',type:'Cuti Umum',scope:'Sarawak',icon:'🛠️'},
  {start:'2027-05-17',end:'2027-05-17',title:'Hari Raya Qurban / Aidiladha',type:'Cuti Umum',scope:'Sarawak',icon:'🕌'},
  {start:'2027-05-18',end:'2027-05-19',title:'Cuti Tambahan KPM – Hari Raya Korban',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-05-20',end:'2027-05-20',title:'Hari Wesak',type:'Cuti Umum',scope:'Sarawak',icon:'🪷'},
  {start:'2027-05-21',end:'2027-05-21',title:'Cuti Tambahan KPM – Hari Wesak',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-05-22',end:'2027-06-06',title:'Cuti Pertengahan Tahun',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🌴'},
  {start:'2027-06-01',end:'2027-06-01',title:'Hari Gawai Dayak',type:'Cuti Negeri',scope:'Sarawak',icon:'🌾'},
  {start:'2027-06-02',end:'2027-06-02',title:'Hari Gawai Dayak (Hari Kedua)',type:'Cuti Negeri',scope:'Sarawak',icon:'🌾'},
  {start:'2027-06-06',end:'2027-06-06',title:'Awal Muharram (Maal Hijrah)',type:'Cuti Umum',scope:'Sarawak',icon:'🌙'},
  {start:'2027-06-07',end:'2027-06-07',title:'Hari Keputeraan Rasmi Yang di-Pertuan Agong',type:'Cuti Umum',scope:'Sarawak',icon:'🇲🇾'},
  {start:'2027-06-08',end:'2027-06-08',title:'Cuti Ganti Awal Muharram',type:'Cuti Umum',scope:'Sarawak',icon:'🌙'},
  {start:'2027-06-09',end:'2027-06-09',title:'Dragon Boat Festival',type:'Perayaan',scope:'Perayaan Cina',icon:'🐉'},
  {start:'2027-07-22',end:'2027-07-22',title:'Hari Sarawak',type:'Cuti Negeri',scope:'Sarawak',icon:'🟡'},
  {start:'2027-08-15',end:'2027-08-15',title:'Maulidur Rasul',type:'Cuti Umum',scope:'Sarawak',icon:'🕌'},
  {start:'2027-08-16',end:'2027-08-16',title:'Cuti Ganti Maulidur Rasul',type:'Cuti Umum',scope:'Sarawak',icon:'🕌'},
  {start:'2027-08-28',end:'2027-09-05',title:'Cuti Penggal 2',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🏫'},
  {start:'2027-08-31',end:'2027-08-31',title:'Hari Kebangsaan',type:'Cuti Umum',scope:'Sarawak',icon:'🇲🇾'},
  {start:'2027-09-15',end:'2027-09-15',title:'Pesta Pertengahan Musim Luruh',type:'Perayaan',scope:'Perayaan Cina',icon:'🥮'},
  {start:'2027-09-16',end:'2027-09-16',title:'Hari Malaysia',type:'Cuti Umum',scope:'Sarawak',icon:'🇲🇾'},
  {start:'2027-10-09',end:'2027-10-09',title:'Hari Jadi Yang di-Pertua Negeri Sarawak',type:'Cuti Negeri',scope:'Sarawak',icon:'🎖️'},
  {start:'2027-10-28',end:'2027-10-28',title:'Hari Deepavali',type:'Perayaan',scope:'Perayaan Hindu • bukan cuti umum Sarawak',icon:'🪔'},
  {start:'2027-10-28',end:'2027-10-28',title:'Cuti Peruntukan KPM – Hari Deepavali',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-12-04',end:'2027-12-31',title:'Cuti Akhir Persekolahan',type:'Cuti Sekolah',scope:'Sekolah Sarawak • Kumpulan B',icon:'🎒'},
  {start:'2027-12-22',end:'2027-12-22',title:'Winter Solstice / Dongzhi',type:'Perayaan',scope:'Perayaan Cina',icon:'🍡'},
  {start:'2027-12-25',end:'2027-12-25',title:'Hari Krismas',type:'Cuti Umum',scope:'Sarawak',icon:'🎄'},
  {start:'2027-12-26',end:'2027-12-26',title:'Israk & Mikraj',type:'Perayaan',scope:'Islam',icon:'🕌'}
]);

const EMOLUMEN=[
  {date:'2027-01-25',note:''},{date:'2027-02-25',note:'Tahun Baharu Cina 6 & 7 Februari'},{date:'2027-03-25',note:'Hari Raya Puasa 10 & 11 Mac'},{date:'2027-04-22',note:''},{date:'2027-05-12',note:'Hari Raya Haji 17 & 18 Mei'},{date:'2027-06-17',note:''},{date:'2027-07-21',note:''},{date:'2027-08-25',note:''},{date:'2027-09-23',note:''},{date:'2027-10-21',note:'Hari Deepavali 28 Oktober'},{date:'2027-11-25',note:''},{date:'2027-12-20',note:'Hari Krismas 25 Disember'}
];

const state={month:0,programs:[],customHolidays:[],admin:false,token:sessionStorage.getItem('asramaAdminToken')||'',pending:null,quickDate:'',summary:null};
const $=id=>document.getElementById(id); const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function setLoading(on,text='Memuatkan...'){$('loadingText').textContent=text;$('loadingOverlay').classList.toggle('hidden',!on)}
function toast(msg,type=''){const t=$('toast');t.textContent=msg;t.className='toast '+type;t.classList.remove('hidden');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.add('hidden'),3600)}
function localDate(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)} function parts(s){const d=localDate(s);return {y:d.getFullYear(),m:d.getMonth()+1,d:d.getDate()}}
function fmtDate(s){const p=parts(s);return `${p.d} ${MONTHS[p.m-1]}`} function inRange(k,a,b){return k>=a&&k<=b}
function catClass(c){return 'cat-'+(CATEGORY_CLASS[c]||'lain')}
function typeClass(t){return t==='Cuti Sekolah'?'school-holiday':t==='Cuti Negeri'?'state-holiday':(t==='Perayaan'||t==='Sambutan')?'festival-chip':'holiday-chip'}

async function init(){document.title=CONFIG.SITE_TITLE;fillMonths();fillCategories();renderLegend();bind();await validateToken();await refreshData();render();}
function fillMonths(){$('monthSelect').innerHTML=MONTHS.map((m,i)=>`<option value="${i}">${m} 2027</option>`).join('')}
function fillCategories(){$('eventCategory').innerHTML=CATEGORIES.map(x=>`<option>${esc(x)}</option>`).join('')}
function renderLegend(){const cats=CATEGORIES.map(c=>`<span class="legend-item"><i class="dot" style="background:${CATEGORY_COLORS[c]}"></i>${esc(c)}</span>`).join('');$('legend').innerHTML=cats+'<span class="legend-item"><i class="dot" style="background:#e75873"></i>Cuti Umum</span><span class="legend-item"><i class="dot" style="background:#7968e1"></i>Cuti Negeri</span><span class="legend-item"><i class="dot" style="background:#27aa7c"></i>Cuti Sekolah</span><span class="legend-item"><i class="dot" style="background:#f1a93b"></i>Perayaan / Sambutan</span><span class="legend-item"><i class="dot" style="background:#20aa70"></i>Emolumen JANM</span>'}
function bind(){$('prevMonthBtn').onclick=()=>{state.month=(state.month+11)%12;$('monthSelect').value=state.month;render()};$('nextMonthBtn').onclick=()=>{state.month=(state.month+1)%12;$('monthSelect').value=state.month;render()};$('monthSelect').onchange=e=>{state.month=+e.target.value;render()};$('printBtn').onclick=()=>window.print();$('adminBtn').onclick=()=>state.admin?toast('Mod admin sudah aktif.','success'):openModal('login');$('logoutBtn').onclick=logout;$('addProgramBtn').onclick=()=>requireAdmin(()=>openProgram(defaultDate()));$('summaryBtn').onclick=$('summaryBtn2').onclick=openSummaryChoice;$('loginForm').onsubmit=login;$('eventForm').onsubmit=saveProgram;$('deleteEventBtn').onclick=deleteProgram;$('holidayEditForm').onsubmit=saveHoliday;$('deleteHolidayBtn').onclick=deleteHoliday;$('quickProgramBtn').onclick=()=>{closeModal('quickAdd');openProgram(state.quickDate)};$('quickHolidayBtn').onclick=()=>{closeModal('quickAdd');openHoliday(state.quickDate)};$('printSummaryBtn').onclick=()=>printSummary();document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));document.querySelectorAll('[data-summary-mode]').forEach(b=>b.onclick=()=>generateSummary(b.dataset.summaryMode));window.addEventListener('afterprint',()=>document.body.classList.remove('print-summary'));let promptEvt=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvt=e;$('installBtn').classList.remove('hidden')});$('installBtn').onclick=async()=>{if(promptEvt){promptEvt.prompt();await promptEvt.userChoice;promptEvt=null;$('installBtn').classList.add('hidden')}};if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));}
function openModal(n){$(n+'Modal').classList.remove('hidden')} function closeModal(n){$(n+'Modal').classList.add('hidden')}
function setAdmin(v){state.admin=v;$('adminBadge').classList.toggle('hidden',!v);$('adminState').classList.toggle('hidden',!v);$('logoutBtn').classList.toggle('hidden',!v);$('addProgramBtn').classList.toggle('hidden',!v);render()}
async function validateToken(){if(!state.token)return setAdmin(false);try{const r=await post({action:'validateToken',token:state.token});setAdmin(!!r.success)}catch{setAdmin(false)}}
function requireAdmin(fn){if(state.admin)return fn();state.pending=fn;openModal('login');toast('Sila log masuk sebagai admin.','error')}
async function login(e){e.preventDefault();setLoading(true,'Mengesahkan admin...');try{const r=await post({action:'login',id:$('adminIdInput').value.trim(),password:$('adminPasswordInput').value});if(!r.success)throw new Error(r.message||'Login gagal');state.token=r.token;sessionStorage.setItem('asramaAdminToken',state.token);setAdmin(true);closeModal('login');$('loginForm').reset();toast('Log masuk admin berjaya.','success');if(state.pending){const f=state.pending;state.pending=null;f()}}catch(err){toast(err.message,'error')}finally{setLoading(false)}}
function logout(){state.token='';state.admin=false;sessionStorage.removeItem('asramaAdminToken');setAdmin(false);toast('Mod admin ditutup.')}
async function post(payload){const r=await fetch(CONFIG.APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});const txt=await r.text();let j;try{j=JSON.parse(txt)}catch{throw new Error('Respons Apps Script tidak sah.')}return j}
async function getApi(action){const u=new URL(CONFIG.APPS_SCRIPT_URL);u.searchParams.set('action',action);u.searchParams.set('_',Date.now());const r=await fetch(u,{cache:'no-store'});const j=JSON.parse(await r.text());if(!j.success)throw new Error(j.message||'API gagal');return j}
async function csv(url){const r=await fetch(url+(url.includes('?')?'&':'?')+'_='+Date.now(),{cache:'no-store'});if(!r.ok)throw new Error('CSV '+r.status);return parseCSV(await r.text())}
function parseCSV(text){
  const rows=[]; let row=[], cur='', quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"' && quoted && n==='"'){ cur+='"'; i++; }
    else if(c==='"'){ quoted=!quoted; }
    else if(c===',' && !quoted){ row.push(cur); cur=''; }
    else if((c==='\n' || c==='\r') && !quoted){
      if(c==='\r' && n==='\n') i++;
      row.push(cur); cur='';
      if(row.some(x=>x!=='')) rows.push(row);
      row=[];
    } else cur+=c;
  }
  if(cur || row.length){ row.push(cur); rows.push(row); }
  if(!rows.length) return [];
  const headers=rows[0].map(x=>x.trim());
  return rows.slice(1).map(r=>Object.fromEntries(headers.map((k,i)=>[k,r[i]??'']))).filter(o=>Object.values(o).some(Boolean));
}
function normPrograms(rows){return (rows||[]).map((r,i)=>({id:r.ID||r.id||'csv-'+i,date:(r.TARIKH||r.date||'').trim(),title:(r.PROGRAM||r.title||'').trim(),time:(r.MASA||r.time||'').trim(),place:(r.TEMPAT||r.place||'').trim(),category:(r.KATEGORI||r.category||CATEGORIES[0]).trim(),notes:(r.CATATAN||r.notes||'').trim()})).filter(x=>/^2027-\d{2}-\d{2}$/.test(x.date)&&x.title)}
function normHolidays(rows){return (rows||[]).map((r,i)=>({id:r.ID||r.id||'h-'+i,start:(r.TARIKH_MULA||r.start||'').trim(),end:(r.TARIKH_AKHIR||r.end||r.TARIKH_MULA||r.start||'').trim(),title:(r.NAMA_CUTI||r.title||'').trim(),type:(r.JENIS||r.type||'Cuti Sekolah').trim(),scope:(r.SKOP||r.scope||'Sarawak').trim(),icon:(r.IKON||r.icon||'🎉').trim(),notes:(r.CATATAN||r.notes||'').trim(),custom:true})).filter(x=>/^2027-\d{2}-\d{2}$/.test(x.start)&&x.title)}
async function refreshData(){
  setLoading(true,'Memuatkan takwim asrama...');
  try{
    let pr=[];
    try{pr=(await getApi('listPrograms')).events||[]}catch(apiErr){console.warn('API program gagal, cuba CSV',apiErr);try{pr=await csv(CONFIG.PROGRAM_CSV_URL)}catch(csvErr){console.warn('CSV program gagal',csvErr)}}
    state.programs=normPrograms(pr);
    let hr=[];
    try{hr=(await getApi('listHolidays')).holidays||[]}catch(apiErr){console.warn('API cuti gagal, cuba CSV',apiErr);try{hr=await csv(CONFIG.HOLIDAY_CSV_URL)}catch(csvErr){console.warn('CSV cuti gagal',csvErr)}}
    state.customHolidays=normHolidays(hr);
  } finally{setLoading(false)}
}
function holidaysAll(){return [...HOLIDAYS.map((h,i)=>({...h,id:'builtin-'+i,custom:false})),...state.customHolidays]}
function monthPrograms(m){return state.programs.filter(x=>parts(x.date).m===m+1).sort((a,b)=>a.date.localeCompare(b.date))} function monthHolidays(m){return holidaysAll().filter(h=>parts(h.start).m<=m+1&&parts(h.end).m>=m+1).sort((a,b)=>a.start.localeCompare(b.start))}
function emolumen(m){return EMOLUMEN.find(x=>parts(x.date).m===m+1)} function defaultDate(){return `2027-${String(state.month+1).padStart(2,'0')}-01`}
function render(){if(!$('calendarGrid'))return;$('monthTitle').textContent=MONTHS[state.month].toUpperCase()+' 2027';$('summaryMonthTitle').textContent='Ringkasan '+MONTHS[state.month]+' 2027';const ps=monthPrograms(state.month),hs=monthHolidays(state.month),em=emolumen(state.month);$('programCount').textContent=ps.length;$('holidayCount').textContent=hs.length;const dates=new Set();hs.filter(h=>h.type.includes('Cuti')).forEach(h=>{let d=localDate(h.start),e=localDate(h.end);while(d<=e){if(d.getMonth()===state.month)dates.add(d.toISOString().slice(0,10));d.setDate(d.getDate()+1)}});$('holidayDayCount').textContent=dates.size;$('salaryDate').textContent=em?parts(em.date).d:'—';const first=new Date(2027,state.month,1),start=new Date(2027,state.month,1-first.getDay());let out='';for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;const outside=d.getMonth()!==state.month;const dayP=ps.filter(x=>x.date===k);const dayH=hs.filter(h=>inRange(k,h.start,h.end));const dayE=em&&em.date===k?em:null;out+=`<div class="day-cell ${outside?'outside':''}"><div class="day-num">${d.getDate()}</div>${state.admin&&!outside?`<button class="add-day" data-date="${k}">+</button>`:''}<div class="event-stack">${dayE?`<div class="chip salary-chip">💰 Pembayaran Emolumen<small>JANM${dayE.note?' • '+esc(dayE.note):''}</small></div>`:''}${dayH.map(h=>`<div class="chip ${typeClass(h.type)}" ${h.custom&&state.admin?`data-holiday-id="${esc(h.id)}"`:''}>${h.icon} ${esc(h.title)}<small>${esc(h.scope)}</small></div>`).join('')}${dayP.map(p=>`<div class="chip program-chip ${catClass(p.category)}" ${state.admin?`data-program-id="${esc(p.id)}"`:''}>${esc(p.title)}<small>${esc(p.category)}${p.time?' • '+esc(p.time):''}</small></div>`).join('')}</div></div>`}$('calendarGrid').innerHTML=out;$('calendarGrid').querySelectorAll('[data-date]').forEach(b=>b.onclick=()=>{state.quickDate=b.dataset.date;$('quickAddDateText').textContent=`${DAYS[localDate(state.quickDate).getDay()]}, ${fmtDate(state.quickDate)} 2027`;openModal('quickAdd')});$('calendarGrid').querySelectorAll('[data-program-id]').forEach(n=>n.onclick=()=>editProgram(n.dataset.programId));$('calendarGrid').querySelectorAll('[data-holiday-id]').forEach(n=>n.onclick=()=>editHoliday(n.dataset.holidayId));renderMonthSummary(hs)}
function renderMonthSummary(hs){$('holidaySummary').innerHTML=hs.length?hs.map(h=>`<div class="summary-item"><b>${h.icon} ${esc(h.title)}</b><small>${fmtDate(h.start)}${h.end!==h.start?' – '+fmtDate(h.end):''} • ${esc(h.type)}</small></div>`).join(''):'<div class="muted">Tiada rekod cuti/perayaan bagi bulan ini.</div>'}
function openProgram(date,p=null){$('eventModalTitle').textContent=p?'Sunting Program Asrama':'Tambah Program Asrama';$('eventId').value=p?.id||'';$('eventDate').value=p?.date||date;$('eventTitle').value=p?.title||'';$('eventTime').value=p?.time||'';$('eventPlace').value=p?.place||'';$('eventCategory').value=CATEGORIES.includes(p?.category)?p.category:CATEGORIES[0];$('eventNotes').value=p?.notes||'';$('deleteEventBtn').classList.toggle('hidden',!p);openModal('event')}
function editProgram(id){const p=state.programs.find(x=>x.id===id);if(p)openProgram(p.date,p)}
async function saveProgram(e){e.preventDefault();requireAdmin(async()=>{setLoading(true,'Menyimpan program...');try{const payload={action:$('eventId').value?'updateProgram':'addProgram',token:state.token,id:$('eventId').value,date:$('eventDate').value,title:$('eventTitle').value,time:$('eventTime').value,place:$('eventPlace').value,category:$('eventCategory').value,notes:$('eventNotes').value};const r=await post(payload);if(!r.success)throw new Error(r.message);closeModal('event');await refreshData();render();toast('Program berjaya disimpan.','success')}catch(err){toast(err.message,'error')}finally{setLoading(false)}})}
async function deleteProgram(){if(!$('eventId').value||!confirm('Padam program ini?'))return;setLoading(true,'Memadam...');try{const r=await post({action:'deleteProgram',token:state.token,id:$('eventId').value});if(!r.success)throw new Error(r.message);closeModal('event');await refreshData();render();toast('Program dipadam.','success')}catch(err){toast(err.message,'error')}finally{setLoading(false)}}
function openHoliday(date,h=null){$('holidayEditTitle').textContent=h?'Sunting Cuti':'Tambah Cuti';$('holidayEditId').value=h?.id||'';$('holidayStart').value=h?.start||date;$('holidayEnd').value=h?.end||date;$('holidayTitle').value=h?.title||'';$('holidayType').value=h?.type||'Cuti Sekolah';$('holidayScope').value=h?.scope||'Sarawak';$('holidayIcon').value=h?.icon||'🎉';$('holidayNotes').value=h?.notes||'';$('deleteHolidayBtn').classList.toggle('hidden',!h);openModal('holidayEdit')} function editHoliday(id){const h=state.customHolidays.find(x=>x.id===id);if(h)openHoliday(h.start,h)}
async function saveHoliday(e){e.preventDefault();requireAdmin(async()=>{setLoading(true,'Menyimpan cuti...');try{const r=await post({action:$('holidayEditId').value?'updateHoliday':'addHoliday',token:state.token,id:$('holidayEditId').value,start:$('holidayStart').value,end:$('holidayEnd').value,title:$('holidayTitle').value,type:$('holidayType').value,scope:$('holidayScope').value,icon:$('holidayIcon').value,notes:$('holidayNotes').value});if(!r.success)throw new Error(r.message);closeModal('holidayEdit');await refreshData();render();toast('Cuti berjaya disimpan.','success')}catch(err){toast(err.message,'error')}finally{setLoading(false)}})}
async function deleteHoliday(){if(!$('holidayEditId').value||!confirm('Padam cuti tambahan ini?'))return;setLoading(true,'Memadam...');try{const r=await post({action:'deleteHoliday',token:state.token,id:$('holidayEditId').value});if(!r.success)throw new Error(r.message);closeModal('holidayEdit');await refreshData();render();toast('Cuti dipadam.','success')}catch(err){toast(err.message,'error')}finally{setLoading(false)}}
function openSummaryChoice(){$('summaryChoiceMonth').textContent=MONTHS[state.month]+' 2027';openModal('summaryChoice')}
function generateSummary(mode){closeModal('summaryChoice');const ps=monthPrograms(state.month),hs=monthHolidays(state.month),em=emolumen(state.month);let head='',body='',stats=[];if(mode==='holiday'){head='<tr><th>Tarikh</th><th>Hari</th><th>Cuti / Perayaan</th><th>Jenis</th><th>Skop</th></tr>';body=hs.map(h=>`<tr><td>${fmtDate(h.start)}${h.end!==h.start?' – '+fmtDate(h.end):''}</td><td>${DAYS[localDate(h.start).getDay()]}</td><td>${h.icon} ${esc(h.title)}</td><td>${esc(h.type)}</td><td>${esc(h.scope)}</td></tr>`).join('')||'<tr><td colspan="5">Tiada rekod.</td></tr>';stats=[['Rekod Cuti',hs.length],['Bulan',MONTHS[state.month]],['Tahun',2027],['Sarawak','Kumpulan B']]}else if(mode==='program'){head='<tr><th>Tarikh</th><th>Hari</th><th>Program / Aktiviti</th><th>Masa</th><th>Tempat</th><th>Kategori</th></tr>';body=ps.map(p=>`<tr><td>${fmtDate(p.date)}</td><td>${DAYS[localDate(p.date).getDay()]}</td><td>${esc(p.title)}</td><td>${esc(p.time||'—')}</td><td>${esc(p.place||'—')}</td><td>${esc(p.category)}</td></tr>`).join('')||'<tr><td colspan="6">Tiada program.</td></tr>';stats=[['Program',ps.length],['Kategori',new Set(ps.map(x=>x.category)).size],['Hari Program',new Set(ps.map(x=>x.date)).size],['Bulan',MONTHS[state.month]]]}else{head='<tr><th>Tarikh</th><th>Hari</th><th>Jenis</th><th>Perkara</th><th>Butiran</th></tr>';const rows=[];hs.forEach(h=>rows.push({d:h.start,h:`<tr><td>${fmtDate(h.start)}</td><td>${DAYS[localDate(h.start).getDay()]}</td><td>CUTI</td><td>${h.icon} ${esc(h.title)}</td><td>${esc(h.scope)}</td></tr>`}));ps.forEach(p=>rows.push({d:p.date,h:`<tr><td>${fmtDate(p.date)}</td><td>${DAYS[localDate(p.date).getDay()]}</td><td>PROGRAM</td><td>${esc(p.title)}</td><td>${esc(p.category)}${p.time?' • '+esc(p.time):''}</td></tr>`}));if(em)rows.push({d:em.date,h:`<tr><td>${fmtDate(em.date)}</td><td>${DAYS[localDate(em.date).getDay()]}</td><td>EMOLUMEN</td><td>💰 Pembayaran Emolumen JANM</td><td>${esc(em.note||'—')}</td></tr>`});rows.sort((a,b)=>a.d.localeCompare(b.d));body=rows.map(x=>x.h).join('')||'<tr><td colspan="5">Tiada rekod.</td></tr>';stats=[['Program',ps.length],['Cuti/Perayaan',hs.length],['Emolumen',em?1:0],['Jumlah',ps.length+hs.length+(em?1:0)]]}state.summary={title:(mode==='holiday'?'Ringkasan Cuti':mode==='program'?'Ringkasan Program':'Ringkasan Keseluruhan')+' • '+MONTHS[state.month]+' 2027',head,body,stats};$('summaryResultTitle').textContent=state.summary.title;$('summaryResultSubtitle').textContent=CONFIG.SITE_TITLE;$('summaryResultHead').innerHTML=head;$('summaryResultBody').innerHTML=body;$('summaryResultStats').innerHTML=stats.map(([a,b])=>`<div><b>${esc(b)}</b><span>${esc(a)}</span></div>`).join('');openModal('summaryResult')}
function printSummary(){document.body.classList.add('print-summary');window.print()}
init().catch(e=>{console.error(e);toast('Sistem tidak dapat dimulakan: '+e.message,'error')});