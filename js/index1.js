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

})()
