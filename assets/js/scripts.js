const submitRating = document.getElementById('ratingSubmit');
const ratingButtons = document.querySelectorAll('.input');
const selection = document.getElementById('selection');
const thankYou = document.getElementById('thank-you');
const rating = document.getElementById('rating');
let ratingSelected = false;

ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        selection.innerText = button.innerText;
        ratingSelected = true;
    })
});

submitRating.addEventListener('click', () => {
    if(ratingSelected) {
        rating.classList.add('hidden');
        thankYou.classList.remove('hidden');
    }
}) 
