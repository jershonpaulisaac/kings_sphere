document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('classForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;

    // Only allow CSE, 2nd Year, Section A
    if (department === 'CSE' && year === '2' && section === 'A') {
      // Redirect to scanner
      window.location.href = 'scanner.html';
    } else {
      alert('QR Scanner access is only available for CSE A 2nd Year.');
    }
  });
});
