let count = 0; // başlangıç değeri
const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");


function updateCounter() {
    counter.textContent = count;
  
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black"; // sıfırsa normal renk
    }
  }
// Arttır
increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  updateCounter();
});

// Azalt
decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  updateCounter();
});

// Sıfırla
reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  updateCounter();
});
