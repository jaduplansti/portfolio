// Hover effects for projects and skills
document.querySelectorAll('.project-card, .skill-card').forEach(el => {
  el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.08)'; });
  el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)'; });
});
