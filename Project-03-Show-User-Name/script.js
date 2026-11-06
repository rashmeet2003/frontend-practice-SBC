function showName() {

    // TODO 1:
    // Select the input element
    const inp = document.getElementById('nameInput');


    // TODO 2:
    // Read the value entered by the user
    const val = inp.value;


    // TODO 3:
    // Select the output paragraph
const op = document.getElementById('output');

    // TODO 4:
    // Display "Hello, <name>!"
    op.textContent = "Hello, " + val + "!";

}
