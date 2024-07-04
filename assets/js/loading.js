document.addEventListener("DOMContentLoaded", function() {
    const loadingContainer = document.getElementById('loading-container');
    const header = document.querySelector('nav');
    const homeSection = document.querySelector('.home-section');

    setTimeout(() => {
        loadingContainer.style.display = 'none';
        header.style.opacity = '1'; // Mudança na opacidade do header para torná-lo visível
    }, 3000); // 3 segundos de tempo de carregamento simulado
});





// slide show 3
document.addEventListener('DOMContentLoaded', (event) => {
  const radios = document.querySelectorAll('input[name="slider"]');
  let currentIndex = 0;

  function changeSlide(index) {
      radios[index].checked = true;
      toggleBodyClass();
  }

  function toggleBodyClass() {
      document.body.classList.toggle('blue');
  }

  setInterval(() => {
      currentIndex = (currentIndex + 1) % radios.length;
      changeSlide(currentIndex);
  }, 3000);

  radios.forEach((radio, index) => {
      radio.addEventListener('click', () => {
          currentIndex = index;
          changeSlide(currentIndex);
      });

      // Verifica se há uma próxima imagem
      const nextElement = radio.nextElementSibling;
      if (nextElement) {
          const image = nextElement.querySelector('img');
          if (image) {
              image.addEventListener('click', () => {
                  currentIndex = index;
                  changeSlide(currentIndex);
              });
          }
      }
  });
});

$(document).ready(function() {
  $('input[name="slider"]').on('change', function() {
      $('body').toggleClass('blue');
  });
});
