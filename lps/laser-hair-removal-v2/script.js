(() => { // Function to change FAQ behavior on desktop
  if (window.innerWidth < 700) return null;

  const boxAccordion = document.getElementById('httfox-accordion');
  if (!boxAccordion) return null;

  const items = boxAccordion.querySelectorAll('.accordion-item');
  if (items?.length === 0) return null;

  const buttons = boxAccordion.querySelectorAll('button');
  if (buttons?.length === 0) return null;

  function getContent(index = null) {
    if (index !== null) {
      const content = items[index].querySelector('.accordion-item--content p')?.innerText;
      return content ?? null;
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      setTimeout(() => {

        button.classList.remove('active');
      }, 0);
      
      const title = button.querySelector('.accordion-title')?.innerText;
      const content = getContent(index);

      document.querySelector('#faq .faq-content--output .faq-output--title').innerText = title;
      document.querySelector('#faq .faq-content--output .faq-output--content').innerText = content;
    });
  });

  buttons[0].click();
  buttons[0].setAttribute('aria-expanded', 'true');
})();


(() => {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (!ref) return;

  const baseText = "Bonjour%20!%20Je%20veux%20en%20savoir%20plus%20sur%20l%E2%80%99%C3%A9pilation%20laser.%20Code%20promo%20%3A%20";
  const newHref = `https://wa.me/32466459225?text=${baseText}${encodeURIComponent(ref)}`;

  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    a.href = newHref;
  });
})();

(() => {
  const slideBox = document.getElementById('slide-container');
  if (!slideBox) return null;

  const rect = slideBox.getBoundingClientRect();
  const elementWidth = rect.width; // ou rect.right - rect.left

  if (elementWidth) {
    slideBox.setAttribute('style', `max-width: ${elementWidth}px;`);
    console.log('Largura do elemento:', elementWidth);
  }
})();