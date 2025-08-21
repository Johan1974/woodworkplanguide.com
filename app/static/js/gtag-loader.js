(function(){
  // GA_ID is injected from Flask config
  const GTAG_ID = window.GA_ID;
  if (!GTAG_ID) return;

  // Load gtag.js script dynamically
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  document.head.appendChild(script);

  // Initialize GTAG after loading
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;  // expose globally
  gtag('js', new Date());
  gtag('config', GTAG_ID);
})();
