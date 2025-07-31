document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            // Simulate smooth transition (you can replace with actual navigation logic)
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });

    // Reset opacity on page load
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
});