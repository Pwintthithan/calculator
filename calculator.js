var lastNumber = "0";
var operator = "";
var operand = "0";

function clearText() {
    document.getElementById("display").value = "0"
    lastNumber = "0"
}

function numberDisplay(value) {
    if (operator === "") {
        if (lastNumber === "0") {
            document.getElementById("display").value = value
            lastNumber = value
        } else {
            lastNumber = lastNumber + value
        }
    } else {
        document.getElementById("display").value = value
    }


}

function operation(opr) {
    operator = opr
    operand = document.getElementById("display").value
    // operand = lastNumber
}