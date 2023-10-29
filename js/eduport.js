// ----------------------------Counter Section---------------------------
let nums = document.querySelectorAll(".counters .number");
let counterSection = document.querySelector(".counters");
let started = false // Function started ? No

window.onscroll = function () {
        if (window.scrollY >= counterSection.offsetTop) {
                if (!started) {
                        nums.forEach((num) => startCount(num));
                }
                started = true;
        }
}

nums.forEach((num) => startCount(num));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 4000/goal);
};