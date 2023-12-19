function showDetails() {
    var onlinePaymentRadio = document.getElementById("delivery");
    var deliveryDetailsContainer = document.getElementById("deliveryDetailsContainer");

    if (onlinePaymentRadio.checked) {
        deliveryDetailsContainer.style.display = "block";
    } else {
        deliveryDetailsContainer.style.display = "none";
    }
}
function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }