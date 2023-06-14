function calculateFactorial(number) {
    var factorial = 1;

    for (var i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

function displayFactorials() {
    var factorialsList = document.getElementById("factorials");

    for (var i = 1; i <= 10; i++) {
        var factorial = calculateFactorial(i);
        var listItem = document.createElement("li");    
        listItem.innerText = "0 fatorial de " + i + " é " + factorial + ".";
        factorialsList.appendChild(listItem);

    }
}

    displayFactorials();