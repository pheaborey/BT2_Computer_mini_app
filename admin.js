const loginScreen=document.getElementById('loginScreen');
const adminApp=document.getElementById('adminApp');
let password=sessionStorage.getItem('bt2_admin_password')||'';
const headers=()=>({'Authorization':`Bearer ${password}`,'Content-Type':'application/json'});

async function api(resource,options={}) {
  const sep=resource.includes('?')?'&':'?';
  const response=await fetch(`/api/admin${sep}resource=${encodeURIComponent(resource.replace(/^[^?]+/,'')||'')}`,{...options,headers:{...headers(),...(options.headers||{})}});
  if(response.status===401){sessionStorage.removeItem('bt2_admin_password');location.reload();}
  const data=await response.json();
  if(!response.ok) throw new Error(data.error||'Request failed');
  return data;
}

async function request(resource,options={}) {
  const url=`/api/admin?resource=${resource}`;
  const response=await fetch(url,{...options,headers:{...headers(),...(options.headers||{})}});
  if(response.status===401){sessionStorage.removeItem('bt2_admin_password');location.reload();}
  const data=await response.json();
  if(!response.ok) throw new Error(data.error||'Request failed');
  return data;
}

document.getElementById('loginForm').addEventListener('submit',async e=>{
  e.preventDefault();
  password=document.getElementById('passwordInput').value;
  try{
    await request('dashboard');
    sessionStorage.setItem('bt2_admin_password',password);
    loginScreen.classList.add('hidden');
    adminApp.classList.remove('hidden');
    loadDashboard();
  }catch(err){document.getElementById('loginError').textContent=err.message}
});

if(password){loginScreen.classList.add('hidden');adminApp.classList.remove('hidden');loadDashboard()}
document.getElementById('logoutBtn').onclick=()=>{sessionStorage.removeItem('bt2_admin_password');location.reload()};

document.querySelectorAll('.nav-btn').forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
  document.getElementById(`${btn.dataset.view}View`).classList.remove('hidden');
  document.getElementById('viewTitle').textContent=btn.dataset.view[0].toUpperCase()+btn.dataset.view.slice(1);
  if(btn.dataset.view==='dashboard')loadDashboard();
  if(btn.dataset.view==='products')loadProducts();
  if(btn.dataset.view==='orders')loadOrders();
});

async function loadDashboard(){
  const data=await request('dashboard');
  const c=data.counts;
  document.getElementById('dashboardView').innerHTML=`<div class="cards">
    <div class="card"><span>Products</span><strong>${c.product_count}</strong></div>
    <div class="card"><span>Orders</span><strong>${c.order_count}</strong></div>
    <div class="card"><span>Pending</span><strong>${c.pending_count}</strong></div>
    <div class="card"><span>Revenue</span><strong>$${Number(c.revenue).toFixed(2)}</strong></div></div>`;
}

let products=[];
async function loadProducts(){
  products=await request('products');
  renderProducts();
}
function renderProducts(){
  const q=document.getElementById('productSearch').value?.toLowerCase()||'';
  const filtered=products.filter(p=>`${p.id} ${p.category} ${JSON.stringify(p.i18n)}`.toLowerCase().includes(q));
  document.getElementById('productsTable').innerHTML=filtered.map(p=>`<tr>
    <td>${escapeHtml(p.id)}</td><td>${escapeHtml(p.category)}</td>
    <td>${escapeHtml(p.i18n?.en?.title||'—')}</td><td>$${Number(p.price).toFixed(2)}</td>
    <td>${p.active?'Yes':'No'}</td>
    <td><button class="action-btn edit" onclick="editProduct('${p.id}')">Edit</button><button class="action-btn danger" onclick="deleteProduct('${p.id}')">Delete</button></td></tr>`).join('');
}
document.getElementById('productSearch').oninput=renderProducts;

const dialog=document.getElementById('productDialog');
document.getElementById('newProductBtn').onclick=()=>{
  document.getElementById('productDialogTitle').textContent='Add product';
  document.getElementById('productForm').reset();
  dialog.showModal();
};
document.getElementById('cancelProductBtn').onclick=()=>dialog.close();

window.editProduct=id=>{
  const p=products.find(x=>x.id===id);if(!p)return;
  const form=document.getElementById('productForm');
  document.getElementById('productDialogTitle').textContent='Edit product';
  form.elements.id.value=p.id;form.elements.category.value=p.category;form.elements.price.value=p.price;
  form.elements.rating.value=p.rating;form.elements.icon.value=p.icon;form.elements.bg.value=p.bg;
  form.elements.active.checked=p.active;form.elements.i18n.value=JSON.stringify(p.i18n,null,2);
  dialog.showModal();
};

document.getElementById('productForm').onsubmit=async e=>{
  e.preventDefault();const f=e.target;
  let i18n;try{i18n=JSON.parse(f.elements.i18n.value)}catch(err){alert('Translations must be valid JSON');return}
  try{
    await request('products',{method:'POST',body:JSON.stringify({id:f.elements.id.value.trim(),category:f.elements.category.value,price:Number(f.elements.price.value),rating:Number(f.elements.rating.value),icon:f.elements.icon.value.trim(),bg:f.elements.bg.value.trim(),active:f.elements.active.checked,i18n})});
    dialog.close();loadProducts();
  }catch(err){alert(err.message)}
};

window.deleteProduct=async id=>{
  if(!confirm(`Delete ${id}?`))return;
  await request(`products&id=${encodeURIComponent(id)}`,{method:'DELETE'});
  loadProducts();
};

async function loadOrders(){
  const orders=await request('orders');renderOrders(orders);
}
function renderOrders(orders){
  const filter=document.getElementById('orderStatusFilter').value;
  const filtered=filter?orders.filter(o=>o.status===filter):orders;
  document.getElementById('ordersTable').innerHTML=filtered.map(o=>`<tr>
    <td>${escapeHtml(o.order_number)}</td><td>${escapeHtml(o.customer_name)}<br><small>${escapeHtml(o.address||o.fulfillment)}</small></td>
    <td>${escapeHtml(o.phone)}</td><td>$${Number(o.total).toFixed(2)}</td>
    <td><select onchange="changeOrderStatus('${o.id}',this.value)">${['pending','processing','completed','cancelled'].map(s=>`<option ${o.status===s?'selected':''}>${s}</option>`).join('')}</select></td>
    <td>${new Date(o.created_at).toLocaleString()}</td>
    <td><button class="action-btn danger" onclick="deleteOrder('${o.id}')">Delete</button></td></tr>`).join('');
}
document.getElementById('orderStatusFilter').onchange=loadOrders;
window.changeOrderStatus=async(id,status)=>{await request(`orders&id=${id}`,{method:'PATCH',body:JSON.stringify({status})});loadOrders()};
window.deleteOrder=async id=>{if(confirm('Delete this order?')){await request(`orders&id=${id}`,{method:'DELETE'});loadOrders()}};

document.getElementById('seedBtn').onclick=async()=>{
  if(!confirm('Seed or refresh 8 sample products?'))return;
  const data=await request('seed',{method:'POST'});alert(`Seeded ${data.seeded} products`);
};
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
