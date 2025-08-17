// main.js

// Minimal JS placeholder
document.addEventListener('DOMContentLoaded', () => {
  // Track outbound affiliate clicks (optional)
  const links = document.querySelectorAll('a[rel~="sponsored"]');
  links.forEach(a => a.addEventListener('click', () => {
    if (window.gtag) gtag('event', 'affiliate_click', { 
      'event_category': 'outbound', 
      'event_label': a.href 
    });
  }));

  // Lucide icons activation (already loaded via script tag)
  if (window.lucide) {
    lucide.createIcons();
  } else {
    console.error('Lucide icons not found. Make sure the script tag is included in HTML.');
  }
});
