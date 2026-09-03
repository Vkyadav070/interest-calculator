function calculateInterest() {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    let timeUnit = document.getElementById("timeUnit").value;

    let interest;

    if (timeUnit === "years") {
        interest = principal * rate * time * 12 / 100;
    }
    else if (timeUnit === "months") {
        interest = principal * rate * time / 100;
    }
    else if (timeUnit === "days") {
        interest = principal * rate * time / 30 / 100;
    }

    let totalAmount = principal + interest;

    document.getElementById("result").innerHTML =
        "Interest: ₹" + interest.toFixed(2) +
        "<br>Total Amount: ₹" + totalAmount.toFixed(2);
}