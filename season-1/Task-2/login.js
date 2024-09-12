
// function showAlert(event) {

//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

// }

function showAlert(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const submitButton = document.getElementById('submit-btn');

    const errors = validateInputs(username, password);

    if (errors.length > 0) {
        errors.forEach(error => alert(error));
        submitButton.disabled = true;
    } else {
        alert('فرم با موفقیت ارسال شد');
        submitButton.disabled = false;
    }
}

function validateInputs(username, password) {
    const errors = [];

    if (!username || !password) {
        errors.push('لطفا نام کاربری و رمزعبور خود را وارد کنید');
    }

    if (password.length < 6) {
        errors.push('رمزعبور باید حداقل 6 کاراکتر باشد');
    }

    if (!isValidUsername(username)) {
        errors.push('یوزرنیم باید ایمیل یا شماره تلفن معتبر باشد');
    }

    return errors;
}

function isValidUsername(username) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return emailRegex.test(username) || phoneRegex.test(username);
}