document.addEventListener('DOMContentLoaded', (event) => {
    const bigScreen = document.getElementById('big-screen');
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        bigScreen.style.opacity = 0; // Set opacity to 0 for the fade-out effect
  
        setTimeout(() => {
          bigScreen.src = thumbnail.src;
          bigScreen.style.opacity = 1; // Set opacity to 1 for the fade-in effect
        }, 500); // Adjust the delay to match the transition duration
      });
    });
  });
  