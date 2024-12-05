// Atualiza a hora e a data automaticamente
function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = now.getFullYear();
  
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}/${month}/${year}`;
  }
  
  // Atualize a cada segundo
  setInterval(updateTimeAndDate, 1000);
  updateTimeAndDate();
  
  // Funções da calculadora
  function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    try {
      const resultField = document.getElementById('result');
      resultField.value = eval(resultField.value);
    } catch (error) {
      alert('Expressão inválida!');
    }
  }
  
  // Configura os botões
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === 'AC') clearResult();
      else if (value === 'CE') clearResult();
      else if (value === '=') calculate();
      else appendValue(value);
    });
  });
  