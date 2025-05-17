    // Alle Audioplayer auf der Seite holen
    const players = document.querySelectorAll('.mukke');

    players.forEach(player => {
      player.addEventListener('play', () => {
        // Wenn ein Player startet, alle anderen stoppen
        players.forEach(other => {
          if (other !== player) {
            other.pause();
            other.currentTime = 0; // Optional: springt zum Anfang
          }
        });
      });
    });


    // Alle Like-Buttons auswählen
  const likeButtons = document.querySelectorAll('.like-button');

  // Laden der Like-Status für jeden Button
  likeButtons.forEach(button => {
    const buttonId = button.getAttribute('data-id');
    if (localStorage.getItem('liked_' + buttonId) === 'true') {
      button.classList.add('liked');
    }

    // Event-Listener für das Klicken auf jeden Button
    button.addEventListener('click', () => {
      button.classList.toggle('liked');

      // Speichern des aktuellen Status im LocalStorage für diesen Button
      if (button.classList.contains('liked')) {
        localStorage.setItem('liked_' + buttonId, 'true');
      } else {
        localStorage.setItem('liked_' + buttonId, 'false');
      }
    });
  });









