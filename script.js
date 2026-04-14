document.querySelectorAll('.password-input').forEach(input => {
  const label = input.previousElementSibling; 
  
  input.addEventListener('input', function() {
    if (this.value.trim() !== '') {
      label.classList.add('filled'); // Поле заполнено — поднимаем подпись
    } else {
      label.classList.remove('filled'); // Поле пустое — опускаем
    }
  });


  input.addEventListener('focus', function() {
    label.classList.add('focused');
  });
  input.addEventListener('blur', function() {
    label.classList.remove('focused');
  });
});


document.querySelectorAll('.login-input').forEach(input => {
  const label = input.previousElementSibling; // Получаем предыдущий элемент — наш label

  // Отслеживаем ввод текста
  input.addEventListener('input', function() {
    if (this.value.trim() !== '') {
      label.classList.add('filled'); // Поле заполнено — поднимаем подпись
    } else {
      label.classList.remove('filled'); // Поле пустое — опускаем
    }
  });

  // Дополнительно отслеживаем фокус
  input.addEventListener('focus', function() {
    label.classList.add('focused');
  });
  input.addEventListener('blur', function() {
    label.classList.remove('focused');
  });
});
