
// Show/Hide news control
var controlElement = document.querySelector('#controlElement');
controlElement.addEventListener('click', showHide);
var news = document.querySelector('#news');
var subNews = document.querySelector('#subNews');
// Show/Hide Function
function showHide(event) {
    event.preventDefault();
    if (news.style.display === "") {
        news.style.display = "none";
        subNews.style.display = "none";
    }
    else if (news.style.display === "none") {
        news.style.display = "block";
        subNews.style.display = "block";
    }
    else {
        news.style.display = "none";
        subNews.style.display = "none";
    }
}
// Form Validation
//input Text
var textEmail = document.querySelector('#InputEmail');
var textName = document.querySelector('#text-input-name');
var textPhone = document.querySelector('#text-input-phone');
//submit button
var sbumitButton = document.querySelector('form .btn-primary');
sbumitButton.addEventListener('click', submitForm);
//submit function
function submitForm(event) {
    event.preventDefault();
    checkEmail();
    checkName();
    checkNumber();
    if (checkEmail() && checkName()) {
        textEmail.value = "";
        textName.value = "";
        textPhone.value = "";
        setTimeout(function () {
            alert('Thank you for filling out the form');
        }, 200);
    }
}
//check text in email field 
function checkEmail() {
    if (textEmail.value.length <= 0 || textEmail.value.indexOf('@') < 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textEmail.value))) {
        textEmail.style.backgroundColor = "red";
    }
    else {
        textEmail.style.backgroundColor = "white";
        return true;
    }
}
//check text in name field 
function checkName() {
    if (textName.value.length <= 0 || /\d/.test(textName.value) || /[~`!#$%\^&*+=\-\[\]\\';,/{}.|\\":<>\?]/.test(textName.value)) {
        textName.style.backgroundColor = "red";
    }
    else {
        textName.style.backgroundColor = "white";
        return true;
    }
}
//check text in number field 
function checkNumber() {
    if (!(/[~`!#$%\^&*+=\-\[\]\\';,/{}.|\\":<>\?]/g.test(textPhone.value)) && textPhone.value.length < 11 && (!(/[A-Za-z]/.test(textPhone.value)) || textPhone.value.length === 0)) {
        textPhone.style.backgroundColor = "white";
        return true;
    }
    else {
        textPhone.style.backgroundColor = "red";
        return false;
    }
}