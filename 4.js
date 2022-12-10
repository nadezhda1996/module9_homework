const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const width = document.getElementById('width').value;
  const length = document.getElementById('length').value;

  let image = document.getElementById('j-result');
  image.textContent = '';
  if (!(width >= 100 && width <= 300 && length >= 100 && length <= 300)) {
    s.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  fetch(`https://picsum.photos/${width}/${length}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});