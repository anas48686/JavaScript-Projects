const timeDiv = document.getElementById("time");

function updateTime() {
  const time = new Date();
  timeDiv.textContent = time.toLocaleTimeString();
}
updateTime();
setInterval(updateTime, 1000)
