function validatePassword(event) {
    event.preventDefault(); 
  
    
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;
  
    
    let isValid = checkPassword(password);
  
    
    let resultDiv = document.getElementById("resultado");
    if (isValid) {
      resultDiv.textContent = "Senha válida!";
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = "A senha está inválida! A sua senha deve ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
      resultDiv.style.color = "red";
    }
  }
  
  function checkPassword(password) {
    
    if (password.length < 8) {
      return false;
    }
  
   
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
  
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
  
      if (char >= "A" && char <= "Z") {
        hasUppercase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowercase = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
  
      if (hasUppercase && hasLowercase && hasNumber) {
        return true;
      }
    }
  
    return false;
  }