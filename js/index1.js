(function () {

  fetch('./text/about-me.txt')
  .then(response => response.text())
  .then(text => {
      document.getElementById('about-me').innerHTML = text;
  })
  .catch(error => {
      console.error('Error loading the text file:', error);
      document.getElementById('about-me').innerHTML = 'Failed to load text.';
  });

  /* block access from mobile*/
  document.addEventListener("DOMContentLoaded", function() {
    if (detectMobileDevice()) {
        clearBodyAndShowMessage();
    }
  });

  function detectMobileDevice() {
      return window.innerWidth < 800 || navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  }

  function clearBodyAndShowMessage() {
      document.body.innerHTML = '';
      const mobileBlock = document.createElement('div');
      mobileBlock.setAttribute('id', 'mobile-block');
      mobileBlock.innerHTML = '<p>Sorry! For now the website does not support mobile access, please visit through a computer.</p>';
      document.body.appendChild(mobileBlock);
  }

})()
