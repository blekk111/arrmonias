function showContent(contentId) {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.content');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    document.querySelector('.tab[onclick="showContent(\'' + contentId + '\')"]').classList.add('active');
    document.getElementById(contentId).classList.add('active');
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    showContent('content1');
});


// ---------

function showContent(contentId, tabElement) {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.content');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    tabElement.classList.add('active');
    document.getElementById(contentId).classList.add('active');

    // Update the position and width of the selection bar
    var selectionBar = document.querySelector('.selection-bar');
    selectionBar.style.width = tabElement.offsetWidth + 'px';
    selectionBar.style.left = tabElement.offsetLeft + 'px';
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    var firstTab = document.querySelector('.tab');
    showContent('content1', firstTab);
});

// ------
$(document).ready(function(){
    $('.brands-container').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  // --------------
  function goToPage(page) {
    window.location.href = page;
}
   // --------------
// actividades

let currentIndex = 0;

function moveLeft() {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.cards-container');
    container.appendChild(cards[0]);
}

function moveRight() {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.cards-container');
    container.insertBefore(cards[cards.length - 1], cards[0]);
}

document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    let currentIndex = 0; // Mantén un índice del elemento actualmente visible

    const moveCarousel = (direction) => {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth; // Asume que todas las tarjetas tienen el mismo ancho
        const totalWidth = cardWidth * cards.length;
        let moveDistance = cardWidth * currentIndex;

        if (direction === 'left') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
        } else if (direction === 'right') {
            currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : cards.length - 1;
        }

        moveDistance = cardWidth * currentIndex;
        cardsContainer.style.transform = `translateX(-${moveDistance}px)`;
    };

    // Event listeners para los botones
    document.querySelector('.carousel-button.left').addEventListener('click', () => moveCarousel('left'));
    document.querySelector('.carousel-button.right').addEventListener('click', () => moveCarousel('right'));

    // Automatizar el movimiento hacia la derecha
    setInterval(() => {
        const cards = document.querySelectorAll('.card');
        if (currentIndex < cards.length - 1) {
            moveCarousel('right');
        } else {
            currentIndex = -1; // Esto hará que el siguiente intervalo mueva al primer elemento
        }
    }, 3000); // Cambia cada 3 segundos
});


