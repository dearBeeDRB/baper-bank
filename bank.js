document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = document.getElementById('deposit-amount').value;
    const newDepositAmount = parseFloat(newDeposit);
    let previousDeposit = document.getElementById('deposited');
    const previousDepositAmount = parseFloat(previousDeposit.innerText);
    let totalDepositAmount = previousDepositAmount + newDepositAmount;
    previousDeposit.innerText = totalDepositAmount;

    const totalElement = document.getElementById('total');
    const previousTotalAmount = parseFloat(totalElement.innerText);
    let totalAmount = previousTotalAmount + newDepositAmount;
    totalElement.innerText = totalAmount;

    document.getElementById('deposit-amount').value = '';

});

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const previousWithdrawElement = document.getElementById('withdrawn');
    const previousWithdrawAmount = parseFloat(previousWithdrawElement.innerText);

    const newWithdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

    const totalElement = document.getElementById('total');
    const previousTotalAmount = parseFloat(totalElement.innerText);

    if (newWithdrawAmount > previousTotalAmount) {
        alert('Invalid Amount');
        document.getElementById('withdraw-amount').value = '';
        return;
    }

    let totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdrawAmount;

    let totalAmount = previousTotalAmount - newWithdrawAmount;
    totalElement.innerText = totalAmount;

    document.getElementById('withdraw-amount').value = '';

});