document.addEventListener('DOMContentLoaded', init);

// Initalize the page
function init () {

    // Create shortscut references 
const button = document.querySelector('button');
button.addEventListener('click', makeBoxes);

}

function makeBoxes () {
    const container = document.querySelector('.container');

    for (let i = 0; i < 100; i++){

        // Make a box and add it to the container
        const newBox = document.createElement('DIV');
            console.log(newBox);
            newBox.classList.add('box');

        // Make the box clickable
        newBox.addEventListener('click', toggleClass);

            container.append(newBox);
    }   


}

function toggleClass (e) {
    console.log(e.target);
    e.target.classList.toggle('spin');
}

//init();