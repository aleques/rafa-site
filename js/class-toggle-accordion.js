class httfox_toggleAccordion {
  constructor (accordionBoxID) {
    this.class_accordionHeaderButtom = 'accordion-item--header';
    this.accordionBox = document.getElementById(accordionBoxID) ?? null;
    this.buttons = null;
  }

  getButtons() {
    if (this.accordionBox) {
      const buttons = this.accordionBox.querySelectorAll(`.${this.class_accordionHeaderButtom}`);
      if (buttons?.length > 0) {
        this.buttons = buttons;
        return buttons;
      }
    }

    return null;
  }

  closeAllItems() {
    if (this.buttons?.length > 0) {
      this.buttons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.classList.remove('active')
      });
    }
  }

  toggleFaqItems(button) {
    if (!button) return null;

    const itemToggle = button.getAttribute('aria-expanded');
    this.closeAllItems();
    
    if (itemToggle == 'false') {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  }

  addActionButtons(buttons) {
    if (!buttons) return null;

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.toggleFaqItems(button, index));
    });
  }

  init() {
    const test = this.getButtons();
    this.addActionButtons(test);
  }
}