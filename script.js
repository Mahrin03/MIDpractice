
function addToCart(productName) {
    alert(productName + " has been added to your cart.");
}

function sendMessage() {
    var name = document.getElementById("name").value;
    var result = document.getElementById("contactResult");

    if (name == "") {
        result.innerHTML = "Please enter your name before submitting.";
    } else {
        result.innerHTML = "Thank you, " + name + ". Your message has been received.";
    }
}
