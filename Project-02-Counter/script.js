
function increaseLike() {

    // TODO 1:
    // Select the likeCount element
const likeElement = document.getElementById('likeCount');

    // TODO 2:
    // Read its current value
const currVal = likeElement.textContent;

    // TODO 3:
    // Convert the value into a number
let count = parseInt(currVal,10);

    // TODO 4:
    // Increase it by 1
    count+=1;


    // TODO 5:
    // Display the new value
    likeElement.textContent = count;

}
