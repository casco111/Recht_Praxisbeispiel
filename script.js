'use strict';

// Mobile Menü Steuerung
document.getElementById('menuBtn').addEventListener('click', function () {
  const nav  = document.getElementById('mainNav');
  const open = nav.classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
});

// Modal Funktionen
function openModal() {
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').querySelector('input').focus();
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}
function handleSubscription(e) {
  e.preventDefault();
  
  // Validierung
  const emailInput = document.getElementById('sub-email');
  const paymentSelect = document.getElementById('sub-payment');
  let isValid = true;
  
  // Email-Validierung
  if (!emailInput.value || !emailInput.value.includes('@')) {
    emailInput.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    emailInput.setAttribute('aria-invalid', 'false');
  }
  
  // Payment-Validierung
  if (!paymentSelect.value) {
    paymentSelect.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    paymentSelect.setAttribute('aria-invalid', 'false');
  }
  
  if (!isValid) {
    emailInput.focus();
    return;
  }
  
  alert('✓ Abo erfolgreich gestartet! Willkommen bei PartyPulse.');
  closeModal();
  e.target.reset();
}

// Scroll to pricing
function scrollToPricing() {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Kontaktformular-Validierung
function submitForm(e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('cn');
  const emailInput = document.getElementById('ce');
  const messageTextarea = document.getElementById('cm');
  
  const nameError = document.getElementById('cn-error');
  const emailError = document.getElementById('ce-error');
  const messageError = document.getElementById('cm-error');
  
  let isValid = true;
  
  // Name-Validierung
  if (!nameInput.value.trim()) {
    nameInput.setAttribute('aria-invalid', 'true');
    nameError.textContent = 'Name ist erforderlich.';
    nameError.classList.add('show');
    isValid = false;
  } else if (nameInput.value.trim().length < 2) {
    nameInput.setAttribute('aria-invalid', 'true');
    nameError.textContent = 'Name muss mindestens 2 Zeichen lang sein.';
    nameError.classList.add('show');
    isValid = false;
  } else {
    nameInput.setAttribute('aria-invalid', 'false');
    nameError.textContent = '';
    nameError.classList.remove('show');
  }
  
  // Email-Validierung
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value) {
    emailInput.setAttribute('aria-invalid', 'true');
    emailError.textContent = 'E-Mail ist erforderlich.';
    emailError.classList.add('show');
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.setAttribute('aria-invalid', 'true');
    emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    emailError.classList.add('show');
    isValid = false;
  } else {
    emailInput.setAttribute('aria-invalid', 'false');
    emailError.textContent = '';
    emailError.classList.remove('show');
  }
  
  // Message-Validierung
  if (!messageTextarea.value.trim()) {
    messageTextarea.setAttribute('aria-invalid', 'true');
    messageError.textContent = 'Nachricht ist erforderlich.';
    messageError.classList.add('show');
    isValid = false;
  } else if (messageTextarea.value.trim().length < 10) {
    messageTextarea.setAttribute('aria-invalid', 'true');
    messageError.textContent = 'Nachricht muss mindestens 10 Zeichen lang sein.';
    messageError.classList.add('show');
    isValid = false;
  } else {
    messageTextarea.setAttribute('aria-invalid', 'false');
    messageError.textContent = '';
    messageError.classList.remove('show');
  }
  
  // Focus auf erste Fehlermeldung
  if (!isValid) {
    if (nameInput.getAttribute('aria-invalid') === 'true') {
      nameInput.focus();
    } else if (emailInput.getAttribute('aria-invalid') === 'true') {
      emailInput.focus();
    } else if (messageTextarea.getAttribute('aria-invalid') === 'true') {
      messageTextarea.focus();
    }
    return;
  }
  
  // Erfolg
  alert('✓ Nachricht erfolgreich gesendet!');
  e.target.reset();
  nameInput.setAttribute('aria-invalid', 'false');
  emailInput.setAttribute('aria-invalid', 'false');
  messageTextarea.setAttribute('aria-invalid', 'false');
}

// ESC schließt Modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('modal').classList.contains('open')) {
    closeModal();
  }
});

