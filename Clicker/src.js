const body = document.querySelector('body');

body.addEventListener('click', (e)=>{
  const circleEl = document.createElement('div');
  circleEl.classList.add('circle');
  circleEl.textContent = "Hello";

  const color = ['red', 'blue', 'pink', 'orange', 'green', 'white'];
  circleEl.style.backgroundColor = color[Math.floor(Math.random()* color.length)];

  circleEl.style.top = `${e.clientY - 25}px`;
  circleEl.style.left = `${e.clientX - 25}px`;
  
  body.append(circleEl);

  setTimeout(()=>{
    circleEl.remove();
  }, 5000);
})

