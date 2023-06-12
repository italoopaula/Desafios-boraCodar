const stepOneDiv = document.getElementById('step-one');
const stepTwoDiv = document.getElementById('step-two');
const stepThreeDiv = document.getElementById('step-three');
const finalized = document.getElementById('finalized');

const continueButton = stepOneDiv.querySelector('.continue-button input');
const backButtonStepTwo = stepTwoDiv.querySelector('.back-button input');
const continueButtonStepTwo = stepTwoDiv.querySelector('.continue-button input');
const continueButtonStepThree = stepThreeDiv.querySelector('.continue-button input');
const backButtonStepThree = stepThreeDiv.querySelector('.back-button input');

continueButton.addEventListener('click', function (event) {
    event.preventDefault();
    stepOneDiv.style.display = 'none'; 
    stepTwoDiv.style.display = 'block'; 
});

backButtonStepTwo.addEventListener('click', function (event) {
    event.preventDefault();
    stepTwoDiv.style.display = 'none'; 
    stepOneDiv.style.display = 'block'; 
});

continueButtonStepTwo.addEventListener('click', function (event) {
    event.preventDefault();
    stepTwoDiv.style.display = 'none'; 
    stepThreeDiv.style.display = 'block'; 
});

backButtonStepThree.addEventListener('click', function (event) {
    event.preventDefault();
    stepThreeDiv.style.display = 'none';
    stepTwoDiv.style.display = 'block';
});

continueButtonStepThree.addEventListener('click', function (event) {
    event.preventDefault();
    stepThreeDiv.style.display = 'none';
    finalized.style.display = 'block'
});