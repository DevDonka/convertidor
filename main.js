document.addEventListener('DOMContentLoaded', () => {
  
  const textInput = document.getElementById('textInput');
  const outputText = document.getElementById('outputText');
  const convertButton = document.getElementById('convertButton');
  const clearButton = document.getElementById('clearButton');
  const copyButton = document.getElementById('copyButton');

  function convertToUppercase() {
    const originalText = textInput.value;
    if (!originalText) {
      showNotification('¡Por favor ingresa algún texto!', 'error');
      return;
    }
    
    const uppercaseText = originalText.toUpperCase();
    outputText.value = uppercaseText;
    showNotification('¡Texto convertido a mayúsculas!');
  }

  
  function clearText() {
    textInput.value = '';
    outputText.value = '';
    showNotification('¡Campos de texto limpiados!');
  }

  
  function copyToClipboard() {
    if (!outputText.value) {
      showNotification('¡No hay texto para copiar!', 'error');
      return;
    }
    
    outputText.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    showNotification('¡Texto copiado al portapapeles!');
  }

  
  function showNotification(message, type = 'success') {
    
    let existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    
    
    if (type === 'error') {
      notification.style.backgroundColor = 'var(--error-color)';
    }
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    
    setTimeout(() => {
      notification.classList.remove('show');
      
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  convertButton.addEventListener('click', convertToUppercase);
  clearButton.addEventListener('click', clearText);
  copyButton.addEventListener('click', copyToClipboard);

  textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      convertToUppercase();
    }
  });

  setTimeout(() => {
    showNotification('¡Bienvenido al Convertidor de Texto!');
  }, 500);
});