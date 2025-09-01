let minTime = 2000; // 2 saniye
let start = Date.now();

window.onload = function () {
    let elapsed = Date.now() - start;
    let remaining = minTime - elapsed;
    if (remaining < 0) remaining = 0;

    setTimeout(function () {
        document.querySelector(".card").style.display = "none";

        document.querySelector(".counter-container").style.display = "block";

        document.title = "SAYAÇ | 2025";
    }, remaining);
};

document.querySelector(".counter-container").style.display = "none";
