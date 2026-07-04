function showOffer() {
    alert("Today only: Get 10% discount on all GreenBite combo packs!");
}
function changeHeroText() {
    var message = document.getElementById("homeMessage");
    message.innerHTML = "GreenBite is a good choice because our snacks are simple, fresh, affordable and easy to order online.";
}


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
