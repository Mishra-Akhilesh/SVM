let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  document.getElementById('radio1' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);
