export const checkValidData = (name, email, password) => {
    const isNamelValid = /^[a-zA-Z\s]{2,10}$/.test(name);
    // Corrected email validation (case-insensitive)
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

    // Password validation: 
    // At least one digit, one lowercase letter, one uppercase letter, and at least 8 characters
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNamelValid) return "Name is not valid. It must be between 2 and 10 characters and contain only letters and spaces.";
    if (!isEmailValid) return "Email id is not valid";

    if (!isPasswordValid) return "Password is not valid";

    return null; // Both email and password are valid
};
