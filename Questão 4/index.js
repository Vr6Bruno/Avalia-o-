function checkSquare() {
    var number = document.getElementById("number").value;
    var sqrt = Math.sqrt(number);

    if (sqrt === Math.floor(sqrt)) {
        document.getElementById("result").innerHTML = number + " é um quadrado perfeito.";
    } else {
        document.getElementById("result").innerHTML = number + " não é  um quadrado perfeito.";
    }



}