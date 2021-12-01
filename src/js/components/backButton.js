let backButton = document.querySelector('.back-button');

console.log(backButton)
backButton.addEventListener('click', function(){
    window.history.back()
})