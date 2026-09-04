// Lightweight validation feedback for the Panther Survey form.
// Highlights the first invalid field and scrolls to it instead of
// relying only on the browser's default validation bubble.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus({ preventScroll: true });
      }
    }
  });
});
