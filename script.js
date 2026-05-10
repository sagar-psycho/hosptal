/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
});

/* ── FAQ ACCORDION ── */
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ── APPOINTMENT FORM ── */
function submitForm() {
  const name  = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const dept  = document.getElementById('f-dept').value;
  if (!name || !phone || !dept) {
    alert('Please fill in Name, Phone and Department to submit the form.');
    return;
  }
  // Build WhatsApp message
  const date = document.getElementById('f-date').value;
  const age  = document.getElementById('f-age').value;
  const msg  = document.getElementById('f-msg').value;
  let wa = `Hello Sri Srinivasa Speciality Hospital,\n\nAppointment Request:\nName: ${name}\nPhone: ${phone}${age ? '\nAge: ' + age : ''}${dept ? '\nDepartment: ' + dept : ''}${date ? '\nPreferred Date: ' + date : ''}${msg ? '\nMessage: ' + msg : ''}\n\nPlease confirm my appointment.`;
  window.open('https://wa.me/919986756891?text=' + encodeURIComponent(wa), '_blank');
  document.getElementById('formSuccess').style.display = 'block';
}

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.service-card, .doctor-card, .review-card, .about-stat, .faq-item, .gal-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ── SET MIN DATE FOR FORM ── */
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('f-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});