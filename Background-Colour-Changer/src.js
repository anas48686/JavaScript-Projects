const parent = document.getElementById("parent");

parent.addEventListener('click', (e)=>{
  const child = e.target;
  const body = document.querySelector('body');
  child.style.border = "2px solid black"
  
  body.style.backgroundColor = child.id;
})