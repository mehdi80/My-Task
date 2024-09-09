
function showAlert(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    alert('یوزرنیم: ' + username + '\nپسورد: ' + password);
}
