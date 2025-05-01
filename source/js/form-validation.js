const form = document.querySelector('.form__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  const phonePattern = /^\+7\d{10}$/;
  const emailPattern = /^[a-zA-Z0-9а-яА-ЯёЁ._%+-]+@[a-zA-Z0-9а-яА-ЯёЁ.-]+\.(?:[a-zA-Zа-яА-ЯёЁ]{2,}|рф)$/;

  phoneInput.classList.remove('form__input-error');
  emailInput.classList.remove('form__input-error');
  phoneInput.setCustomValidity('');
  emailInput.setCustomValidity('');

  if (phoneInput.value.trim() === '') {
    isValid = false;
    phoneInput.classList.add('form__input-error');
    phoneInput.setCustomValidity('Поле не может быть пустым');
  } else if (!phonePattern.test(phoneInput.value)) {
    isValid = false ;
    phoneInput.classList.add('form__input-error');
    phoneInput.setCustomValidity('Неверный формат телефона Пример:(+79999999999)');
  } else {
    phoneInput.classList.remove('form__input-error');
    phoneInput.setCustomValidity('');
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    emailInput.classList.add('form__input-error');
    emailInput.setCustomValidity('Поле не может быть пустым');
  } else if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('form__input-error');
    emailInput.setCustomValidity('Неверный формат email Пример:(example@gmail.com)');
  } else {
    emailInput.classList.remove('form__input-error');
    emailInput.setCustomValidity('');
  }

  if (!isValid) {
    emailInput.reportValidity();
    phoneInput.reportValidity();
  } else {
    form.submit();
  }
});
