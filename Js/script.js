document.addEventListener("DOMContentLoaded", function() {
    const elementos = [
      { selector: "#text-speed h1", texto: "Witcher" },
      { selector: "#text-speed p1", texto: "Developer" },
    ]; 
    const delay = 100;
    let elementoAtual = 0;
    let charIndex = 0;
  
    function typeWriter() {
      const elemento = document.querySelector(elementos[elementoAtual].selector);
      if (charIndex < elementos[elementoAtual].texto.length) {
        elemento.textContent += elementos[elementoAtual].texto.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, delay);
      } else {
        elementoAtual++;
        charIndex = 0;
        setTimeout(typeWriter, delay);
      }
    }
  
    typeWriter();
  });
  
  const hamburger = document.querySelector('.hamburger');
  const menuContent = document.querySelector('.menu-content');
  
  hamburger.addEventListener('click', () => {
    menuContent.classList.toggle('show');
  });

  function copyToClipboard() {
    const textToCopy = "witcher_.";

    const inputElement = document.createElement("input");
    inputElement.value = textToCopy;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);

    alert("Meu nick já está copiado");
}

  