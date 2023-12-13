function showDetails() {
    var onlinePaymentRadio = document.getElementById("delivery");
    var deliveryDetailsContainer = document.getElementById("deliveryDetailsContainer");

    if (onlinePaymentRadio.checked) {
        deliveryDetailsContainer.style.display = "block";
    } else {
        deliveryDetailsContainer.style.display = "none";
    }
}