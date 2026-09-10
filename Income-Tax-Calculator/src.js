const parent = document.getElementById("parent");
const form = document.querySelector('form');

form.addEventListener('click', (e)=>{

  e.preventDefault();
  const income = document.getElementById('income');
  const amt = parseInt(income.value);
  const res =document.querySelector('h2');
  let totalTax = 0;
  if(amt <= 1200000) 
    totalTax = 0;
  else if(amt <= 1600000)
    totalTax = (amt - 1200000) * 0.15;
  else if(amt <= 2000000)
    totalTax = (amt - 1600000) * 0.2 + 60000;
  else if(amt <= 2400000)
    totalTax = (amt - 2000000) * 0.25 + 60000 + 80000;
  else
    totalTax = (amt - 2400000) * 0.3 + 60000 + 80000 + 100000;

  res.textContent = `Total Tax: ${totalTax}`;
  e.reset();
})
