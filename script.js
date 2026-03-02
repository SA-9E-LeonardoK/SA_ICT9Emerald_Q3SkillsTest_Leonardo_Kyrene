// Shows an alert when the registration form is submitted, then redirects
function submitForm() {
  alert("Account successfully created!");

  setTimeout(function() {
    window.location.href = "page3.html";
  }, 1000);
}
