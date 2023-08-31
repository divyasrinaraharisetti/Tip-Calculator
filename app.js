const var_obj = {
    tip: 0
}

window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
    document.querySelector('#reset').onclick = resetValues;

    const tips = document.querySelectorAll('.tip');

    tips.forEach(tip => {
        tip.addEventListener('click', handleTipClick);
    })
}


function handleTipClick(e) {
    var_obj.tip = Number(e.target.textContent.split('%')[0]);
}

function calculateTip() {
    const amount = Number(document.querySelector('#amount').value);
    const people = Number(document.querySelector('#people').value);

    if (!amount && !people) {
        alert("Please enter values");
        return;
    }

    const tip = (amount * var_obj.tip) / 100;
    const bill_per_person = (amount + tip) / people;

    document.querySelector('#tipamount').innerText = tip / people;
    document.querySelector('#totalamount').innerText = bill_per_person;
}

function resetValues () {
    document.querySelector('#tipamount').innerText = 0;
    document.querySelector('#totalamount').innerText = 0;
}