function updateCount() {

    // TODO:
    // Get textarea value
    const textarea = document.getElementById('textarea');
    const textval = textarea.value;

    // Find the number of characters
    const charct = textVal.length;

    // Display that number inside #count
    document.getElementById('count).textContent = charct;

}
