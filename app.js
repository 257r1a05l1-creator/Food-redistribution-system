const food = [
  {id:1,type:"meals",emoji:"🍛",name:"Vegetable Biryani",qty:"80 plates",loc:"Banjara Hills",time:"Pickup by 9:30 PM",donor:"Green Leaf Restaurant"},
  {id:2,type:"bakery",emoji:"🥖",name:"Fresh Bread & Buns",qty:"45 packs",loc:"Madhapur",time:"Pickup by 8:00 PM",donor:"Daily Bake"},
  {id:3,type:"produce",emoji:"🥕",name:"Fresh Vegetables",qty:"32 kg",loc:"Kukatpally",time:"Pickup by 7:00 PM",donor:"City Market"},
  {id:4,type:"meals",emoji:"🍲",name:"Dal & Rice Meals",qty:"120 servings",loc:"Secunderabad",time:"Pickup by 10:00 PM",donor:"Community Kitchen"},
  {id:5,type:"bakery",emoji:"🧁",name:"Pastries & Cakes",qty:"28 boxes",loc:"Hitech City",time:"Pickup by 6:30 PM",donor:"Sweet Corner"},
  {id:6,type:"produce",emoji:"🍎",name:"Fruits",qty:"25 kg",loc:"Begumpet",time:"Pickup by 8:30 PM",donor:"Fresh Mart"}
];

function renderFood(list=food){
  const grid=document.getElementById("foodGrid");
  grid.innerHTML=list.map(f=>`
    <article class="food-card">
      <div class="food-top"><div class="food-emoji">${f.emoji}</div><span class="tag">${f.type}</span></div>
      <h3>${f.name}</h3>
      <div class="food-meta">
        <span>📦 ${f.qty}</span><span>📍 ${f.loc}</span><span>⏱️ ${f.time}</span><span>🏪 ${f.donor}</span>
      </div>
      <button class="claim" onclick="claimFood(${f.id})">Claim donation</button>
    </article>`).join("");
}
function filterFood(){
  const v=document.getElementById("filter").value;
  renderFood(v==="all"?food:food.filter(x=>x.type===v));
}
function claimFood(id){
  const item=food.find(x=>x.id===id);
  alert(`Donation claimed: ${item.name} (${item.qty}).\\nDemo status: CLAIMED`);
}
function submitDonation(e){
  e.preventDefault();
  const name=document.getElementById("foodName").value;
  document.getElementById("formMessage").textContent=`✓ ${name} has been added to the donation listings (demo).`;
  e.target.reset();
  const n=document.getElementById("mealsSaved");
  const d=document.getElementById("dashMeals");
  const base=12480+Math.floor(Math.random()*50);
  n.textContent=base.toLocaleString(); d.textContent=base.toLocaleString();
}
function openModal(id){document.getElementById(id).classList.add("show")}
function closeModal(e,id){
  if(!e || e.target.id===id || e.target.classList.contains("close")) document.getElementById(id).classList.remove("show");
}
function demoLogin(){document.getElementById("loginMsg").textContent="✓ Demo login successful.";setTimeout(()=>closeModal(null,"loginModal"),900)}
renderFood();
