// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Track outbound affiliate clicks (optional)
  const links = document.querySelectorAll('a[rel~="sponsored"]');
  links.forEach(a => a.addEventListener('click', () => {
    if (window.gtag) gtag('event', 'affiliate_click', { 
      'event_category': 'outbound', 
      'event_label': a.href 
    });
  }));

  // Wait until Lucide is available, then create icons
  function activateLucide() {
    if (window.lucide) {
      lucide.createIcons();
    } else {
      // Try again in 50ms until loaded
      setTimeout(activateLucide, 50);
    }
  }

  activateLucide();
});
