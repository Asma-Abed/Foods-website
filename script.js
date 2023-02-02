document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((el) => {
    el.classList.toggle('modify');
  });
});

const icons = document.querySelectorAll('.section-1-icons i');

let i = 1;
setInterval(() => {
  i++;
  const icon = document.querySelector('.change');
  icon.classList.remove('change');
  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);
