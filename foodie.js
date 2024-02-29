
function fadeInCards() {
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add('fade-in');
  }
}

window.onload = function() {
  fadeInCards();
};

function search() {
  var input, filter, cards, card, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName('card');

  for (i = 0; i < cards.length; i++) {
      card = cards[i];
      txtValue = card.textContent || card.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          card.style.display = '';
      } else {
          card.style.display = 'none';
      }
  }

  fadeInCards(); 
}
