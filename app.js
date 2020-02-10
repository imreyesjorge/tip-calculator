/* Variables */
billed = document.querySelector("#billedAmount");
tip = document.querySelector("#tipPercentage");

/* Functions */

function calculate(e){
    let result;
    total.classList.add("animate");
    console.log(total.style);
    result = Number(billed.value) + Number(billed.value) * Number(tip.value);
    result = Number(result).toFixed(2);
    total.innerHTML = `$${result}`;
    setTimeout(e => {
       total.classList.remove("animate");
    }, 1100);
}

/* Main */
calculateBtn.addEventListener("click", e => {
    calculate(e);
});

document.addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        calculate(e);
    }

});