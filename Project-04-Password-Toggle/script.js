function togglePassword() {

    const password = document.getElementById("password");
    const button = document.getElementById("toggleBtn");

    // TODO:
    // Check the current type of the password input
    if(password.type == "password"){
        password.type = "text";
        button.textContent = "Hide Password";
    }else{
        password.type = "password";
        button.textContent = "Show Password";
    }

    // If type is "password":
    //     change it to "text"
    //     change button text to "Hide Password"

    // Otherwise:
    //     change type back to "password"
    //     change button text to "Show Password"
}
