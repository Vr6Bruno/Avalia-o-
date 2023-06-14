
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
  
  let primes = [];
  for (let i = 1; i <= 1000; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
}
  
  
  let primesDiv = document.getElementById("primes");
  primesDiv.textContent = "Números primos entre 1 e 1000: " + primes.join(", ");