document.querySelectorAll('.text-input').forEach(input => {
  // Отслеживаем изменения значения
  input.addEventListener('input', function() {
    if (this.value.trim() !== '') {
      // Поле заполнено — добавляем класс, чтобы подпись оставалась поднятой
      this.nextElementSibling.classList.add('always-up');
    } else {
      // Поле пустое — убираем класс
      this.nextElementSibling.classList.remove('always-up');
    }
  });

  // Дополнительно отслеживаем фокус/разфокус для более плавного поведения
  input.addEventListener('focus', function() {
    if (this.value.trim() === '') {
      this.nextElementSibling.classList.remove('always-up');
    }
  });
});
