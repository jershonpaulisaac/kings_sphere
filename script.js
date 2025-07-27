document.getElementById('sphereLogo').addEventListener('click', () => {
  const appsSection = document.getElementById('appsSection');
  appsSection.scrollIntoView({ behavior: 'smooth' });
  appsSection.style.display = appsSection.style.display === 'none' ? 'block' : 'none';
});