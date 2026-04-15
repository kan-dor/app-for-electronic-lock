document.querySelectorAll('.password-input').forEach(input => {
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

document.getElementById('registration-form').addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Пользователь успешно зарегистрирован!');
          this.reset();
        } else {
          alert('Ошибка: ' + result.error);
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных');
      }
    });