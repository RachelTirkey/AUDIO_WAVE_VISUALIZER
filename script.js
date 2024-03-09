const input = document.querySelector('input');
const audioElem = document.querySelector('audio');

input.addEventListener('change', () => {
  const file = input.files[0];
  // console.log(file);
  if (!file) return;

  audioElem.src = URL.createObjectURL(file);
  audioElem.play();


  // Audio Processing

  
})