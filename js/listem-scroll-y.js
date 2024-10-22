
function detectarScroll(positionYListener) {

  // Detecta a posição de rolagem vertical atual
  const currentScroll = window.scrollY;

  let response = {
    isBigger: false,
    position: currentScroll 
  };

  // Verifica se a posição de rolagem passou da posição Y definida
  if (currentScroll > positionYListener) {
    // Ação a ser executada quando a posição Y for atingida
    response.isBigger = true;

    // Remova o event listener para que a ação seja executada apenas uma vez
    window.removeEventListener('scroll', detectarScroll); 
  }

  return response;
}