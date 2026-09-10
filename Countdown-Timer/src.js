const res = document.getElementById("res");

function updateTimer() {
  const current = Date.now();
  const final = new Date(2026, 11, 18).getTime();
  let diff = final - current;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;
  const hr = Math.floor(diff / (1000 * 60 * 60 ));
  diff %= 1000 * 60 * 60;
  const min = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;
  const sec = Math.floor(diff / (1000));
  res.textContent = `${day} : ${String(hr).padStart(2, "0")} : ${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`;
}
updateTimer();
setInterval(updateTimer, 1000);
