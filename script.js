// Reveal on scroll (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function(){
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.15});
  reveals.forEach(r=> io.observe(r));

  // Make preview-cards clickable (open Telegram or modal if you want)
  document.querySelectorAll('.preview-card').forEach(card=>{
    card.addEventListener('click', ()=> {
      // Você pode alterar pra abrir vídeo real. Por enquanto abre o grupo grátis.
      window.open('https://t.me/dudamariax', '_blank');
    });
  });

  // Small UX: show/hide fixed CTA depending on scroll direction (keeps it visible)
  let lastY = window.scrollY;
  const cta = document.querySelector('.subscribe-fixed');
  if(cta){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      if(y > lastY && y > 120){ // scrolling down
        cta.style.transform = 'translateY(0)'; // keep visible
      } else {
        cta.style.transform = 'translateY(0)'; // still visible — kept simple
      }
      lastY = y;
    });
  }
});
