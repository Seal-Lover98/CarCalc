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
