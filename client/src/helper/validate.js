import toast from 'react-hot-toast'


//funtion to validate validate login page username

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}


// function to validate password

export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)
    return errors;
}


// validate reset password

export async function resetPasswordValidate(values) { 
    const errors = passwordVerify({}, values)
    if (values.password !== values.confirmPassword) {
        errors.exist = toast.error("Password not match..!")
    }
    return errors;
}

// validate register form

export function registerValidation(values) {
    const errors = usernameVerify({}, values); 
    passwordVerify(errors, values);
    emailVerify(errors, values);
    return errors;
    
}

// validate profile page

export function profileValidation(values) { 
    const errors = emailVerify({}, values);
    return errors;
}

// ******************************************************//

// validate username

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username required....!");
    }
    else if (values.username.includes(" ")) {
        error.username=toast.error("Invalid username..!")
    }

    return error;
}



// validate password

function passwordVerify(errors = {}, values) {
    const specialChars = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*., ?]).+$/

    if (!values.password) {
        errors.password = toast.error("Password required..!");
    }
    else if (values.password.includes(" ")) {
        errors.password = toast.error("Wrong Password...");
    }
    else if (values.password.length < 4) {
        errors.password = toast.error("Password must be at least 4 characters");
    }
    else if (!specialChars.test(values.password)) {
        errors.password= toast.error("Password must have special characters");
    }
    return errors;
}

// validate email


function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email required...");

    }
    else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong email...");
        
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*., ?]).+$/.test(values.email)) {
        error.email = toast.error("Invalid email address..!")
    }
    return error;
}