let backButton = document.querySelector('.back-button');

if(backButton !== null){
    backButton.addEventListener('click', goBack);
}

function goBack(){
    window.history.back()
}
