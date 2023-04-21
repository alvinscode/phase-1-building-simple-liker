// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartGlyphs = document.querySelectorAll('.like-glyph');
const errorModal = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');

heartGlyphs.forEach(heartGlyph => {
  heartGlyph.addEventListener('click', () => {
    mimicServerCall()
      .then(response => {
        console.log(response);
        if (heartGlyph.innerText === EMPTY_HEART) {
          heartGlyph.innerText = FULL_HEART;
          heartGlyph.classList.add('activated-heart');
        } else {
          heartGlyph.innerText = EMPTY_HEART;
          heartGlyph.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        console.error(error);
        errorMessage.innerText = error;
        errorModal.classList.remove('hidden');
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
