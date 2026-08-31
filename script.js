const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateFuelCost);

function calculateFuelCost() {
    const distance = Number(document.getElementById("distance").value);
    const consumption = Number(document.getElementById("consumption").value);
    const fuelPrice = Number(document.getElementById("fuel-price").value);

    const resultPrice = document.getElementById("result-price");
    const fuelNeededText = document.getElementById("fuel-needed");
    const costPerKmText = document.getElementById("cost-per-km");
    const errorMessage = document.getElementById("error-message");

    if (distance <= 0 || consumption <= 0 || fuelPrice <= 0) {
        errorMessage.textContent = "Please enter a number greater than 0 in every field.";
        return;
    }

    errorMessage.textContent = "";

    const fuelNeeded = (distance / 100) * consumption;
    const totalCost = fuelNeeded * fuelPrice;
    const costPerKm = totalCost / distance;

    resultPrice.textContent = "€" + totalCost.toFixed(2);
    fuelNeededText.textContent = fuelNeeded.toFixed(2) + " L";
    costPerKmText.textContent = "€" + costPerKm.toFixed(2);
}
// -----------------------------
// HP → kW
// -----------------------------

document
    .getElementById("hp-to-kw-button")
    .addEventListener("click", function () {

        const hp =
            Number(document.getElementById("hp-input").value);

        if (hp <= 0) {
            document.getElementById("kw-result").textContent =
                "Enter a valid number";
            return;
        }

        const kw = hp * 0.7457;

        document.getElementById("kw-result").textContent =
            kw.toFixed(2) + " kW";
    });


// -----------------------------
// kW → HP
// -----------------------------

document
    .getElementById("kw-to-hp-button")
    .addEventListener("click", function () {

        const kw =
            Number(document.getElementById("kw-input").value);

        if (kw <= 0) {
            document.getElementById("hp-result").textContent =
                "Enter a valid number";
            return;
        }

        const hp = kw / 0.7457;

        document.getElementById("hp-result").textContent =
            hp.toFixed(2) + " HP";
    });


// -----------------------------
// ROAD TRIP SPLIT
// -----------------------------

document
    .getElementById("split-cost-button")
    .addEventListener("click", function () {

        const tripCost =
            Number(document.getElementById("trip-cost-input").value);

        const people =
            Number(document.getElementById("people-input").value);

        if (tripCost <= 0 || people < 1) {
            document.getElementById("split-result").textContent =
                "Enter valid numbers";
            return;
        }

        const costPerPerson = tripCost / people;

        document.getElementById("split-result").textContent =
            "€" + costPerPerson.toFixed(2) + " per person";
    });
