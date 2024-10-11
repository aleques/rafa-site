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
  const slideBox = document.getElementById('slide-container');
  if (!slideBox) return null;

  const rect = slideBox.getBoundingClientRect();
  const elementWidth = rect.width; // ou rect.right - rect.left

  if (elementWidth) {
    slideBox.setAttribute('style', `max-width: ${elementWidth}px;`);
    console.log('Largura do elemento:', elementWidth);
  }
})();