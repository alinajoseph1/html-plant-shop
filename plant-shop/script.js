function hideMessage(elementId) {
    document.querySelector(elementId).style.display = "none";

}

function sendAlert() {
    alert("Your Cart is empty!")
}

function changePic(theHoveredElement) {
    theHoveredElement.src = "imgs/succulents-2.jpg"
}

function revertPic(theHoveredElement) {
    theHoveredElement.src = "imgs/succulents-1.jpg"
}